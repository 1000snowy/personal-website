<template>
  <div class="mt-16">
    <h2 class="md:text-start text-center uppercase">Technologies I use</h2>
    <div
      class="md:grid xl:grid-cols-4 lg:grid-cols-3 md:grid-rows-2 mt-4 gap-4 grid grid-rows-3 grid-cols-2"
    >
      <span v-for="(technology, index) in technologies" :key="index">
        <TechnologyCard
          :SVG="technology.SVG"
          :name="technology.name"
          :background="technology.background"
        />
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject } from "vue";
// @ts-ignore
import TechnologyCard from "./TechnologyCard.vue";

interface Technology {
  SVG: string;
  name: string;
  background: string;
}

const technologies = inject("technologies") as Array<Technology>;
</script>
