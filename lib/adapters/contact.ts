// Contact messages adapter. Pages and actions call this; it hides where messages actually go.
// Current delivery: email via Resend (lib/resend/client.ts). Swap the internals here to change it.
import "server-only";
import { sendEmail } from "@/lib/resend/client";

export type ContactMessage = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export class ContactNotConfiguredError extends Error {
  constructor(missing: string[]) {
    super(`Contact form delivery is not configured (missing: ${missing.join(", ")}).`);
    this.name = "ContactNotConfiguredError";
  }
}

/** Reads delivery settings from the environment; throws if any are missing. */
function contactConfig() {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = (process.env.CONTACT_TO_EMAIL ?? "")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean);

  const missing = [
    !apiKey && "RESEND_API_KEY",
    !from && "CONTACT_FROM_EMAIL",
    to.length === 0 && "CONTACT_TO_EMAIL",
  ].filter(Boolean) as string[];
  if (missing.length) throw new ContactNotConfiguredError(missing);

  return { from: from!, to };
}

/** Delivers a contact message as an email to the site's contact inbox. */
export async function sendContactMessage(msg: ContactMessage): Promise<void> {
  const { from, to } = contactConfig();
  const name = [msg.firstName, msg.lastName].filter(Boolean).join(" ") || "(no name given)";

  // Plain text only: visitor input is never rendered as HTML.
  const text = [
    "New message from the BrigaCare website contact form.",
    "",
    `Name:  ${name}`,
    `Email: ${msg.email}`,
    "",
    "Message:",
    msg.message || "(no message)",
    "",
    "Reply to this email to answer the sender directly.",
  ].join("\n");

  await sendEmail({
    from,
    to,
    subject: `Website contact: ${name}`.replace(/[\r\n]+/g, " ").slice(0, 150),
    text,
    replyTo: msg.email,
  });
}
