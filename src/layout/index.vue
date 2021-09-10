<template>
  <div class="container_box">
    <navbar></navbar>
    <div class="main_body">
      <siderbar class="el-aside"></siderbar>
      <div class="content_body"><main-body></main-body></div>
    </div>
    
  </div>
</template>
<style>
.container_box {
  height: 100%;
}
.main_body{
  height: calc(100% - 88px);
  display: flex;
  margin-top: 3px;
}

.el-aside {
  width: 250px;
  height: 100%;
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}
.content_body{
  flex: 1;
  padding: 20px;
}

.el-menu{
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
