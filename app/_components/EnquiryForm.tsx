"use client";

import { ArrowRight, CircleNotch } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";
import type { Locale } from "../_i18n/locale";
import { localizePath } from "../_i18n/locale";

type Status = { kind: "idle" | "loading" | "success" | "error"; message?: string };

const copy = {
  en: {
    fields: ["Your name", "I am enquiring as", "Email", "Phone", "Suburb", "Service", "Funding pathway", "Preferred contact", "How can we help?"],
    selectOne: "Select one",
    selectService: "Select a service",
    relationships: ["Participant or client", "Family member or carer", "Support coordinator", "Health professional", "Other referrer"],
    services: ["Physiotherapy", "Occupational Therapy", "Social Work", "Allied Health Assistance", "Myotherapy", "Early Childhood Supports", "Support Worker", "Not sure yet"],
    funding: ["NDIS", "Support at Home", "Private", "Other or not sure"],
    contact: ["Phone", "Email"],
    placeholder: "A short description is enough. Please do not include detailed medical information or attach clinical documents here.",
    consent: "I agree that Better Care Health Group may use these details to respond to my enquiry. I have read the",
    privacy: "privacy notice",
    sending: "Sending",
    send: "Send enquiry",
    success: "Thank you. Your enquiry has been sent and our team will be in touch.",
    error: "Your enquiry could not be sent. Please call or email us instead.",
  },
  zh: {
    fields: ["您的姓名", "您的咨询身份", "电子邮箱", "联系电话", "所在城区", "所需服务", "资金渠道", "首选联系方式", "我们可以如何帮助您？"],
    selectOne: "请选择",
    selectService: "请选择服务",
    relationships: ["参与者或客户", "家人或照护者", "支持协调员", "医疗专业人员", "其他转介人员"],
    services: ["物理治疗", "职业治疗", "社会工作服务", "联合健康助理", "肌肉治疗", "幼儿支持服务", "支持工作者", "暂不确定"],
    funding: ["NDIS", "Support at Home", "自费", "其他或暂不确定"],
    contact: ["电话", "电子邮件"],
    placeholder: "简单说明情况即可。请不要在这里提供详细病史或附上临床文件。",
    consent: "我同意 Better Care Health Group 使用这些资料回复我的咨询，并且已经阅读",
    privacy: "隐私政策",
    sending: "正在发送",
    send: "发送咨询",
    success: "谢谢，您的咨询已经发送，团队将与您联系。",
    error: "咨询暂时无法发送，请改用电话或电子邮件联系我们。",
  },
} as const;

const relationshipValues = ["Participant or client", "Family member or carer", "Support coordinator", "Health professional", "Other referrer"];
const serviceValues = ["Physiotherapy", "Occupational Therapy", "Social Work", "Allied Health Assistance", "Myotherapy", "Early Childhood Supports", "Support Worker", "Not sure yet"];
const fundingValues = ["NDIS", "Support at Home", "Private", "Other or not sure"];
const contactValues = ["Phone", "Email"];

export function EnquiryForm({ locale = "en" }: { locale?: Locale }) {
  const content = copy[locale];
  const [status, setStatus] = useState<Status>({ kind: "idle" });

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "loading" });
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(locale === "zh" ? content.error : result.message || content.error);
      form.reset();
      setStatus({ kind: "success", message: content.success });
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : content.error });
    }
  }

  const options = (values: readonly string[], labels: readonly string[]) => values.map((value, index) => <option value={value} key={value}>{labels[index]}</option>);

  return <form className="enquiry-form" onSubmit={submit} lang={locale === "zh" ? "zh-Hans" : "en-AU"}>
    <input type="hidden" name="locale" value={locale} />
    <div className="form-grid">
      <div className="field"><label htmlFor="name">{content.fields[0]}</label><input id="name" name="name" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="relationship">{content.fields[1]}</label><select id="relationship" name="relationship" required defaultValue=""><option value="" disabled>{content.selectOne}</option>{options(relationshipValues, content.relationships)}</select></div>
      <div className="field"><label htmlFor="email">{content.fields[2]}</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      <div className="field"><label htmlFor="phone">{content.fields[3]}</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
      <div className="field"><label htmlFor="suburb">{content.fields[4]}</label><input id="suburb" name="suburb" autoComplete="address-level2" required /></div>
      <div className="field"><label htmlFor="service">{content.fields[5]}</label><select id="service" name="service" required defaultValue=""><option value="" disabled>{content.selectService}</option>{options(serviceValues, content.services)}</select></div>
      <div className="field"><label htmlFor="funding">{content.fields[6]}</label><select id="funding" name="funding" required defaultValue=""><option value="" disabled>{content.selectOne}</option>{options(fundingValues, content.funding)}</select></div>
      <div className="field"><label htmlFor="contactMethod">{content.fields[7]}</label><select id="contactMethod" name="contactMethod" required defaultValue=""><option value="" disabled>{content.selectOne}</option>{options(contactValues, content.contact)}</select></div>
      <div className="field field-full"><label htmlFor="message">{content.fields[8]}</label><textarea id="message" name="message" required maxLength={1500} placeholder={content.placeholder} /></div>
      <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <label className="consent"><input name="consent" type="checkbox" value="yes" required /><span>{content.consent} <a href={localizePath("/privacy", locale)} style={{ textDecoration: "underline" }}>{content.privacy}</a>{locale === "zh" ? "。" : "."}</span></label>
      {status.kind === "success" && <div className="form-status success" role="status">{status.message}</div>}
      {status.kind === "error" && <div className="form-status error" role="alert">{status.message}</div>}
      <div className="field-full"><button className="button button-dark" type="submit" disabled={status.kind === "loading"}>{status.kind === "loading" ? <><CircleNotch size={18} className="spin" /> {content.sending}</> : <>{content.send} <ArrowRight size={18} /></>}</button></div>
    </div>
  </form>;
}
