"use client";

import { ArrowRight, CircleNotch } from "@phosphor-icons/react";
import { FormEvent, useState } from "react";

type Status = { kind: "idle" | "loading" | "success" | "error"; message?: string };

export function EnquiryForm() {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "loading" });
    const form = event.currentTarget;
    const body = Object.fromEntries(new FormData(form).entries());
    try {
      const response = await fetch("/api/enquiry", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
      const result = await response.json() as { message?: string };
      if (!response.ok) throw new Error(result.message || "Your enquiry could not be sent.");
      form.reset();
      setStatus({ kind: "success", message: "Thank you. Your enquiry has been sent and our team will be in touch." });
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Your enquiry could not be sent. Please call or email us instead." });
    }
  }

  return <form className="enquiry-form" onSubmit={submit}>
    <div className="form-grid">
      <div className="field"><label htmlFor="name">Your name</label><input id="name" name="name" autoComplete="name" required /></div>
      <div className="field"><label htmlFor="relationship">I am enquiring as</label><select id="relationship" name="relationship" required defaultValue=""><option value="" disabled>Select one</option><option>Participant or client</option><option>Family member or carer</option><option>Support coordinator</option><option>Health professional</option><option>Other referrer</option></select></div>
      <div className="field"><label htmlFor="email">Email</label><input id="email" name="email" type="email" autoComplete="email" required /></div>
      <div className="field"><label htmlFor="phone">Phone</label><input id="phone" name="phone" type="tel" autoComplete="tel" required /></div>
      <div className="field"><label htmlFor="suburb">Suburb</label><input id="suburb" name="suburb" autoComplete="address-level2" required /></div>
      <div className="field"><label htmlFor="service">Service</label><select id="service" name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Physiotherapy</option><option>Occupational Therapy</option><option>Allied Health Assistance</option><option>Myotherapy</option><option>Early Childhood Supports</option><option>Support Worker</option><option>Not sure yet</option></select></div>
      <div className="field"><label htmlFor="funding">Funding pathway</label><select id="funding" name="funding" required defaultValue=""><option value="" disabled>Select one</option><option>NDIS</option><option>Support at Home</option><option>Private</option><option>Other or not sure</option></select></div>
      <div className="field"><label htmlFor="contactMethod">Preferred contact</label><select id="contactMethod" name="contactMethod" required defaultValue=""><option value="" disabled>Select one</option><option>Phone</option><option>Email</option></select></div>
      <div className="field field-full"><label htmlFor="message">How can we help?</label><textarea id="message" name="message" required maxLength={1500} placeholder="A short description is enough. Please do not include detailed medical information or attach clinical documents here." /></div>
      <div className="honeypot" aria-hidden="true"><label htmlFor="website">Website</label><input id="website" name="website" tabIndex={-1} autoComplete="off" /></div>
      <label className="consent"><input name="consent" type="checkbox" value="yes" required /><span>I agree that Better Care Health Group may use these details to respond to my enquiry. I have read the <a href="/privacy" style={{ textDecoration: "underline" }}>privacy notice</a>.</span></label>
      {status.kind === "success" && <div className="form-status success" role="status">{status.message}</div>}
      {status.kind === "error" && <div className="form-status error" role="alert">{status.message}</div>}
      <div className="field-full"><button className="button button-dark" type="submit" disabled={status.kind === "loading"}>{status.kind === "loading" ? <><CircleNotch size={18} className="spin" /> Sending</> : <>Send enquiry <ArrowRight size={18} /></>}</button></div>
    </div>
  </form>;
}
