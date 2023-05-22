<script setup lang='ts'>
import BaseEchart from './BaseEchart.vue'
import { computed } from 'vue'
import type * as echarts from 'echarts'

export interface LineChartProps {
  startDate: string, // 起始时间
  endDate: string // 结束时间
  data: number[] // 数据
}

const props = withDefaults(defineProps<LineChartProps>(), {
  monthRange: () => ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'], // 月份范围
  data: () => [150, 230, 224, 218, 135, 147, 260] // 数据
})

/**
 * echarts options
 */
const options = computed((): echarts.EChartsCoreOption => {
  return {
    xAxis: {
      type: 'category',
      data: props.monthRange
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: props.data,
        type: 'line'
      }
    ]
  }
})

</script>

<template>
  <div class='line-chart'>
    <base-echart :option='options' width='100%' height='auto' />
  </div>
</template>

<style scoped></style>
