<template>
  <el-dialog title="添加商品" :visible.sync="visible">
    <el-form
      ref="form"
      :model="ruleForm"
      label-width="80px"
      label-position="left"
    >
      <el-form-item label="商品标题" prop="title">
        <el-input v-model="ruleForm.title"></el-input>
      </el-form-item>
      <el-form-item label="选择类目" prop="categoryId">
        <el-select
          v-model="ruleForm.region"
          placeholder="请选择活动区域"
          filterable
          remote
          @focus="initList"
          :remote-method="remoteMethod"
        >
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="商品类型" prop="type">
        <select-box :options="staticData[type]"/>
      </el-form-item>
      <el-form-item label="交易类型" required prop="tradeType">
        <select-box :options="staticData[tradeType]"/>
      </el-form-item>
     <el-form-item label="商品图片">
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
import { SelectBox } from '@/components/searchInput'
import { Upload } from '@/components/upload'
export default {
  components: {
    SelectBox,
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
