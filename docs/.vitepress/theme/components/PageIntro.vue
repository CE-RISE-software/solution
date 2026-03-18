<script setup lang="ts">
defineProps<{
  eyebrow?: string;
  title: string;
  text: string;
}>();
</script>

<template>
  <section class="ce-page-intro">
    <p v-if="eyebrow" class="ce-page-intro__eyebrow">{{ eyebrow }}</p>
    <h1>{{ title }}</h1>
    <p class="ce-page-intro__text">{{ text }}</p>
  </section>
</template>
