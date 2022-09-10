import { createRouter, createWebHistory } from "vue-router";

import Landing from "./views/Landing.vue";
import Repositories from "./views/Repositories.vue";
import Contact from "./views/Contact.vue";
import ErrorPage from "./views/404Page.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/:pathMatch(.*)*", component: ErrorPage },
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
