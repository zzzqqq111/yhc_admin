<template>
  <el-table :data="tableData" style="width: 100%" @expand-change="toggleRowExpansion">
    <!-- 展开table -->
    <el-table-column type="expand" v-if="hasExpend">
      <template slot-scope="scope">
        <el-table :data="scope.row.skuList" style="width: 100%">
          <el-table-column
            :label="item.label"
            :prop="item.field"
            v-for="item in expendColumnsData"
            :key="item.id"
            align='center'
          >
          </el-table-column>
        </el-table>
      </template>
    </el-table-column>
    <el-table-column
      :label="item.label"
      :prop="item.field"
      v-for="item in columnsData"
      :key="item.id"
    >
      <template slot-scope="scope">
        <!-- 开关 -->
        <el-switch
          v-if="item.type === 'switch'"
          @change="changeStatus(scope.row.id, $event)"
          :value="Boolean(scope.row[item.id])"
        ></el-switch>
        <!-- 展示图片 -->
        <img
          v-else-if="item.type === 'image'"
          :src="scope.row[item.id]"
          width="80"
          height="60"
        />
        <span v-else>{{ scope.row[item.id] }}</span>
      </template>
    </el-table-column>
    <slot />
  </el-table>
</template>
<script>
export default {
  props: {
    tableData: {
      type: Array,
      value: [],
    },
    columnsData: {
      type: Array,
      value: [],
    },
    expendColumnsData: {
      type: Array,
      value: [],
    },
    hasExpend: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {
    changeStatus(id, value) {
      this.$emit("statusChange", {
        id,
        status: value ? 1 : 0,
      });
    },
    toggleRowExpansion(row, expandRows){
      this.$emit('expandChange', row, expandRows)
    }
  },
};
</script>
