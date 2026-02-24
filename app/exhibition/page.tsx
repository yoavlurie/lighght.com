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
