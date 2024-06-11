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
    width='700'
  >
    <a-descriptions title="User Info" bordered>
      <a-descriptions-item label="价格">{{(accountDetail.price/100).toFixed(2)}}</a-descriptions-item>
      <a-descriptions-item label="收藏">{{accountDetail.collect_num}}</a-descriptions-item>
      <a-descriptions-item label="综合">{{accountDetail.score}}</a-descriptions-item>
      <a-descriptions-item label="标签" :span="3">
        <a-tag v-for='(tag,index) in accountDetail.skillTag' :key='index'>{{tag}}</a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="武将分">{{accountDetail.heroScore}}</a-descriptions-item>
      <a-descriptions-item label="S赛季分">{{accountDetail.seasonScore}}</a-descriptions-item>
      <a-descriptions-item label="核心分">{{accountDetail.coreScore}}</a-descriptions-item>
      <a-descriptions-item label="核心武将" :span="3">
        <a-tag v-for='(hero,index) in accountDetail.showHeroList' :key='index'>{{hero.advance_num}}{{hero.name}}</a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="战法亮点" :span="3">
        <a-tag v-for='(skill,index) in accountDetail.skillTag' :key='index'>{{skill}}</a-tag>
      </a-descriptions-item>
      <a-descriptions-item label="战法分数">{{accountDetail.skillScore}}</a-descriptions-item>
      <a-descriptions-item label="武器分数">{{accountDetail.weaponScore}}</a-descriptions-item>
      <a-descriptions-item label="画像">{{accountDetail.dynamic}}</a-descriptions-item>
      <a-descriptions-item label="天工锤">{{accountDetail.hammer}}</a-descriptions-item>
      <a-descriptions-item label="赤珠山铁">{{accountDetail.iron}}</a-descriptions-item>
      <a-descriptions-item label="小叶紫檀">{{accountDetail.wood}}</a-descriptions-item>
      <a-descriptions-item label="荣誉">{{accountDetail.honor}}</a-descriptions-item>
      <a-descriptions-item label="四通">{{accountDetail.sitong}}</a-descriptions-item>
    </a-descriptions>
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
