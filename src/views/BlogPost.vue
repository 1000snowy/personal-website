<template>
  <main class="grow">
    <BlogTitle :title="postData.title"></BlogTitle>
    <BlogContent :content="markdown"></BlogContent>
  </main>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useMarkdown } from "@/composables/useMarkdown.js";

// Check for the existence of the post

import BlogTitle from "@blog/BlogTitle.vue";
import BlogContent from "@blog/BlogContent.vue";

const router = useRouter();
const markdown = ref("");

await fetch("/posts/" + router.currentRoute.value.params.id + ".md")
  .then((response) => response.text())
  .then((text) => {
    markdown.value = text;
  });

const { data, html } = useMarkdown(markdown.value);

const postData = ref(data);
markdown.value = html;
</script>
