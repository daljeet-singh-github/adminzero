# AdminZero Operations Guide

This guide explains how to use the website funnel, templates and delivery assets now in the repo.

## 1. Website Funnel

The main funnel is:

```text
Visitor -> Free Practice Admin Audit form -> confirmation -> written audit reply -> quick win offer -> onboarding -> fixed quote -> delivery
```

Key pages:

- Homepage: `../index.html`
- Free Practice Audit explainer: `../free-practice-admin-audit.html`
- Referral intake landing page: `../referral-intake-automation.html`
- Admin Waste Calculator: `../admin-waste-calculator.html`
- Automation Blueprint: `../allied-health-practice-automation-blueprint.html`
- Example case studies: `../example-case-studies.html`

The main CTA remains:

```text
Get a Free Practice Audit
```

## 2. When A Form Submission Arrives

1. Read the submission and identify the main bottleneck.
2. Open `../templates/audit-response-template.md`.
3. Fill in:
   - Current admin pain point
   - What appears to be slowing the team down
   - Quick win
   - Medium improvement
   - Larger workflow opportunity
   - Suggested starting point
   - Suggested package
4. Send the email with the subject:

```text
Your AdminZero Practice Audit
```

If they do not respond after 5-7 days, use:

```text
../templates/audit-follow-up-template.md
```

## 3. If They Want To Proceed

Use this sequence:

1. Send the next-step questionnaire or gather missing details by email.
2. Use `../templates/quote-template.md` to prepare the fixed quote.
3. Once approved, send `../templates/kickoff-email-template.md`.
4. Track delivery using `../delivery-templates/implementation-checklist.md`.
5. At completion, send `../templates/handover-email-template.md`.

## 4. Delivery Assets

Use these as starting points for client work:

- `../delivery-templates/referral-tracker-template.csv`
- `../delivery-templates/intake-form-template.md`
- `../delivery-templates/sharepoint-folder-structure.md`
- `../delivery-templates/power-automate-naming-convention.md`
- `../delivery-templates/dashboard-layout-template.md`
- `../delivery-templates/ai-limitations-note.md`

These are not client-specific final documents. Treat them as reusable starting templates.

## 5. Calculator

The calculator is at:

```text
../admin-waste-calculator.html
```

It estimates:

- hours lost per week
- monthly admin cost
- suggested automation opportunities

Use it in LinkedIn posts, SEO pages and discovery conversations to make the cost of manual admin easier to understand.

## 6. Blueprint

The live blueprint page is:

```text
../allied-health-practice-automation-blueprint.html
```

The downloadable first-version PDF is:

```text
../assets/allied-health-practice-automation-blueprint.pdf
```

This can later be replaced with a designed PDF using the same filename.

## 7. Case Studies

The example case-study page is:

```text
../example-case-studies.html
```

Current examples are clearly labelled as fake workflow examples. When real projects are completed, use this structure:

1. Practice type
2. Problem
3. Manual process before
4. Automation built
5. Result
6. Tools used
7. Next improvement

Do not include client names unless you have permission.

## 8. Privacy And AI Boundaries

Keep these rules consistent:

- Do not ask users to submit actual patient or client data through the public form.
- Ask users to remove or hide sensitive client information from examples.
- Treat AI as an admin assistant, not a decision-maker.
- AI-assisted extraction should be reviewed before use.

## 9. Release Checklist

Before pushing future changes:

1. Run `git diff --check`.
2. Check the homepage on desktop and mobile.
3. Test the Free Practice Audit form.
4. Check that CTAs point to `index.html#audit` or the correct audit page.
5. Confirm `sitemap.xml` includes any new public page.
6. Push only when the working tree contains intended changes.
