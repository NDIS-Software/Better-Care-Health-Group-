import { Resend } from "resend";
import { createEnquiryEmails, type EnquiryData } from "./email";

const requiredFields = ["name", "relationship", "email", "phone", "suburb", "service", "funding", "contactMethod", "message"] as const;
const allowedValues = {
  relationship: new Set(["Participant or client", "Family member or carer", "Support coordinator", "Health professional", "Other referrer"]),
  service: new Set(["Physiotherapy", "Occupational Therapy", "Social Work", "Allied Health Assistance", "Myotherapy", "Early Childhood Supports", "Support Worker", "Not sure yet"]),
  funding: new Set(["NDIS", "Support at Home", "Private", "Other or not sure"]),
  contactMethod: new Set(["Phone", "Email"]),
} as const;

const maxLengths: Record<(typeof requiredFields)[number], number> = {
  name: 100,
  relationship: 80,
  email: 254,
  phone: 40,
  suburb: 120,
  service: 100,
  funding: 80,
  contactMethod: 20,
  message: 1500,
};

function json(message: string, status = 200) {
  return Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });
}

function validate(input: Record<string, unknown>): EnquiryData | string {
  const normalized = {} as Record<(typeof requiredFields)[number], string>;
  for (const field of requiredFields) {
    if (typeof input[field] !== "string" || !input[field].trim()) return "Please complete all required fields.";
    const value = input[field].trim();
    if (value.length > maxLengths[field]) return `Please shorten the ${field} field.`;
    normalized[field] = value;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(normalized.email)) return "Please enter a valid email address.";
  if (input.consent !== "yes") return "Please confirm that we may use your details to respond.";
  if (!allowedValues.relationship.has(normalized.relationship)) return "Please select a valid relationship.";
  if (!allowedValues.service.has(normalized.service)) return "Please select a valid service.";
  if (!allowedValues.funding.has(normalized.funding)) return "Please select a valid funding pathway.";
  if (!allowedValues.contactMethod.has(normalized.contactMethod)) return "Please select a valid contact method.";

  return normalized;
}

export async function POST(request: Request) {
  if (!request.headers.get("content-type")?.includes("application/json")) return json("Content-Type must be application/json.", 415);

  try {
    const body = await request.text();
    if (body.length > 10_000) return json("The enquiry is too large.", 413);
    const input = JSON.parse(body) as Record<string, unknown>;

    // Silently accept bot submissions without sending email.
    if (input.website) return json("Thank you.");

    const result = validate(input);
    if (typeof result === "string") return json(result, 400);

    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.ENQUIRY_FROM_EMAIL;
    const teamRecipients = (process.env.ENQUIRY_TO_EMAIL || "info@bettercarehg.com").split(",").map((email) => email.trim()).filter(Boolean);
    if (!apiKey || !from || teamRecipients.length === 0) return json("Online enquiries are not configured yet. Please call 0452 638 779 or email info@bettercarehg.com.", 503);

    const resend = new Resend(apiKey);
    const { error } = await resend.batch.send(
      createEnquiryEmails(result, from, teamRecipients),
      { idempotencyKey: `website-enquiry/${crypto.randomUUID()}` },
    );

    if (error) {
      console.error("Resend rejected an enquiry email batch", { name: error.name, message: error.message });
      return json("Your enquiry could not be sent. Please call or email us instead.", 502);
    }

    return json("Your enquiry has been sent. A confirmation email is on its way.");
  } catch (error) {
    console.error("Enquiry API request failed", error instanceof Error ? error.message : "Unknown error");
    return json("Your enquiry could not be sent. Please check the form and try again.", 400);
  }
}
