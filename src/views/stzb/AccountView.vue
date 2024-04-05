<template>
  <div class='account-view'>
    <a-table class='account-table' :columns='DETAIL_COLUMNS' :data-source='tableData' :scroll='{ x: 1200 }' bordered>
      <template #bodyCell='{ column, record }'>
        <template v-if="column.key === 'price'">
          <span>
            {{ record.price / 100 }}
          </span>
        </template>
        <template v-if="column.key === 'redScore'">
          <span>
            {{ record.redScore.toFixed(0) }}
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
        <template v-if="column.key === 'redScoreRate'">
          <span>
            {{ record.redScoreRate.toFixed(2) }}
          </span>
        </template>
        <template v-if="column.key === 'seasonScore'">
          <span>
            {{ record.seasonScore.toFixed(2) }}
          </span>
        </template>
        <template v-if="column.key === 'seasonScoreRate'">
          <span>
            {{ record.seasonScoreRate.toFixed(2) }}
          </span>
        </template>
        <template v-if="column.key === 'integrity'">
          <span>
            {{ record.integrity }}
          </span>
        </template>
        <template v-if="column.key === 'tag'">
          <span>
            <a-tag v-for='(tag,index) in record.tag' :key='index' color='blue'>
              {{ tag }}
            </a-tag>
          </span>
        </template>
        <template v-if="column.key === 'heTag'">
          <span>
            <a-tag v-for='(tag,index) in record.heTag' :key='index' color='blue'>
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
    await fetchAccountList(route.params.id as string)
  }
})

// 获取检索列表
const fetchAccountList = async (searchId: string) => {
  try {
    const { data } = await requestSearchDetail(searchId)
    if (data.data && data.data.length > 0) {
      console.log(data.data)
      debugger
      tableData.value = data.data
      localStorage.setItem(searchId,JSON.stringify(tableData.value))
    } else {
      const list = localStorage.getItem(searchId)
      if (list) {
        tableData.value = JSON.parse(list)
      }
    }
  }catch (e){
    const list = localStorage.getItem(searchId)
    if (list) {
      tableData.value = JSON.parse(list)
    }
  }
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
