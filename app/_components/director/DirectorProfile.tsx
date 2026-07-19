"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./DirectorProfile.module.css";

const highlights = [
  "Physiotherapy-informed clinical leadership",
  "Care designed around home and community life",
  "Clear communication with clients and care teams",
];

export function DirectorProfile() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.2 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return <section ref={sectionRef} className={styles.section} aria-labelledby="director-heading">
    <div className={`site-shell ${styles.layout} ${isVisible ? styles.visible : ""}`}>
      <div className={`${styles.reveal} ${styles.portraitWrap}`}>
        <div className={styles.portrait} aria-label="Profile placeholder for Kun Cheng">
          <div className={styles.glow} aria-hidden="true" />
          <span className={styles.initials} aria-hidden="true">KC</span>
          <div className={styles.identity}>
            <strong>Kun Cheng</strong>
            <span>Director &amp; Physiotherapist</span>
          </div>
        </div>
      </div>

      <div className={`${styles.reveal} ${styles.content}`}>
        <p className={styles.kicker}>Clinical leadership</p>
        <h2 id="director-heading">Care led with a physiotherapist&apos;s perspective.</h2>
        <p className={styles.intro}>Kun Cheng leads Better Care Health Group with a focus on practical allied health, professional accountability and support that makes sense in the places where people live their everyday lives.</p>
        <p className={styles.intro}>As an AHPRA-registered physiotherapist, Kun brings clinical thinking to how services are planned, communicated and reviewed across physiotherapy, NDIS and Support at Home pathways.</p>

        <div className={styles.highlights}>{highlights.map((highlight, index) => <div className={`${styles.reveal} ${styles.highlight}`} style={{ transitionDelay: `${180 + index * 90}ms` }} key={highlight}><span aria-hidden="true">0{index + 1}</span><p>{highlight}</p></div>)}</div>

        <div className={styles.credentials}>
          <span>AHPRA-registered Physiotherapist</span>
          <span>Director, Better Care Health Group</span>
        </div>
        <p className={styles.note}>Professional registration can be independently checked through the <a href="https://www.ahpra.gov.au/Registration/Registers-of-Practitioners.aspx" target="_blank" rel="noreferrer">public AHPRA register</a>. Individual services remain subject to assessment, scope of practice and availability.</p>
      </div>
    </div>
  </section>;
}
