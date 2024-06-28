<template>
  <div class='account-view'>
    <a-table class='account-table' :columns='ACCOUNT_COLUMNS' :data-source='tableData' :scroll='{ x: 1800 }' bordered>
      <template #bodyCell='{ column, record }'>
        <template v-if="column.key === 'price'">
          <span>
            {{ record.price / 100 }}
          </span>
        </template>
        <template v-if="column.key === 'cardPrice'">
          <span>
            {{ record.cardPrice / 100 }}
          </span>
        </template>
        <template v-if="column.key === 'weaponPrice'">
          <span>
            {{ record.weaponPrice / 100 }}
          </span>
        </template>
        <template v-else-if="column.key === 'apprentice'">
          <span>
            <a-tag v-if="record.apprentice" color='red'>
              试
            </a-tag>
          </span>
        </template>
        <template v-if="column.key === 'tag'">
          <span>
            <a-tag v-for='(tag,index) in record.tag' :key='index' color='blue'>
              {{ tag }}
            </a-tag>
          </span>
        </template>
        <template v-if="column.key === 'heroTag'">
          <span>
            <a-tag v-for='(tag,index) in record.heroTag' :key='index' color='green'>
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
          <a-button @click='handleGo(record)'>跳转</a-button>
          <a-button @click='handleShow(record)'>详情</a-button>
        </template>
      </template>
    </a-table>
  </div>
  <account-modal ref='accountModalRef'/>
</template>

<script setup lang='ts'>
import { onMounted, ref } from 'vue'
import { ACCOUNT_COLUMNS } from '../condition.config'
import type { Account } from '../api/data'
import { requestSearchDetail } from '../api/index'
import { useRoute } from 'vue-router'
import AccountModal from '../component/AccountModal.vue'

const tableData = ref<Account[]>([])
const accountModalRef = ref()

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
      tableData.value = data.data
      localStorage.setItem(searchId, JSON.stringify(tableData.value))
    } else {
      const list = localStorage.getItem(searchId)
      if (list) {
        tableData.value = JSON.parse(list)
      }
    }
  } catch (e) {
    const list = localStorage.getItem(searchId)
    if (list) {
      tableData.value = JSON.parse(list)
    }
  }
}

// 查看详情
const handleShow = (account: Account) => {
  accountModalRef.value.open(account)
}

// 跳转到链接
const handleGo = (account: Account) => {
  window.open(`https://stzb.cbg.163.com/cgi/mweb/equip/1/${account.id}`)
}

</script>

<style lang='scss' scoped>
.account-view {
  .account-table {
    margin-top: 12px;
  }
}
</style>
