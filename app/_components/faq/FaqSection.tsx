import Link from "next/link";
import { faqs } from "../../_content/site";
import type { Locale } from "../../_i18n/locale";
import styles from "./FaqSection.module.css";

const chineseFaqs = [
  { question: "服务覆盖哪些地区？", answer: "Better Care Health Group 位于 Mount Waverley，并在墨尔本各地提供上门、居家和社区服务。实际安排取决于您所在的城区、所需服务及专业人员时间，请联系我们确认。" },
  { question: "你们接受哪些资金渠道？", answer: "我们欢迎 NDIS 参与者、Support at Home 客户、自费客户及使用其他符合条件资金安排的人士咨询。服务开始前，我们会确认服务适配、资金要求、费用及交通安排。" },
  { question: "我需要转介信吗？", answer: "许多联合健康服务可以在没有全科医生转介信的情况下开始咨询，但不同资金渠道和服务的要求可能不同。您可以先发送简单咨询，我们会说明您的情况需要准备什么。" },
  { question: "提交咨询后会发生什么？", answer: "团队会查看您提供的信息，并联系您讨论目标、地点、服务选择、资金和时间。如果服务适合，我们会在预约前清楚说明下一步接收或评估流程。" },
  { question: "家人、支持协调员或转介人员可以联系你们吗？", answer: "可以。家人、受托人、支持协调员、照护伙伴及医疗专业人员都可以提交咨询。我们会确认相关权限，并在需要时让参与者或客户参与决定和信息共享。" },
  { question: "多久会收到回复？", answer: "我们通常会在两个工作日内回复在线咨询。预约时间取决于地点、专业人员安排、服务适配以及所需资金或转介资料。" },
];

export function getFaqs(locale: Locale) {
  return locale === "zh" ? chineseFaqs : faqs;
}

export function FaqSection({ locale = "en" }: { locale?: Locale }) {
  const zh = locale === "zh";
  const items = getFaqs(locale);
  return <section id="faq" className={styles.section} aria-labelledby="faq-heading">
    <div className={`site-shell ${styles.layout}`}>
      <div className={styles.intro}>
        <p className="eyebrow">{zh ? "常见问题" : "Common questions"}</p>
        <h2 id="faq-heading" className="section-title">{zh ? "沟通前，先了解几个常见答案。" : "A few useful answers before we talk."}</h2>
        <p>{zh ? "每个人的情况都不同。以下内容说明一般的起点，但不能代替针对个人服务适配的沟通。" : "Every situation is different. These answers explain the usual starting point without replacing an individual conversation about service fit."}</p>
        <Link className="button button-dark" href="#home-enquiry">{zh ? "向我们咨询" : "Ask us a question"}</Link>
      </div>
      <div className={styles.list}>{items.map((faq, index) => <details key={faq.question} className={styles.item} open={index === 0}>
        <summary><span>{faq.question}</span><span className={styles.plus} aria-hidden="true">+</span></summary>
        <div className={styles.answer}><p>{faq.answer}</p></div>
      </details>)}</div>
    </div>
  </section>;
}
