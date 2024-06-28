<!--
    @Name: 新增/修改搜索
    @Description: 新增/修改搜索
    @Author: ying.zhang_zhang
    @Date: 2023/12/14 15:46
    @LastEditors: ying.zhang_zhang
    @LastEditTime: 2023/12/14 15:46
    @Url: src/views/stzb/components/SearchModal.vue
-->
<template>
  <a-modal
    v-model:visible='visible'
    title='新增检索'
    @ok='handleOk'
    @cancel='handleCancel'
  >
    <a-form
      ref='formRef'
      :model='state.formState'
      name='basic'
      :label-col='{ span: 6 }'
      :wrapper-col='{ span: 18 }'
      autocomplete='off'
    >
      <a-form-item label='最小金额' name='priceMin'>
        <a-input-number id='priceMin' v-model:value='state.formState.priceMin' :min='200' :max='9999999' />
      </a-form-item>

      <a-form-item label='最大金额' name='priceMax'>
        <a-input-number id='priceMax' v-model:value='state.formState.priceMax' :min='200' :max='9999999' />
      </a-form-item>

      <a-form-item
        label='英雄'
        name='cardHero'
      >
        <a-select
          v-model:value='state.formState.cardHeroId'
          mode='multiple'
          size='small'
          placeholder='请选择英雄'
          style='width: 200px'
        >
          <a-select-opt-group v-for='(group,index) in options' :label='group.label' :key='index'>
            <a-select-option v-for='hero in group.options' :key='hero.value' :value='hero.value'>
              {{ hero.label }}
            </a-select-option>
          </a-select-opt-group>
        </a-select>
      </a-form-item>

      <a-form-item label='进阶' name='advanceNum'>
        <a-slider v-model:value='state.formState.advanceNum' :min='0' :max='5' />
      </a-form-item>

      <a-form-item label='公示期' name='passFairShow'>
        <a-radio-group v-model:value='state.formState.passFairShow' name='passFairShow'>
          <a-radio value='2'>所有</a-radio>
          <a-radio value='0'>公示期</a-radio>
          <a-radio value='1'>非公示期</a-radio>
        </a-radio-group>
      </a-form-item>

      <a-form-item label='是否试师' name='apprentice'>
        <a-switch v-model:checked="state.formState.apprentice" name='apprentice' />
      </a-form-item>

      <a-form-item label='备注' name='remark'>
        <a-input v-model:value='state.formState.remark' />
      </a-form-item>

    </a-form>
  </a-modal>
</template>
<script setup lang='ts'>
import { ref, reactive, computed } from 'vue'
import { message } from 'ant-design-vue'
import { cloneDeep } from 'lodash-es'
import { heroHan, heroJin, heroQun, heroShu, heroWei, heroWu } from '@/constants/stzb/hero'
import {requestConditionCreate} from "@/modules/condition/api";
import type {IConditionCreate} from "@/modules/condition/api/data";

// 初始化form数据
const initialForm = {
  priceMin: 200,
  priceMax: 200,
  passFairShow: '2',
  cardHeroId: [],
  advanceNum: 0,
  apprentice:false,
  remark:''
}

const visible = ref<boolean>(false)
const state = reactive<{ formState: IConditionCreate }>({
  formState: cloneDeep(initialForm)
})

const options = computed(() => {
  return [
    { label: '群', options: heroQun.filter(item => item.star === 5) },
    { label: '吴', options: heroWu.filter(item => item.star === 5) },
    { label: '蜀', options: heroShu.filter(item => item.star === 5) },
    { label: '晋', options: heroJin.filter(item => item.star === 5) },
    { label: '魏', options: heroWei.filter(item => item.star === 5) },
    { label: '汉', options: heroHan.filter(item => item.star === 5) }
  ]
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
    await requestConditionCreate(state.formState)
    message.success('保存成功')
    emit('save-condition')
    close()
  } catch (e) {
    throw new Error()
  }
}

// 关闭Modal
const close = () => {
  visible.value = false
  state.formState = reactive<IConditionCreate>(cloneDeep(initialForm))
}

// 取消按钮或右上角叉
const handleCancel = () => {
  close()
}

const emit = defineEmits(['save-condition'])

defineExpose({
  open
})
</script>
