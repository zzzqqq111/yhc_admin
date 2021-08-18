<template>
  <div class="head-container clearfix">
    <div class="header-top">
      <img src="@/assets/logo.png" />
      <div class="userInfo">
        <i class="el-icon-bell"></i>
        <el-dropdown size="small">
          <span class="el-dropdown-link">
            用户昵称<i class="el-icon-bell"></i>
          </span>
          <el-dropdown-menu slot="dropDown">
            <el-dropdown-item>用户设置</el-dropdown-item>
            <el-dropdown-item>个人中心</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      fullscreen: false,
      name: "linxin",
      message: 2,
      username: "zyh",
    };
  },
  methods: {
    toggleClick() {},
    // 用户名下拉菜单选择事件
    logout() {},
  },
};
</script>
<style lang="less" scoped>
.head-container {
  width: 100%;
  height: 88px;
}
.header-top {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  img {
    width: 130px;
  }
  .el-dropdown-link {
    margin-left: 20px;
    cursor: pointer;
    color: #409eff;
  }
}
</style>
