# AdminZero Code Task Board

This board tracks the code, website, template and technical setup work needed to turn AdminZero into a working no-call audit funnel.

Items marked **Added by Codex** were not explicitly listed in the project plan, but are recommended for a stronger technical setup.

---

## Now: Website Can Capture Audit Leads

### Homepage Copy And CTA

- [x] Update hero supporting copy to focus on allied health, referral intake, document handling, follow-ups, admin tracking and Microsoft 365.
- [x] Replace all "Book a Free Practice Audit" buttons with "Get a Free Practice Audit".
- [x] Add reassurance below hero CTA: "No sales call required. Written audit summary delivered by email."
- [x] Add problem section: "Manual referral admin slows everything down."
- [x] Add manual admin problem bullets.
- [x] Add "Start with referral intake." section.
- [x] Add before/after workflow section: "From messy intake to clear workflow."
- [x] Add "What AdminZero can automate" card section.
- [x] Add Microsoft 365 trust line.

### Audit Funnel

- [x] Rename/rework the existing form as "Free Practice Admin Audit".
- [x] Add the 12 audit qualification questions from the project plan.
- [x] Replace optional upload field with a sample-context text field because Formspree file uploads are not permitted.
- [x] Add sample-sharing privacy note asking users to remove sensitive client information.
- [x] Add clear post-submit confirmation message.
- [x] Connect existing nav, hero, footer, package and landing page CTAs to the audit form. Blog CTAs will be connected when blog pages exist.
- [x] **Added by Codex:** Create a dedicated thank-you page or trackable success state for form submissions.
- [x] **Added by Codex:** Add hidden form fields for page URL, page title, referrer and UTM attribution.
- [x] **Added by Codex:** Add honeypot spam protection.
- [x] Add basic client-side validation and accessible labels.

### Packages And Trust

- [x] Add four package cards: Free Audit, Quick Win Automation, Referral Intake System, Care Plan.
- [x] Add pricing from the plan: Free, from $950, from $3,500, from $300/month.
- [x] Add "Start small with one workflow. Expand only when it saves real time."
- [x] Add scope exclusions section or link.
- [x] Add FAQ section using the supplied questions and answers.
- [x] Add AI limitation note wherever AI document extraction is mentioned.

---

## Next: Core Pages

### Required Pages

- [x] Create `privacy.html`.
- [x] Create `terms.html`.
- [x] Create `referral-intake-automation.html`.
- [x] Link the referral intake landing page from homepage service sections, package cards and footer.
- [x] Add Free Practice Audit CTA to the bottom of each new page.

### Referral Intake Landing Page

- [x] Add hero section.
- [x] Add "What referral intake automation is" section.
- [x] Add "Why manual intake slows practices down" section.
- [x] Add common problems section.
- [x] Add before/after workflow.
- [x] Add "What AdminZero builds" section.
- [x] Add Microsoft 365 tools used section.
- [x] Add optional AI document prefill section.
- [x] Add packages or starting options.
- [x] Add FAQ.
- [x] Add final Free Practice Audit CTA with "No sales call required."

---

## Analytics And SEO Setup

### Tracking

- [x] Install GA4.
- [x] Install Microsoft Clarity.
- [x] Add Google Search Console verification.
- [x] Track audit CTA clicks.
- [x] Track audit form starts.
- [x] Track audit form submissions.
- [x] Track traffic source and page source for form submissions.

### Search Basics

- [x] **Added by Codex:** Create `sitemap.xml`.
- [x] **Added by Codex:** Create `robots.txt` pointing to the sitemap.
- [x] Update homepage title and meta description.
- [x] Add unique title and meta description to every new page.
- [x] Add canonical URLs to all public pages.
- [x] Add OG title, description and image tags to all public pages.
- [x] Add LocalBusiness or ProfessionalService JSON-LD schema.
- [x] Add FAQ schema where FAQ appears.
- [x] Add service schema on service pages.

---

## Demo And Proof Assets

- [x] Create Demo 1: Referral intake automation.
- [x] Create Demo 2: Email attachment automation.
- [x] Create Demo 3: Missing information workflow.
- [x] Create Demo 4: Admin dashboard.
- [x] Create Demo 5: AI document prefill.
- [x] Add at least two demo examples to the homepage.
- [x] Add at least two demo examples to the referral intake landing page.
- [x] Clearly label fake/demo workflows as examples.
- [x] **Added by Codex:** Store site assets in `/assets/` instead of adding more files to the repo root.
- [x] Optimise demo screenshots and OG images before publishing. No screenshot assets were created; existing OG image is already 1200x630 and 36 KB.

---

## AI Friendliness

- [x] Create `llms.txt` with a concise AI-readable summary of AdminZero, target audience, services, main offer, key pages and contact/audit CTA.
- [x] Create `company-profile.md` or `about-adminzero.md` with a clean Markdown profile covering company summary, services, audience, Microsoft 365 tools, packages, no-call audit process and privacy boundaries.
- [x] Create `about.html` explaining AdminZero Pty Ltd, Melbourne location, allied health focus, Microsoft 365 automation focus and no-call audit process.
- [x] Create `sitemap.html` with human-readable links to Home, Referral Intake Automation, Free Practice Audit, Privacy and Terms.
- [x] Add or strengthen `Organization` schema.
- [x] Add `WebSite` schema.
- [x] Add `WebPage` schema to public pages.
- [x] Add `BreadcrumbList` schema to public pages where useful.
- [x] Add richer `Service` schema for referral intake automation.
- [x] Add `Offer` schema for packages and starting prices.
- [x] Add a short site summary near the homepage footer reinforcing AdminZero's audience, offer and Microsoft 365 positioning.
- [x] Use descriptive internal link text for key pages, especially referral intake automation and the free practice audit.
- [x] Keep AI/privacy boundaries explicit wherever AI is mentioned: AI assists admin review, does not make clinical decisions, and users should not share sensitive client information unless specifically agreed.
- [x] Review `robots.txt` after adding AI-readable files to ensure important public pages remain crawlable.

---

## SEO Content Pages

- [x] Create `stop-managing-referrals-email-spreadsheets.html`.
- [x] Create `microsoft-365-automation-allied-health.html`.
- [x] Create `ai-document-extraction-referral-forms-pdfs.html`.
- [x] Create `admin-tasks-allied-health-practices-can-automate.html`.
- [x] Create `free-practice-admin-audit.html`.
- [x] Add CTA to every SEO page.
- [x] Internally link each SEO page to the referral intake landing page.
- [x] Internally link each SEO page to the audit form or audit page.

---

## Reusable Templates In Repo

### Email And Sales Templates

- [ ] Create `/templates/audit-response-template.md`.
- [ ] Create `/templates/audit-follow-up-template.md`.
- [ ] Create `/templates/quote-template.md`.
- [ ] Create `/templates/kickoff-email-template.md`.
- [ ] Create `/templates/handover-email-template.md`.
- [ ] Create `/templates/missing-information-email-template.md`.
- [ ] Create `/templates/referral-confirmation-email-template.md`.

### Delivery Templates

- [ ] Create `/delivery-templates/referral-tracker-template.csv`.
- [ ] Create `/delivery-templates/intake-form-template.md`.
- [ ] Create `/delivery-templates/sharepoint-folder-structure.md`.
- [ ] Create `/delivery-templates/power-automate-naming-convention.md`.
- [ ] Create `/delivery-templates/dashboard-layout-template.md`.
- [ ] Create `/delivery-templates/implementation-checklist.md`.
- [ ] Create `/delivery-templates/ai-limitations-note.md`.

---

## Later Build Items

- [ ] Build `admin-waste-calculator.html`.
- [ ] Add calculator inputs for referrals, minutes, admin cost, missing info time, no-shows and spreadsheet updates.
- [ ] Add calculator outputs for hours lost, monthly admin cost and suggested automation opportunities.
- [ ] Add Free Practice Audit CTA after calculator results.
- [ ] Create `allied-health-practice-automation-blueprint.html`.
- [ ] Add downloadable Automation Blueprint PDF later.
- [ ] Add example case study section after demos or client work exists.

---

## Technical Maintenance

- [ ] Remove unused CSS variables if still unused.
- [ ] Refactor awkward `col-block` spacing.
- [ ] **Added by Codex:** Consider moving shared CSS into `styles.css` once multiple pages exist.
- [ ] **Added by Codex:** Add favicon and app icons if missing.
- [ ] **Added by Codex:** Add `404.html`.
- [ ] Validate HTML after major page changes.
- [ ] Check mobile layout after each major section addition.
- [ ] Run accessibility checks for forms, headings, contrast, focus states and keyboard navigation.
- [ ] Verify GitHub Pages deployment after each release.
- [ ] Verify the live form still submits after form changes.

---

## Recommended Build Order

1. Homepage copy, CTA and audit form updates.
2. Audit funnel confirmation, privacy note and source tracking.
3. Packages, FAQ and before/after sections.
4. Privacy and Terms pages.
5. Referral intake landing page.
6. Analytics, Clarity, Search Console, sitemap and event tracking.
7. Demo assets and proof sections.
8. SEO pages.
9. Delivery and email template files.
10. Admin Waste Calculator and Automation Blueprint later.
