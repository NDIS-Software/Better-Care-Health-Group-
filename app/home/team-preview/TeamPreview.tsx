import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../../_components/Motion";
import { localizePath, type Locale } from "../../_i18n/locale";
import styles from "./TeamPreview.module.css";

const copy = {
  en: {
    title: "Meet Our Professional Team",
    name: "Jason",
    role: "Social Worker",
    credentials: ["Master of Social Work", "English & Mandarin"],
    cta: "Meet Jason",
  },
  zh: {
    title: "认识我们的专业团队",
    name: "Jason",
    role: "社会工作者",
    credentials: ["社会工作硕士", "提供中英文服务"],
    cta: "认识 Jason",
  },
} as const;

export function TeamPreview({ locale }: { locale: Locale }) {
  const content = copy[locale];

  return <section className={styles.section} aria-labelledby="home-team-heading">
    <div className={`site-shell ${styles.layout}`}>
      <Reveal className={styles.content}>
        <h2 id="home-team-heading">{content.title}</h2>
        <Link className={styles.action} href={localizePath("/our-team", locale)}>{content.cta} <ArrowRight size={20} /></Link>
      </Reveal>

      <Reveal className={styles.person} delay={.1}>
        <div className={styles.portrait}>
          <Image src="/team/jason-social-worker-hd.png" alt="Jason, Social Worker at Better Care Health Group" fill sizes="(max-width: 760px) calc(100vw - 28px), 48vw" />
        </div>
        <div className={styles.identity}>
          <h3>{content.name}</h3>
          <p>{content.role}</p>
          <ul>{content.credentials.map((credential) => <li key={credential}>{credential}</li>)}</ul>
        </div>
      </Reveal>
    </div>
  </section>;
}
