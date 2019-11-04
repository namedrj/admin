<template>
  <div>
    <Card>

      <div style="display: flex;align-items: center;">
        <div style="display: flex;justify-content: flex-start;align-items: center;width: 20%"><Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出数据</Button></div>
        <div style="display: flex;justify-content: flex-end;align-items: center;width: 80%">
          <span>按日期筛选：</span>
          <DatePicker
            type="daterange"
            placement="bottom-end"
            placeholder="选择时间范围"
            style="width: 200px;"
            @on-change="onTimeRange"
          ></DatePicker>
        </div>
      </div>
      <tables
        ref="tables"
        editable
        searchable
        search-place="top"
        v-model="tableData"
        :columns="columns"
        @on-delete="handleDelete"
      />
      <div style="display: flex; width: 100%; justify-content: flex-start;align-items: center; padding: 10px 0;">
      <Page :total="total" show-total :current="current" @on-change="changePage" />
      </div>
    </Card>
  </div>
</template>

<script>
import Tables from "_c/tables";
import { getTableData, getExport } from "@/api/data";
export default {
  name: "tables_page",
  components: {
    Tables
  },
  data() {
    return {
      columns: [
        // { title: '姓名', key: 'name', sortable: true },
        // { title: '邮箱', key: 'email', editable: true },
        // { title: '创建时间', key: 'createTime' },

        { title: "日期", key: "createTime", sortable: true },
        { title: "访问uv", key: "visituv", sortable: true },
        { title: "访问pv", key: "visitpv", sortable: true },
        { title: "广告点击uv", key: "clickuv", sortable: true },
        { title: "下载数", key: "downloads", sortable: true },
        { title: "注册数", key: "registers", sortable: true },
        { title: "注册率", key: "registerRate", sortable: true },
        { title: "广告收入", key: "adRevenue", sortable: true },
        { title: "奖励成本", key: "rewardCost", sortable: true },
        { title: "广告利润", key: "adProfit", sortable: true },
        { title: "单uv贡献", key: "uvContribute", sortable: true }
        // {
        //   title: '操作',
        //   key: 'handle',
        //   options: ['delete'],
        //   button: [
        //     (h, params, vm) => {
        //       return h('Poptip', {
        //         props: {
        //           confirm: true,
        //           title: '你确定要删除吗?'
        //         },
        //         on: {
        //           'on-ok': () => {
        //             vm.$emit('on-delete', params)
        //             vm.$emit('input', params.tableData.filter((item, index) => index !== params.row.initRowIndex))
        //           }
        //         }
        //       }, [
        //         h('Button', '自定义删除')
        //       ])
        //     }
        //   ]
        // }
      ],
      tableData: [],
      total: 0, //总条数
      current: 1, //当前页
    };
  },
  methods: {
    handleDelete(params) {},
    exportExcel() {
      this.$refs.tables.exportCsv({
        filename: `table-${new Date().valueOf()}`
      });
    },
    onTimeRange(timeRange, type) {
      let username = localStorage.getItem('username');
      let token = localStorage.getItem('token');
      let pid = "2";
      let page = "0";
      let start = new Date(timeRange[0]).getTime();
      let end = new Date(timeRange[1]).getTime();
      let params = {
        username,
        token,
        pid,
        page,
        start,
        end
      }
      // 时间筛选接口
      getTableData(params).then(res => {
        if (res.data.status === 0) {
        this.tableData = res.data.data.map((item, index) => {
          return {
            createTime: item.day,
            visituv: item.uv,
            visitpv: item.pv,
            clickuv: item.uv,
            downloads: item.download,
            registers: item.regist,
            registerRate: item.regist_change,
            adRevenue: item.coming,
            rewardCost: item.cost,
            adProfit: item.profit,
            uvContribute: item.uv_contribute
          };
        });
        this.total = this.tableData.length;
      }
      })
    },
    changePage() {
      console.log(this.current)
    }
  },
  mounted() {
    let username = localStorage.getItem('username');
    let token = localStorage.getItem('token');
    let pid = localStorage.getItem('pid');
    let page = "0";
    let params = {
      username,
      token,
      pid,
      page
    };
    // 表格信息查询接口
    getTableData(params).then(res => {
      if (res.data.status === 0) {
        this.tableData = res.data.data.map((item, index) => {
          return {
            createTime: item.day,
            visituv: item.uv,
            visitpv: item.pv,
            clickuv: item.uv,
            downloads: item.download,
            registers: item.regist,
            registerRate: item.regist_change,
            adRevenue: item.coming,
            rewardCost: item.cost,
            adProfit: item.profit,
            uvContribute: item.uv_contribute
          };
        });
        this.total = this.tableData.length;
      }
    });


  }
};
</script>

<style>
</style>
