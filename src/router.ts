import { createRouter, createWebHistory } from "vue-router";

import Landing from "./views/Landing.vue";
// import Repositories from "./views/Repositories.vue";
const Repositories = () => import("./views/Repositories.vue");
import Contact from "./views/Contact.vue";
import ErrorPage from "./views/404Page.vue";

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/:pathMatch(.*)*", component: import("./views/404Page.vue") },
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
<<<<<<< HEAD
    { path: "/:pathMatch(.*)*", component: ErrorPage },
=======
>>>>>>> dccc5dca33284d444b50404e89fbd1816e42bce6
  ],
});
