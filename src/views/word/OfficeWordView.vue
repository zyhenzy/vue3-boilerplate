<template>
  <div class='word-view'>
    <h1>vueofficedocx</h1>
    <input type='file' @change='handleImport' />
    <vueofficedocx v-if='wordSrc' :src='wordSrc' />
  </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue'
import vueofficedocx from '@vue-office/docx'

const wordSrc = ref<string>('')

/**
 * 导入word文件
 * @param e
 */
const handleImport = async (e) => {
  let _file = e.target.files[0] // 拿到blob文件流
  const fr = new FileReader() // FileReader对象是js提供的对file文件操作强大、方便的方案
  fr.readAsDataURL(_file)
  fr.onload = (res) => {
    wordSrc.value = res.target.result
  }
}


</script>

<style lang='scss' scoped>
.word-view {

}
</style>
