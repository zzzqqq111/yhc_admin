<template>
  <el-dialog title="添加商品" :visible.sync="visible">
    <el-form
      ref="form"
      :model="ruleForm"
      label-width="80px"
      label-position="left"
    >
      <el-form-item label="名称" prop="name">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
     <el-form-item label="logo">
       <Upload />
     </el-form-item>
      <!-- <el-form-item>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item> -->
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="onCancel">取 消</el-button>
      <el-button type="primary" @click="onSubmit">确 定</el-button>
    </div>
  </el-dialog>
</template>

<script>
import { getCategoryList } from "@/api/index.js";
import { Upload } from '@/components'
export default {
  components: {
    Upload
  },
  props: {
    visible: {
      type: Boolean,
      value: false,
    },
    staticData: {
      type: Object,
      value: {}
    }
  },
  data() {
    return {
      ruleForm: {
        type: [],
      },
      formLabelWidth: "100px",
      checkList: ["选中且禁用", "复选框 A"],
      categoryList: []
    };
  },
  methods: {
    onSubmit() {
      console.log("submit!", this.ruleForm);
    },
    initList(){
      getCategoryList().then(res=>{
        this.categoryList = res.data
      })
    },
    remoteMethod(){
      // if(query !== ''){
      //   this.categoryList = 
      // }
    },
    onCancel() {
      this.$emit("close");
    },
  },
};
</script>
<style lang="less">
.el-form-item__content {
  text-align: left;
}
</style>
