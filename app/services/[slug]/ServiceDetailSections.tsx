"use client";

import { CaretRight } from "@phosphor-icons/react/dist/csr/CaretRight";
import { ChatCircleDots } from "@phosphor-icons/react/dist/csr/ChatCircleDots";
import { CheckCircle } from "@phosphor-icons/react/dist/csr/CheckCircle";
import { ClipboardText } from "@phosphor-icons/react/dist/csr/ClipboardText";
import { HandHeart } from "@phosphor-icons/react/dist/csr/HandHeart";
import { ImageSquare } from "@phosphor-icons/react/dist/csr/ImageSquare";
import { TrendUp } from "@phosphor-icons/react/dist/csr/TrendUp";
import { UserCircle } from "@phosphor-icons/react/dist/csr/UserCircle";
import { motion, useReducedMotion } from "motion/react";
import styles from "./service.module.css";

const ease = [0.16, 1, 0.3, 1] as const;

const processSteps = [
  { label: "Understand", icon: ChatCircleDots },
  { label: "Plan", icon: ClipboardText },
  { label: "Support", icon: HandHeart },
  { label: "Review", icon: TrendUp },
] as const;

const revealItem = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0 },
};

export function ServiceHero({ title, summary, photoPrompt }: { title: string; summary: string; photoPrompt: string }) {
  const reduce = useReducedMotion();

  return <section className={styles.heroSection}>
    <div className={styles.pageShell}>
      <motion.div
        className={styles.heroCard}
        data-photo-prompt={photoPrompt}
        data-long-title={title.length > 30 || undefined}
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: false, amount: .32 }}
        variants={{
          hidden: { opacity: 0, y: 18, scale: .988 },
          visible: { opacity: 1, y: 0, scale: 1, transition: { duration: .78, ease, staggerChildren: .09 } },
        }}
      >
        <motion.div
          className={styles.heroPlaceholder}
          role="img"
          aria-label={`${title} hero photo placeholder`}
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
          transition={{ duration: .55, delay: .2 }}
        >
          <ImageSquare size={38} weight="light" />
          <span>Hero photo placeholder</span>
        </motion.div>
        <div className={styles.heroShade} />
        <motion.div
          className={styles.heroCopy}
          variants={{ hidden: {}, visible: { transition: { delayChildren: .12, staggerChildren: .09 } } }}
        >
          <motion.h1 variants={revealItem} transition={{ duration: .62, ease }}>{title}</motion.h1>
          <motion.p variants={revealItem} transition={{ duration: .62, ease }}>{summary}</motion.p>
        </motion.div>
      </motion.div>
    </div>
  </section>;
}

export function ServiceIntro({ title, intro, photoPrompt }: { title: string; intro: string; photoPrompt: string }) {
  const reduce = useReducedMotion();

  return <section className={styles.introSection}>
    <div className={`${styles.pageShell} ${styles.introLayout}`}>
      <motion.div
        className={styles.introCopy}
        initial={reduce ? false : { opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: false, amount: .28 }}
        transition={{ duration: .72, ease }}
      >
        <h2>Support built around the person, not a template.</h2>
        <p>{intro}</p>
        <p>We work alongside you, your family and chosen professionals to keep support practical, understandable and connected to everyday life.</p>
      </motion.div>
      <motion.div
        className={styles.supportingPlaceholder}
        data-photo-prompt={photoPrompt}
        role="img"
        aria-label={`${title} supporting photo placeholder`}
        initial={reduce ? false : { opacity: 0, x: 28, scale: .985 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={{ once: false, amount: .25 }}
        transition={{ duration: .76, ease, delay: .06 }}
      >
        <ImageSquare size={38} weight="light" />
        <span>Supporting photo placeholder</span>
      </motion.div>
    </div>
  </section>;
}

export function ServiceDetails({ includes, helps }: { includes: readonly string[]; helps: readonly string[] }) {
  const reduce = useReducedMotion();

  return <section className={styles.detailsSection}>
    <motion.div
      className={`${styles.pageShell} ${styles.detailsGrid}`}
      initial={reduce ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: .2 }}
      transition={{ duration: .72, ease }}
    >
      <DetailColumn title="What support may include" items={includes} type="check" reduce={Boolean(reduce)} />
      <DetailColumn title="Who this may help" items={helps} type="person" reduce={Boolean(reduce)} />
    </motion.div>
  </section>;
}

function DetailColumn({ title, items, type, reduce }: { title: string; items: readonly string[]; type: "check" | "person"; reduce: boolean }) {
  const Icon = type === "check" ? CheckCircle : UserCircle;

  return <motion.div
    className={styles.detailColumn}
    initial={reduce ? false : "hidden"}
    whileInView="visible"
    viewport={{ once: false, amount: .3 }}
    variants={{ visible: { transition: { staggerChildren: .065 } } }}
  >
    <motion.h2 variants={revealItem} transition={{ duration: .55, ease }}>{title}</motion.h2>
    <div className={styles.detailList}>{items.map((item) => <motion.div key={item} variants={revealItem} transition={{ duration: .52, ease }}><Icon size={22} weight="regular" /><span>{item}</span></motion.div>)}</div>
  </motion.div>;
}

export function ServiceProcess({ descriptions }: { descriptions: readonly string[] }) {
  const reduce = useReducedMotion();

  return <section className={styles.processSection}>
    <div className={styles.pageShell}>
      <motion.h2
        initial={reduce ? false : { opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: .5 }}
        transition={{ duration: .6, ease }}
      >How we work</motion.h2>
      <motion.div
        className={styles.processGrid}
        initial={reduce ? false : "hidden"}
        whileInView="visible"
        viewport={{ once: false, amount: .18 }}
        variants={{ visible: { transition: { staggerChildren: .1 } } }}
      >
        {processSteps.map((step, index) => {
          const StepIcon = step.icon;
          return <motion.article className={styles.processStep} key={step.label} variants={revealItem} transition={{ duration: .6, ease }}>
            <motion.div className={styles.processIcon} variants={{ hidden: { scale: .82 }, visible: { scale: 1 } }} transition={{ type: "spring", stiffness: 180, damping: 18 }}><StepIcon size={34} weight="light" /></motion.div>
            <div><h3>{step.label}</h3><p>{descriptions[index]}</p></div>
            {index < processSteps.length - 1 && <CaretRight className={styles.processArrow} size={22} weight="light" aria-hidden="true" />}
          </motion.article>;
        })}
      </motion.div>
    </div>
  </section>;
}
