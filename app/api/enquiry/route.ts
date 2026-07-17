const requiredFields = ["name", "relationship", "email", "phone", "suburb", "service", "funding", "contactMethod", "message", "consent"] as const;

function escapeHtml(value: string) {
  return value.replace(/[&<>'"]/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }[character] || character));
}

export async function POST(request: Request) {
  try {
    const data = await request.json() as Record<string, unknown>;
    if (data.website) return Response.json({ message: "Thank you." });
    for (const field of requiredFields) {
      if (typeof data[field] !== "string" || !String(data[field]).trim()) return Response.json({ message: "Please complete all required fields." }, { status: 400 });
    }
    const email = String(data.email);
    if (!/^\S+@\S+\.\S+$/.test(email)) return Response.json({ message: "Please enter a valid email address." }, { status: 400 });
    if (String(data.message).length > 1500) return Response.json({ message: "Please shorten your message." }, { status: 400 });

    const apiKey = process.env.RESEND_API_KEY;
    const to = process.env.ENQUIRY_TO_EMAIL || "info@bettercarehg.com";
    const from = process.env.ENQUIRY_FROM_EMAIL;
    if (!apiKey || !from) return Response.json({ message: "Online enquiries are not configured yet. Please call 0452 638 779 or email info@bettercarehg.com." }, { status: 503 });

    const rows = requiredFields.filter((field) => field !== "consent").map((field) => `<tr><th style="text-align:left;padding:8px;border-bottom:1px solid #d8e4e8">${escapeHtml(field)}</th><td style="padding:8px;border-bottom:1px solid #d8e4e8">${escapeHtml(String(data[field]))}</td></tr>`).join("");
    const response = await fetch("https://api.resend.com/emails", { method: "POST", headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" }, body: JSON.stringify({ from, to: [to], reply_to: email, subject: `Website enquiry: ${String(data.service)} - ${String(data.name)}`, html: `<h1>New Better Care website enquiry</h1><table style="border-collapse:collapse">${rows}</table><p>Consent to respond: yes</p>` }) });
    if (!response.ok) return Response.json({ message: "Your enquiry could not be sent. Please call or email us instead." }, { status: 502 });
    return Response.json({ message: "Your enquiry has been sent." });
  } catch {
    return Response.json({ message: "Your enquiry could not be sent. Please check the form and try again." }, { status: 400 });
  }
}
