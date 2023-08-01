import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";

const roters = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "Home", component: Home },
    {
      path: "/like",
      name: "Like",
      component: () => import("@/pages/Like.vue"),
    },
  ],
});

export default roters;
  