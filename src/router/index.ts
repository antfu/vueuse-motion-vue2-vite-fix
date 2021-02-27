import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import NotFound from "@/views/NotFound.vue";

Vue.use(VueRouter);

export const routes: RouteConfig[] = [
];

const router = new VueRouter({
  base: "/",
  mode: "history",
  routes,
});

export default router;
