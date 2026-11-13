"use server";

import { ContactNotConfiguredError, sendContactMessage } from "@/lib/adapters/contact";
import { CONTACT } from "@/lib/site";

export type ContactState = {
  status: "idle" | "success" | "error";
  message: string;
  fieldErrors?: { email?: string };
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MAX_LEN = { name: 100, email: 254, message: 5000 };

const text = (fd: FormData, key: string, max: number) => String(fd.get(key) ?? "").trim().slice(0, max);

export async function submitContact(_prev: ContactState, formData: FormData): Promise<ContactState> {
  // Honeypot: real visitors never fill this hidden field.
  if (text(formData, "company", 200)) {
    return { status: "success", message: "Thanks! Your message has been sent." };
  }

  const msg = {
    firstName: text(formData, "firstName", MAX_LEN.name),
    lastName: text(formData, "lastName", MAX_LEN.name),
    email: text(formData, "email", MAX_LEN.email),
    message: text(formData, "message", MAX_LEN.message),
  };

  if (!EMAIL_RE.test(msg.email)) {
    return {
      status: "error",
      message: "Please check the highlighted field.",
      fieldErrors: { email: "Enter a valid email address." },
    };
  }

  try {
    await sendContactMessage(msg);
    return { status: "success", message: "Thanks! Your message has been sent. We'll be in touch soon." };
  } catch (err) {
    if (!(err instanceof ContactNotConfiguredError)) {
      console.error("Contact form delivery failed:", err);
    }
    return {
      status: "error",
      message: `Sorry, we couldn't send your message online. Please call ${CONTACT.phoneDashed} or email ${CONTACT.email}.`,
    };
  }
}
