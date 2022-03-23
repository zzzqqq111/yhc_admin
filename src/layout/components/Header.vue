<template>
  <div class="head-container clearfix">
    <div class="header-top">
      <a class="logo_box">
        <img
          src="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
        />
        Ant Design
      </a>
      <span>平台后台</span>
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
  height: 64px;
  // box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.5);
  border-bottom: 1px solid #dcdfe6;
}
.header-top {
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0 50px;
  .logo_box {
    font-size: 16px;
    display: flex;
    align-items: center;
    img {
      width: 40px;
      height: 40px;
      margin-right: 16px;
    }
  }

  .el-dropdown-link {
    margin-left: 20px;
    cursor: pointer;
    color: #409eff;
  }
}
</style>
