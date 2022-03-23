<template>
  <el-select
    :filterable="filterable"
    placeholder="请选择"
    clearable
    v-model="value"
    @change="changeValue"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
export default {
  props: {
    options: [],
    selectValue: {
      type: String || Number,
      value: ''
    }
  },
  data() {
    return {
      value: ''
    };
  },
  watch: {
    selectValue(newValue){
      this.value = newValue
    }
  },
  methods: {
    changeValue(value){
      this.$emit('changeSelectValue', value)
    }
  }
};
</script>
