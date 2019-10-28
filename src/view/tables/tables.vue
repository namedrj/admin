<template>
  <div>
    <Card>
      <Button style="margin: 10px 0;" type="primary" @click="exportExcel">导出为Csv文件</Button>
      <tables ref="tables" editable searchable search-place="top" v-model="tableData" :columns="columns" @on-delete="handleDelete"/>
      <Page :total="total" show-total show-sizer />
    </Card>
  </div>
</template>

<script>
import Tables from '_c/tables'
import { getTableData } from '@/api/data'
export default {
  name: 'tables_page',
  components: {
    Tables
  },
  data () {
    return {
      columns: [
        // { title: '姓名', key: 'name', sortable: true },
        // { title: '邮箱', key: 'email', editable: true },
        // { title: '创建时间', key: 'createTime' },

        { title: '日期', key: 'createTime', sortable: true },
        { title: '访问uv', key: 'visituv', sortable: true  },
        { title: '访问pv', key: 'visitpv', sortable: true },
        { title: '广告点击uv', key: 'clickuv', sortable: true },
        { title: '下载数', key: 'downloads', sortable: true },
        { title: '注册数', key: 'registers', sortable: true },
        { title: '注册率', key: 'registerRate', sortable: true },
        { title: '广告收入', key: 'adRevenue', sortable: true },
        { title: '奖励成本', key: 'rewardCost', sortable: true },
        { title: '广告利润', key: 'adProfit', sortable: true },
        { title: '单uv贡献', key: 'uvContribute', sortable: true },
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
      total: 0,//总条数
      pageIndex: 1,//当前页
      pageSize: 10 //每页显示条数
    }
  },
  methods: {
    handleDelete (params) {
      console.log(params)
    },
    exportExcel () {
      this.$refs.tables.exportCsv({
        filename: `table-${(new Date()).valueOf()}.csv`
      })
    }
  },
  mounted () {
    getTableData().then(res => {
      this.tableData = res.data
      this.total = res.data.length
    })
  }
}
</script>

<style>

</style>
