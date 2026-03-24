<script setup lang="ts">
import { withBase } from "vitepress";
</script>

<template>
  <footer class="ce-site-footer">
    <div class="ce-site-footer__inner">
      <div class="ce-site-footer__brand">
        <a href="https://europa.eu" target="_blank" rel="noreferrer">
          <img
            class="ce-site-footer__logo"
            src="https://ce-rise.eu/wp-content/uploads/2023/01/EN-Funded-by-the-EU-PANTONE-e1663585234561-1-1.png"
            alt="Funded by the European Union"
          />
        </a>
        <p class="ce-site-footer__funding">
          This project is funded by the European Union under the Horizon Europe Research and Innovation Programme.
          The contents of this website only reflect the views of the project.
          <a
            href="https://cordis.europa.eu/project/id/101092281/results"
            target="_blank"
            rel="noreferrer"
          >More information on CORDIS.</a>
        </p>
      </div>

      <div class="ce-site-footer__columns">
        <section>
          <h2>Sections</h2>
          <ul>
            <li><a :href="withBase('/overview')">Overview</a></li>
            <li><a :href="withBase('/how-it-works')">How it works</a></li>
            <li><a :href="withBase('/capabilities')">Capabilities</a></li>
            <li><a :href="withBase('/components')">Components</a></li>
          </ul>
        </section>

        <section>
          <h2>Project</h2>
          <ul>
            <li><a href="https://ce-rise.eu/" target="_blank" rel="noreferrer">CE-RISE Website</a></li>
            <li><a href="https://zenodo.org/communities/ce-rise/" target="_blank" rel="noreferrer">Zenodo Archive</a></li>
            <li><a href="https://codeberg.org/CE-RISE-models" target="_blank" rel="noreferrer">Data Models</a></li>
            <li><a href="https://codeberg.org/CE-RISE-software" target="_blank" rel="noreferrer">Software</a></li>
          </ul>
        </section>
      </div>
    </div>
  </footer>
</template>
