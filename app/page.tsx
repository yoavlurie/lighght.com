"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

/* Landing page — full viewport, yellow background, centered "lighght" */
export default function LandingPage() {
  const router = useRouter();
  const [hovering, setHovering] = useState(false);

  function handleClick() {
    router.push("/exhibition");
  }

  return (
    <main
      className={styles.main}
      onClick={handleClick}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") handleClick();
      }}
    >
      <div className={styles.center}>
        <h1 className={styles.title}>lighght</h1>
        <span
          className={`${styles.subtitle} ${hovering ? styles.subtitleVisible : ""}`}
        >
          click to enter
        </span>
      </div>
    </main>
  );
}
