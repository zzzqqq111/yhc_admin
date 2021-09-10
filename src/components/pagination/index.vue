<template>
  <el-pagination
    background
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[10, 20, 50, 100]"
    :page-size="pageSize"
    :total="total"
    layout="prev, pager, next, sizes, total"
    hide-on-single-page
  >
  </el-pagination>
</template>
<script>
export default {
  props: {
    currentPage: {
      type: Number,
      default: 1,
    },
    total: {
      type: Number,
      default: 10,
    },
    pageSize: {
      type: Number,
      default: 10,
    },
  },
  data() {
    return {}
  },
  methods: {
    handleSizeChange(val){
      this.$emit('pageChange', {pageNum: this.currentPage, pageSize: val})
    },
    handleCurrentChange(val){
      this.$emit('pageChange', {pageNum: val, pageSize: this.pageSize})
    }
  },
};
</script>
<style>
.el-pagination.is-background .el-pager li:not(.disabled).active {
  background-color: turquoise;
}
</style>
