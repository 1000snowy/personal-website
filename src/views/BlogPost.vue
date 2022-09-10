<template>
  <main class="grow" v-html="markdown"></main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMarkdown } from "@/composables/useMarkdown.js";
const router = useRouter();

const data = ref(null);
const markdown = ref("");

fetch("/posts/" + router.currentRoute.value.params.id + ".md")
  .then((response) => response.text())
  .then((text) => {
    const { data, html } = useMarkdown(text);
    data.value = data;
    markdown.value = html;
  });
</script>
