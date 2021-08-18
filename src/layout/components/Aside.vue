<template>
  <div class="aside">
    <el-menu
      default-active="2"
      @open="handleOpen"
      @close="handleClose">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      item: [
        {
          icon: "el-icon-edit-outline",
          index: "home",
          title: "系统首页",
        },
        {
          icon: "el-icon-edit-outline",
          index: "icon",
          title: "自定义图标",
        },
        {
          icon: "el-icon-edit-outline",
          index: "component",
          title: "组件",
          subs: [
            {
              index: "editor",
              title: "富文本编译器",
            },
            {
              index: "countTo",
              title: "数字滚动",
            },
            {
              index: "trees",
              title: "树形控件",
              subs: [
                {
                  index: "tree",
                  title: "自定义树",
                },
                {
                  index: "treeSelect",
                  title: "下拉树",
                },
                // ,{
                //   index:'treeTable',
                //   title:'表格树',
                // }
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleOpen(){

    },
    handleClose(){

    }
  }
};
</script>
<style></style>
