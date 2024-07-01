<template>
  <div class='account-view'>
    <a-table class='account-table' :columns='ACCOUNT_COLUMNS' :data-source='tableData' :scroll='{ x: 1800 }' bordered>
      <template #bodyCell='{ column, record }'>
        <template v-if="column.key === 'price'">
          <span>
            {{ record.price / 100 }}
          </span>
        </template>
        <template v-if="column.key === 'intermediaryPrice'">
          <span>
            <span v-if="record.intermediaryPrice">
                  {{ record.intermediaryPrice / 100 }}
            </span>
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
          <a-button @click='handleUpdatePrice(record)'>改价</a-button>
          <a-button @click='handleDelete(record)'>删除</a-button>
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
import {requestAccountDelete, requestSearchDetail, requestUpdatePrice} from '../api/index'
import { useRoute } from 'vue-router'
import AccountModal from '../component/AccountModal.vue'
import {message} from "ant-design-vue";

const tableData = ref<Account[]>([])
const accountModalRef = ref()
let conditionId

onMounted(async () => {
  const route = useRoute()
  if (route.params.id) {
    conditionId = route.params.id as string
    await fetchAccountList()
  }
})

// 获取检索列表
const fetchAccountList = async () => {
  const { data } = await requestSearchDetail(conditionId)
  if (data.data && data.data.length > 0) {
    tableData.value = data.data
  }
}

// 查看详情
const handleShow = (account: Account) => {
  accountModalRef.value.open(account)
}

/**
 * 改价
 * @param account
 */
const handleUpdatePrice = async (account: Account) => {
  let priceStr = window.prompt('请输入中介价格')
  if(priceStr){
    await requestUpdatePrice({id:account.id,price:Number(priceStr)})
    await fetchAccountList()
    message.success('改价成功')
  }
}

/**
 * 删除账号
 * @param account
 */
const handleDelete = async (account: Account) => {
  await requestAccountDelete(account.id)
  await fetchAccountList()
  message.success('删除成功')
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
