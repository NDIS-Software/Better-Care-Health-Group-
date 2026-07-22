"use client";

import { useEffect, useRef, useState } from "react";
import type { Locale } from "../../_i18n/locale";
import styles from "./DirectorProfile.module.css";

const copy = {
  en: {
    role: "Director & Physiotherapist",
    kicker: "Clinical leadership",
    title: "Care led with a physiotherapist's perspective.",
    paragraphs: ["Kun Cheng leads Better Care Health Group with a focus on practical allied health, professional accountability and support that makes sense in the places where people live their everyday lives.", "As an AHPRA-registered physiotherapist, Kun brings clinical thinking to how services are planned, communicated and reviewed across physiotherapy, NDIS and Support at Home pathways."],
    highlights: ["Physiotherapy-informed clinical leadership", "Care designed around home and community life", "Clear communication with clients and care teams"],
    credentials: ["AHPRA-registered Physiotherapist", "Director, Better Care Health Group"],
    note: <>Professional registration can be independently checked through the <a href="https://www.ahpra.gov.au/Registration/Registers-of-Practitioners.aspx" target="_blank" rel="noreferrer">public AHPRA register</a>. Individual services remain subject to assessment, scope of practice and availability.</>,
  },
  zh: {
    role: "负责人兼物理治疗师",
    kicker: "临床专业领导",
    title: "以物理治疗师的专业视角带领照护。",
    paragraphs: ["Kun Cheng 带领 Better Care Health Group，重视实用的联合健康服务、专业责任，以及真正适合客户日常生活环境的支持。", "作为 AHPRA 注册物理治疗师，Kun 将临床思维带入物理治疗、NDIS 和 Support at Home 服务的规划、沟通及复查过程。"],
    highlights: ["以物理治疗专业为基础的临床领导", "围绕家庭与社区生活设计照护", "与客户及照护团队保持清晰沟通"],
    credentials: ["AHPRA 注册物理治疗师", "Better Care Health Group 负责人"],
    note: <>您可以通过 <a href="https://www.ahpra.gov.au/Registration/Registers-of-Practitioners.aspx" target="_blank" rel="noreferrer">AHPRA 公共注册名册</a>独立查询专业注册信息。具体服务仍取决于评估、执业范围及人员安排。</>,
  },
} as const;

export function DirectorProfile({ locale = "en" }: { locale?: Locale }) {
  const content = copy[locale];
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
            <span>{content.role}</span>
          </div>
        </div>
      </div>

      <div className={`${styles.reveal} ${styles.content}`}>
        <p className={styles.kicker}>{content.kicker}</p>
        <h2 id="director-heading">{content.title}</h2>
        <p className={styles.intro}>{content.paragraphs[0]}</p>
        <p className={styles.intro}>{content.paragraphs[1]}</p>

        <div className={styles.highlights}>{content.highlights.map((highlight, index) => <div className={`${styles.reveal} ${styles.highlight}`} style={{ transitionDelay: `${180 + index * 90}ms` }} key={highlight}><span aria-hidden="true">0{index + 1}</span><p>{highlight}</p></div>)}</div>

        <div className={styles.credentials}>
          <span>{content.credentials[0]}</span>
          <span>{content.credentials[1]}</span>
        </div>
        <p className={styles.note}>{content.note}</p>
      </div>
    </div>
  </section>;
}
