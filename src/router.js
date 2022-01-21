import Vue from "vue";
import VueRouter from "vue-router";
import Signup from "@/components/Signup";
import Login from "@/components/Login";
import ForgotPassword from "@/components/ForgotPassword";
import Profile from "@/components/Profile";
import Home from "@/components/Home";
import Car from "@/components/Car";

Vue.use(VueRouter);


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
    meta: { requiresAuth: true }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const publicPages = ['/login', '/signup', '/home', '/'];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem('user');

  // trying to access a restricted page + not logged in
  // redirect to login page
  if (authRequired && !loggedIn) {
    next('/login');
  } else {
    next();
  }
});

export default router;
