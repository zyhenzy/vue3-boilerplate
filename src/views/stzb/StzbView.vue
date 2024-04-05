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
        <a-button type='primary' @click='handleSetCookie'>设置Cookie</a-button>
      </a-form-item>
      <a-form-item>
        <a-button type='primary' html-type='submit'>查询</a-button>
      </a-form-item>
      <a-form-item>
        <a-button type='primary' @click='HandleSaveAll'>保存</a-button>
      </a-form-item>
      <a-form-item>
        <a-button type='primary' @click='handleClearAll'>清空</a-button>
      </a-form-item>
      <a-form-item>
        <a-button type='primary' @click='handleAdd'>新增</a-button>
      </a-form-item>
    </a-form>
    <a-table class='stzb-table' :columns='COLUMNS' :data-source='tableData' :scroll='{ x: 1200 }' size='small' bordered>
      <template #bodyCell='{ column, record }'>
        <template v-if="column.key === 'price'">
          <span>
            {{ record.priceMin }} - {{ record.priceMax }}
          </span>
        </template>
        <template v-else-if="column.key === 'cardHeroId'">
          <span>
            <a-tag v-for='heroId in record.cardHeroId' :key='heroId'>
              {{ heroMap[heroId] }}
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'passFairShow'">
          <span>
            <a-tag v-if="record.passFairShow==='0'" color='blue'>
              公
            </a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'apprentice'">
          <span>
            <a-tag v-if='record.apprentice' color='red'>
              试
            </a-tag>
          </span>
        </template>


        <template v-else-if="column.key === 'maxCoreScore'">
          <span>
            <a-input-number v-model:value='record.maxCoreScore' />
          </span>
        </template>
        <template v-else-if="column.key === 'maxRedScore'">
          <span>
            <a-input-number v-model:value='record.maxRedScore' />
          </span>
        </template>
        <template v-else-if="column.key === 'maxScore'">
          <span>
            <a-input-number v-model:value='record.maxScore' />
          </span>
        </template>
        <template v-else-if="column.key === 'remark'">
          <span>
            <a-input v-model:value='record.remark' />
          </span>
        </template>
        <template v-else-if="column.key === 'action'">
          <span>
            <a-button @click='handlePerform(record)' size='small'>执行</a-button>
            <a-button @click='handleToDetail(record)' size='small'>查看</a-button>
            <a-button @click='handleDelete(record)' size='small'>删除</a-button>
          </span>
        </template>
      </template>
    </a-table>
  </div>
  <SearchModal ref='searchModalRef' @save-search='fetchSearchList' />
</template>

<script setup lang='ts'>
import { onMounted, reactive, ref, unref } from 'vue'
import type { UnwrapRef } from 'vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { COLUMNS } from './stzb.config'
import { SEARCH_STORE } from '@/constants/store'
import SearchModal from '@/components/SearchModal.vue'
import type { ISearch } from '@/api/stzb/data'
import { requestDeleteSearch, requestPreform, requestSaveList, requestSearchList, requestSetCookie } from '@/api/stzb'
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

// 设置cookie
const handleSetCookie = async () => {
  let cookie = window.prompt('请输入cookie')
  await requestSetCookie(cookie as string)
}

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

// 保存当前列表
const HandleSaveAll = () => {
  requestSaveList(unref(tableData))
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
