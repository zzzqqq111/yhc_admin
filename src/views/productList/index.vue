<template>
  <div>
    <!-- <BreadCrumb /> -->
    <div class="first_title">商品库列表</div>
    <Table :tableData="tableData" :columnsData="columnsData" hasExpend="true">
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </Table>
    <Pagination
      :total="totalData"
      :currentPage="initPageSize.pageNum"
      :pageSize="initPageSize.pageSize"
      @pageChange="pageChange"
    />
  </div>
</template>
<script>
import Pagination from "@components/pagination";
// import BreadCrumb from "@components/breadcrumb";
import Table from "@components/table";
import { getList } from '@/api/index.js'
export default {
  components: {
    Pagination,
    // BreadCrumb,
    Table,
  },
  data() {
    return {
      total: 54,
      currentPage: 1,
      columnsData: [
        {
          id: "mainPic",
          label: "主图",
          field: "mainPic",
          type: 'image'
        },
        {
          id: "title",
          label: "标题",
          field: "title",
          classname: 'line_2'
        },
        {
          id: "categoryText",
          label: "类目",
          field: "categoryText",
        },
        {
          id: "typeText",
          label: "类型",
          field: "typeText",
        },
        {
          id: "tradeTypeText",
          label: "交易类型",
          field: "tradeTypeText",
        },
        {
          id: "status",
          label: "状态",
          field: "status",
          type: 'switch'
        },
      ],
      tableData: [],
      initPageSize: {
        pageNum: 1,
        pageSize: 10
      },
      
    };
  },
  mounted(){
    getList({pageSize: 10, pageNum: 1}).then(res=>{
      this.tableData = res.records || []
      this.totalData = res.total || 0
    })
  },
  methods: {
    handleClick(item) {
      console.log(item);
    },
    getDataList(){
      getList(this.initPageSize).then(res=>{
        this.tableData = res.records || []
        this.totalData = res.total || 0
      })
    },
    pageChange(params){
      this.initPageSize = params
      this.getDataList()
    }
  },
};
</script>
