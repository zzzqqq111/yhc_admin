<template>
  <div class="block">
    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="value"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
      @change="changeRangePicker"
    >
    </el-date-picker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
    };
  },
  methods: {
    changeRangePicker(){
      this.$emit('change', this.value)
    }
  }
};
</script>
