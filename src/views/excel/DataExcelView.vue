<template>
  <div class='dom-excel-view'>
    <a-button @click='generateExcel'>数据生成excel</a-button>
    <a-list item-layout='horizontal' :data-source='list'>
      <template #renderItem='{ item }'>
        <a-list-item>
          <a-list-item-meta :description='item.language'>
            <template #title>
              <a href='https://www.antdv.com/'>{{ item.name }}</a>
            </template>
            <template #avatar>
              <a-avatar src='https://joeschmoe.io/api/v1/random' />
            </template>
          </a-list-item-meta>
        </a-list-item>
      </template>
    </a-list>
  </div>
</template>

<script setup lang='ts'>
import { ref, unref } from 'vue'
import { read, writeFile, utils } from 'xlsx'

const list = ref([
  { name: '小明', language: 'java' },
  { name: '小红', language: 'javascript' },
  { name: '小刚', language: 'nodejs' }
])

// object生成excel
const generateExcel = ()=>{
  const sheet = utils.json_to_sheet(unref(list)) // 创建一个sheet
  const workBook = utils.book_new() // 创建一个excel workBook
  utils.book_append_sheet(workBook,sheet,'sheet1') // 将sheet给到workbook
  writeFile(workBook,'test.xlsx')
}


</script>

<style lang='scss' scoped>
.dom-excel-view {

}
</style>
