import Link from "next/link";
import { faqs } from "../../_content/site";
import styles from "./FaqSection.module.css";

export function FaqSection() {
  return <section id="faq" className={styles.section} aria-labelledby="faq-heading">
    <div className={`site-shell ${styles.layout}`}>
      <div className={styles.intro}>
        <p className="eyebrow">Common questions</p>
        <h2 id="faq-heading" className="section-title">A few useful answers before we talk.</h2>
        <p>Every situation is different. These answers explain the usual starting point without replacing an individual conversation about service fit.</p>
        <Link className="button button-dark" href="#home-enquiry">Ask us a question</Link>
      </div>
      <div className={styles.list}>{faqs.map((faq, index) => <details key={faq.question} className={styles.item} open={index === 0}>
        <summary><span>{faq.question}</span><span className={styles.plus} aria-hidden="true">+</span></summary>
        <div className={styles.answer}><p>{faq.answer}</p></div>
      </details>)}</div>
    </div>
  </section>;
}
