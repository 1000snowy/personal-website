<template>
  <div class="flex pt-20 md:flex-row flex-col-reverse gap-16 items-center">
    <div class="flex flex-col justify-center grow">
      <h1 class="text-neutral-300 font-bold text-lg md:text-start text-center">
        About me
      </h1>
      <p class="text-neutral-300 md:text-start text-center opacity-60">
        Hey, I'm a 17 year old developer from Turkey, I'm currently focused on
        my exams but I'm still trying to learn new things and improve my skills.
        I'm a backend developer mainly experienced in
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://nodejs.org/"
          class="smart-link"
          >Node.js</a
        >, but I'm also keeping up with frontend technologies such as
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://vuejs.org/"
          class="smart-link"
          >Vue.js</a
        >.
      </p>
      <Status />
    </div>
    <div class="w-36 flex-shrink-0 relative">
      <img
        class="rounded-[4.5rem] w-36 h-36 md:hover:rounded-[1rem] duration-150 cursor-pointer"
        src="https://cdn.discordapp.com/attachments/990340026573398056/1017758203062255667/IMG_4546.AVIF"
        alt="Profile picture"
        loading="lazy"
      />
      <div
        class="mobile-status md:hidden w-6 h-6 rounded-full bg-green-400 absolute bottom-2 right-2 border-4 border-black"
      ></div>
    </div>
  </div>
</template>
