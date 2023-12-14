<script setup lang='ts'>
import { reactive, ref } from 'vue'
import type { UnwrapRef } from 'vue'
import type { FormProps } from 'ant-design-vue'
import { UserOutlined } from '@ant-design/icons-vue'
import { COLUMNS } from './stzb.config'
import SearchModal from '@/components/SearchModal.vue'

interface FormState {
  user: string;
}

const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    tags: ['nice', 'developer']
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
]

const searchModalRef = ref(null)
const formState: UnwrapRef<FormState> = reactive({
  user: ''
})

const handleFinish: FormProps['onFinish'] = values => {
  console.log(values, formState)
}

const handleFinishFailed: FormProps['onFinishFailed'] = errors => {
  console.log(errors)
}

const handleAdd = ()=>{
  searchModalRef.value.open()
}
</script>

<template>
  <div class='stzb-view'>
    <a-form
      layout='inline'
      :model='formState'
      @finish='handleFinish'
      @finishFailed='handleFinishFailed'
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
    <a-table class='stzb-table' :columns='COLUMNS' :data-source='data'>
      <template #bodyCell='{ column, record }'>
        <template v-if="column.key === 'price'">
          {{ record.priceMin }} - {{ record.priceMax }}
        </template>
        <template v-else-if="column.key === 'cardHero'">
          <span>
            <a-tag v-for='hero in record.cardHero' :key='hero.id'>
              {{ hero.name }}
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
  <SearchModal ref='searchModalRef'/>
</template>

<style lang='scss' scoped>
.stzb-view {
  .stzb-table {
    margin-top: 12px;
  }
}
</style>
