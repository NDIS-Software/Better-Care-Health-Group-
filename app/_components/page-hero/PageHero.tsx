import { ReactNode } from "react";
import Image from "next/image";
import type { Locale } from "../../_i18n/locale";
import { Reveal } from "../Motion";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  title: string;
  children: ReactNode;
  imageKeywords?: string[];
  images?: readonly { src: string; alt: string }[];
  locale?: Locale;
};

export function PageHero({
  title,
  children,
  imageKeywords = [
    "participant-centred support at home Australia",
    "allied health community care Melbourne",
  ],
  images,
  locale = "en",
}: PageHeroProps) {
  return <section className={styles.hero}>
    <div className={`site-shell ${styles.layout}`}>
      <Reveal className={styles.copy}>
        <h1>{title}</h1>
        <p>{children}</p>
      </Reveal>
      <div className={styles.media} aria-label={locale === "zh" ? "页面摄影位置" : "Planned page photography"}>
        {(images ?? imageKeywords.map((keyword) => ({ src: "", alt: keyword }))).map((image, index) => <Reveal key={image.alt} delay={index * .08} className={index === 0 ? styles.primaryMedia : styles.secondaryMedia}>
          {image.src ? <div className={styles.photo}><Image src={image.src} alt={image.alt} fill priority={index === 0} sizes={index === 0 ? "(max-width: 980px) 58vw, 36vw" : "(max-width: 980px) 38vw, 26vw"} /></div> : <div className={styles.placeholder} role="img" aria-label={`${locale === "zh" ? "图片占位" : "Image placeholder"}: ${image.alt}`}>
            <span>{locale === "zh" ? "图片占位" : "Image placeholder"}</span>
            <strong>{image.alt}</strong>
          </div>}
        </Reveal>)}
      </div>
    </div>
  </section>;
}
