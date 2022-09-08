<template>
  <div
    class="flex items-center p-4 bg-white/5 hover:bg-white/10 rounded-lg transition-colors duration-300"
  >
    <div
      class="p-1 rounded-md"
      :class="background.startsWith('#') ? '' : background"
      :style="
        background.startsWith('#') ? 'background-color:' + background : ''
      "
      v-html="SVG"
    ></div>
    <p class="text-neutral-500 ml-4" v-text="name"></p>
  </div>
</template>

<script setup lang="ts">
// NOTE: Ignore a Typescript error here
import "./Container.vue";

defineProps<{
  SVG: string;
  name: string;
  background: string;
}>();
</script>
