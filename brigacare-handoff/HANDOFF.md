# BrigaCare Website Redesign: Build Handoff

You are implementing a 5-page marketing site plus forms for BrigaCare (Brigacare Behavior Professional Services Group, Sherwood, OR). The design is final. Build it in the project's existing stack; if there is none, use semantic HTML + CSS (no framework required).

## What's in this package

- `HANDOFF.md`: this spec (source of truth for behavior and content)
- `design/*.dc.html`: the approved design for each page as markup. Use these for exact layout, spacing, colors and copy. They are design-tool files: ignore `<x-dc>`, `<helmet>`, `support.js` and the `<script type="text/x-dc">` block. `{{year}}` means the current year.
- `assets/`: images. In the design files, map the `/_blob/...` URLs like this:
  - `/_blob/763752d33b6f0afa741a15de9850ad5a` = `assets/logo.png` (header, light background)
  - `/_blob/fe3f40519533c07014e3bce0c46916cd` = `assets/logo-dark.png` (footer, dark background)
  - `/_blob/54e008665793708450c8af3b942aa622` = `assets/hero.jpg`
  - `/_blob/dddf2ae54c1d773d58d5e109d7bf11ab` = `assets/session.jpg`
  - These were cropped from screenshots and are low resolution. Use them as placeholders; final originals will be supplied.

## Pages

| Page | Design file | Mobile reference |
|---|---|---|
| Home | `design/Main.dc.html` | `design/Mobile-Home.dc.html`, `design/Mobile-Menu.dc.html` |
| ODDS Client Referral Form | `design/ODDS-Referral.dc.html` | `design/Mobile-ODDS.dc.html` |
| SC/PA Case Manager picker (modal on ODDS form) | `design/CaseMgr-Picker.dc.html` | full-screen sheet on mobile |
| APD Client Referral Form | `design/APD-Referral.dc.html` | follow Mobile-ODDS pattern |
| Work with BrigaCare (employment application) | `design/Work.dc.html` | follow Mobile-ODDS pattern |
| Contact | `design/Contact.dc.html` | follow Mobile-ODDS pattern |

Every page shares: top bar ("Brigacare Behavior Professional Services Group"), header (logo + nav), footer (logo, Quick links, Contact info, copyright). Make these shared components.

Nav order: Home, ODDS Client Referral Form, APD Client Referral Form, Work with BrigaCare, Contact (Contact is a green pill button). The current page's nav and footer link is highlighted (nav `#0B7A37`, footer `#B5E07A`) and gets `aria-current="page"`.

## Design tokens

Colors:
- `--green-900` `#0A3823`: deep green (top bar, How It Works band, footer, headings)
- `--green-600` `#0B7A37`: primary (buttons, links, focus border)
- `--green-500` `#4E9A1E`: accent word in hero tagline
- `--lime-300` `#B5E07A`: accent on dark backgrounds only
- `--green-50` `#E6F2DA`: tints (avatars, section numbers)
- `--cream` `#FBFAF3`: page background
- `--sand` `#F4EFDF`: alt section background; `#F0E9D2` secondary tint
- `--line` `#ECE6D3`: card borders; input border `#D9D3C0`; input fill `#FDFCF8`
- `--ink` `#17251C`: body text; `--ink-2` `#43524A`: secondary; `--muted` `#5A6960`: help text; placeholder `#7A877F`
- `--required` `#B03A2E`

Type (Google Fonts):
- Headings: Fraunces 700. Page H1 56px desktop / 34px mobile (homepage brand H1 76px / 48px); section H2 46px / 32px; form section titles 24px / 19px
- Body/UI: Nunito Sans 400/600/700/800. Body 16 to 19px, labels 15px 800, help 13.5px

Shape: cards radius 18 to 22px, inputs 12px, buttons fully rounded (999px). Inputs 52px tall. Touch targets at least 44px.

## Responsive rules

Breakpoints: 900px (tablet) and 700px (phone). Content max-width 1200px with 32px side padding (16px on phones).

- Under 900px: header nav collapses into a hamburger button (44px, dark green square) that opens a full-screen dark green menu (see Mobile-Menu): large Fraunces links with dividers, Contact and Call buttons pinned at the bottom, close (X) top right. Lock body scroll while open; close on Esc and on link click.
- Hero, How It Works, the ages section and the footer become a single column. Hero image goes below the buttons; buttons go full width.
- Staff: single column of compact cards. On phones show Cecilia's card plus the first 6, then a "Show all 26 staff" button that expands the rest.
- Forms: all multi-column rows (`.g2`, `.g3`, `.g2n`, `.g3c`) stack to one column under 700px. Submit button goes full width.
- Case Manager picker: centered modal on desktop, full-screen sheet on phones.

## Components and behavior

- Form sections (ODDS form): collapsible cards with a numbered circle, title and chevron. All open by default. Use `<details>`/`<summary>` or equivalent with proper keyboard support.
- Required marker: small uppercase "• REQUIRED" text in `#B03A2E` after the label. No pill background.
- Paired fields: in two-column rows, labels may wrap to different heights; inputs must still line up (the design uses CSS subgrid: label row, input row, help row).
- Selects: custom-styled (no native chrome), chevron on the right, same look as text inputs. Focus = green border + soft green ring, never the browser's black outline.
- Yes/No toggles: switch style, keyboard accessible (real checkbox underneath).
- Multi-select (Jobs Requested): checkbox chips, not a select.
- File upload: dashed drop zone, "Add attachment or drag files here", supports multiple files.
- Country: searchable input with full country list, United States first.

## Forms: fields and options

### ODDS Client Referral Form (badge: "HIPAA Secure")
1. Client Demographic Data
   - Client Full Name* (First, Last). Help: "Client Name - please use correct entry field!"
   - Client DOB* (date). Help: "DOB"
   - DDS or APD?*: DDS, APD
   - PRIME* (text)
   - Gender Pref*: Female, Male, Non-binary, Prefer not to answer
   - Client Address*: Street, Suite / Apt / Bldg (optional), City, State / Region, Postal Code, Country. Help: "Please use each entry box for the part of the address identified!"
   - Client Personal Email. Help: "Client personal email - NOT COMMON!"
   - Client Personal Phone. Help: "Client personal phone - NOT COMMON!"
2. Guardian Information: Has Guardian Yes / No? (toggle)
3. Residential Information: Residential Program Yes / No? (toggle)
4. Job Information
   - Preferred Behavior Professional (text)
   - ISPP End Date from ISP Document submitted* (date). Help: "Enter the ISP End Date *from the ISP document being submitted*. This can be more than 1 year from now."
   - Link: SC/PA, Case Mgr*: opens the picker modal (database lookup, see below). Help: "SELECT --001 I'm Not Listed()-- if you are not in our database"
   - Jobs Requested* (multi): FBA, PBSP, TESP, Maintenance, APD Client
   - Uploaded Docs and Clinical Docs (attachments)
   - Bill to (Bullpen)*: DDS Medicaid - eXPRS, APD Medicaid, Residence/Supported Living, Other - identify in notes. Help: "Select who we bill for services. Supported living is NOT eXPRS billing!"
   - Any Additional Information (textarea)
- Submit

Note: in the original form, the Guardian and Residential toggles may reveal additional fields when set to Yes. Confirm those fields with the client before building; the design shows only the toggles.

### SC/PA Case Manager picker (database-connected)
- Search across name, email, phone. Columns: SC full name (with program tag, e.g. DDS), SC email, SC phone. Missing values show "Not provided".
- Single select (radio rows); selected row highlighted green. Footer shows "1 selected: <name>", Cancel and "Link record" (disabled until a row is selected).
- "001 I'm not listed (DDS)" is always the first record.
- Data comes from the client's database. The sample rows in the design are real records shown for layout only; do not hard-code them.

### APD Client Referral Form (subtitle: "Oregon APD Submission Form")
- Client Full Name* (First, Last)
- Client DOB* (date)
- PRIME/Medicaid number* (text)
- ISP/CF/SA/Authorization Documents* (attachments). Help: "Upload OR313 and CAPS here."
- Any Additional Information (textarea)
- Submit

### Work with BrigaCare: Employment Application (Behavior Professional)
Intro: "Use the form below to apply to become a member of our team. We hire registered Oregon behavior professionals. Start by completing our form and we will get back in touch with you."
- First Name*, Last Name*
- Date of Birth*
- Address*: Street, Suite / Apt / Bldg (optional), City, State / Region, Postal Code, Country
- Personal Email*, Phone*
- Resume and/or CV* (attachments)
- Submit

### Contact
Intro: "For any questions about our services please reach out using the form below."
- Let's Chat cards: Phone 503-840-0387 (tel: link), Email cecilia.t@brigacare.com (mailto: link), Social Media: LinkedIn (URL TBD)
- Form: First Name, Last Name, Email*, Message, Send

## Site content

- Phone 503.840.0387 / 503-840-0387; Fax 503-925-3023
- Address: 20577 SW Duckridge Pl, Sherwood, OR 97140
- Copyright: "© Copyright <current year> © Brigacare, Inc."
- Staff (26): see `design/Main.dc.html` for the full list, order, credentials, roles and emails. Cecilia Tilley (CEO) is the featured card; leadership (green avatar), behavior professionals and instructors (sand avatar), billing and care coordination (blue avatar).

## Accessibility

- Real `<label>`s for every input; fieldsets with legends for grouped inputs (name, address, jobs).
- Visible green focus ring on all interactive elements; never remove focus without a replacement.
- Text contrast at least 4.5:1 (the token pairs above pass).
- Icon-only buttons have `aria-label`; decorative SVGs `aria-hidden="true"`.
- Modal: focus trap, Esc closes, focus returns to the trigger.

## Open items (do not invent; leave clearly marked TODOs)

- Form submission targets and HIPAA-compliant handling for the referral forms
- Case Manager database endpoint and auth
- Conditional fields behind the Guardian and Residential toggles
- LinkedIn URL
- High-resolution originals of the logo and photos
