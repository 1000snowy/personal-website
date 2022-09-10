<template>
  <div class="grid grid-rows-6 grid-cols-2 w-96 place-items-center">
    <div v-for="(repository, index) in repositories" :key="index">
      <RepositoryCard
        :name="repository.name"
        :description="repository.description"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// @ts-ignore
import RepositoryCard from "./RepositoryCard.vue";
import { $fetch } from "ohmyfetch";

const repositories = await $fetch(
  "https://api.github.com/users/1000snowy/repos",
  {
    parseResponse: JSON.parse,
  }
);
</script>
