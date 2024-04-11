<template>
  <div class='box'>
    dashboard
    <child ref='childRef' :num='num'></child>
    <button @click='handleAdd'>加1</button>
  </div>
</template>

<script lang='ts' setup>
import { nextTick, ref } from 'vue'
import Child from './Child.vue'

const childRef = ref()
const num = ref<number>(6)

const handleAdd = () => {
  num.value += 1
  console.log(num.value)
  nextTick(() => {
    childRef.value.func()
  })
}

</script>

<style lang='less' scoped>

</style>
