<template>
  <div>
    <!-- <BreadCrumb /> -->
    <!-- <div class="first_title">商品库列表</div> -->
    <SearchGroup
      :searchData="searchsData"
      @searchButton="searchButton"
      @changeParams="changeParams"
      :initParams="initParams"
    />
    <Table
      :tableData="tableData"
      :columnsData="columnsData"
      hasExpend
      :expendColumnsData="expendColumnsData"
      @statusChange="changeStatus"
      @expandChange="toggleRowExpansion"
    >
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small"
            >查看</el-button
          >
          <el-button type="text" size="small" @click="showVisible"
            >编辑</el-button
          >
          <ConfimDialog @deleteSuccess="deleteSuccess" />
        </template>
      </el-table-column>
    </Table>
    <Pagination
      :total="totalData"
      :currentPage="initParams.pageNum"
      :pageSize="initParams.pageSize"
      @pageChange="pageChange"
    />
    <DetailModal :visible="dialogVisisble" @close="closeVisible" :staticData="staticData"/>
  </div>
</template>
<script>
import Pagination from "@components/pagination";
import ConfimDialog from "@components/confimDialog";
// import BreadCrumb from "@components/breadcrumb";
import Table from "@components/table";
import { getList, changeSpuStatus, getSkuList, getDefaultStatic } from "@/api/index.js";
import SearchGroup from "@components/searchGroup";
import DetailModal from "./detail.vue";
export default {
  components: {
    Pagination,
    // BreadCrumb,
    Table,
    ConfimDialog,
    SearchGroup,
    DetailModal,
  },
  data() {
    return {
      totalData: 0,
      currentPage: 1,
      columnsData: [
        {
          id: "mainPic",
          label: "主图",
          field: "mainPic",
          type: "image",
        },
        {
          id: "title",
          label: "标题",
          field: "title",
          classname: "line_2",
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
          type: "switch",
        },
      ],
      expendColumnsData: [
        {
          id: "mainPic",
          label: "规格",
          field: "spec",
        },
        {
          id: "mainPic",
          label: "单位",
          field: "specUnit",
        },
        {
          id: "mainPic",
          label: "价格",
          field: "price",
        },
      ], // 扩展的内容
      searchsData: [
        {
          type: "input",
          label: "商品名：",
          field: "title",
        },
        {
          type: "searchSelect",
          label: "项目：",
          data: [
            {
              value: "选项1",
              label: "黄金糕",
            },
            {
              value: "选项2",
              label: "双皮奶",
            },
            {
              value: "选项3",
              label: "蚵仔煎",
            },
            {
              value: "选项4",
              label: "龙须面",
            },
            {
              value: "选项5",
              label: "北京烤鸭",
            },
          ],
        },
        {
          type: "select",
          label: "类型：",
          field: "",
          data: this.staticData?.type?.split(','),
        },
        {
          type: "datePicker",
          label: "日期：",
          field: "time",
          click: this.changeParams,
        },
      ], // 搜索的内容
      tableData: [],
      initParams: {
        pageNum: 1,
        pageSize: 10,
      },
      dialogVisisble: false,
      staticData: {}
    };
  },
  created(){
    this.getInitData()
  },
  mounted() {
    this.getDataList();
  },
  methods: {
    handleClick(item) {
      console.log(item);
    },
    // 获取列表数据
    getDataList() {
      getList(this.initParams)
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
    async changeStatus(params) {
      await changeSpuStatus(params);
      this.getDataList();
    },
    deleteSuccess() {
      this.getDataList();
    },
    // 搜索
    searchButton() {
      this.getDataList();
    },
    changeParams(params) {
      this.initParams = params;
    },
    closeVisible() {
      this.dialogVisisble = false;
    },
    showVisible() {
      this.dialogVisisble = true;
    },
    // 获取sku数据
    async getSkuList(id) {
      await getSkuList(id).then((res) => {
        let index = this.tableData.findIndex(key=>key.id === id)
        index > -1 && (this.tableData[index].skuList = res.skuList)
      });
    },
    toggleRowExpansion(rows, expandRows) {
      let index = expandRows.findIndex(key=>key.id === rows.id)
      index !== -1 && this.getSkuList(rows.id)
    },
    async getInitData(){
      await getDefaultStatic().then(res=>{
        console.log(res.type)
        this.staticData = res
      })
    }
  },
};
</script>
