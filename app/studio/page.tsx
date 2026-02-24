"use client";

import { useState, useRef, useCallback } from "react";
import { toPng } from "html-to-image";
import { isBlocked } from "@/lib/profanity";
import styles from "./page.module.css";

/* --- Font options (only 4) --- */
const FONTS = [
  { label: "Grotesk", value: "var(--font-inter)", family: "Inter" },
  { label: "Serif", value: "var(--font-playfair)", family: "Playfair Display" },
  { label: "Mono", value: "var(--font-ibm-plex-mono)", family: "IBM Plex Mono" },
  { label: "Humanist", value: "var(--font-source-sans)", family: "Source Sans 3" },
];

/* --- Canvas colors --- */
const CANVAS_COLORS = [
  { label: "Yellow", value: "#F4D64E" },
  { label: "White", value: "#FFFFFF" },
  { label: "Black", value: "#111111" },
  { label: "Gray", value: "#F5F5F5" },
];

/* Allowed characters: letters, spaces, and basic punctuation */
const ALLOWED_PATTERN = /^[a-zA-Z\s.,'\-?!]*$/;
const MAX_LENGTH = 12;

/* Shared artboard inline styles — used for both visible and export containers */
function artboardWordStyle(
  font: string,
  fontWeight: number,
  fontSize: string,
  letterSpacing: string,
  alignment: string,
  textColor: string
): React.CSSProperties {
  return {
    fontFamily: font,
    fontWeight,
    fontSize,
    letterSpacing,
    textAlign: alignment as React.CSSProperties["textAlign"],
    color: textColor,
    display: "block",
    width: "100%",
    padding: "0 1rem",
    wordBreak: "break-word",
  };
}

export default function StudioPage() {
  /* --- State --- */
  const [word, setWord] = useState("");
  const [error, setError] = useState("");
  const [font, setFont] = useState(FONTS[0]);
  const [fontWeight, setFontWeight] = useState(400);
  const [letterSpacing, setLetterSpacing] = useState(0.15);
  const [fontSize, setFontSize] = useState(3.5);
  const [alignment, setAlignment] = useState<"left" | "center" | "right">("center");
  const [canvasColor, setCanvasColor] = useState(CANVAS_COLORS[0]);
  const [created, setCreated] = useState(false);
  const [shared, setShared] = useState(false);
  const [controlsOpen, setControlsOpen] = useState(false);

  const exportRef = useRef<HTMLDivElement>(null);

  /* Text color: white on black canvas, black otherwise */
  const textColor = canvasColor.value === "#111111" ? "#FFFFFF" : "#111111";

  /* Scale factor: export font size relative to artboard size */
  const exportFontScale = 1080 / 400; /* approximate visible artboard width */

  /* --- Input handling --- */
  function handleInput(value: string) {
    setShared(false);
    setCreated(false);

    if (!ALLOWED_PATTERN.test(value)) {
      setError("Please choose a different word.");
      return;
    }

    if (value.length > MAX_LENGTH) return;

    setWord(value);

    if (value.trim() && isBlocked(value)) {
      setError("Please choose a different word.");
    } else {
      setError("");
    }
  }

  /* --- Create --- */
  function handleCreate() {
    if (!word.trim()) {
      setError("Please choose a different word.");
      return;
    }
    if (isBlocked(word)) {
      setError("Please choose a different word.");
      return;
    }
    setError("");
    setCreated(true);
    setShared(false);
  }

  /* --- Share / Download using hidden export container --- */
  const handleShare = useCallback(async () => {
    if (!exportRef.current) return;

    try {
      const dataUrl = await toPng(exportRef.current, {
        width: 1080,
        height: 1080,
        pixelRatio: 1,
      });

      const blob = await (await fetch(dataUrl)).blob();
      const filename = `lighght-${word.trim().toLowerCase().replace(/\s+/g, "-")}.png`;
      const file = new File([blob], filename, { type: "image/png" });

      const shareText = `Minimalist poem created at lighght.com\nInspired by Aram Saroyan\n@lighghtpoem\n#minimalistpoetry #lighght`;

      if (
        typeof navigator !== "undefined" &&
        navigator.share &&
        navigator.canShare &&
        navigator.canShare({ files: [file] })
      ) {
        await navigator.share({
          text: shareText,
          files: [file],
        });
      } else {
        const link = document.createElement("a");
        link.download = filename;
        link.href = dataUrl;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }

      setShared(true);
    } catch (err) {
      if (err instanceof Error && err.name === "AbortError") return;
      console.error("Share failed:", err);
    }
  }, [word]);

  /* --- Slider increment helpers --- */
  function adjustValue(
    current: number,
    step: number,
    min: number,
    max: number,
    direction: 1 | -1
  ): number {
    const next = Math.round((current + step * direction) * 1000) / 1000;
    return Math.min(max, Math.max(min, next));
  }

  return (
    <main className={styles.main}>
      {/* Intro */}
      <div className="studio-intro">
        <p className={styles.intro}>
          Minimalist poetry reduces language to its essential gesture.
        </p>
        <p className={styles.introHint}>
          Tap controls to refine. Tap Share to publish.
        </p>
      </div>

      {/* Word input */}
      <div className={`${styles.inputSection} studio-controls`}>
        <label className={styles.inputLabel} htmlFor="word-input">
          Your word
        </label>
        <div className={styles.inputRow}>
          <input
            id="word-input"
            type="text"
            className={styles.input}
            value={word}
            onChange={(e) => handleInput(e.target.value)}
            placeholder="enter a word"
            maxLength={MAX_LENGTH}
            autoComplete="off"
            autoCapitalize="off"
            spellCheck={false}
          />
          <span className={styles.counter}>
            {word.length}/{MAX_LENGTH}
          </span>
        </div>
        {error && <p className={styles.error}>{error}</p>}
      </div>

      {/* Typography controls — accordion on mobile */}
      <div className={`${styles.controls} studio-controls`}>
        <button
          className={styles.controlsToggle}
          onClick={() => setControlsOpen(!controlsOpen)}
          aria-expanded={controlsOpen}
        >
          Typography Controls
          <span className={styles.toggleIcon}>{controlsOpen ? "−" : "+"}</span>
        </button>

        <div
          className={`${styles.controlsPanel} ${controlsOpen ? styles.controlsOpen : ""}`}
        >
          {/* Font selector */}
          <div className={styles.controlGroup}>
            <span className={styles.controlLabel}>Font</span>
            <div className={styles.fontOptions}>
              {FONTS.map((f) => (
                <button
                  key={f.label}
                  className={`${styles.fontOption} ${font.label === f.label ? styles.fontOptionActive : ""}`}
                  onClick={() => setFont(f)}
                  style={{ fontFamily: f.value }}
                >
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Font weight */}
          <div className={styles.controlGroup}>
            <span className={styles.controlLabel}>Weight</span>
            <div className={styles.sliderRow}>
              <button
                className={styles.adjustButton}
                onClick={() => setFontWeight(adjustValue(fontWeight, 100, 300, 900, -1))}
                aria-label="Decrease weight"
              >
                −
              </button>
              <input
                type="range"
                min="300"
                max="900"
                step="100"
                value={fontWeight}
                onChange={(e) => setFontWeight(Number(e.target.value))}
                className={styles.slider}
              />
              <button
                className={styles.adjustButton}
                onClick={() => setFontWeight(adjustValue(fontWeight, 100, 300, 900, 1))}
                aria-label="Increase weight"
              >
                +
              </button>
              <span className={styles.sliderValue}>{fontWeight}</span>
            </div>
          </div>

          {/* Letter spacing */}
          <div className={styles.controlGroup}>
            <span className={styles.controlLabel}>Spacing</span>
            <div className={styles.sliderRow}>
              <button
                className={styles.adjustButton}
                onClick={() => setLetterSpacing(adjustValue(letterSpacing, 0.01, 0, 0.5, -1))}
                aria-label="Decrease spacing"
              >
                −
              </button>
              <input
                type="range"
                min="0"
                max="0.5"
                step="0.01"
                value={letterSpacing}
                onChange={(e) => setLetterSpacing(Number(e.target.value))}
                className={styles.slider}
              />
              <button
                className={styles.adjustButton}
                onClick={() => setLetterSpacing(adjustValue(letterSpacing, 0.01, 0, 0.5, 1))}
                aria-label="Increase spacing"
              >
                +
              </button>
              <span className={styles.sliderValue}>{letterSpacing.toFixed(2)}em</span>
            </div>
          </div>

          {/* Font size */}
          <div className={styles.controlGroup}>
            <span className={styles.controlLabel}>Size</span>
            <div className={styles.sliderRow}>
              <button
                className={styles.adjustButton}
                onClick={() => setFontSize(adjustValue(fontSize, 0.1, 1, 8, -1))}
                aria-label="Decrease size"
              >
                −
              </button>
              <input
                type="range"
                min="1"
                max="8"
                step="0.1"
                value={fontSize}
                onChange={(e) => setFontSize(Number(e.target.value))}
                className={styles.slider}
              />
              <button
                className={styles.adjustButton}
                onClick={() => setFontSize(adjustValue(fontSize, 0.1, 1, 8, 1))}
                aria-label="Increase size"
              >
                +
              </button>
              <span className={styles.sliderValue}>{fontSize.toFixed(1)}rem</span>
            </div>
          </div>

          {/* Alignment */}
          <div className={styles.controlGroup}>
            <span className={styles.controlLabel}>Alignment</span>
            <div className={styles.alignmentOptions}>
              {(["left", "center", "right"] as const).map((a) => (
                <button
                  key={a}
                  className={`${styles.alignmentOption} ${alignment === a ? styles.alignmentActive : ""}`}
                  onClick={() => setAlignment(a)}
                >
                  {a}
                </button>
              ))}
            </div>
          </div>

          {/* Canvas color */}
          <div className={styles.controlGroup}>
            <span className={styles.controlLabel}>Canvas</span>
            <div className={styles.canvasOptions}>
              {CANVAS_COLORS.map((c) => (
                <button
                  key={c.label}
                  className={`${styles.canvasSwatch} ${canvasColor.label === c.label ? styles.canvasSwatchActive : ""}`}
                  onClick={() => setCanvasColor(c)}
                  style={{ background: c.value }}
                  title={c.label}
                  aria-label={`Canvas color: ${c.label}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Visible Artboard */}
      <div className={styles.artboardWrapper}>
        <div
          className={`${styles.artboard} artboard-print-target`}
          style={{ background: canvasColor.value }}
        >
          <span
            className="artboard-word"
            style={artboardWordStyle(
              font.value,
              fontWeight,
              `${fontSize}rem`,
              `${letterSpacing}em`,
              alignment,
              textColor
            )}
          >
            {word || " "}
          </span>
        </div>
      </div>

      {/* Hidden export container — exactly 1080x1080, only artboard content */}
      <div
        ref={exportRef}
        className={styles.exportContainer}
        aria-hidden="true"
        style={{ background: canvasColor.value }}
      >
        <span
          style={artboardWordStyle(
            font.value,
            fontWeight,
            `${fontSize * exportFontScale}rem`,
            `${letterSpacing}em`,
            alignment,
            textColor
          )}
        >
          {word || " "}
        </span>
      </div>

      {/* Actions */}
      <div className={`${styles.actions} studio-actions`}>
        {!created ? (
          <button
            className={styles.createButton}
            onClick={handleCreate}
            disabled={!word.trim() || !!error}
          >
            Create
          </button>
        ) : (
          <button className={styles.shareButton} onClick={handleShare}>
            Share
          </button>
        )}

        {/* Share fallback message */}
        {created && !shared && (
          <p className={styles.shareHint}>
            Save the image and post to Instagram.
            <br />
            Tag @lighghtpoem.
          </p>
        )}

        {/* Thank you message */}
        {shared && <p className={styles.thankYou}>Thank you.</p>}
      </div>
    </main>
  );
}
