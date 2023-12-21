<template>
  <div class='account-view'>
    <a-table class='account-table' :columns='DETAIL_COLUMNS' :data-source='tableData' :scroll='{ x: 1300 }' bordered>
      <template #bodyCell='{ column, record }'>
        <template v-if="column.key === 'price'">
          <span>
            {{ record.price / 100 }}
          </span>
        </template>
        <template v-if="column.key === 'scoreRate'">
          <span>
            {{ record.scoreRate.toFixed(2) }}
          </span>
        </template>
        <template v-if="column.key === 'coreScoreRate'">
          <span>
            {{ record.coreScoreRate.toFixed(2) }}
          </span>
        </template>
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
          <a-button @click='handleToDetail(record)'>跳转</a-button>
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
import { useRoute } from 'vue-router'

const tableData = ref<Account[]>([])

onMounted(async () => {
  const route = useRoute()
  if (route.params.id) {
    await fetchAccountList(route.params.id)
  }
})

// 获取检索列表
const fetchAccountList = async (searchId: string) => {
  const { data } = await requestSearchDetail(searchId)
  tableData.value = data.data
}
// 查看详情
const handleToDetail = (account: Account) => {
  window.open(`https://stzb.cbg.163.com/cgi/mweb/equip/1/${account.game_ordersn}`)
}

</script>

<style lang='scss' scoped>
.account-view {
  .account-table {
    margin-top: 12px;
  }
}
</style>
