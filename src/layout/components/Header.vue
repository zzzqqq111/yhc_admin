<template>
  <div class="head-container clearfix">
    <div class="header-top">
      <img src="@/assets/logo.png" />
      <div class="userInfo">
        <i class="el-icon-bell"></i>
        <el-dropdown>
          <span class="el-dropdown-link">
            测试人员<i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人设置</el-dropdown-item>
            <el-dropdown-item>退出账号</el-dropdown-item>
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
  // box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid #dcdfe6;
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
