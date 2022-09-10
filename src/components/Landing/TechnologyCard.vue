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
    <p class="ml-4" v-text="name"></p>
  </div>
</template>

<script setup>
import "./Container.vue";

defineProps(["name", "background", "SVG"]);
</script>
