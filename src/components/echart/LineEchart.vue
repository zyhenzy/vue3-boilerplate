<script setup lang='ts'>
import BaseEchart from './BaseEchart.vue'
import { computed } from 'vue'
import type * as echarts from 'echarts'

export interface LineChartProps {
  monthRange: string[] // 时间
  data: number[] // 数据
}

const props = withDefaults(defineProps<LineChartProps>(), {
  monthRange: () => [], // 月份范围
  data: () => [] // 数据
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
  <base-echart :option='options' class='line-chart' />
</template>

<style scoped>
.line-chart {
  width: 100%;
  height: 100%;
}
</style>
