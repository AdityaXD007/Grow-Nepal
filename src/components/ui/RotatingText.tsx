"use client";

import { useEffect, useRef, useState } from "react";

interface RotatingTextProps {
  words: string[];
  /** Milliseconds each word is fully visible before the next transition starts. Default 2200. */
  holdMs?: number;
  /** Delay per character while typing. Default 60ms. */
  typeMs?: number;
  /** Delay per character while deleting. Default 35ms. */
  deleteMs?: number;
  className?: string;
}

/**
 * RotatingText — typewriter-cycles through a list of words/phrases.
 *
 * Respects `prefers-reduced-motion`: when set, the first word is rendered
 * statically with no animation and no cycling.
 *
 * The outer <span> is sized to the longest word via an invisible measurement
 * element so surrounding text never reflows.
 */
export default function RotatingText({
  words,
  holdMs = 2200,
  typeMs = 60,
  deleteMs = 35,
  className = "",
}: RotatingTextProps) {
  const [displayed, setDisplayed] = useState(words[0]);
  const [wordIndex, setWordIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "holding" | "deleting">("holding");
  const prefersReduced = useRef(false);

  // Check reduced-motion once on mount
  useEffect(() => {
    prefersReduced.current = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
  }, []);

  useEffect(() => {
    if (prefersReduced.current) return; // static — no cycling

    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "holding") {
      timeout = setTimeout(() => setPhase("deleting"), holdMs);
    } else if (phase === "deleting") {
      if (displayed.length === 0) {
        // Move to next word, start typing
        const next = (wordIndex + 1) % words.length;
        setWordIndex(next);
        setDisplayed("");
        setPhase("typing");
      } else {
        timeout = setTimeout(
          () => setDisplayed((d) => d.slice(0, -1)),
          deleteMs
        );
      }
    } else {
      // typing
      const target = words[wordIndex];
      if (displayed.length === target.length) {
        setPhase("holding");
      } else {
        timeout = setTimeout(
          () => setDisplayed(target.slice(0, displayed.length + 1)),
          typeMs
        );
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, displayed, wordIndex, words, holdMs, typeMs, deleteMs]);

  // Find longest word to reserve width
  const longest = words.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span
      className={`relative inline-block whitespace-nowrap ${className}`}
      style={{ minWidth: "1ch" }}
      aria-live="polite"
      aria-atomic="true"
    >
      {/* Invisible sizer — keeps the inline-block wide enough for the longest phrase */}
      <span className="invisible select-none pointer-events-none absolute left-0 top-0 whitespace-nowrap">
        {longest}
      </span>

      {/* Visible typewriter text */}
      <span className="whitespace-nowrap">{displayed}</span>

      {/* Blinking cursor — hidden when deleting/holding on empty to avoid flash */}
      <span
        className="inline-block w-[3px] h-[0.85em] bg-emerald-500 ml-[2px] align-middle animate-[blink_1s_step-end_infinite]"
        aria-hidden="true"
        style={{ borderRadius: 1 }}
      />
    </span>
  );
}
