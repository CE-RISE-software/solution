<script setup lang="ts">
defineProps<{
  items: Array<{
    title: string;
    text: string;
  }>;
}>();
</script>

<template>
  <div class="ce-card-grid">
    <article v-for="item in items" :key="item.title" class="ce-card-grid__item">
      <h3>{{ item.title }}</h3>
      <p>{{ item.text }}</p>
    </article>
  </div>
</template>
