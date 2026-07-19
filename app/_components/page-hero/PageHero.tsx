import { ReactNode } from "react";
import { Reveal } from "../Motion";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  title: string;
  children: ReactNode;
  imageKeywords?: [string, string];
};

export function PageHero({
  title,
  children,
  imageKeywords = [
    "participant-centred support at home Australia",
    "allied health community care Melbourne",
  ],
}: PageHeroProps) {
  return <section className={styles.hero}>
    <div className={`site-shell ${styles.layout}`}>
      <Reveal className={styles.copy}>
        <h1>{title}</h1>
        <p>{children}</p>
      </Reveal>
      <div className={styles.media} aria-label="Planned page photography">
        {imageKeywords.map((keyword, index) => <Reveal key={keyword} delay={index * .08} className={index === 0 ? styles.primaryMedia : styles.secondaryMedia}>
          <div className={styles.placeholder} role="img" aria-label={`Image placeholder: ${keyword}`}>
            <span>Image placeholder</span>
            <strong>{keyword}</strong>
          </div>
        </Reveal>)}
      </div>
    </div>
  </section>;
}
