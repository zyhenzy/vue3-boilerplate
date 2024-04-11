<template>
  <div class='com-2'>
    <button @click='handleAdd'>add2</button>
  </div>
</template>

<script setup lang='ts'>

import { onMounted, ref } from 'vue'
import { useTest4 } from '@/views/hooks/hooks/useTest4'

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
