<template>
  <div class="mt-16">
    <h2 class="md:text-start text-center uppercase">External Links</h2>
    <div class="md:grid md:grid-cols-2 md:grid-rows-2 gap-4 mt-4">
      <a
        href="https://www.linkedin.com/in/kaan-karaman-541940218/"
        target="_blank"
        rel="noopener noreferrer"
        class="block mt-4 md:mt-0"
      >
        <div
          class="flex flex-row items-center justify-center p-4 transition-colors bg-white/5 hover:bg-white/10 rounded-lg"
        >
          <p class="ml-8">LinkedIn</p>
          <img
            src="../assets/external.svg"
            alt="LinkedIn"
            width="24"
            height="24"
            class="ml-5"
          />
        </div>
      </a>
      <a
        href="https://github.com/1000snowy"
        target="_blank"
        rel="noopener noreferrer"
        class="block mt-4 md:mt-0"
      >
        <div
          class="flex flex-row items-center justify-center p-4 transition-colors bg-white/5 hover:bg-white/10 rounded-lg"
        >
          <p class="ml-8">Github</p>
          <img
            src="../assets/external.svg"
            alt="Github"
            width="24"
            height="24"
            class="ml-5"
          />
        </div>
      </a>
      <a
        href="https://twitter.com/1000snowy"
        target="_blank"
        rel="noopener noreferrer"
        class="block mt-4 md:mt-0"
      >
        <div
          class="flex flex-row items-center justify-center p-4 transition-colors bg-white/5 hover:bg-white/10 rounded-lg"
        >
          <p class="ml-8">Twitter</p>
          <img
            src="../assets/external.svg"
            alt="Twitter"
            width="24"
            height="24"
            class="ml-5"
          />
        </div>
      </a>
      <div
        class="cursor-pointer block mt-4 md:mt-0"
        @click="copyUsernameToClipboard"
      >
        <div
          class="flex flex-row items-center justify-center p-4 transition-colors bg-white/5 hover:bg-white/10 rounded-lg"
        >
          <p class="ml-8">Discord (copy username)</p>
          <img
            src="../assets/external.svg"
            alt="Discord"
            width="24"
            height="24"
            class="ml-5"
          />
        </div>
      </div>
    </div>

    <div class="tooltip-copy-to-clipboard" v-if="tooltip">
      <p>Successfully copied to clipboard</p>
      <div class="progress-bar">
        <div class="bar"></div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

const tooltip = ref(false);
const timeout = ref<any>(null);
const leaveAnimationTimeout = ref<any>(null);

watch(tooltip, (newValue) => {
  if (newValue === false) return;
  clearTimeout(timeout.value);
  clearTimeout(leaveAnimationTimeout.value);
  timeout.value = setTimeout(() => {
    const el = document.querySelector(".tooltip-copy-to-clipboard");
    el?.classList.add("tooltip-leave");
    leaveAnimationTimeout.value = setTimeout(
      () => (tooltip.value = false),
      300
    );
  }, 4700);
});

function copyUsernameToClipboard() {
  tooltip.value = true;
  navigator.clipboard.writeText("kaan.#1337");
}
</script>
