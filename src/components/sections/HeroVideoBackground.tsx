"use client";

import React, { useEffect, useRef } from "react";

export default function HeroVideoBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Direct DOM mutation is required for Chromium/WebKit autoplay policies
    video.muted = true;
    video.defaultMuted = true;

    // Check prefers-reduced-motion accessibility preference
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const playVideo = () => {
      if (!motionQuery.matches) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {});
        }
      } else {
        video.pause();
      }
    };

    playVideo();

    video.addEventListener("loadeddata", playVideo, { once: true });
    video.addEventListener("canplay", playVideo, { once: true });

    const handleMotionChange = () => {
      playVideo();
    };

    // Smooth loop hack: skip the last 0.15s to avoid encoder padding / browser seek pause
    const handleTimeUpdate = () => {
      if (video.duration && video.currentTime >= video.duration - 0.15) {
        video.currentTime = 0.01; // slightly offset from 0 just in case
        playVideo();
      }
    };

    motionQuery.addEventListener("change", handleMotionChange);
    video.addEventListener("timeupdate", handleTimeUpdate);

    return () => {
      motionQuery.removeEventListener("change", handleMotionChange);
      video.removeEventListener("loadeddata", playVideo);
      video.removeEventListener("canplay", playVideo);
      video.removeEventListener("timeupdate", handleTimeUpdate);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none"
      aria-hidden="true"
    >
      {/* 1. Static Poster Image (fallback for initial paint & prefers-reduced-motion) */}
      <img
        src="/videos/hero-bg-poster.jpg"
        alt=""
        aria-hidden="true"
        fetchPriority="high"
        loading="eager"
        decoding="async"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* 2. Ambient Looping Video */}
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster="/videos/hero-bg-poster.jpg"
        className="absolute inset-0 w-full h-full object-cover object-center motion-reduce:hidden"
      >
        <source src="/videos/hero-bg.mp4" type="video/mp4" />
      </video>

      {/* 3. Contrast & Readability Overlay - lighter and unblurred so video details pop */}
      {/* On mobile, use a lighter gradient from top so the background remains visible. On larger screens, use the soft center vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/40 to-transparent sm:bg-none" />
      <div className="hidden sm:block absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.65)_0%,_rgba(255,255,255,0.20)_55%,_transparent_100%)]" />

      {/* Grow Nepal signature subtle dot grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25" />

      {/* Clean bottom transition into next section */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </div>
  );
}
