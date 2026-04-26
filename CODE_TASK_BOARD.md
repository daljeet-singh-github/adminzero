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

- [ ] Rename/rework the existing form as "Free Practice Admin Audit".
- [ ] Add the 12 audit qualification questions from the project plan.
- [ ] Add optional upload field for sample forms, screenshots or process documents.
- [ ] Add upload privacy note asking users to remove sensitive client information.
- [ ] Add clear post-submit confirmation message.
- [ ] Connect nav, hero, package, footer and page CTAs to the audit form.
- [ ] **Added by Codex:** Create a dedicated thank-you page or trackable success state for form submissions.
- [ ] **Added by Codex:** Add hidden form fields for page URL, page title, referrer and UTM attribution.
- [ ] **Added by Codex:** Add honeypot spam protection.
- [ ] Add basic client-side validation and accessible labels.

### Packages And Trust

- [ ] Add four package cards: Free Audit, Quick Win Automation, Referral Intake System, Care Plan.
- [ ] Add pricing from the plan: Free, from $950, from $3,500, from $300/month.
- [ ] Add "Start small with one workflow. Expand only when it saves real time."
- [ ] Add scope exclusions section or link.
- [ ] Add FAQ section using the supplied questions and answers.
- [ ] Add AI limitation note wherever AI document extraction is mentioned.

---

## Next: Core Pages

### Required Pages

- [ ] Create `privacy.html`.
- [ ] Create `terms.html`.
- [ ] Create `referral-intake-automation.html`.
- [ ] Link the referral intake landing page from homepage service sections, package cards and footer.
- [ ] Add Free Practice Audit CTA to the bottom of each new page.

### Referral Intake Landing Page

- [ ] Add hero section.
- [ ] Add "What referral intake automation is" section.
- [ ] Add "Why manual intake slows practices down" section.
- [ ] Add common problems section.
- [ ] Add before/after workflow.
- [ ] Add "What AdminZero builds" section.
- [ ] Add Microsoft 365 tools used section.
- [ ] Add optional AI document prefill section.
- [ ] Add packages or starting options.
- [ ] Add FAQ.
- [ ] Add final Free Practice Audit CTA with "No sales call required."

---

## Analytics And SEO Setup

### Tracking

- [ ] Install GA4.
- [ ] Install Microsoft Clarity.
- [ ] Add Google Search Console verification.
- [ ] Track audit CTA clicks.
- [ ] Track audit form starts.
- [ ] Track audit form submissions.
- [ ] Track traffic source and page source for form submissions.

### Search Basics

- [ ] **Added by Codex:** Create `sitemap.xml`.
- [ ] **Added by Codex:** Create `robots.txt` pointing to the sitemap.
- [ ] Update homepage title and meta description.
- [ ] Add unique title and meta description to every new page.
- [ ] Add canonical URLs to all public pages.
- [ ] Add OG title, description and image tags to all public pages.
- [ ] Add LocalBusiness or ProfessionalService JSON-LD schema.
- [ ] Add FAQ schema where FAQ appears.
- [ ] Add service schema on service pages.

---

## Demo And Proof Assets

- [ ] Create Demo 1: Referral intake automation.
- [ ] Create Demo 2: Email attachment automation.
- [ ] Create Demo 3: Missing information workflow.
- [ ] Create Demo 4: Admin dashboard.
- [ ] Create Demo 5: AI document prefill.
- [ ] Add at least two demo examples to the homepage.
- [ ] Add at least two demo examples to the referral intake landing page.
- [ ] Clearly label fake/demo workflows as examples.
- [ ] **Added by Codex:** Store site assets in `/assets/` instead of adding more files to the repo root.
- [ ] Optimise demo screenshots and OG images before publishing.

---

## SEO Content Pages

- [ ] Create `stop-managing-referrals-email-spreadsheets.html`.
- [ ] Create `microsoft-365-automation-allied-health.html`.
- [ ] Create `ai-document-extraction-referral-forms-pdfs.html`.
- [ ] Create `admin-tasks-allied-health-practices-can-automate.html`.
- [ ] Create `free-practice-admin-audit.html`.
- [ ] Add CTA to every SEO page.
- [ ] Internally link each SEO page to the referral intake landing page.
- [ ] Internally link each SEO page to the audit form or audit page.

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
