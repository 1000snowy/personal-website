<template>
  <Suspense>
    <Repositories />
    <template #fallback>
      <div class="grid grow place-items-center">
        <p>Loading...</p>
      </div>
    </template>
  </Suspense>
</template>

<script setup lang="ts">
import Repositories from "../components/Repos/RepositoryContainer.vue";
</script>
