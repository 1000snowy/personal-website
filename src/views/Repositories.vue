<template>
  <main class="grow">
    <Suspense>
      <Repositories />
      <template #fallback>
        <div class="grid grow place-items-center">
          <p>Loading...</p>
        </div>
      </template>
    </Suspense>
  </main>
</template>

<script setup>
import Repositories from "../components/Repos/RepositoryContainer.vue";
</script>
