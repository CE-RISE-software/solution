<script setup lang="ts">
import { withBase } from "vitepress";

const props = defineProps<{
  items: Array<{
    title: string;
    text?: string;
    link?: string;
  }>;
  tone?: "blue" | "pink" | "orange";
}>();

const isJumpGrid = props.items.every((item) => Boolean(item.link));
</script>

<template>
  <div :class="isJumpGrid ? 'ce-jump-grid' : 'ce-card-grid'" :data-tone="tone ?? 'blue'">
    <component
      :is="item.link ? 'a' : 'article'"
      v-for="item in items"
      :key="item.title"
      :class="isJumpGrid ? 'ce-jump-grid__item' : 'ce-card-grid__item'"
      :href="item.link ? withBase(item.link) : undefined"
    >
      <h3>{{ item.title }}</h3>
      <p v-if="!isJumpGrid && item.text">{{ item.text }}</p>
      <span v-else class="ce-jump-grid__arrow" aria-hidden="true">→</span>
    </component>
  </div>
</template>
