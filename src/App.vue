<template>
  <div
    class="md:w-[680px] sm:w-[75%] w-[90%] mx-auto md:text-black flex flex-col min-h-screen select-none scroll-smooth"
  >
    <Header />
    <RouterView v-slot="{ Component }">
      <template v-if="Component">
        <KeepAlive>
          <Suspense>
            <component :is="Component" class="grow"></component>

            <template #fallback>
              <div class="grid grow place-items-center">
                <p>Loading...</p>
              </div>
            </template>
          </Suspense>
        </KeepAlive>
      </template>
    </RouterView>
    <Footer />
  </div>
</template>

<script setup>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
</script>
