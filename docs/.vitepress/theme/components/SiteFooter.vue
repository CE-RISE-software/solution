<script setup lang="ts">
import { withBase } from "vitepress";
</script>

<template>
  <footer class="ce-site-footer">
    <div class="ce-site-footer__inner">
      <div class="ce-site-footer__brand">
        <img class="ce-site-footer__logo" :src="withBase('/images/CE-RISE_logo.png')" alt="CE-RISE logo" />
      </div>

      <div class="ce-site-footer__columns">
        <section>
          <h2>Documentation</h2>
          <ul>
            <li><a :href="withBase('/overview')">Overview</a></li>
            <li><a :href="withBase('/architecture')">Architecture</a></li>
            <li><a :href="withBase('/data-models')">Data models</a></li>
          </ul>
        </section>

        <section>
          <h2>Project</h2>
          <ul>
            <li><a href="https://ce-rise.eu/" target="_blank" rel="noreferrer">Main CE-RISE website</a></li>
            <li><a href="https://github.com/CE-RISE-software/solution" target="_blank" rel="noreferrer">GitHub mirror</a></li>
            <li><a href="https://codeberg.org/CE-RISE-software" target="_blank" rel="noreferrer">Codeberg organisation</a></li>
          </ul>
        </section>
      </div>
    </div>

    <div class="ce-site-footer__funding">
      <p>
        Copyright @ 2026 CE-RISE
      </p>
    </div>
  </footer>
</template>
