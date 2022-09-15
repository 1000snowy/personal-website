import { createRouter, createWebHistory } from "vue-router"; 

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/:pathMatch(.*)*", component: import("./views/404Page.vue"), alias: "/404" },
    { path: "/blog", component: import("./views/BlogIndex.vue") },
    { path: "/blog/:id", component: import("./views/BlogPost.vue") },
    {
      path: "/contact",
      component: import("./views/Contact.vue") },
    },
    {
      path: "/",
      component: import("./views/Landing.vue") },
      alias: "/home",
    },
    {
      path: "/repos",
      component: import("./views/Repositories.vue") ,
    },
  ],
});
