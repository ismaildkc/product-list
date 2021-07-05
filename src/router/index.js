import Vue from "vue";
import VueRouter from "vue-router";
import ProductList from "../views/ProductList.vue";
import ProductDetail from "../views/ProductDetail.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ProductList",
    component: ProductList
  },
  {
    path: "/product-detail",
    name: "ProductDetail",
    component: ProductDetail
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
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;
