"use client";

import styles from "./page.module.css";

/* Curated minimalist text works — placeholder content */
const WORKS = [
  { text: "lighght", year: "1965", author: "Aram Saroyan" },
  { text: "eyeye", year: "1966", author: "Aram Saroyan" },
  { text: "blod", year: "1966", author: "Aram Saroyan" },
  { text: "lobstee", year: "1968", author: "Aram Saroyan" },
  { text: "crickets", year: "1967", author: "Aram Saroyan" },
  { text: "oxygen", year: "1965", author: "Aram Saroyan" },
];

export default function GalleryPage() {
  return (
    <main className={styles.main}>
      <header className={styles.header}>
        <h1 className={styles.heading}>Gallery</h1>
      </header>

      {/* Mobile: horizontal snap scroll. Desktop: vertical stack. */}
      <div className={styles.works}>
        {WORKS.map((work, i) => (
          <section key={i} className={styles.work}>
            <p className={styles.workText}>{work.text}</p>
            <span className={styles.workCaption}>
              {work.author}, {work.year}
            </span>
          </section>
        ))}
      </div>

      {/* Subtle scroll hint — visible only briefly */}
      <div className={styles.scrollHint} aria-hidden="true">
        <span className={styles.scrollArrow}>&rarr;</span>
      </div>
    </main>
  );
}
