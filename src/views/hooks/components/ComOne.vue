<template>
  <div class='com-1'>
    <button @click='handleAdd'>add1</button>
  </div>
</template>

<script setup lang='ts'>

import { onMounted, ref } from 'vue'
import { useTest4 } from '@/views/hooks/hooks/useTest4'

const iframeMessage = ref<string>('')

const { add } = useTest4()

onMounted(() => {

})

const handleAdd = ()=>{
  add()
}

</script>

<style lang='scss' scoped>
.hooks-view {

}
</style>
