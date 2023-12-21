<template>
  <div class='stzb-view'>
    <a-form
      layout='inline'
      :model='formState'
      @finish='fetchSearchList'
    >
      <a-form-item>
        <a-input v-model:value='formState.user' placeholder='Username'>
          <template #prefix>
            <UserOutlined style='color: rgba(0, 0, 0, 0.25)' />
          </template>
        </a-input>
      </a-form-item>
      <a-form-item>
        <a-button type='primary' html-type='submit'>查询</a-button>
      </a-form-item>
      <a-form-item>
        <a-button type='primary' @click='handleClearAll'>清空</a-button>
      </a-form-item>
      <a-form-item>
        <a-button type='primary' @click='handleAdd'>新增</a-button>
      </a-form-item>
    </a-form>
    <a-table class='stzb-table' :columns='COLUMNS' :data-source='tableData'>
      <template #bodyCell='{ column, record }'>
        <template v-if="column.key === 'price'">
          {{ record.priceMin }} - {{ record.priceMax }}
        </template>
        <template v-else-if="column.key === 'cardHeroId'">
          <span>
            <a-tag v-for='heroId in record.cardHeroId' :key='heroId'>
              {{ heroMap[heroId] }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'passFairShow'">
            <a-tag v-if="record.passFairShow==='0'" color='blue'>
              公
            </a-tag>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a-button @click='handlePerform(record)'>执行</a-button>
            <a-button @click='handleToDetail(record)'>查看</a-button>
            <a-button @click='handleDelete(record)'>删除</a-button>
          </span>
        </template>
      </template>
    </a-table>
  </div>
  <SearchModal ref='searchModalRef' @save-search='fetchSearchList' />
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref } from 'vue'
import type { UnwrapRef } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { COLUMNS } from './stzb.config'
import { SEARCH_STORE } from '@/constants/store'
import SearchModal from '@/components/SearchModal.vue'
import type { ISearch } from '@/api/stzb/data'
import { requestDeleteSearch, requestPreform, requestSearchList } from '@/api/stzb'
import { heroMap } from '@/constants/stzb/hero'
import { useRouter } from 'vue-router'

interface FormState {
  user: string;
}

const router = useRouter()

const tableData = ref<ISearch[]>([])

const searchModalRef = ref()

const formState: UnwrapRef<FormState> = reactive({
  user: ''
})

onMounted(async () => {
  await fetchSearchList()
})

// 获取检索列表
const fetchSearchList = async () => {
  tableData.value = await requestSearchList()
}

const handleAdd = () => {
  searchModalRef.value.open()
}

const handleClearAll = () => {
  localStorage.removeItem(SEARCH_STORE)
}

// 执行任务
const handlePerform = (search: ISearch) => {
  requestPreform(search)
}

// 查看详情
const handleToDetail = (search: ISearch) => {
  router.push({
    name: 'Account',
    params: {
      id: search.id
    }
  })
}

// 删除
const handleDelete = async (search: ISearch) => {
  requestDeleteSearch(search.id as string)
  await fetchSearchList()
}
</script>

<style lang='scss' scoped>
.stzb-view {
  .stzb-table {
    margin-top: 12px;
  }
}
</style>
