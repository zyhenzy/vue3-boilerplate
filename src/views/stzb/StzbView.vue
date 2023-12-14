<script setup lang='ts'>
import { onMounted, reactive, ref, unref } from 'vue'
import type { UnwrapRef } from 'vue'
import type { FormProps } from 'ant-design-vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { COLUMNS } from './stzb.config'
import SearchModal from '@/components/SearchModal.vue'
import type { ISearch } from '@/api/stzb/data'
import { requestSearchList } from '@/api/stzb'
import { heroMap } from '@/constants/stzb/hero'

interface FormState {
  user: string;
}

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
  console.log(unref(tableData))
}

const handleAdd = () => {
  searchModalRef.value.open()
}
</script>

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
        <template v-else-if="column.key === 'action'">
          <span>
            <a-button>新增</a-button>
            <a-button>执行</a-button>
          </span>
        </template>
      </template>
    </a-table>
  </div>
  <SearchModal ref='searchModalRef' />
</template>

<style lang='scss' scoped>
.stzb-view {
  .stzb-table {
    margin-top: 12px;
  }
}
</style>
