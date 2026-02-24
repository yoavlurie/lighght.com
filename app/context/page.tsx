import styles from "./page.module.css";

/* Timeline entries for the minimalist poetry movement */
const TIMELINE = [
  { year: "1952", event: "Aram Saroyan born in New York City" },
  {
    year: "1958",
    event: "Ian Hamilton Finlay begins concrete poetry experiments in Scotland",
  },
  {
    year: "1963",
    event: 'Aram Saroyan publishes first poems in Chicago Review',
  },
  {
    year: "1965",
    event:
      '"lighght" published — one-word poem becomes a landmark of minimalist poetry',
  },
  {
    year: "1966",
    event:
      "The NEA controversy: government funding for a one-word poem sparks national debate",
  },
  { year: "1968", event: "Aram Saroyan, Pages published by Random House" },
  {
    year: "1970",
    event:
      "Concrete poetry movement reaches its peak in international exhibitions",
  },
  {
    year: "2007",
    event:
      "Complete Minimal Poems published by Ugly Duckling Presse",
  },
];

export default function ContextPage() {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <h1 className={styles.title}>How Little Can a Poem Be?</h1>

        <div className={`prose ${styles.body}`}>
          <p>
            In 1965, a young poet named Aram Saroyan typed a single word on a
            page. The word was &ldquo;lighght&rdquo; — seven letters, one
            deliberate misspelling, a poem that would become one of the most
            debated works in American literary history. The National Endowment
            for the Arts paid him $500 for it, and a congressman read it aloud
            on the Senate floor as evidence of government waste.
          </p>

          <p>
            But Saroyan was not interested in waste. He was interested in the
            opposite: in discovering how little language could carry how much.
            The extra &ldquo;gh&rdquo; in &ldquo;lighght&rdquo; does something
            no critical explanation fully captures. It slows the reader down. It
            introduces a stutter into a word we thought we knew. The familiar
            becomes strange, and in that estrangement, we see the word — and
            perhaps the thing it names — for the first time.
          </p>

          <h2>The Minimalist Impulse</h2>

          <p>
            Minimalist poetry did not arrive in a vacuum. It emerged alongside
            minimalism in music, sculpture, and painting — movements that asked
            what remained when you stripped an art form to its essential
            materials. Donald Judd stacked identical metal boxes. La Monte Young
            sustained a single chord. And poets like Saroyan, Robert Lax, and
            the concrete poets of Brazil and Scotland reduced language to its
            most atomic components: the letter, the syllable, the single word.
          </p>

          <p>
            The question they posed was not rhetorical. How little can a poem
            be? A sentence? A phrase? A word? A letter? And at each stage of
            reduction, what is gained and what is lost? The minimalist poets
            discovered that as language contracts, attention expands. A single
            word on a page demands a different kind of reading than a sonnet or
            an epic. It asks you to stop. To look. To hear the word not as a
            transparent vessel of meaning but as an object in itself — visual,
            sonic, physical.
          </p>

          <h2>The Concrete Tradition</h2>

          <p>
            Before Saroyan, the concrete poetry movement had already begun to
            treat the poem as a visual object. The Brazilian Noigandres group —
            Augusto de Campos, Haroldo de Campos, and Decio Pignatari — argued
            that the poem should be understood as a structure in space, not
            merely a sequence in time. In Scotland, Ian Hamilton Finlay
            inscribed poems on stone and planted them in his garden. In Germany,
            Eugen Gomringer composed &ldquo;constellations&rdquo; of words
            arranged on the page like stars.
          </p>

          <p>
            What concrete poetry established was that the space around a word
            matters as much as the word itself. The margin is not silence but
            presence. The white page is not emptiness but the field in which
            meaning occurs. Saroyan inherited this understanding and pushed it
            further. His one-word poems are concrete poetry reduced to a single
            gesture — the literary equivalent of a brushstroke in sumi-e
            painting.
          </p>

          <h2>The One-Word Poem</h2>

          <p>
            A one-word poem operates differently from any other literary form.
            It cannot rely on syntax, narrative, metaphor, or argument. It has
            only the word itself — its sound, its shape, its history, its
            strangeness. When Saroyan wrote &ldquo;eyeye,&rdquo; he created a
            word that hovers between &ldquo;eye&rdquo; and &ldquo;I,&rdquo;
            between seeing and selfhood. The poem is not about the eye or the
            self. It is the moment where the two collapse into each other.
          </p>

          <p>
            This is what minimalist poetry offers: not less meaning, but more
            concentrated meaning. Each poem is a lens. The fewer the words, the
            more precisely the lens is ground, and the more intensely the light
            passes through it.
          </p>

          <h2>Why It Still Matters</h2>

          <p>
            We live in an age of linguistic excess. Language floods our screens,
            our feeds, our inboxes. Words have become cheap because they are
            everywhere. Minimalist poetry is a counterweight. It insists that a
            single word, chosen with care and placed with intention, can hold as
            much gravity as a novel. It reminds us that attention is the
            scarcest resource, and that the highest use of language might not be
            to say more, but to make us see what is already there.
          </p>

          <p>
            The studio on this site invites you to participate in this
            tradition. Choose one word. Consider its shape, its sound, its
            weight. Place it on the page. And discover what happens when
            language is distilled to a single, irreducible gesture.
          </p>
        </div>

        <section className={styles.timeline}>
          <h2 className={styles.timelineTitle}>Timeline</h2>
          <ol className={styles.timelineList}>
            {TIMELINE.map((entry, i) => (
              <li key={i} className={styles.timelineEntry}>
                <span className={styles.timelineYear}>{entry.year}</span>
                <span className={styles.timelineEvent}>{entry.event}</span>
              </li>
            ))}
          </ol>
        </section>
      </article>
    </main>
  );
}
