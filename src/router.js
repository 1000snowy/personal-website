import { createRouter, createWebHistory } from "vue-router";

import Landing from "./views/Landing.vue";
import Repositories from "./views/Repositories.vue";
import Contact from "./views/Contact.vue";
import ErrorPage from "./views/404Page.vue";
import BlogPost from "./views/BlogPost.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/blog/:id", component: BlogPost },
    { path: "/:pathMatch(.*)*", component: ErrorPage, alias: "/404" },
    {
      path: "/",
      component: Landing,
      alias: "/home"
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
