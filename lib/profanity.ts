/**
 * Client-side profanity and hate speech filter.
 *
 * The blocklist is intentionally comprehensive. Maintain it as a flat array
 * for easy editing. Words are matched after normalization (lowercase + leetspeak).
 */

const BLOCKLIST: string[] = [
  /* Common profanity */
  "fuck", "fucker", "fucks", "fucked", "fucking", "fuckoff",
  "shit", "shits", "shitty", "shitted",
  "ass", "asses", "asshole", "assholes",
  "bitch", "bitches", "bitchy",
  "damn", "damned", "dammit",
  "hell",
  "crap", "crappy",
  "piss", "pissed", "pisses",
  "dick", "dicks", "dickhead",
  "cock", "cocks", "cocksucker",
  "bastard", "bastards",
  "whore", "whores",
  "slut", "sluts", "slutty",
  "cunt", "cunts",
  "twat", "twats",
  "wanker", "wankers",
  "bollocks",
  "bugger",
  "arse", "arsehole",
  "tit", "tits",
  "boob", "boobs",

  /* Sexual terms */
  "porn", "porno", "pornography",
  "sex", "sexy",
  "dildo", "dildos",
  "blowjob", "blowjobs",
  "handjob",
  "orgasm", "orgasms",
  "cum", "cumming",
  "jizz",
  "pussy", "pussies",
  "penis",
  "vagina",
  "anal",
  "rape", "rapes", "rapist",
  "molest", "molester",
  "pedophile", "pedo", "paedo",

  /* Slurs and hate speech */
  "nigger", "niggers", "nigga", "niggas",
  "kike", "kikes",
  "spic", "spics",
  "chink", "chinks",
  "gook", "gooks",
  "wetback", "wetbacks",
  "beaner", "beaners",
  "cracker", "crackers",
  "honky", "honkey",
  "gringo",
  "fag", "fags", "faggot", "faggots",
  "dyke", "dykes",
  "tranny", "trannies",
  "retard", "retards", "retarded",

  /* Hate-adjacent terms */
  "nazi", "nazis",
  "hitler",
  "kkk",
  "jihad",
  "terrorist", "terrorists",

  /* Violence-related */
  "kill", "killed", "killer",
  "murder", "murders", "murderer",
];

/**
 * Normalize input: lowercase and replace common leetspeak substitutions.
 */
function normalize(input: string): string {
  return input
    .toLowerCase()
    .replace(/0/g, "o")
    .replace(/1/g, "i")
    .replace(/3/g, "e")
    .replace(/4/g, "a")
    .replace(/@/g, "a")
    .replace(/\$/g, "s")
    .replace(/5/g, "s")
    .replace(/7/g, "t")
    .replace(/8/g, "b")
    .replace(/\+/g, "t");
}

/**
 * Returns true if the input contains blocked content.
 */
export function isBlocked(input: string): boolean {
  const normalized = normalize(input.trim());

  /* Strip punctuation for matching */
  const stripped = normalized.replace(/[^a-z]/g, "");

  if (!stripped) return false;

  return BLOCKLIST.some((word) => stripped === word || stripped.includes(word));
}
