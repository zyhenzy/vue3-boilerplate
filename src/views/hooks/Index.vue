<template>
  <div class='hooks-view'>
    <div>{{num}}</div>
    <com-one />
    <com-two />
    <div>{{ data }}</div>
    <div>{{ id }}</div>
    <button @click='handleSave'>触发</button>
    <button @click='handleSave2'>触发2</button>
  </div>
</template>

<script setup lang='ts'>

import { onMounted, ref } from 'vue'
import { useTest } from '@/views/hooks/hooks/useTest'
import { useTest2 } from '@/views/hooks/hooks/useTest2'
import { useTest3 } from '@/views/hooks/hooks/useTest3'
import { useTest4 } from '@/views/hooks/hooks/useTest4'
import { MyEvent } from '@/views/hooks/util/Event'
import ComOne from './components/ComOne.vue'
import ComTwo from './components/ComTwo.vue'

const event = new MyEvent()
const id = ref<string>('1')

const { save } = useTest(event)
const { save2 } = useTest2(event)

const { data, fetchData } = useTest3()
const { num } = useTest4()


onMounted(() => {
  fetchData()
})

// 保存病例
const handleSave = () => {
  save(id)
}

const handleSave2 = () => {
  save2(id)
}

</script>

<style lang='scss' scoped>
.hooks-view {

}
</style>
