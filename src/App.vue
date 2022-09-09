<template>
  <div class="md:w-[680px] sm:w-[75%] w-[90%] pb-16 mx-auto md:text-black">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
</script>
