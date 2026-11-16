// Minimal server-side client for the Resend email API (https://resend.com/docs/api-reference).
// Server only: reads RESEND_API_KEY from the environment and must never be imported by client code.
import "server-only";

const RESEND_URL = "https://api.resend.com/emails";

export type ResendEmail = {
  from: string;
  to: string[];
  subject: string;
  text: string;
  replyTo?: string;
};

export class ResendError extends Error {
  constructor(
    message: string,
    readonly status?: number,
  ) {
    super(message);
    this.name = "ResendError";
  }
}

/** Sends one email. Returns the Resend message id. */
export async function sendEmail(email: ResendEmail): Promise<string> {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) throw new ResendError("RESEND_API_KEY is not set");

  let res: Response;
  try {
    res = await fetch(RESEND_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: email.from,
        to: email.to,
        subject: email.subject,
        text: email.text,
        ...(email.replyTo ? { reply_to: email.replyTo } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });
  } catch (err) {
    throw new ResendError(`Could not reach Resend: ${err instanceof Error ? err.message : String(err)}`);
  }

  const body = (await res.json().catch(() => null)) as { id?: string; message?: string } | null;
  if (!res.ok) {
    throw new ResendError(`Resend rejected the email (${res.status}): ${body?.message ?? res.statusText}`, res.status);
  }
  return body?.id ?? "";
}
