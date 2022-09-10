import { createRouter, createWebHistory } from "vue-router";

import Landing from "./views/Landing.vue";
import Repositories from "./views/Repositories.vue";
import Contact from "./views/Contact.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Landing,
    },
    {
      path: "/contact",
      component: Contact,
    },
    {
      path: "/repos",
      component: Repositories,
    },
  ],
});
