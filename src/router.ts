import { createRouter, createWebHistory } from "vue-router";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: import("./views/Landing.vue"),
    },
    {
      path: "/contact",
      component: () => import("./views/Contact.vue"),
    },
    {
      path: "/repos",
      component: () => import("./views/Repositories.vue"),
    },
    { path: "/:pathMatch(.*)*", component: import("./views/404Page.vue") },
  ],
});
