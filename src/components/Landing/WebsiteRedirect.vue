<template>
  <div class="mt-16">
    <h2 class="md:text-start text-center uppercase">Have a tour</h2>
    <div class="md:grid md:grid-cols-2 md:grid-rows-1 gap-4">
      <router-link to="/repos" class="block mt-4 md:mt-0">
        <div
          class="flex flex-row items-center justify-center p-4 transition-colors bg-white/5 hover:bg-white/10 rounded-lg"
        >
          <p class="ml-8">My repositories</p>
        </div>
      </router-link>
      <router-link
        event=""
        to="blog"
        class="pointer-events-none block mt-4 md:mt-0"
      >
        <div
          class="flex flex-row items-center justify-center p-4 transition-colors bg-white/5 hover:bg-white/10 rounded-lg"
        >
          <p class="ml-8">Blog (coming soon...)</p>
        </div>
      </router-link>
    </div>
  </div>
</template>
