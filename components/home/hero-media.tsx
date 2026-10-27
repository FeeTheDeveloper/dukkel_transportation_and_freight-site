"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type NetworkInformation = { saveData?: boolean; effectiveType?: string };

// The still is always rendered first (LCP, no-JS, reduced motion, data saver).
// The loop is only attached when motion and bandwidth allow, fades in once it
// is actually playing, and pauses while off screen or when the visitor asks.
export function HeroMedia() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [canPlay, setCanPlay] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [userPaused, setUserPaused] = useState(false);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const connection = (navigator as Navigator & { connection?: NetworkInformation }).connection;
    const constrained = connection?.saveData || ["slow-2g", "2g"].includes(connection?.effectiveType ?? "");

    const update = () => setCanPlay(!reducedMotion.matches && !constrained);
    update();
    reducedMotion.addEventListener("change", update);
    return () => reducedMotion.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !canPlay) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !userPaused && !document.hidden) {
        video.play().catch(() => setIsPlaying(false));
      } else {
        video.pause();
      }
    });
    observer.observe(video);
    return () => observer.disconnect();
  }, [canPlay, userPaused]);

  const togglePlayback = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused) {
      setUserPaused(false);
      video.play().catch(() => setIsPlaying(false));
    } else {
      setUserPaused(true);
      video.pause();
    }
  };

  return (
    <>
      <Image
        alt=""
        className="object-cover object-[70%_center]"
        fill
        priority
        sizes="100vw"
        src="/media/dukeel/hero-still"
      />

      {canPlay ? (
        <video
          ref={videoRef}
          aria-hidden="true"
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            isPlaying ? "opacity-100" : "opacity-0"
          }`}
          loop
          muted
          onPause={() => setIsPlaying(false)}
          onPlaying={() => setIsPlaying(true)}
          playsInline
          poster="/media/dukeel/hero-loop-poster.webp"
          preload="metadata"
          src="/media/dukeel/hero-loop.mp4"
        />
      ) : null}

      {canPlay ? (
        <button
          aria-label={userPaused ? "Play background video" : "Pause background video"}
          className="absolute bottom-5 right-4 z-20 inline-flex h-10 w-10 items-center justify-center border border-white/30 bg-night/60 text-white transition hover:bg-night sm:right-6 lg:right-8"
          onClick={togglePlayback}
          type="button"
        >
          {userPaused ? (
            <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M7 4v16l13-8z" />
            </svg>
          ) : (
            <svg aria-hidden="true" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6 4h4v16H6zM14 4h4v16h-4z" />
            </svg>
          )}
        </button>
      ) : null}
    </>
  );
}
