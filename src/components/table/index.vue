<template>
  <el-table :data="tableData" style="width: 100%">
    <!-- 展开table -->
    <el-table-column type="expand" v-if="hasExpend">
      <template >
        <el-table :data="expendTableData" style="width: 100%">
          <el-table-column label="规格" prop="SKUID"> </el-table-column>
          <el-table-column label="价格" prop="SKUID"> </el-table-column>
          <el-table-column label="单位" prop="SKUID"> </el-table-column>
          <el-table-column
            :label="item.label"
            :prop="item.field"
            v-for="item in expendColumnsData"
            :key="item.id"
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
        <el-switch v-if="item.type === 'switch'" v-model="scope.row[item.id]">   
        </el-switch>
        <!-- 展示图片 -->
        <img
          v-if="item.type === 'image'"
          :src="scope.row[item.id]"
          width="80"
          height="60"
        />
        <div v-else>{{ scope.row[item.id] }}</div>
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
      default() {
        return [];
      },
    },
    columnsData: {
      type: Array,
      default() {
        return [];
      },
    },
    expendColumnsData: {
      type: Array,
      default() {
        return [];
      },
    },
    hasExpend: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
};
</script>
