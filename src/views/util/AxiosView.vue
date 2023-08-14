<script setup lang="ts">
import {createVNode, onMounted, ref} from 'vue'
import {requestHeroDelete, requestHeroList} from '@/api/hero'
import HeroModal from '@/components/HeroModal.vue'
import type {IHero} from "@/api/hero/data";
import {message, Modal} from "ant-design-vue";
import { ExclamationCircleOutlined } from '@ant-design/icons-vue'

const columns = [
  {
    title: '名称',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '星级',
    dataIndex: 'star',
    key: 'star',
  },
  {
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
  },
  {
    title: '是否激活',
    dataIndex: 'active',
    key: 'active',
  },
  {
    title: '操作',
    key: 'action',
  },
]


const heroList = ref<IHero[]>([])
const heroModalRef = ref(null)

onMounted(() => {
  fetchHeroList()
})

/**
 * 获取英雄列表
 */
const fetchHeroList = async () => {
  const res = await requestHeroList()
  heroList.value = res.data.data
}

// 刷新
const refresh = async ()=>{
  await fetchHeroList()
}

/**
 * 打开新增应用Modal
 */
const openCreateModal = () => {
  ;(heroModalRef.value as any).open()
}

/**
 * 打开修改应用Modal
 * @param app
 */
const openUpdateModal = (app: IHero) => {
  ;(heroModalRef.value as any).open(app)
}

/**
 * 新增应用成功
 */
const handleSaveHero = () => {
  fetchHeroList()
}

/**
 * 删除应用
 */
const deleteHero = (app: IHero) => {
  Modal.confirm({
    title: '确定要删除该应用吗?',
    icon: createVNode(ExclamationCircleOutlined),
    content: createVNode('div', { style: 'color:red;' }, '请谨慎删除'),
    onOk: async () => {
      await requestHeroDelete(app.id)
      message.success('删除成功')
    },
  })
}
</script>

<template>
  <main>
    <a-button @click="openCreateModal">新建应用</a-button>
    <a-button @click="refresh">刷新</a-button>
    <a-table :dataSource="heroList" :columns="columns">
      <template #bodyCell="{ column, record }">
        <template v-if="column.key === 'action'">
          <span>
            <a @click="openUpdateModal(record)">修改</a>
            <a-divider type="vertical" />
            <a @click="deleteHero(record)">删除</a>
            <a-divider type="vertical" />
          </span>
        </template>
      </template>
    </a-table>
  </main>
  <hero-modal ref="heroModalRef" @save-app="handleSaveHero" />
</template>
