<template>
  <section>
    <h1 class="text-neutral-300" v-text="name"></h1>
    <p v-text="description"></p>
  </section>
</template>

<script setup lang="ts">
defineProps<{
  name: string;
  description: string | null;
}>();
</script>
