<!--
    @Name: 新增/修改英雄
    @Description: 新增/修改英雄
    @Author: ying.zhang_zhang
    @Date: 2023/4/3 15:46
    @LastEditors: ying.zhang_zhang
    @LastEditTime: 2023/4/3 15:46
    @Url: src/views/stzb/components/HeroModal.vue
-->
<template>
  <a-modal
    v-model:visible="visible"
    :title="isEdit ? '修改英雄' : '新增英雄'"
    @ok="handleOk"
    @cancel="handleCancel"
  >
    <a-form
      ref="formRef"
      :model="state.formState"
      name="basic"
      :label-col="{ span: 6 }"
      :wrapper-col="{ span: 18 }"
      autocomplete="off"
    >
      <a-form-item
          label="英雄名称"
          name="name"
          :rules="[{ required: true, message: '请输入英雄名称' }]"
      >
        <a-input v-model:value="state.formState.name" />
      </a-form-item>

      <a-form-item label="描述" name="description">
        <a-input v-model:value="state.formState.description" />
      </a-form-item>

      <a-form-item label="是否活跃" name="active">
        <a-switch v-model:checked="state.formState.active" />
      </a-form-item>

      <a-form-item
          label="英雄星级"
          name="star"
          :rules="[{ required: true, message: '请输入英雄星级' }]"
      >
        <a-input-number v-model:value="state.formState.star" />
      </a-form-item>
    </a-form>
  </a-modal>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
import type { IHero, IHeroCreate, IHeroUpdate } from '@/api/hero/data'
import {requestHeroCreate, requestHeroUpdate, requestHeroById} from '@/api/hero'

interface IFormState {
  id?: string
  name:string
  description:string
  star: number
  active:boolean
}

// 初始化form数据
const initialForm = {
  name:'',
  description: '',
  star:0,
  active:false
}

const visible = ref<boolean>(false)
const isEdit = ref<boolean>(false) // 是否是修改
const state = reactive<{ formState: IFormState }>({
  formState: cloneDeep(initialForm),
})

// 打开Modal
const open = async (hero?: IHero) => {
  if (hero) {
    isEdit.value = true
    const res = await requestHeroById(hero.id)
    const heroDetail: IHero = res.data
    state.formState = heroDetail as IFormState
  }
  visible.value = true
}

/**
 * 确定按钮
 */
const handleOk = async () => {
  try {
    if (isEdit.value) {
      const params: IHeroUpdate = state.formState as IHeroUpdate
      await requestHeroUpdate(params)
    } else {
      const params: IHeroCreate = state.formState as IHeroCreate
      await requestHeroCreate(params)
    }
    message.success('保存成功')
    emit('save-stzb')
    close()
  } catch (e) {
    throw new Error()
  }
}

// 关闭Modal
const close = () => {
  visible.value = false
  state.formState = reactive<IFormState>(cloneDeep(initialForm))
}

// 取消按钮或右上角叉
const handleCancel = () => {
  close()
}

const emit = defineEmits(['save-stzb'])

defineExpose({
  open,
})
</script>
