<script setup lang="ts">
import { withBase } from "vitepress";

defineProps<{
  items: Array<{
    title: string;
    text: string;
    link?: string;
  }>;
  tone?: "blue" | "pink" | "orange";
}>();
</script>

<template>
  <div class="ce-card-grid" :data-tone="tone ?? 'blue'">
    <component
      :is="item.link ? 'a' : 'article'"
      v-for="item in items"
      :key="item.title"
      class="ce-card-grid__item"
      :href="item.link ? withBase(item.link) : undefined"
    >
      <h3>{{ item.title }}</h3>
      <p>{{ item.text }}</p>
    </component>
  </div>
</template>
