<template>
  <div class="mt-16">
    <h2 class="text-neutral-500 md:text-start text-center uppercase">
      External Links
    </h2>
    <div class="md:grid md:grid-cols-2 md:grid-rows-2 gap-4 mt-4">
      <a
        href="https://www.linkedin.com/in/kaan-karaman-541940218/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div
          class="flex flex-row items-center justify-center p-4 transition-colors hover:bg-white/10 rounded-lg"
        >
          <p class="text-neutral-500 ml-8">LinkedIn</p>
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
      >
        <div
          class="flex flex-row items-center justify-center p-4 transition-colors hover:bg-white/10 rounded-lg"
        >
          <p class="text-neutral-500 ml-8">Github</p>
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
      >
        <div
          class="flex flex-row items-center justify-center p-4 transition-colors hover:bg-white/10 rounded-lg"
        >
          <p class="text-neutral-500 ml-8">Twitter</p>
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
        class="cursor-pointer"
        @click="copyUsernameToClipboard"
      >
        <div
          class="flex flex-row items-center justify-center p-4 transition-colors hover:bg-white/10 rounded-lg"
        >
          <p class="text-neutral-500 ml-8">Discord (copy username)</p>
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
  </div>
</template>

<script setup lang="ts">
function copyUsernameToClipboard() {
  navigator.clipboard.writeText("kaan.#1337");
}
</script>
