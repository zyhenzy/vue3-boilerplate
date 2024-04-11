<template>
  <div class='excel-import-view'>
    <h1>导入excel</h1>
    <input type='file' @change='handleImport' />
    <div>{{}}</div>
    <div v-html='excelHtml'></div>
  </div>
</template>

<script setup lang='ts'>

import { read, writeFile, utils } from 'xlsx'
import { ref } from 'vue'

const excelHtml = ref<string>('')

/**
 * 导入excel文件，并获取表格数组，生成html
 * @param e
 */
const handleImport = async (e) => {
  let _file = e.target.files[0] // 拿到blob文件流
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
