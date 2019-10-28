// import Mock from 'mockjs'
// import { doCustomTimes } from '@/libs/util'
// const Random = Mock.Random

// export const getTableData = req => {
//   let tableData = []
//   doCustomTimes(5, () => {
//     tableData.push(Mock.mock({
//       name: '@name',
//       email: '@email',
//       createTime: '@date'
//     }))
//   })
//   return tableData
// }

// export const getDragList = req => {
//   let dragList = []
//   doCustomTimes(5, () => {
//     dragList.push(Mock.mock({
//       name: Random.csentence(10, 13),
//       id: Random.increment(10)
//     }))
//   })
//   return dragList
// }

import Mock from 'mockjs'
import { doCustomTimes } from '@/libs/util'
// import orgData from './data/org-data'
// import { treeData } from './data/tree-select'
const Random = Mock.Random

export const getTableData = req => {
  let tableData = []
  doCustomTimes(20, () => {
    tableData.push(Mock.mock({
      // name: '@cname',
      // email: '@email',
      // createTime: '@DATETIME("yyyy-MM-dd HH:mm:ss")'
      'createTime': Random.date('yyyy-MM-dd'),
      'visituv': Random.integer(28000, 31000),
      'visitpv': Random.integer(320000, 380000),
      'clickuv': Random.integer(22000, 25000),
      'downloads': Random.integer(14000, 18000),
      'registers': Random.integer(7000, 11000),
      'registerRate': Random.integer(50, 65) + '%',
      'adRevenue': '￥' + Random.integer(10000, 100000),
      'rewardCost': '￥' + Random.integer(5000, 30000),
      'adProfit': '￥' + Random.integer(50000, 80000),
      'uvContribute': Random.string('symbol', 5)
    }))
  })
  return tableData
}

export const getDragList = req => {
  let dragList = []
  doCustomTimes(5, () => {
    dragList.push(Mock.mock({
      name: Random.csentence(10, 13),
      id: Random.increment(10)
    }))
  })
  return dragList
}

export const uploadImage = req => {
  return Promise.resolve()
}

// export const getOrgData = req => {
//   return orgData
// }

// export const getTreeSelectData = req => {
//   return treeData
// }
