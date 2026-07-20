# Service detail design QA

- Source visual truth: `C:\Users\chuco\AppData\Local\Temp\codex-clipboard-c7f44f4c-b512-4c8b-884a-78a03a5e59ee.png`
- Implementation screenshot: `C:\Users\chuco\AppData\Local\Temp\better-care-physiotherapy-reference-layout.png`
- Combined comparison: `C:\Users\chuco\AppData\Local\Temp\better-care-design-comparison.png`
- Viewport: 1512 × 1045 desktop; responsive validation at 390 × 844
- State: Physiotherapy service detail, menus closed, photo slots intentionally shown as placeholders

## Full-view comparison evidence

The final side-by-side comparison confirms the same content order and overall proportions as the reference: compact photo hero with overlaid title, two-column introduction, pale two-column support band, and four-step process row. Page margins, rounded corners, navy/teal palette and section density align with the reference. Existing site header branding is intentionally preserved.

## Focused comparison evidence

No additional crop was required because the 3024 × 1045 combined image keeps the hero typography, introduction copy, list rows, icons and process row legible. Photo subject and crop cannot be compared yet because the user explicitly requested placeholders at this stage; both slots retain the correct reference aspect and placement.

## Required fidelity surfaces

- Fonts and typography: Geist retains the site's existing typography while matching the reference hierarchy, compact body copy and bold service title. Long service titles fit within both tested viewports.
- Spacing and layout rhythm: 18px desktop page margins, compact 325px hero, two-column intro, pale list band and four equal process steps reproduce the source rhythm.
- Colors and visual tokens: deep navy, muted teal, pale blue and green icon accents match the source direction with accessible contrast.
- Image quality and asset fidelity: intentionally deferred. Hero and supporting slots are labelled placeholders and carry their service-specific `data-photo-prompt` values for later replacement.
- Copy and content: the template uses each service's own title, summary, introduction, inclusion list, audience list and approach content rather than duplicating Physiotherapy copy.
- Responsiveness and accessibility: 390px layout has no horizontal overflow; semantic headings, image roles and labels are present; the longest service title remains inside the hero.

## Comparison history

1. P2: the first implementation used a taller hero and pushed the four-step process below the reference viewport. Fixed by reducing the hero and introduction typography/spacing while preserving readability.
2. P1: the global floating enquiry prompt obscured the support list and process row on service details. Fixed by hiding that prompt only on `/services/[slug]` routes.
3. P2: Physiotherapy split mid-word on mobile. Fixed with a responsive title scale that also accommodates the longest service name.
4. Post-fix evidence: final desktop comparison shows all four reference sections in the intended order and density; mobile and longest-title checks show no overflow.

## Findings

No actionable P0, P1 or P2 differences remain. Expected deviations are the user-requested photo placeholders, service-specific list lengths, and preservation of the production header lockup.

## Follow-up polish

- P3: replace the two placeholders on each service with final photography using the saved service-specific prompts.

final result: passed
