import { PageHero } from "../_components/page-hero/PageHero";
import type { Locale } from "../_i18n/locale";

const copy = {
  en: {
    title: "A clear referral path for people you support.",
    lead: "We welcome enquiries from support coordinators, care partners, case managers, health professionals and community organisations.",
    heading: "What helps us respond quickly.",
    intro: "Start with an online enquiry and include only the information needed for us to understand the requested service. Please do not send detailed clinical records through the public form.",
    detailsTitle: "Useful referral details",
    details: ["Person's name and preferred contact details", "Suburb and preferred appointment setting", "Requested service and broad reason for referral", "Funding pathway and plan dates if relevant", "Your role and the best way to contact you"],
    nextTitle: "What happens next",
    nextBody: "Our team reviews service fit, location and practitioner availability. We then contact the nominated person to clarify needs, discuss fees and outline the next step.",
    urgentTitle: "Urgent or emergency support",
    urgentBody: "Better Care Health Group is not an emergency service. Call 000 for immediate danger or a medical emergency.",
  },
  zh: {
    title: "为您支持的人提供清晰的转介路径。",
    lead: "我们欢迎支持协调员、照护伙伴、个案经理、医疗专业人员及社区机构联系我们。",
    heading: "哪些资料有助于我们快速回复。",
    intro: "请先提交在线咨询，只需提供让我们了解所需服务的必要信息。请不要通过公开表格发送详细临床记录。",
    detailsTitle: "建议提供的转介资料",
    details: ["本人姓名及首选联系方式", "所在城区及首选预约环境", "所需服务及大致转介原因", "资金渠道及相关计划日期", "您的角色及最佳联系方式"],
    nextTitle: "接下来会发生什么",
    nextBody: "团队会评估服务适配、地点及专业人员安排，然后联系指定人员进一步了解需要、讨论费用并说明下一步。",
    urgentTitle: "紧急或急救支持",
    urgentBody: "Better Care Health Group 不是紧急服务机构。如有即时危险或医疗紧急情况，请拨打 000。",
  },
} as const;

export function ReferrersPageView({ locale }: { locale: Locale }) {
  const content = copy[locale];
  return <main id="main-content"><PageHero title={content.title} locale={locale} showMedia={false}>{content.lead}</PageHero><section className="page-section"><div className="site-shell content-grid"><h2>{content.heading}</h2><div className="prose"><p>{content.intro}</p><h3>{content.detailsTitle}</h3><ul>{content.details.map((detail) => <li key={detail}>{detail}</li>)}</ul><h3>{content.nextTitle}</h3><p>{content.nextBody}</p><h3>{content.urgentTitle}</h3><p>{content.urgentBody}</p></div></div></section></main>;
}
