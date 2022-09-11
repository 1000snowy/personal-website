<template>
  <main class="grid place-items-center error-page grow">
    <div class="grid place-items-center gap-2">
      <h1 class="font-semibold text-3xl text-center">
        Cannot find the page you are looking for
        <p class="inline">&#x1FAE3;</p>
      </h1>
      <p class="text-xl">(╯°□°）╯︵ ┻━┻</p>
      <div class="smart-link text-xl cursor-pointer" @click="back">Go back</div>
    </div>
  </main>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

function back() {
  router.back();
}
</script>
