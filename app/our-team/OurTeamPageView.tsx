import { ArrowRight } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../_components/Motion";
import { localizePath, type Locale } from "../_i18n/locale";
import styles from "./OurTeamPage.module.css";
import { teamContent } from "./teamContent";

export function OurTeamPageView({ locale }: { locale: Locale }) {
  const content = teamContent[locale];
  const { kun, jason } = content.profiles;

  return <main id="main-content" className={styles.page}>
    <section className={styles.hero}>
      <div className={`site-shell ${styles.heroLayout}`}>
        <Reveal><h1>{content.title}</h1></Reveal>
        <Reveal className={styles.heroLead} delay={.08}><p>{content.lead}</p></Reveal>
      </div>
    </section>

    <section className={styles.introSection}>
      <div className={`site-shell ${styles.introLayout}`}>
        <Reveal><h2>{content.introTitle}</h2></Reveal>
        <Reveal delay={.08}><p>{content.introBody}</p></Reveal>
      </div>
    </section>

    <section className={styles.profilesSection} aria-label={locale === "zh" ? "团队成员" : "Team members"}>
      <div className={`site-shell ${styles.profiles}`}>
        <article className={styles.profile}>
          <Reveal className={`${styles.profileMedia} ${styles.kunMedia}`}>
            <span aria-hidden="true">KC</span>
            <div><strong>{kun.name}</strong><small>{kun.role}</small></div>
          </Reveal>
          <Reveal className={styles.profileCopy} delay={.08}>
            <p className={styles.role}>{kun.role}</p><h2>{kun.name}</h2>
            <div className={styles.credentials}>{kun.credentials.map((item) => <span key={item}>{item}</span>)}</div>
            {kun.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </Reveal>
        </article>

        <article className={`${styles.profile} ${styles.profileReverse}`}>
          <Reveal className={styles.profileMedia}>
            <Image src="/team/jason-social-worker.png" alt="Jason, Social Worker at Better Care Health Group" fill sizes="(max-width: 860px) calc(100vw - 28px), 44vw" priority />
          </Reveal>
          <Reveal className={styles.profileCopy} delay={.08}>
            <p className={styles.role}>{jason.role}</p><h2>{jason.name}</h2>
            <div className={styles.credentials}>{jason.credentials.map((item) => <span key={item}>{item}</span>)}</div>
            {jason.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </Reveal>
        </article>
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
