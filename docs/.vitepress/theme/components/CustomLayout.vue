<script setup lang="ts">
import { Content } from "vitepress";
import SiteFooter from "./SiteFooter.vue";
import SiteRail from "./SiteRail.vue";
</script>

<template>
  <div class="ce-layout">
    <SiteRail />

    <main class="ce-layout__main">
      <div class="ce-layout__content">
        <Content />
      </div>

      <SiteFooter />
    </main>
  </div>
</template>
