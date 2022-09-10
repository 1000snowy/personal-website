<template>
  <div class="grid md:grid-cols-2 grid-cols-1 gap-4 place-items-stretch mt-8">
    <div v-for="(repository, index) in repositories" :key="index">
      <RepositoryCard
        :name="repository.name"
        :description="repository.description"
        :stars="repository.stargazers_count"
        :writtenIn="repository.language"
      />
    </div>
  </div>
</template>

<script setup>
import RepositoryCard from "./RepositoryCard.vue";

const repositories = await fetch("https://api.github.com/users/1000snowy/repos")
  .then((response) => response.json())
  .then((data) =>
    data
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
  );
</script>
