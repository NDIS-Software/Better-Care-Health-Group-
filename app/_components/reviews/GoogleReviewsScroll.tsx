"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import styles from "./GoogleReviewsScroll.module.css";

const reviews = [
  {
    name: "Amelia Russo",
    date: "2 weeks ago",
    image: "https://i.pravatar.cc/96?img=47",
    text: "The team listened carefully and made every step feel clear. The support felt thoughtful, calm and genuinely personal."
  },
  {
    name: "Noah Williams",
    date: "1 month ago",
    image: "https://i.pravatar.cc/96?img=12",
    text: "Communication was excellent from the first call. We always knew what was happening and who to speak with."
  },
  {
    name: "Priya Nair",
    date: "6 weeks ago",
    image: "https://i.pravatar.cc/96?img=32",
    text: "Our practitioner was patient, practical and respectful. The recommendations made a real difference to daily life."
  },
  {
    name: "Liam Chen",
    date: "2 months ago",
    image: "https://i.pravatar.cc/96?img=15",
    text: "Professional care with a very human approach. Appointments were organised well and never felt rushed."
  },
  {
    name: "Sophie Martin",
    date: "3 months ago",
    image: "https://i.pravatar.cc/96?img=44",
    text: "The whole experience was reassuring. Our goals were understood and the plan was easy for everyone to follow."
  }
];

export function GoogleReviewsScroll() {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const logicRef = useRef({
    offset: 0,
    currentSpeed: 34,
    targetSpeed: 34,
    lastFrame: 0,
    lastPointerX: 0,
    lastPointerTime: 0,
    dragVelocity: 0,
    dragging: false,
    groupWidth: 0,
    animationFrameId: 0,
    reduceMotion: false
  });

  useEffect(() => {
    const viewport = viewportRef.current;
    const track = trackRef.current;
    if (!viewport || !track) return;
    const logic = logicRef.current;

    const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    logic.reduceMotion = reduceMotionQuery.matches;

    const measure = () => {
      const firstDuplicate = track.children[reviews.length] as HTMLElement;
      const firstChild = track.children[0] as HTMLElement;
      logic.groupWidth = firstDuplicate && firstChild ? firstDuplicate.offsetLeft - firstChild.offsetLeft : 0;
    };

    const wrapOffset = () => {
      const { groupWidth } = logic;
      if (!groupWidth) return;
      while (logic.offset <= -groupWidth) logic.offset += groupWidth;
      while (logic.offset > 0) logic.offset -= groupWidth;
    };

    const render = () => {
      track.style.transform = `translate3d(${logic.offset}px, 0, 0)`;
    };

    const animate = (time: number) => {
      const state = logic;
      const delta = Math.min((time - state.lastFrame) / 1000, 0.05);
      state.lastFrame = time;

      if (!state.reduceMotion) {
        state.currentSpeed += (state.targetSpeed - state.currentSpeed) * Math.min(1, delta * 6);

        if (!state.dragging) {
          state.offset -= state.currentSpeed * delta;
          if (Math.abs(state.dragVelocity) > 0.5) {
            state.offset += state.dragVelocity * delta;
            state.dragVelocity *= Math.pow(0.035, delta);
          }
          wrapOffset();
          render();
        }
      }

      state.animationFrameId = requestAnimationFrame(animate);
    };

    const updateSpeed = () => {
      const state = logic;
      if (state.dragging) {
        state.targetSpeed = 0;
      } else if (viewport.matches(":hover")) {
        state.targetSpeed = 9;
      } else {
        state.targetSpeed = 34;
      }
    };

    const handlePointerEnter = () => updateSpeed();
    const handlePointerLeave = () => {
      if (!logic.dragging) updateSpeed();
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0 || logic.reduceMotion) return;
      const state = logic;
      state.dragging = true;
      state.dragVelocity = 0;
      state.lastPointerX = event.clientX;
      state.lastPointerTime = performance.now();
      viewport.classList.add(styles.isDragging);
      viewport.setPointerCapture(event.pointerId);
      updateSpeed();
    };

    const handlePointerMove = (event: PointerEvent) => {
      const state = logic;
      if (!state.dragging) return;
      const now = performance.now();
      const distance = event.clientX - state.lastPointerX;
      const elapsed = Math.max(now - state.lastPointerTime, 8);
      state.offset += distance;
      state.dragVelocity = (distance / elapsed) * 1000;
      state.lastPointerX = event.clientX;
      state.lastPointerTime = now;
      wrapOffset();
      render();
    };

    const releaseDrag = (event: PointerEvent) => {
      const state = logic;
      if (!state.dragging) return;
      state.dragging = false;
      viewport.classList.remove(styles.isDragging);
      if (viewport.hasPointerCapture(event.pointerId)) viewport.releasePointerCapture(event.pointerId);
      updateSpeed();
    };

    const handleTrackPointerMove = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      const card = target.closest(`.${styles.reviewCard}`) as HTMLElement;
      if (!card || logic.dragging || logic.reduceMotion) return;
      const bounds = card.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      const xRatio = x / bounds.width - 0.5;
      const yRatio = y / bounds.height - 0.5;
      card.style.setProperty("--pointer-x", `${x}px`);
      card.style.setProperty("--pointer-y", `${y}px`);
      card.style.setProperty("--tilt-x", `${yRatio * -3}deg`);
      card.style.setProperty("--tilt-y", `${xRatio * 4}deg`);
    };

    const handleTrackPointerOut = (event: PointerEvent) => {
      const target = event.target as HTMLElement;
      const card = target.closest(`.${styles.reviewCard}`) as HTMLElement;
      const relatedTarget = event.relatedTarget as Node | null;
      if (!card || (relatedTarget && card.contains(relatedTarget))) return;
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
    };

    const handleReduceMotionChange = (e: MediaQueryListEvent) => {
      logic.reduceMotion = e.matches;
      logic.offset = 0;
      render();
    };

    viewport.addEventListener("pointerenter", handlePointerEnter);
    viewport.addEventListener("pointerleave", handlePointerLeave);
    viewport.addEventListener("pointerdown", handlePointerDown);
    viewport.addEventListener("pointermove", handlePointerMove);
    viewport.addEventListener("pointerup", releaseDrag);
    viewport.addEventListener("pointercancel", releaseDrag);

    track.addEventListener("pointermove", handleTrackPointerMove);
    track.addEventListener("pointerout", handleTrackPointerOut);

    reduceMotionQuery.addEventListener("change", handleReduceMotionChange);
    const resizeObserver = new ResizeObserver(measure);
    resizeObserver.observe(track);

    // Initial setup
    measure();
    logic.lastFrame = performance.now();
    logic.animationFrameId = requestAnimationFrame(animate);

    return () => {
      viewport.removeEventListener("pointerenter", handlePointerEnter);
      viewport.removeEventListener("pointerleave", handlePointerLeave);
      viewport.removeEventListener("pointerdown", handlePointerDown);
      viewport.removeEventListener("pointermove", handlePointerMove);
      viewport.removeEventListener("pointerup", releaseDrag);
      viewport.removeEventListener("pointercancel", releaseDrag);

      track.removeEventListener("pointermove", handleTrackPointerMove);
      track.removeEventListener("pointerout", handleTrackPointerOut);

      reduceMotionQuery.removeEventListener("change", handleReduceMotionChange);
      resizeObserver.disconnect();
      cancelAnimationFrame(logic.animationFrameId);
    };
  }, []);

  const renderCard = (review: typeof reviews[0], index: number, isDuplicate: boolean) => (
    <article
      key={`${review.name}-${index}-${isDuplicate ? "dup" : "orig"}`}
      className={styles.reviewCard}
      tabIndex={isDuplicate ? -1 : 0}
      aria-hidden={isDuplicate ? "true" : undefined}
    >
      <div className={styles.cardTop}>
        <div className={styles.reviewer}>
          <Image
            className={styles.avatar}
            src={review.image}
            alt=""
            width={48}
            height={48}
            draggable={false}
            unoptimized
          />
          <div className={styles.reviewerMeta}>
            <span className={styles.reviewerName}>{review.name}</span>
            <span className={styles.reviewDate}>{review.date}</span>
          </div>
        </div>
        <span className={styles.googleMark} aria-label="Google review">
          G
        </span>
      </div>
      <div className={styles.cardStars} aria-label="5 out of 5 stars">
        ★★★★★
      </div>
      <blockquote>“{review.text}”</blockquote>
    </article>
  );

  return (
    <section id="reviews" className={styles.reviewsSection} aria-labelledby="reviews-heading">
      <header className={styles.sectionHeader}>
        <div className={styles.sectionTitle}>
          <h2 id="reviews-heading">Care that feels personal.</h2>
          <p className={styles.sectionCopy}>
            Move through each story at your own pace. Hover to slow the motion, or press and drag to explore.
          </p>
        </div>

        <div className={styles.reviewSummary} aria-label="Review summary">
          <div className={styles.ratingLine}>
            <strong className={styles.ratingValue}>4.9</strong>
            <div className={styles.ratingDetail}>
              <span className={styles.stars} aria-label="4.9 out of 5 stars">
                ★★★★★
              </span>
              <span className={styles.ratingLabel}>Google reviews</span>
            </div>
          </div>
        </div>
      </header>

      <div
        className={styles.reviewsViewport}
        ref={viewportRef}
        aria-label="Client reviews carousel"
      >
        <div className={styles.reviewsTrack} ref={trackRef}>
          {reviews.map((review, i) => renderCard(review, i, false))}
          {reviews.map((review, i) => renderCard(review, i, true))}
        </div>
      </div>

      <p className={styles.interactionNote}>Hover to slow. Drag to browse.</p>
    </section>
  );
}
