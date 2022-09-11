<template>
  <Transition name="fade">
    <div
      v-if="buttonShowup"
      class="h-10 w-10 p-2 rounded-full fixed bottom-5 right-5 cursor-pointer"
      @click.prevent="scroll"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="white"
        class="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18"
        />
      </svg>
    </div>
  </Transition>
</template>

<script setup>
import { onMounted, onUnmounted } from "vue";
const pointer = $ref(0);
const buttonShowup = $computed(() => pointer > window.screen.height / 5);

const updatePointer = () => {
  pointer = window.scrollY;
};

const scroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

onMounted(() => {
  window.addEventListener("scroll", updatePointer);
});

onUnmounted(() => {
  window.removeEventListener("scroll", updatePointer);
});
</script>
