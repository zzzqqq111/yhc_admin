<template>
  <el-select
    :filterable="filterable"
    placeholder="请选择"
    clearable
    :remote="remote"
    :remote-method="remoteMount"
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
    remote: {
      type: Boolean,
      value: false
    },
    filterable: {
      type: Boolean,
      value: false
    },
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
    remoteMount(query){
      if(query !== ''){
        this.loading = true
        setTimeout(()=>{
          this.loading = false
        }, 200)
      }else{
        this.options = []
      }
    },
    changeValue(value){
      this.$emit('changeSelectValue', value)
    }
  }
};
</script>
