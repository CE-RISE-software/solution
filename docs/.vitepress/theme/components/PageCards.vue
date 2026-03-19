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
  <!-- PageCards disabled -->
</template>
