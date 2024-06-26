<template>
  <div class='stzb-view'>
    <a-form
        layout='inline'
        :model='formState'
        @finish='fetchConditionList'
    >
      <a-form-item>
        <a-input v-model:value='formState.user' placeholder='Username'>
          <template #prefix>
            <UserOutlined style='color: rgba(0, 0, 0, 0.25)'/>
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
    <a-table class='stzb-table' :columns='COLUMNS' :data-source='tableData' :scroll='{ x: 1200 }' size='small'
             :pagination="false" bordered>
      <template #bodyCell='{ column, record }'>
        <template v-if="column.key === 'price'">
          <span>
            {{record.priceMin / 100}} - {{record.priceMax / 100}}
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
            <a-switch v-model:checked="record.passFairShow" checked-children="公" checkedValue='0' unCheckedValue='2'/>
          </span>
        </template>
        <template v-else-if="column.key === 'apprentice'">
          <span>
            <a-switch v-model:checked="record.apprentice" checked-children="试" :checkedValue='true'
                      :unCheckedValue='false'/>
          </span>
        </template>
        <template v-else-if="column.key === 'advanceNum'">
          <span>
            <a-tag v-if="record.advanceNum" color="blue">{{record.advanceNum}}</a-tag>
          </span>
        </template>
        <template v-else-if="column.key === 'maxSeasonScore'">
          <span>
            <a-input-number v-model:value='record.maxSeasonScore'/>
          </span>
        </template>
        <template v-else-if="column.key === 'maxCoreScore'">
          <span>
            <a-input-number v-model:value='record.maxCoreScore'/>
          </span>
        </template>
        <template v-else-if="column.key === 'maxScore'">
          <span>
            <a-input-number v-model:value='record.maxScore'/>
          </span>
        </template>
        <template v-else-if="column.key === 'remark'">
          <span>
            <a-input v-model:value='record.remark'/>
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
    <ConditionModal ref='conditionModalRef' @save-condition='fetchConditionList' />
</template>

<script setup lang='ts'>
import {onMounted, reactive, ref} from 'vue'
import type {UnwrapRef} from 'vue'
import {UserOutlined} from '@ant-design/icons-vue'
import {COLUMNS} from '../condition.config'
import {SEARCH_STORE} from '@/constants/store'
import ConditionModal from '../component/ConditionModal.vue'
import {
  requestConditionDelete,
  requestPreform,
  requestConditionList,
  requestSetCookie
} from '../api'
import {heroMap} from '@/constants/stzb/hero'
import {useRouter} from 'vue-router'
import type {ICondition} from "@/modules/condition/api/data";

interface FormState {
  user: string;
}

const router = useRouter()

const tableData = ref<ICondition[]>([])

const conditionModalRef = ref()

const formState: UnwrapRef<FormState> = reactive({
  user: ''
})

onMounted(async () => {
  await fetchConditionList()
})

// 设置cookie
const handleSetCookie = async () => {
  let cookie = window.prompt('请输入cookie')
  await requestSetCookie(cookie as string)
}

// 获取检索列表
const fetchConditionList = async () => {
  const res = await requestConditionList()
  tableData.value = res.data.data
}

const handleAdd = () => {
  conditionModalRef.value.open()
}

const handleClearAll = () => {
  localStorage.removeItem(SEARCH_STORE)
}

// 保存当前列表
const HandleSaveAll = () => {
  // requestSaveList(unref(tableData))
}

// 执行任务
const handlePerform = (search: ICondition) => {
  requestPreform(search)
}

// 查看详情
const handleToDetail = (condition: ICondition) => {
  router.push({
    name: 'Account',
    params: {
      id: condition.id
    }
  })
}

// 删除
const handleDelete = async (condition: ICondition) => {
  await requestConditionDelete(condition.id)
  await fetchConditionList()
}
</script>

<style lang='scss' scoped>
.stzb-view {
  .stzb-table {
    margin-top: 12px;
  }
}
</style>
