"use client";

import { startTransition, useActionState } from "react";
import { submitContact, type ContactState } from "@/app/(site)/contact/actions";

const initialState: ContactState = { status: "idle", message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContact, initialState);
  const emailError = state.fieldErrors?.email;

  if (state.status === "success") {
    return (
      <div className="contact-form" role="status">
        <p className="form-note form-note-success">{state.message}</p>
      </div>
    );
  }

  return (
    // Submit via a transition instead of `action` so React doesn't reset the fields when sending fails.
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        startTransition(() => formAction(data));
      }}
    >
      <div className="g3c">
        <label className="fld">
          <span className="lbl">First Name</span>
          <input className="in" type="text" name="firstName" autoComplete="given-name" maxLength={100} />
        </label>
        <label className="fld">
          <span className="lbl">Last Name</span>
          <input className="in" type="text" name="lastName" autoComplete="family-name" maxLength={100} />
        </label>
        <label className="fld">
          <span className="lbl">
            Email <span className="req">Required</span>
          </span>
          <input
            className="in"
            type="email"
            name="email"
            required
            autoComplete="email"
            maxLength={254}
            aria-invalid={emailError ? true : undefined}
            aria-describedby={emailError ? "email-error" : undefined}
          />
          {emailError && (
            <span id="email-error" className="field-error">
              {emailError}
            </span>
          )}
        </label>
      </div>
      <label className="fld">
        <span className="lbl">Message</span>
        <textarea className="in" name="message" rows={5} maxLength={5000} />
      </label>

      {/* Honeypot for bots; hidden from people and assistive tech. */}
      <div className="hp" aria-hidden="true">
        <label>
          Company
          <input type="text" name="company" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      {state.status === "error" && (
        <p className="form-note form-note-error" role="alert">
          {state.message}
        </p>
      )}

      <div className="form-actions">
        <button type="submit" className="btn btn-primary btn-send" disabled={pending}>
          {pending ? "Sending…" : "Send"}
        </button>
      </div>
    </form>
  );
}
