# Design QA

## Evidence

- Visual source of truth: `C:\Users\chuco\.codex\generated_images\019f6e21-d45b-7c72-af9d-e85d6b62fa2d\exec-04ad7b71-f9a4-4293-89e4-d800908ab2e0.png`
- Side-by-side comparison: `design-qa-assets/comparison.png`
- Desktop viewport/state: `1440 × 1000`, homepage loaded after entry motion; screenshot `design-qa-assets/home-desktop.png`
- Mobile viewport/state: `390 × 844`, homepage loaded after entry motion; screenshot `design-qa-assets/home-mobile.png`
- Multi-section evidence: `design-qa-assets/home-sections.png`
- Focused region: hero, primary actions and provider trust rail are visible together in `design-qa-assets/home-desktop.png`.

## Visual findings

- Preserved the reference's photo-led hero, left-aligned message, warm home-care setting, compact navigation and immediate conversion actions.
- Applied the user's newer direction with a modern sans-serif display face, stronger editorial scale, restrained blue/green/yellow accents, white action buttons and a full-bleed cinematic crop.
- The generated hero image supports the service context and maintains a clear text-safe area at both desktop and mobile breakpoints.
- Provider statements are visible without using unqualified clinical claims: NDIS registration is stated directly, while AHPRA is scoped to practitioners and applicable professions.
- Card elevation, reveal motion and ambient media movement are intentionally subtle and respect reduced-motion settings.
- Navigation, mobile menu, enquiry route and film-preview dialog were exercised. Browser console returned no errors.

## Comparison history

- P1: the first preview used the runtime image optimiser and showed a development overlay because the Cloudflare asset binding was unavailable. Fixed by serving the local assets directly and setting images to unoptimised for this runtime.
- P2: the initial desktop headline wrapped to three lines. Fixed the hero measure and type scaling so it resolves to two clear lines at 1440 px while remaining readable on mobile.
- P3: the implementation logo is intentionally more compact than the original concept so the navigation remains light over the full-bleed hero.
- Post-fix evidence: `design-qa-assets/comparison.png`, `design-qa-assets/home-desktop.png`, and `design-qa-assets/home-mobile.png`.

## Final result

passed
