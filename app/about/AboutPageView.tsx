import { Check } from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "../_components/Motion";
import { company } from "../_content/site";
import { localizePath, type Locale } from "../_i18n/locale";
import { aboutContent } from "./aboutContent";
import styles from "./AboutPage.module.css";

export function AboutPageView({ locale }: { locale: Locale }) {
  const content = aboutContent[locale];

  return <main id="main-content" className={styles.page}>
    <section className={styles.hero}>
      <div className={`site-shell ${styles.heroLayout}`}>
        <Reveal className={styles.heroCopy}>
          <h1>{content.title}</h1>
          <p>{content.lead}</p>
          <div className={styles.heroActions}>
            <Link className="button button-dark" href={localizePath("/enquiry", locale)}>{content.enquiryCta}</Link>
            <Link className={styles.textLink} href={localizePath("/services", locale)}>{content.servicesCta}</Link>
          </div>
        </Reveal>
        <Reveal className={styles.heroMedia} delay={.08}>
          <Image
            src="/generated-photos/about/about-hero-community-garden.jpg"
            alt={content.heroAlt}
            fill
            priority
            sizes="(max-width: 960px) calc(100vw - 28px), 58vw"
          />
        </Reveal>
      </div>
    </section>

    <section className={styles.storySection}>
      <div className={`site-shell ${styles.storyLayout}`}>
        <Reveal className={styles.storyMedia}>
          <Image
            src="/generated-photos/about/about-care-planning-home.jpg"
            alt={content.storyAlt}
            fill
            sizes="(max-width: 960px) calc(100vw - 28px), 48vw"
          />
        </Reveal>
        <Reveal className={styles.storyCopy} delay={.08}>
          <h2>{content.storyTitle}</h2>
          {content.storyBody.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </Reveal>
      </div>
    </section>

    <section className={styles.principlesSection}>
      <div className={`site-shell ${styles.principlesLayout}`}>
        <Reveal className={styles.principlesIntro}>
          <h2>{content.principlesTitle}</h2>
          <p>{content.principlesIntro}</p>
        </Reveal>
        <div className={styles.principleRows}>
          {content.principles.map((principle, index) => <Reveal className={styles.principleRow} delay={index * .05} key={principle.title}>
            <span className={styles.principleNumber}>{String(index + 1).padStart(2, "0")}</span>
            <h3>{principle.title}</h3>
            <p>{principle.body}</p>
          </Reveal>)}
        </div>
      </div>
    </section>

    <section className={styles.connectedSection}>
      <div className={`site-shell ${styles.connectedLayout}`}>
        <Reveal><h2>{content.connectedTitle}</h2></Reveal>
        <Reveal className={styles.connectedCopy} delay={.08}>
          <p>{content.connectedBody}</p>
          <strong>{content.connectedStatement}</strong>
        </Reveal>
      </div>
    </section>

    <section className={styles.standardsSection}>
      <div className={`site-shell ${styles.standardsLayout}`}>
        <Reveal className={styles.standardsCopy}>
          <h2>{content.standardsTitle}</h2>
          <p>{content.standardsBody}</p>
          <ul>
            {content.standards.map((standard) => <li key={standard}><span><Check size={18} weight="bold" /></span>{standard}</li>)}
          </ul>
        </Reveal>
        <Reveal className={styles.standardsMedia} delay={.08}>
          <Image
            src="/generated-photos/about/about-clinical-consultation.jpg"
            alt={content.standardsAlt}
            fill
            sizes="(max-width: 960px) calc(100vw - 28px), 52vw"
          />
        </Reveal>
      </div>
    </section>

    <section className={styles.closingSection}>
      <div className={`site-shell ${styles.closingLayout}`}>
        <Reveal><h2>{content.closingTitle}</h2></Reveal>
        <Reveal className={styles.closingCopy} delay={.08}>
          <p>{content.closingBody}</p>
          <div className={styles.closingActions}>
            <Link className="button button-white" href={localizePath("/enquiry", locale)}>{content.enquiryCta}</Link>
            <a className={styles.callLink} href={company.phoneHref}>{content.callCta}</a>
          </div>
        </Reveal>
      </div>
    </section>
  </main>;
}
