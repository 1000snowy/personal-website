import { createRouter, createWebHistory } from "vue-router";

import ErrorPage from "./views/404Page.vue";
import BlogIndex from "./views/BlogIndex.vue";
import BlogPost from "./views/BlogPost.vue";
import Contact from "./views/Contact.vue";
import Landing from "./views/Landing.vue";
import Repositories from "./views/Repositories.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/:pathMatch(.*)*", component: ErrorPage, alias: "/404" },
    { path: "/blog", component: BlogIndex },
    { path: "/blog/:id", component: BlogPost },
    {
      path: "/contact",
      component: Contact,
    },
    {
      path: "/",
      component: Landing,
      alias: "/home",
    },
    {
      path: "/repos",
      component: Repositories,
    },
  ],
});
