<template>
  <div>我是子</div>
  <div>{{props.num}}</div>
</template>

<script lang="ts" setup>

export interface IProps {
  num?: number
}

// export interface DispenseSideEvents {
//   (e: 'change', num:number): void
// }

// const emits = defineEmits<DispenseSideEvents>()
const props = defineProps<IProps>()

const func = ()=>{
  console.log(props.num)
}

defineExpose({
  func,
})

</script>

<style lang="less" scoped>

</style>