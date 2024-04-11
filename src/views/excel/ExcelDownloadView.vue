<template>
  <div class='excel-import-view'>
    <h1>下载excel</h1>
    <a-button @click='handleDownload'>下载excel</a-button>
    <div v-html='excelHtml'></div>
  </div>
</template>

<script setup lang='ts'>

import { read, writeFile, utils } from 'xlsx'
import { ref } from 'vue'
import axios from 'axios'

const excelHtml = ref<string>('')

/**
 * 获取excel
 */
const handleDownload = async () => {
  const res = await axios.get('http://localhost:8000/download', { responseType: 'blob' }) // responseType要为blob类型
  let _file = res.data // 拿到blob文件流
  const arrayBuffer = await _file.arrayBuffer() // 转换为arrayBuffer
  const workbook = read(arrayBuffer)
  const sheet1 = workbook.Sheets['工作表1'] // 拿到第一个sheet数据
  const excelArray = utils.sheet_to_json(sheet1) // 拿到表格数组
  console.log('得到的数组为：')
  console.log(excelArray)
  excelHtml.value = utils.sheet_to_html(sheet1) // 拿到Html
}

</script>

<style lang='scss' scoped>
.excel-import-view {

}
</style>
