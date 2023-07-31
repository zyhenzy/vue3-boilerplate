<script setup lang='ts'>
import BaseEchart from './BaseEchart.vue'
import { computed } from 'vue'
import type * as echarts from 'echarts'

export interface LineChartProps {
  title?: string
  xData: string[] // X轴
  yData: number[] // 数据
}

const props = withDefaults(defineProps<LineChartProps>(), {
  title: '',
  xData: () => [], // X轴
  yData: () => [] // Y轴
})

/**
 * echarts options
 */
const options = computed((): echarts.EChartsCoreOption => {
  return {
    title: {
      text: props.title,
      left: "center",
    },
    xAxis: {
      type: 'category',
      data: props.xData
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.yData,
        type: 'line'
      }
    ]
  }
})

</script>

<template>
  <base-echart :option='options' />
</template>

<style scoped>

</style>
