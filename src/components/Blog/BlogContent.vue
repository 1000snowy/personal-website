<template>
  <section class="mt-4 grow" v-html="content"></section>
</template>

<script setup>
defineProps(["content"]);
</script>
