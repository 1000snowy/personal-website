<template>
  <div class="bg-white/10 p-4 rounded-xl flex flex-col h-48">
    <div class="flex justify-between">
      <h1 v-text="name" class="text-neutral-300" />
      <div class="flex flex-row">
        <img src="../../assets/star.svg" alt="Github stargazers count" />
        <span class="ml-1" v-text="stars"></span>
      </div>
    </div>
    <div class="grow text-lineclamp">
      <p v-text="description" class="mt-3" />
    </div>
    <div v-if="writtenIn">
      <p>Written in <span v-text="writtenIn" :style="{ color }" /></p>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps(["name", "stars", "description", "writtenIn"]);

const colorScheme = {
  Vue: "#41b883",
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
};

const color = computed(() => colorScheme[props.writtenIn]);

console.log(color);
</script>
