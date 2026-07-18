"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useRef } from "react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.playbackRate = 0.8;
    if (reduceMotion) {
      video.pause();
      video.currentTime = 0;
      return;
    }

    void video.play().catch(() => {
      // The poster remains visible if a browser blocks background autoplay.
    });
  }, [reduceMotion]);

  return (
    <motion.div
      className="hero-media"
      initial={reduceMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      aria-hidden="true"
    >
      <video
        ref={videoRef}
        autoPlay={!reduceMotion}
        muted
        loop
        playsInline
        preload="auto"
        poster="/media/home-care-hero-poster.jpg"
        tabIndex={-1}
      >
        <source src="/media/home-care-hero-assisted.mp4" type="video/mp4" />
      </video>
    </motion.div>
  );
}
