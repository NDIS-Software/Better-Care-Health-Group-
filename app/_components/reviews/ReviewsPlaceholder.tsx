"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "@phosphor-icons/react";
import styles from "./ReviewsPlaceholder.module.css";

const reviewPages = [
  [
    {
      initials: "GR",
      title: "Review content placeholder",
      meta: "Awaiting Google Business connection",
      text: "A real client review will appear in this space once Better Care Health Group’s Google Business Profile is connected.",
    },
    {
      initials: "ID",
      title: "Reviewer details placeholder",
      meta: "Name and context will come from Google",
      text: "Published cards will retain the reviewer’s public name and original wording so visitors can understand where the feedback came from.",
    },
    {
      initials: "★",
      title: "Rating placeholder",
      meta: "No rating is being claimed yet",
      text: "The star rating and review date will only be displayed after they can be sourced from the live Google review listing.",
    },
  ],
  [
    {
      initials: "AU",
      title: "Authenticity first",
      meta: "No sample testimonial presented as real",
      text: "Placeholder content is intentionally labelled so it cannot be mistaken for feedback from a Better Care Health Group client.",
    },
    {
      initials: "GB",
      title: "Google Business integration",
      meta: "Prepared for a future live connection",
      text: "This component is ready to be connected to an approved Google Business review source when the business profile is available.",
    },
    {
      initials: "BC",
      title: "Better Care client stories",
      meta: "Verified feedback will appear here",
      text: "Future reviews can help families, participants and referrers understand the experience of working with the Better Care team.",
    },
  ],
];

export function ReviewsPlaceholder() {
  const [page, setPage] = useState(0);

  return <section id="reviews" className={styles.section} aria-labelledby="reviews-heading">
    <div className="site-shell">
      <div className={styles.heading}>
        <p>Google reviews · preview</p>
        <h2 id="reviews-heading">Client reviews will live here.</h2>
        <span>This is a design placeholder. No customer rating or testimonial is being claimed.</span>
      </div>

      <div className={styles.grid} aria-live="polite">{reviewPages[page].map((review) => <article className={styles.card} key={review.title}>
        <div className={styles.cardTop}>
          <div className={styles.stars} aria-label="Rating placeholder">{Array.from({ length: 5 }).map((_, index) => <Star key={index} size={18} weight="regular" />)}</div>
          <span>Review placeholder</span>
        </div>
        <blockquote>“{review.text}”</blockquote>
        <div className={styles.reviewer}>
          <span className={styles.avatar} aria-hidden="true">{review.initials}</span>
          <div><strong>{review.title}</strong><small>{review.meta}</small></div>
        </div>
      </article>)}</div>

      <div className={styles.controls}>
        <button type="button" aria-label="Show previous review placeholders" onClick={() => setPage((page + reviewPages.length - 1) % reviewPages.length)}><ArrowLeft size={19} /></button>
        <div className={styles.dots} aria-label={`Review placeholder page ${page + 1} of ${reviewPages.length}`}>{reviewPages.map((_, index) => <button key={index} type="button" className={index === page ? styles.activeDot : ""} aria-label={`Show review placeholder page ${index + 1}`} aria-current={index === page ? "true" : undefined} onClick={() => setPage(index)} />)}</div>
        <button type="button" aria-label="Show next review placeholders" onClick={() => setPage((page + 1) % reviewPages.length)}><ArrowRight size={19} /></button>
      </div>

      <div className={styles.connection}><span>G</span><strong>Google Business profile connection pending</strong></div>
    </div>
  </section>;
}
