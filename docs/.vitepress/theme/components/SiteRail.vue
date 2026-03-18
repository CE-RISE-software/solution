<script setup lang="ts">
import { useData, withBase } from "vitepress";

const { theme } = useData();
</script>

<template>
  <aside class="ce-site-rail" aria-label="Primary">
    <a class="ce-site-rail__brand" :href="withBase('/')">
      <img class="ce-site-rail__logo" :src="withBase('/images/logo-mono.png')" alt="CE-RISE logo" />
    </a>

    <nav class="ce-site-rail__nav">
      <a
        v-for="item in theme.nav"
        :key="item.text"
        class="ce-site-rail__link"
        :href="withBase(item.link)"
      >
        {{ item.text }}
      </a>
    </nav>

    <p class="ce-site-rail__copyright">Copyright @ 2026 CE-RISE</p>
  </aside>
</template>
