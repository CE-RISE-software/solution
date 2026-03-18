---
layout: home

hero:
  name: CE-RISE Solution
  text: Digital passport documentation front end
  tagline: Public-facing documentation shell for the CE-RISE solution, adapted to the graphical language of the main project website and structured for future technical content.
  image:
    src: /images/logo-mono.png
    alt: CE-RISE monochrome logo
  actions:
    - theme: brand
      text: Open overview
      link: /overview
    - theme: alt
      text: Browse reference
      link: /reference

features:
  - title: Public overview
    details: A landing page and navigation structure suitable for explaining the CE-RISE digital passport approach.
    icon: 01
  - title: Technical documentation path
    details: Placeholder sections for architecture, data models, components, onboarding, and stable reference pages.
    icon: 02
  - title: GitHub Pages delivery
    details: Static VitePress output prepared for automated build and publication from the GitHub mirror.
    icon: 03
---

<div class="ce-rise-band">
This site is being prepared as the branded documentation entry point for the CE-RISE digital passport solution. The current implementation focuses on visual structure, navigation, and reusable page patterns rather than final editorial content.
</div>

<div class="ce-rise-grid">
  <div class="ce-rise-card">
    <h3>Approach framing</h3>
    <p>Space for a concise introduction to the solution concept, scope, and expected audience.</p>
  </div>
  <div class="ce-rise-card">
    <h3>System structure</h3>
    <p>Room for diagrams and explanations covering architecture, software components, and data flows.</p>
  </div>
  <div class="ce-rise-card">
    <h3>Reference growth</h3>
    <p>A documentation-first structure that can expand without redesign when real technical content is added.</p>
  </div>
</div>

## Documentation map

<PageCards
  :items="[
    {
      title: 'Overview',
      text: 'Top-level framing for the CE-RISE solution and the role of this site as a public entry point.'
    },
    {
      title: 'How it works',
      text: 'Reserved space for process explanation, actor journeys, and lifecycle-oriented narratives.'
    },
    {
      title: 'Architecture',
      text: 'Prepared for system diagrams, interfaces, and component boundaries.'
    }
  ]"
/>
