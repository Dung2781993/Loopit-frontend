import Vue from "vue";
import VueRouter from "vue-router";

import Signup from "@/components/Signup"
import Login from  "@/components/Login"
import ForgotPassword from  "@/components/ForgotPassword"
import Dashboard from "@/components/Dashboard"

Vue.use(VueRouter);

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: Signup,
    meta: {
      auth: false,
    },
  },
  {
    path: "/",
    name: "login",
    component: Login,
    meta: {
      auth: false,
    },
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
    meta: {
      auth: false,
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
    meta: {
      auth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
