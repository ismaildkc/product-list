import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/sayfa-bulunamadi",
    name: "Sayfa Bulunamadı",
    component: () =>
      import("../views/404.vue")
  },
  { path: '*', redirect: '/sayfa-bulunamadi' },  
];

const router = new VueRouter({
  mode: "history",
  linkExactActiveClass: 'active',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;
