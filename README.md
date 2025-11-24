<div style="margin-bottom: 1rem; background-color: #000835; display: flex; justify-content: center; align-items: center;">
  <!-- TODO: make more responsive -->
  <img alt="Twinkle logo" src="assets/twinkle_header-logo_dark.png" style="width: 24rem; height: auto; padding: 3.2rem 6.4rem;" />
</div>

# Twinkle.css
### A soft fork of Tailwind… but with good table manners.

Twinkle is an aggressively polite CSS utility library designed for normal DOM and Web Components.
It works everywhere. It doesn’t judge you. It doesn’t ask questions. It just styles things.

> **This is not a reinvention. This is a remix.**
> Twinkle is literally Tailwind’s generated output — reshaped, shadow-domified, and curated into a fully static CSS file.
> No compiling. No runtime. No steps. Just drop it in and sparkle.

So — If you're looking for the part where I pretend Twinkle is inventing some groundbreaking new frontier in styling… let me know what you find 😉

---

## Why Twinkle?

Because Web Components deserve a utility library that doesn't suck too — one that:

- **Works in both light DOM and Shadow DOM**
  Every utility is automatically mirrored as `:host(.class)` so components can style themselves *and* their internals without shenanigans.

- **Is fully static**
  Everything is prebuilt. No PostCSS. No CLI. Just the CSS file you drop into `<head>`.

- **Feels familiar**
  If you know Tailwind, congratulations — you already know ~95% of Twinkle.
  The remaining 5% is where the magic (and the host selector) lives.

- **Plays well with Glint**
  Twinkle is the unofficial style sidekick for Glint components.
  They share a vibe: small, fast, clean, slightly opinionated, pleasantly ridiculous.

---

## Core Philosophy

Twinkle exists because sometimes you want:

- Tailwind’s utility density
- without Tailwind’s build pipeline
- inside custom elements
- without punching holes through the Shadow DOM
- with a sprinkle of ✨ whimsy ✨

Or more simply:

**Twinkle is Tailwind, pre-hostified, pre-baked, and ready to drop into any web component.**

If Tailwind is a framework, Twinkle is a *frozen dinner* — but like… a really good one. The kind with the gold foil.

---

## Yes, this is a soft fork (on purpose)

Let’s be intellectually honest:

Twinkle **is Tailwind’s CSS output**, post-processed to:

1. Add `:host()` variants automatically
2. Conform to a stable, minimal, static dist
3. Support component-level styling without bleeding across boundaries
4. Provide a predictable foundation for future Twinkle-native utilities (like container query helpers, sizing heuristics, component patterns, etc.)

I am not pretending this is an “original utility framework.”
It’s Tailwind with better bedside manners.

You’re welcome.

---

## Using Twinkle

Drop the file into your document:

```html
<link rel="stylesheet" href="dist/twinkle.css">
```
Inside a Web Component, you can write:

```html
<div class="p-4 text-red-500 bg-neutral-900 rounded-lg">
  Hello world, but sparkly.
</div>
```
<!--
Or style the host itself:

```css
:host(.card) {
  @apply p-6 bg-white rounded-lg shadow-md;
}
```
 -->

Twinkle makes little distinction — it mirrors the important utility classes for you.

---

## Shadow DOM Support
Twinkle is preprocessed so every utility selector is duplicated as:

```css
.utility-class,
:host(.utility-class) { … }
```

This means:

- Top-level components can style themselves
- Internal markup can use utilities as usual
- No leaking out, no global CSS collisions
- No giant “:host { all: unset }” hacks

This is the magic that enables zero-config utility styling inside any Glint or vanilla Web Component.

---

## Roadmap
### v0.1 — “Twinkle Classic”
- Pure static CSS (Tailwind’s output + hostify pass)
- Color utilities
- Typography
- Spacing, sizing, flexbox, grid
- Responsive variants (sm/md/lg)
- A logo that looks suspiciously more professional than the project deserves

### v0.2 — “The YAML Awakens”
- Begin capturing utilities in a declarative YAML spec
- Provide a build script to regenerate Twinkle from YAML
- Use Tailwind’s defaults selectively to preserve compatibility

### v0.3 — Container Query Helpers
- is-sm, is-md, is-lg based on container width
- Optional height variants
- Possibly “graduated bands” (like 15% increments) if sanity doesn’t collapse first

### v1.0 — Twinkle Prime™
- Hardened YAML spec
- Fully custom utility sets
- Patterns + primitives for Web Component ecosystems
- Per-component bundled “adopted stylesheets” helpers for Glint
- Less hair, more sparkle

---

## Contributing

If you want to help:
- Bring jokes
- Bring unreasonable opinions about CSS specificity
- Bring your own glitter
- PRs welcome, especially if they prevent Future Todd from crying

---

## License
Apache 2.0

Because we are polite. And we show our work.
