<template>
  <div class="mt-16">
    <h2 class="text-neutral-500 md:text-start text-center uppercase">
      Have a tour
    </h2>
    <div class="md:grid md:grid-cols-2 md:grid-rows-1 gap-4 mt-4">
      <router-link to="/repos">
        <div
          class="flex flex-row items-center justify-center p-4 transition-colors hover:bg-white/10 rounded-lg"
        >
          <p class="text-neutral-500 ml-8">My repositories</p>
          <img
            src="../assets/external.svg"
            width="24"
            height="24"
            class="ml-5"
          />
        </div>
      </router-link>
      <router-link disabled="'true'" to="blog" class="pointer-events-none">
        <div
          class="flex flex-row items-center justify-center p-4 transition-colors hover:bg-white/10 rounded-lg"
        >
          <p class="text-neutral-500 ml-8">Blog (coming soon...)</p>
          <img
            src="../assets/external.svg"
            width="24"
            height="24"
            class="ml-5"
          />
        </div>
      </router-link>
    </div>
  </div>
</template>
