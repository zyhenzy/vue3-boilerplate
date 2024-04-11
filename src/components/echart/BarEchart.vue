<!--
    @Name: 柱状图
    @Description: 柱状图
    @Author: ying.zhang_zhang
    @Date: 2023/8/2 17:29
    @LastEditors: ying.zhang_zhang
    @LastEditTime: 2023/8/2 17:29
    @Url: src/components/echart/BarEchart.vue
-->
<script setup lang='ts'>
import BaseEchart from './BaseEchart.vue'
import { computed } from 'vue'
import type * as echarts from 'echarts'

export interface BarChartProps {
  title?: string
  xData: string[] // X轴
  yData: number[] // 数据
}

const props = withDefaults(defineProps<BarChartProps>(), {
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
        type: 'bar'
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
