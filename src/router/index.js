import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import UserDetails from "@/views/UserDetails";
import Summary from "@/views/Summary";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/user",
    name: "User",
    component: UserDetails,
  },
  {
    path: "/summary",
    name: "Summary",
    component: Summary,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
