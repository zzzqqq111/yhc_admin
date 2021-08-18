import Vue from "vue";
import Router from "vue-router";
import Layout from '../layout/index.vue'
const Home = () => import("@/views/home");
const Login = () => import("@/views/login");
const User = () => import("@/views/user");
const myRouter = new Router({
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "/index",
          component: Home,
          name: "首页",
        },
        {
          path: "/login",
          component: Login,
          name: "登录",
        },
        {
          path: "/user",
          component: User,
          name: "用户",
        },
      ],
    },
  ],
});

Vue.use(Router);
export default myRouter;
