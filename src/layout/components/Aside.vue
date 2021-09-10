<template>
  <div class="aside">
    <el-menu
      :default-active="defaultActive"
      class="el-menu-vertical-demo"
      theme="dark"
      router
    >
      <el-menu-item index="home" >首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">商品库</template>
        <el-menu-item index="productList">标准商品</el-menu-item>
        <el-menu-item index="brandList">品牌</el-menu-item>
      </el-submenu>
      <el-submenu index="3">
        <template slot="title">订单管理</template>
        <el-menu-item index="orderList">订单</el-menu-item>
        <el-menu-item index="stockList">商品库存</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
// import router from './router';
export default {
  data() {
    return {
      menus: [],
    };
  },
  mounted() {
    // 获取所有路由this.$router.options.routes
    this.menus = this.$router.options.routes;
    console.log(this.menus);
  },
  computed: {
    defaultActive: function(){
      return this.$route.path.replace('/', '');
    }
    // menus: ()=> {
    //   return this.$router.options.routes
    // }
  },
  methods: {
    handleOpen() {},
    handleClose() {},
  },
};
</script>
<style>
  .aside.el-aside{
    text-align: left;
  }
</style>
