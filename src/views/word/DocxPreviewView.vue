<template>
  <div class='word-view'>
    <h1>docx-preview</h1>
    <input type='file' @change='handleImport' />
    <div ref='docxRef'></div>
  </div>
</template>

<script setup lang='ts'>
import { ref, unref } from 'vue'
import {renderAsync} from 'docx-preview'

const docxRef = ref()

/**
 * 导入word文件
 * @param e
 */
const handleImport = async (e) => {
  console.log(docxRef.value)
  let _file = e.target.files[0] // 拿到blob文件流
  renderAsync(
    _file,
    docxRef.value
  );
}


</script>

<style lang='scss' scoped>
.word-view {

}
</style>
