
<template>
  <el-button type="text" @click="open">删除</el-button>
</template>

<script>
  export default {
    props: {
      confirmButtonText: {
        type: String,
        default: '确定'
      },
      cancelButtonText: {
        type: String,
        default: '取消'
      }
    },
    methods: {
      open() {
        this.$confirm('是否删除?', '提示', {
          confirmButtonText: this.confirmButtonText,
          cancelButtonText: this.cancelButtonText,
          type: 'warning'
        }).then(() => {
          // this.$message({
          //   type: 'success',
          //   message: '删除成功!'
          // });
          this.$emit('deleteSuccess')
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          });          
        });
      }
    }
  }
</script>