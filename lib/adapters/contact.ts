// Contact messages adapter. Pages and actions call this; it hides where messages actually go.

export type ContactMessage = {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
};

export class ContactNotConfiguredError extends Error {
  constructor() {
    super("Contact form delivery is not configured.");
    this.name = "ContactNotConfiguredError";
  }
}

/**
 * Delivers a contact message.
 *
 * TODO: Delivery target not decided yet (the Wix contact form's destination is being checked).
 * Implement here once known, e.g. a SmartSuite record (via lib/smartsuite/client.ts) or an email
 * service. Keep credentials server-side in .env.local.
 */
export async function sendContactMessage(msg: ContactMessage): Promise<void> {
  void msg;
  throw new ContactNotConfiguredError();
}
