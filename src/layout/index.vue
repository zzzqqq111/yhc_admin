<template>
  <div class="container_box">
    <navbar></navbar>
    <div class="main_body">
      <siderbar class="el-aside"></siderbar>
      <div class="content_body">
        <keep-alive>
          <router-view :key="$route.path" />
        </keep-alive>
      </div>
    </div>
  </div>
</template>
<style>
.container_box {
  height: 100%;
}
.main_body {
  height: calc(100% - 88px);
  margin-top: 3px;
  width: 100%;
}

.el-aside {
  float: left;
  width: 250px;
  height: 100%;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;

}
.content_body {
  margin-left: 250px;
  width: auto;
}

.content_body > div{
  padding: 20px;
}

.el-menu {
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>

<script>
import { Navbar, Siderbar } from "./components";

export default {
  name: "basicLayout",
  components: {
    Navbar,
    Siderbar,
  },
  created() {
    console.log("是否进入");
  },
};
</script>
<style>
view {
}
</style>
