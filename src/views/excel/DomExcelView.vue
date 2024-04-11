<template>
  <div class='dom-excel-view'>
    <a-button @click='generateExcel'>DOM生成excel</a-button>
    <a-table id='excelTable' :dataSource='dataSource' :columns='columns' />
  </div>
</template>

<script setup lang='ts'>
import { ref, unref } from 'vue'
import { read, writeFile, utils } from 'xlsx'

const columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age'
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address'
  }
]

const dataSource = ref([
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
])

// dom生成excel
const generateExcel = () => {
  const antdTableDom = document.getElementById('excelTable')
  const [tableDom] = antdTableDom.getElementsByTagName('table') // 获取table dom节点
  const tableWorkSheet = utils.table_to_sheet(tableDom) // 将tableDom转换成worksheet
  const workBook = utils.book_new() // 创建一个excel workBook
  utils.book_append_sheet(workBook, tableWorkSheet, 'sheet1') // 将sheet给到workbook
  writeFile(workBook, 'test.xlsx')
}


</script>

<style lang='scss' scoped>
.dom-excel-view {

}
</style>
