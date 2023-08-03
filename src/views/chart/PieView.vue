<script setup lang='ts'>
import PieEchart from '../../components/echart/PieEchart.vue'

const data = [
  { value: 1048, name: 'Search Engine' },
  { value: 735, name: 'Direct' },
  { value: 580, name: 'Email' },
  { value: 484, name: 'Union Ads' },
  { value: 300, name: 'Video Ads' }
]

</script>

<template>
  <div>
    <pie-echart title='基础饼状图' :data='data' class='pie-chart' />
  </div>
</template>

<style lang='scss' scoped>
.pie-chart {
  width: 100%;
  height: 400px;
}
</style>
