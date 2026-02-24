import styles from "./page.module.css";

const BOOKS = [
  {
    title: "Complete Minimal Poems",
    publisher: "Ugly Duckling Presse",
    year: "2007",
    url: "https://www.amazon.com/Complete-Minimal-Poems-Aram-Saroyan-ebook/dp/B0BZ2N7JR7/ref=tmm_kin_swatch_0",
  },
  { title: "Pages", publisher: "Random House", year: "1968" },
  { title: "Aram Saroyan", publisher: "Random House", year: "1968" },
  { title: "Words & Photographs", publisher: "Big Table Publishing", year: "2010" },
  { title: "The Rest", publisher: "William Morrow", year: "1971" },
];

export default function AboutPage() {
  return (
    <main className={styles.main}>
      <article className={styles.article}>
        <h1 className={styles.title}>About</h1>

        <div className={`prose ${styles.body}`}>
          <h2>Aram Saroyan</h2>

          <p>
            Aram Saroyan (born 1943, New York City) is an American poet,
            novelist, and memoirist. The son of William Saroyan, he emerged in
            the 1960s as one of the most radical voices in American poetry,
            composing works that reduced the poem to a single word — or
            sometimes a single invented word.
          </p>

          <p>
            His poem &ldquo;lighght,&rdquo; published in 1965, became the
            subject of national controversy when the National Endowment for the
            Arts awarded him $500 for the work. The poem was read on the floor
            of the United States Senate as an example of wasteful government
            spending on the arts. It has since become one of the most discussed
            works in the history of American minimalist poetry.
          </p>

          <p>
            Saroyan&rsquo;s minimalist poems strip language to its barest
            elements: a word, a syllable, a visual gesture on the page. His
            work stands alongside the concrete poetry movement and anticipates
            conceptual art&rsquo;s engagement with language. His one-word poems
            ask what remains when everything but the essential is removed — and
            whether that residue is silence or concentrated meaning.
          </p>

          <p>
            Beyond poetry, Saroyan has published novels, biographies of his
            parents (William Saroyan and Carol Matthau), and essays on
            literature and culture. He lives in Los Angeles.
          </p>
        </div>

        <section className={styles.books}>
          <h2 className={styles.booksTitle}>Selected Books</h2>
          <ul className={styles.booksList}>
            {BOOKS.map((book, i) => (
              <li key={i} className={styles.bookEntry}>
                {"url" in book && book.url ? (
                  <a
                    href={book.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.bookTitle}
                  >
                    {book.title}
                  </a>
                ) : (
                  <span className={styles.bookTitle}>{book.title}</span>
                )}
                <span className={styles.bookMeta}>
                  {book.publisher}, {book.year}
                </span>
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.colophon}>
          <h2 className={styles.colophonTitle}>Colophon</h2>
          <p className={styles.colophonText}>
            lighght.com is a digital museum and studio for minimalist poetry,
            inspired by the work of Aram Saroyan and the concrete poetry
            tradition. It is not affiliated with Aram Saroyan. The studio
            invites visitors to create their own one-word poems and share
            them with us by tagging{" "}
            <a
              href="https://instagram.com/lighghtpoem"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.colophonLink}
            >
              @lighghtpoem
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
