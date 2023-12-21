<template>
  <div class='account-view'>
    <a-table class='account-table' :columns='DETAIL_COLUMNS' :data-source='tableData'>
      <template #bodyCell='{ column, record }'>
        <template v-if="column.key === 'tag'">
          <span>
            <a-tag v-for='(tag,index) in record.tag' :key='index' color='blue'>
              {{ tag }}
            </a-tag>
          </span>
        </template>
        <template v-if="column.key === 'skillTag'">
          <span>
            <a-tag v-for='(tag,index) in record.skillTag' :key='index' color='red'>
              {{ tag }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <a-button @click='handleToDetail(record)'>查看</a-button>
        </template>
      </template>
    </a-table>
  </div>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { DETAIL_COLUMNS } from './stzb.config'
import type { Account } from '@/api/stzb/data'
import { requestSearchDetail } from '@/api/stzb'
import { heroMap } from '@/constants/stzb/hero'
import { useRoute } from 'vue-router'

const tableData = ref<Account[]>([])

onMounted( async () => {
  const route = useRoute()
  await fetchAccountList(route.query.id)
})

// 获取检索列表
const fetchAccountList = async (searchId:string) => {
  tableData.value = await requestSearchDetail(searchId)
}
// 查看详情
const handleToDetail = (account: Account) => {
  console.log(account)
}

</script>

<style lang='scss' scoped>
.account-view {
  .account-table {
    margin-top: 12px;
  }
}
</style>
