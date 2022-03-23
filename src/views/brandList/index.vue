<template>
  <div>
    <Table
      :tableData="tableData"
      :columnsData="columnsData"
      @statusChange="changeStatus"
      @expandChange="toggleRowExpansion"
    >
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!-- <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          > -->
          <el-button type="text" size="small" @click="showVisible"
            >编辑</el-button
          >
          <ConfimDialog @deleteSuccess="deleteSuccess(scope.row)" />
        </template>
      </el-table-column>
    </Table>
    <Pagination
      :total="totalData"
      :currentPage="initParams.pageNum"
      :pageSize="initParams.pageSize"
      @pageChange="pageChange"
    />
    <DetailModal  :visible="dialogVisisble" />
  </div>
</template>

<script>
import {Pagination, ConfimDialog, Table} from "@components";
import { getBrandList } from "@/api/index.js";
import DetailModal from './detail.vue'
export default {
  components: {
    Table,
    Pagination,
    ConfimDialog,
    DetailModal
  },
  data() {
    return {
      columnsData: [
        {
          id: "id",
          label: "品牌Id",
          field: "id",
        },
        {
          id: "logo",
          label: "logo",
          field: "logo",
          type: 'image'
        },
        {
          id: "name",
          label: "品牌名称",
          field: "name",
        }
      ],
      tableData: [],
      totalData: 0,
      initParams: {
        pageNum: 1,
        pageSize: 10,
      },
      dialogVisisble: false
    };
  },
  mounted() {
    this.getDataList();
  },
  methods: {
    changeStatus() {},
    toggleRowExpansion() {},
    getDataList() {
      getBrandList(this.initParams)
        .then((res) => {
          this.tableData = res.records || [];
          this.totalData = res.total || 0;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    pageChange(params) {
      this.initParams = {
        ...this.initParams,
        ...params,
      };
      this.getDataList();
    },
    closeVisible() {
      this.dialogVisisble = false;
    },
    showVisible() {
      this.dialogVisisble = true;
    },
    deleteSuccess(){

    }
  },
};
</script>
