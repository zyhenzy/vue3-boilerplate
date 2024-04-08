<!--
    @Name: 账号详情
    @Description: 账号详情
    @Author: ying.zhang_zhang
    @Date: 2023/4/3 15:46
    @LastEditors: ying.zhang_zhang
    @LastEditTime: 2023/4/3 15:46
    @Url: src/views/stzb/components/HeroModal.vue
-->
<template>
  <a-modal
    v-model:visible='visible'
    title='详细信息'
    @ok='handleOk'
    @cancel='handleCancel'
  >
    {{ accountDetail }}
  </a-modal>
</template>
<script setup lang='ts'>
import { ref } from 'vue'
import type { Account } from '@/api/stzb/data'

const visible = ref<boolean>(false)
const accountDetail = ref<Account>()

// 打开Modal
const open = async (account: Account) => {
  accountDetail.value = account
  visible.value = true
}

// 关闭Modal
const close = () => {
  visible.value = false
}

const handleOk = () => {
  visible.value = false
}

// 取消按钮或右上角叉
const handleCancel = () => {
  close()
}

defineExpose({
  open
})
</script>
