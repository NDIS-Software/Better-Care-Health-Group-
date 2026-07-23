import type { CreateBatchOptions } from "resend";

export type EnquiryData = {
  name: string;
  relationship: string;
  email: string;
  phone: string;
  suburb: string;
  service: string;
  funding: string;
  contactMethod: string;
  message: string;
};

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character] || character));
}

const fieldLabels: Record<keyof Omit<EnquiryData, "locale">, string> = {
  name: "Name",
  relationship: "Enquiring as",
  email: "Email",
  phone: "Phone",
  suburb: "Suburb",
  service: "Service",
  funding: "Funding pathway",
  contactMethod: "Preferred contact",
  message: "Message",
};

export function createEnquiryEmails(data: EnquiryData, from: string, teamRecipients: string[]): CreateBatchOptions {
  const rows = (Object.keys(fieldLabels) as Array<keyof typeof fieldLabels>)
    .map((field) => `<tr><th style="text-align:left;vertical-align:top;padding:10px;border-bottom:1px solid #d8e4e8;color:#17384a">${fieldLabels[field]}</th><td style="padding:10px;border-bottom:1px solid #d8e4e8;color:#365360;white-space:pre-wrap">${escapeHtml(data[field])}</td></tr>`)
    .join("");

  const customerCopy = {
    subject: "We have received your enquiry | Better Care Health Group",
    preview: "Thank you for contacting Better Care Health Group.",
    greeting: `Hello ${data.name},`,
    body: "Thank you for contacting us. We have received your enquiry and our team will usually be in touch within two business days.",
    summary: `Service: ${data.service}<br />Preferred contact: ${data.contactMethod}`,
    urgent: "For urgent medical help, call 000. Please do not reply with detailed medical information.",
  };

  const shellStart = '<div style="margin:0;background:#f4f8f8;padding:32px 16px;font-family:Arial,sans-serif;color:#17384a"><div style="max-width:640px;margin:0 auto;background:#fff;border:1px solid #d8e4e8;border-radius:16px;padding:32px">';
  const shellEnd = '<p style="margin:28px 0 0;color:#6a7f88;font-size:13px;line-height:1.6">Better Care Health Group<br />Mount Waverley, Victoria<br />info@bettercarehg.com · 0452 638 779</p></div></div>';

  return [
    {
      from,
      to: teamRecipients,
      replyTo: data.email,
      subject: `Website enquiry: ${data.service} - ${data.name}`,
      html: `${shellStart}<h1 style="margin:0 0 20px;font-size:26px">New website enquiry</h1><table style="width:100%;border-collapse:collapse">${rows}</table><p style="margin:22px 0 0">Consent to respond: yes</p>${shellEnd}`,
    },
    {
      from,
      to: [data.email],
      replyTo: teamRecipients[0],
      subject: customerCopy.subject,
      html: `${shellStart}<div style="display:none;max-height:0;overflow:hidden">${customerCopy.preview}</div><h1 style="margin:0 0 18px;font-size:26px">${escapeHtml(customerCopy.greeting)}</h1><p style="font-size:16px;line-height:1.7;color:#365360">${customerCopy.body}</p><div style="margin:24px 0;padding:18px;border-radius:12px;background:#eef6f6;line-height:1.7">${customerCopy.summary}</div><p style="font-size:14px;line-height:1.6;color:#6a7f88">${customerCopy.urgent}</p>${shellEnd}`,
    },
  ];
}
