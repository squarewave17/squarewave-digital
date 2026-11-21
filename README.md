# Squarewave Digital, the site

The website for [Squarewave Digital](https://squarewavedigital.co.uk), a UK web studio run by Paul Ryder. Nuxt 4 and Vue 3, no UI framework, no theme. Every route is prerendered to static HTML at build time; there is no server at runtime.

It is here to be read. If you run an agency and want to see what my code looks like before booking a pilot day, start with `app/layouts/default.vue` (the menu mechanics) and `app/components/Doodle3D.vue` (the paper cut-out doodles), then `app/data/` for how the copy is kept out of the templates.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run generate   # static output in .output/public
npm run preview    # serve the generated output
```

## How it is put together

**Design tokens.** `app/assets/css/tokens.css` is the whole design system: paper, ink, slate, one highlighter colour, a type scale, an 8px space scale, motion curves. Components use the tokens and nothing else, so the look can be changed in one file.

**The menu.** The burger does what the studio's original site did: the whole page shrinks to a card and slides left, revealing a slate panel underneath. While open, the page card is `position: fixed` and its inner content is offset by the saved scroll position, so nothing visibly jumps; on close it waits for the transform to finish, un-fixes, and restores the scroll. Escape, the close disc, the scrim and any navigation close it, and the page is `inert` while it is open. Tuning knobs are `--menu-w`, `--page-scale` and `--page-shift` in the tokens.

**The doodles.** `<Doodle3D src="…" />` renders an ink illustration as a layered paper cut-out in a shallow 3D scene: a grey blob and a highlighter blob behind, the ink in front, tilting toward the pointer and leaning gently with scroll. Pointer and scroll work are throttled with `requestAnimationFrame` and only attached while the doodle is on screen. `prefers-reduced-motion` turns the motion off and leaves the layers.

**The hero figure.** The animated lightbulb clip has a white background. It is dropped onto the paper with `mix-blend-mode: multiply` and faded with a filter rather than opacity, because opacity would break the blend and show the clip's white box.

**Copy as data.** Service and agency pages are data in `app/data/*.ts`, rendered by one `ContentPage` component. `RichText.vue` turns `[label](/path)` into links and `[PLACEHOLDER]` tokens into a visible highlight, so an unfilled fact is hard to miss and no HTML is ever injected from a string. Studio facts and rates live in `app/data/nav.ts` and every page reads from there.

**Forms.** Two forms post JSON to a Formspree endpoint through `app/composables/useFormSubmit.ts`, with native validation reported on submit, a honeypot, a subject line and reply-to. If the endpoint is ever emptied, the composable falls back to opening the visitor's email app with the details filled in, so an enquiry is never silently dropped.

## Decisions worth a sentence

- Static output, because a marketing site with two forms does not need a server, and a prerendered page is the fastest thing a browser can receive.
- One typeface, Nunito, self-hosted through Fontsource. No third-party font requests.
- No analytics and no cookies at launch, so no banner.
- Motion is a layer, not a dependency: everything reads correctly with it switched off.
- Accessibility basics done by hand: a skip link, visible focus with the highlighter colour, labelled controls, `inert` on the hidden page, honest alt text.

## Where things live

```
app/
  assets/css/
    tokens.css       colour, type, space, motion tokens (the design system)
    base.css         reset, type, links, focus
    components.css   layout primitives: .wrap, .section, .btn, .grid-*, .kv, .steps, .panel
    forms.css        inputs, choices, honeypot, confirmation state
  components/
    SiteHeader.vue   logo, the primary action, burger
    SiteMenu.vue     the slate pop-out panel
    SiteFooter.vue
    Doodle3D.vue     a doodle as a layered paper cut-out that tilts and drifts
    HeroLightbulb.vue the animated lightbulb clip (multiply-blended onto the paper)
    PageIntro.vue    top of every inner page
    CtaBand.vue      dark call-to-action band
    ContentPage.vue  renders a data-driven service or agency page
    LegalPage.vue    terms, privacy, cookies layout
    RichText.vue     renders [label](/path) links and [PLACEHOLDER] tokens from data strings
  composables/
    useMenu.ts       global open/closed state for the menu
    useFormSubmit.ts JSON post to the form endpoint, with the email-app fallback
  data/
    nav.ts           navigation, studio facts, rates, form endpoints
    services.ts      copy for the seven business service pages
    agencies.ts      copy for the three agency offers
    types.ts
  layouts/default.vue   the page card that shrinks when the menu opens
  pages/               one file per route; services/[slug] and agencies/[slug] read from data/
public/
  img/doodles/       the ink illustrations and the four with colour underlays
  img/tools/         tool logos for the home page strip
  video/lightbulb.mp4
```

## Copy and assets

The code is here to be read. The copy, the logo, the illustrations and the lightbulb clip belong to Squarewave Digital and are not licensed for reuse.
