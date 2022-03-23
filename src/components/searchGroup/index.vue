<template>
  <div class="search_box">
    <div v-for="(item, index) in searchData" :key="index" class="search_item">
      <template v-if="item.type === 'select'">
        <label>{{ item.label }}</label>
        <SearchInput
          placeholder="请选择"
          :options="item.data"
          @changeSelectValue="changeSelectValue($event, item.field)"
          :selectValue="params[item.field] || ''"
        />
      </template>
      <template v-else-if="item.type === 'datePicker'">
        <label>{{ item.label }}</label>
        <MyDatePicker
          @change="changeSelectValue($event, item.field)"
          :defaultValue="params[item.field] || ''"
        />
      </template>
      <template v-else-if="item.type === 'rangePicker'">
        <label>{{ item.label }}</label>
        <MyRangePicker />
      </template>
      <template v-else class="demo-input-suffix">
        <label>{{ item.label }}</label>
        <el-input
          placeholder="请输入"
          v-model="params[item.field]"
          @change="changeSelectValue($event, item.field)"
        />
      </template>
    </div>
    <el-button type="primary" @click="searchClick">查询</el-button>
    <el-button type="primary" @click="reset">重置</el-button>
    <!-- <el-button @click='addNew'>新增</el-button> -->
  </div>
</template>
<script>
import SearchInput from "../searchInput";
import MyDatePicker from "../myDatePicker";
import MyRangePicker from "../myRangePicker";
export default {
  components: {
    SearchInput,
    MyDatePicker,
    MyRangePicker,
  },
  props: {
    searchData: [],
    initParams: {},
  },
  data() {
    return {
      params: this.initParams,
    };
  },

  methods: {
    searchClick() {
      this.$emit("searchButton");
    },
    reset() {
      this.params = {
        pageNum: 1,
        pageSize: 10,
      };
      this.$emit("changeParams", this.params);
      this.$emit("searchButton");
    },
    addNew() {
      this.$emit("goAdd");
    },
    changeSelectValue(value, field) {
      this.params = {
        ...this.params,
        [field]: value,
      };
      console.log(this.params);
      this.$emit("changeParams", this.params);
    },
  },
};
</script>
<style lang="less">
.search_box {
  .search_item {
    display: flex;
    align-items: center;
    margin-right: 10px;
    label {
      flex: none;
    }
  }
}
</style>
