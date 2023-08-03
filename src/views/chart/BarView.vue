<script setup lang='ts'>
import BarEchart from '../../components/echart/BarEchart.vue'

const monthRange = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] // 月份范围
const data = [120, 200, 150, 80, 70, 110, 130] // 数据

</script>

<template>
  <div>
    <bar-echart title='基础柱状图' :x-data='monthRange' :y-data='data' class='bar-chart' />
  </div>
</template>

<style lang='scss' scoped>
.bar-chart {
  width: 100%;
  height: 400px;
}
</style>
