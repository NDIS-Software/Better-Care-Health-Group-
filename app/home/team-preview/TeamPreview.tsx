import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../../_components/Motion";
import { localizePath, type Locale } from "../../_i18n/locale";
import styles from "./TeamPreview.module.css";

const copy = {
  en: {
    label: "Our team",
    title: "Professional care, grounded in human connection.",
    intro: "Meet the practitioners bringing clinical experience, thoughtful communication and culturally responsive support to every participant journey.",
    people: [
      { name: "Kun Cheng", role: "Director & Physiotherapist", detail: "AHPRA-registered clinical leadership" },
      { name: "Jason", role: "Social Worker", detail: "Master of Social Work · English & Mandarin" },
    ],
    cta: "Meet our team",
  },
  zh: {
    label: "专业团队",
    title: "以专业照护，建立真诚连接。",
    intro: "认识我们的专业人员。团队以临床经验、清晰沟通和文化响应式支持，陪伴每一位参与者的服务历程。",
    people: [
      { name: "Kun Cheng", role: "负责人兼物理治疗师", detail: "AHPRA 注册专业人员临床领导" },
      { name: "Jason", role: "社会工作者", detail: "社会工作硕士 · 中英文服务" },
    ],
    cta: "认识我们的团队",
  },
} as const;

export function TeamPreview({ locale }: { locale: Locale }) {
  const content = copy[locale];

  return <section className={styles.section} aria-labelledby="home-team-heading">
    <div className={`site-shell ${styles.layout}`}>
      <Reveal className={styles.intro}>
        <p className={styles.label}>{content.label}</p>
        <h2 id="home-team-heading">{content.title}</h2>
        <p>{content.intro}</p>
        <Link className={styles.action} href={localizePath("/our-team", locale)}>{content.cta} <ArrowRight size={19} /></Link>
      </Reveal>

      <div className={styles.people}>
        <Reveal className={styles.person} delay={.08}>
          <div className={`${styles.portrait} ${styles.kunPortrait}`}><span aria-hidden="true">KC</span></div>
          <div><h3>{content.people[0].name}</h3><p>{content.people[0].role}</p><small>{content.people[0].detail}</small></div>
        </Reveal>
        <Reveal className={styles.person} delay={.16}>
          <div className={styles.portrait}>
            <Image src="/team/jason-social-worker.png" alt="Jason, Social Worker at Better Care Health Group" fill sizes="(max-width: 720px) 42vw, 230px" />
          </div>
          <div><h3>{content.people[1].name}</h3><p>{content.people[1].role}</p><small>{content.people[1].detail}</small></div>
        </Reveal>
      </div>
    </div>
  </section>;
}
