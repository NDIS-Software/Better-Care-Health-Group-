import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../_components/Motion";
import { localizePath, type Locale } from "../_i18n/locale";
import styles from "./OurTeamPage.module.css";
import { teamContent } from "./teamContent";

export function OurTeamPageView({ locale }: { locale: Locale }) {
  const content = teamContent[locale];
  const jason = content.profile;

  return <main id="main-content" className={styles.page}>
    <section className={styles.hero}>
      <Image className={styles.heroImage} src="/team/our-team-collaboration-hero.png" alt={locale === "zh" ? "专业团队在明亮办公室共同讨论服务计划" : "Professional team collaborating in a bright office"} fill priority sizes="100vw" />
      <div className={styles.heroShape} aria-hidden="true" />
      <div className={`site-shell ${styles.heroLayout}`}>
        <Reveal className={styles.heroCopy}>
          <h1>{content.title}</h1>
          <p>{content.lead}</p>
          <Link className="button button-dark" href={localizePath("/enquiry", locale)}>{content.cta} <ArrowRight size={18} /></Link>
        </Reveal>
      </div>
    </section>

    <section className={styles.profileSection} aria-label={locale === "zh" ? "团队成员" : "Team member"}>
      <div className={styles.profileAccent} aria-hidden="true" />
      <div className={`site-shell ${styles.profile}`}>
        <Reveal className={styles.profileMedia}>
          <Image src="/team/jason-social-worker-hd.png" alt="Jason, Social Worker at Better Care Health Group" fill sizes="(max-width: 860px) calc(100vw - 28px), 42vw" />
        </Reveal>
        <Reveal className={styles.profileCopy} delay={.08}>
          <p className={styles.role}>{jason.role}</p>
          <h2>{jason.name}</h2>
          <div className={styles.credentials}>{jason.credentials.map((item) => <span key={item}>{item}</span>)}</div>
          <div className={styles.biography}>{jason.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}</div>
        </Reveal>
      </div>
    </section>

    <section className={styles.closing}>
      <div className={`site-shell ${styles.closingLayout}`}>
        <Reveal><h2>{content.closingTitle}</h2></Reveal>
        <Reveal className={styles.closingCopy} delay={.08}><p>{content.closingBody}</p><Link className="button button-white" href={localizePath("/enquiry", locale)}>{content.cta} <ArrowRight size={18} /></Link></Reveal>
      </div>
    </section>
  </main>;
}
