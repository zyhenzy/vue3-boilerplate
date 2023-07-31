<script setup lang='ts'>
import LineEchart from '../../components/echart/LineEchart.vue'

const monthRange = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] // 月份范围
const data = [150, 230, 224, 218, 135, 147, 260] // 数据

</script>

<template>
  <div class='line-view'>
    <line-echart title='基础折线图' :x-data='monthRange' :y-data='data' class='line-echart' />
  </div>
</template>

<style lang='scss' scoped>
.line-view {
  .line-echart {
    width: 100%;
    height: 400px;
  }
}
</style>
