import Vue from "vue";
import Router from "vue-router";
import Layout from "../layout/index.vue";
Vue.use(Router);

const login = (r) =>
  require.ensure([], () => r(require("@/views/login")), "login");
const home = (r) =>
  require.ensure([], () => r(require("@/views/home")), "home");
const productList = r => require.ensure([], () => r(require('@/views/productList')), 'productList');
const brandList = r => require.ensure([], () => r(require('@/views/brandList')), 'brandList');
const stockList = r => require.ensure([], () => r(require('@/views/stockList')), 'stockList')
const orderList = r => require.ensure([], () => r(require('@/views/orderList')), 'orderList')

const routes = [
  {
    path: "/",
    component: Layout,
    name: "",
    children: [
      {
        path: "/home",
        component: home,
        meta: ["首页"],
      },
      {
        path: "/productList",
        component: productList,
        meta: ["商品库", "标准商品"],
      },
      {
        path: "/brandList",
        component: brandList,
        meta: ["商品库", "品牌"],
      },
      {
        path: "/orderList",
        component: orderList,
        meta: ["商品库", "品牌"],
      },
      {
        path: "/stockList",
        component: stockList,
        meta: ["商品库", "品牌"],
      }
    ],
  },
  {
    path: '/login',
    component: login,
    meta: ['登录']
  }
];

export default new Router({
  routes,
  mode: 'history',
  strict: process.env.NODE_ENV !== "production",
});
