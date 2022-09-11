<template>
  <div>
    <div class="grid md:grid-cols-2 grid-cols-1 gap-4 place-items-stretch mt-8">
      <div v-for="(repository, index) in repositories" :key="index">
        <RepositoryCard
          :name="repository.name"
          :description="repository.description"
          :stars="repository.stargazers_count"
          :writtenIn="repository.language"
          class="bg-white/5 hover:bg-white/10 transition-colors duration-200 rounded-xl"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import RepositoryCard from "@components/Repos/RepositoryCard.vue";

const repositories = await fetch("https://api.github.com/users/1000snowy/repos")
  .then((response) => response.json())
  .then((data) =>
    data
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
  );
</script>
