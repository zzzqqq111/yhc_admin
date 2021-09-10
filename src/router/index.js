import Vue from "vue";
import Router from "vue-router";
import Layout from "../layout/index.vue";
Vue.use(Router);

const login = (r) =>
  require.ensure([], () => r(require("@/views/login")), "login");
// const user = (r) =>
//   require.ensure([], () => r(require("@/views/user")), "user");
const home = (r) =>
  require.ensure([], () => r(require("@/views/home")), "home");
const productList = r => require.ensure([], () => r(require('@/views/productList')), 'productList');
const brandList = r => require.ensure([], () => r(require('@/views/brandList')), 'brandList');
const stockList = r => require.ensure([], () => r(require('@/views/stockList')), 'stockList')
const orderList = r => require.ensure([], () => r(require('@/views/orderList')), 'orderList')
// const userList = r => require.ensure([], () => r(require('@/views/userList')), 'userList');
// const shopList = r => require.ensure([], () => r(require('@/views/shopList')), 'shopList');
// const foodList = r => require.ensure([], () => r(require('@/views/foodList')), 'foodList');
// const orderList = r => require.ensure([], () => r(require('@/views/orderList')), 'orderList');
// const adminList = r => require.ensure([], () => r(require('@/views/adminList')), 'adminList');
// const visitor = r => require.ensure([], () => r(require('@/views/visitor')), 'visitor');
// const newMember = r => require.ensure([], () => r(require('@/views/newMember')), 'newMember');
// const uploadImg = r => require.ensure([], () => r(require('@/views/uploadImg')), 'uploadImg');
// const vueEdit = r => require.ensure([], () => r(require('@/views/vueEdit')), 'vueEdit');
// const adminSet = r => require.ensure([], () => r(require('@/views/adminSet')), 'adminSet');
// const sendMessage = r => require.ensure([], () => r(require('@/views/sendMessage')), 'sendMessage');
// const explain = r => require.ensure([], () => r(require('@/views/explain')), 'explain');

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
      },
      // {
      //   path: "/brandList",
      //   component: brandList,
      //   meta: ["数据管理", "用户列表"],
      // },
      // {
      //   path: "/shopList",
      //   component: shopList,
      //   meta: ["数据管理", "商家列表"],
      // },
      // {
      //   path: "/foodList",
      //   component: foodList,
      //   meta: ["数据管理", "食品列表"],
      // },
      // {
      //   path: "/orderList",
      //   component: orderList,
      //   meta: ["数据管理", "订单列表"],
      // },
      // {
      //   path: "/adminList",
      //   component: adminList,
      //   meta: ["数据管理", "管理员列表"],
      // },
      // {
      //   path: "/visitor",
      //   component: visitor,
      //   meta: ["图表", "用户分布"],
      // },
      // {
      //   path: "/newMember",
      //   component: newMember,
      //   meta: ["图表", "用户数据"],
      // },
      // {
      //   path: "/uploadImg",
      //   component: uploadImg,
      //   meta: ["文本编辑", "MarkDown"],
      // },
      // {
      //   path: "/vueEdit",
      //   component: vueEdit,
      //   meta: ["编辑", "文本编辑"],
      // },
      // {
      //   path: "/adminSet",
      //   component: adminSet,
      //   meta: ["设置", "管理员设置"],
      // },
      // {
      //   path: "/sendMessage",
      //   component: sendMessage,
      //   meta: ["设置", "发送通知"],
      // },
      // {
      //   path: "/explain",
      //   component: explain,
      //   meta: ["说明", "说明"],
      // },
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
  strict: process.env.NODE_ENV !== "production",
});
