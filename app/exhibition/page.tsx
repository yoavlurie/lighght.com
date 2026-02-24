import Link from "next/link";
import styles from "./page.module.css";

/* Exhibition Board — interstitial between landing and gallery */
export default function ExhibitionPage() {
  return (
    <main className={styles.main}>
      <article className={styles.card}>
        <h1 className={styles.title}>LIGHGHT</h1>

        <div className={styles.body}>
          <p>
            This is a digital, interactive museum to minimalist poetry.
          </p>
          <p>
            Inspired by Aram Saroyan&rsquo;s one-word poem{" "}
            <em>lighght</em>, the site explores how little language can
            become — and still remain a poem.
          </p>
          <p>
            You are invited to look, to read, and to create.
          </p>
          <p>
            In a time when words are generated endlessly and instantly,
            minimalist poetry offers another path: reduction instead of
            expansion. Attention instead of accumulation.
          </p>
        </div>

        <h2 className={styles.sectionTitle}>
          Minimalism in an Age of Abundance
        </h2>

        <div className={styles.body}>
          <p>
            We live in a moment when language is effortless. Words appear
            instantly, endlessly, in volumes no human could exhaust. The
            problem is no longer expression. It is attention.
          </p>
          <p>
            Minimalist poetry emerged long before digital culture, but it
            feels newly urgent now. By reducing language to its smallest
            viable gesture, it shifts the question from{" "}
            <em>How much can be said?</em> to{" "}
            <em>How little is necessary?</em> A single word. A single
            letter. A slight distortion. Meaning is not expanded — it is
            compressed.
          </p>
          <p>
            In an environment saturated with generated text, reduction
            becomes a discipline. Constraint becomes a form of resistance
            to excess. Silence regains force. Space carries weight.
          </p>
          <p>
            Minimalist poetry does not compete with abundance. It reframes
            it. When everything can be written, the act of writing less
            becomes deliberate. Intentional. Exact.
          </p>
          <p>
            The works gathered here — and the poems you create — ask a
            simple question:
          </p>
          <p className={styles.question}>
            How little can a poem be, and still remain a poem?
          </p>
        </div>

        <nav className={styles.nav}>
          <Link href="/gallery" className={styles.primaryLink}>
            Enter the Gallery
          </Link>
          <Link href="/studio" className={styles.secondaryLink}>
            Visit the Studio
          </Link>
          <Link href="/context" className={styles.secondaryLink}>
            Read the Context
          </Link>
        </nav>
      </article>
    </main>
  );
}
