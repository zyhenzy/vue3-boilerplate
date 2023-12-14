<!--
    @Name: 新增/修改搜索
    @Description: 新增/修改搜索
    @Author: ying.zhang_zhang
    @Date: 2023/12/14 15:46
    @LastEditors: ying.zhang_zhang
    @LastEditTime: 2023/12/14 15:46
    @Url: src/views/hero/components/SearchModal.vue
-->
<template>
  <a-modal
    v-model:visible="visible"
    title="新增检索"
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
      <a-form-item label="最小金额" name="priceMin">
        <a-input-number id="priceMin" v-model:value="state.formState.priceMin" :min="200" :max="9999999" />
      </a-form-item>

      <a-form-item label="最大金额" name="priceMax">
        <a-input-number id="priceMax" v-model:value="state.formState.priceMax" :min="200" :max="9999999" />
      </a-form-item>

      <a-form-item
          label="英雄"
          name="cardHero"
      >
        <a-select
          v-model:value="state.formState.cardHero"
          :options="options"
          mode="multiple"
          :size="size"
          placeholder="请选择英雄"
          style="width: 200px"
        ></a-select>
      </a-form-item>

      <a-form-item label="进阶" name="cardAdvanceNum">
        <a-slider v-model:value="state.formState.cardAdvanceNum" :min="0" :max="5" />
      </a-form-item>

      <a-form-item label="公示期" name="passFairShow">
        <a-radio-group v-model:value="state.formState.passFairShow" name="passFairShow">
          <a-radio value="2">所有</a-radio>
          <a-radio value="0">公示期</a-radio>
          <a-radio value="1">非公示期</a-radio>
        </a-radio-group>
      </a-form-item>

    </a-form>
  </a-modal>
</template>
<script setup lang="ts">
import { ref, reactive } from 'vue'
import { message } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
import type { ISearchCreate } from '@/api/stzb/data'

// 初始化form数据
const initialForm = {
  priceMin:undefined,
  priceMax:undefined,
  passFairShow:'2',
  cardHero:[],
  cardAdvanceNum:undefined
}

const visible = ref<boolean>(false)
const state = reactive<{ formState: ISearchCreate }>({
  formState: cloneDeep(initialForm),
})

// 打开Modal
const open = async () => {
  visible.value = true
}

/**
 * 确定按钮
 */
const handleOk = async () => {
  try {
    console.log(state.formState)
    message.success('保存成功')
    emit('save-hero')
    close()
  } catch (e) {
    throw new Error()
  }
}

// 关闭Modal
const close = () => {
  visible.value = false
  state.formState = reactive<ISearchCreate>(cloneDeep(initialForm))
}

// 取消按钮或右上角叉
const handleCancel = () => {
  close()
}

const emit = defineEmits(['save-search'])

defineExpose({
  open,
})
</script>
