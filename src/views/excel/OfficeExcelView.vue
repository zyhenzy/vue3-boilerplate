<!-- office excel -->
<template>
  <div class='dom-excel-view'>
    <input type='file' @change='handleImport' />
    <vueofficeExcel :src='excelSrc' style='height:500px' />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import vueofficeExcel from '@vue-office/excel'

const excelSrc = ref<string>('src/assets/file/test.xlsx')

/**
 * 导入excel文件，加载到office中
 * @param e
 */
const handleImport = async (e) => {
  let _file = e.target.files[0] // 拿到blob文件流
  const fr = new FileReader() // FileReader对象是js提供的对file文件操作强大、方便的方案
  fr.readAsDataURL(_file)
  fr.onload = (res) => {
    excelSrc.value = res.target.result
  }
}
</script>

<style lang='scss' scoped>
.dom-excel-view {

}
</style>
