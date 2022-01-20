import Vue from "vue";
import VueRouter from "vue-router";
import store from './store';
import Signup from "@/components/Signup";
import Login from "@/components/Login";
import ForgotPassword from "@/components/ForgotPassword";
import Profile from "@/components/Profile";
import Home from "@/components/Home";
import Car from "@/components/Car";

Vue.use(VueRouter);

const ifAuthenticated = async (to, from, next) => {
  if (store.state.auth.token) {
      next();
      return;
  }
  next("/login");
};

const routes = [
  {
    path: "/signup",
    name: "signup",
    component: Signup,
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/forgot-password",
    name: "forgot-password",
    component: ForgotPassword,
  },
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile
  },
  {
    path: "/car",
    name: "car",
    component: Car,
    beforeEnter: ifAuthenticated
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
