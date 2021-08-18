<template>
  <div>
    <navbar></navbar>
    <siderbar></siderbar>
    <main-body></main-body>
  </div>
</template>
<style>
.container_box {
  height: 100%;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
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
import { Navbar, Siderbar, MainBody } from "./components";
export default {
  name: "basicLayout",
  components: {
    Navbar,
    Siderbar,
    MainBody
  },
  created(){
    console.log('是否进入')
  }
};
</script>
<style>
view{

}
</style>
