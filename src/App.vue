<template>
  <div class="md:w-[600px] w-[75%] mx-auto md:text-black">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
</script>
