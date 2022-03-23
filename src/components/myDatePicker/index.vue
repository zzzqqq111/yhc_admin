<template>
  <el-date-picker
    v-model="value"
    clearable
    placeceholder="请选择日期"
    @change="changeDate"
    value-format="yyyy-MM-dd"
    form="yyyy-MM-dd"
  >
  </el-date-picker>
</template>
<script>
export default {
  props: {
    dateType: {
      type: String,
      default: "date",
    },
    defaultValue: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      value: this.defaultValue,
    };
  },
  watch: {
    defaultValue(newValue){
      this.value = newValue
    }
  },
  methods: {
    changeDate() {
      this.$emit("change", this.value);
    },
  },
};
</script>
