"use client";

import { useState } from "react";
import type { StaffMember } from "@/lib/site";

/** Number of staff cards shown on phones before "Show all". */
const PHONE_PREVIEW = 6;

export default function StaffList({ staff, total }: { staff: StaffMember[]; total: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <ul id="staff-list" className={`staff${expanded ? " expanded" : ""}`}>
        {staff.map((p, i) => (
          <li key={p.email} className={`card card-${p.group}${i >= PHONE_PREVIEW ? " staff-extra" : ""}`}>
            <div className="card-band">
              <strong>{p.name}</strong>
              {p.credentials && <span className="cred">, {p.credentials}</span>}
            </div>
            <div className="card-body">
              <span className="role">{p.role}</span>
              <a href={`mailto:${p.email}`}>{p.email}</a>
            </div>
          </li>
        ))}
      </ul>
      {!expanded && (
        <button
          type="button"
          className="show-all"
          aria-controls="staff-list"
          aria-expanded={expanded}
          onClick={() => setExpanded(true)}
        >
          Show all {total} staff
        </button>
      )}
    </>
  );
}
