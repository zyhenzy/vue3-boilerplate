<!--
    @Name: 饼状图
    @Description: 饼状图
    @Author: ying.zhang_zhang
    @Date: 2023/8/2 17:29
    @LastEditors: ying.zhang_zhang
    @LastEditTime: 2023/8/2 17:29
    @Url: src/components/echart/PieEchart.vue
-->
<script setup lang='ts'>
import BaseEchart from './BaseEchart.vue'
import { computed } from 'vue'
import type * as echarts from 'echarts'

export interface PieChartProps {
  title?: string
  data: {value:number,name:string}[]
}

const props = withDefaults(defineProps<PieChartProps>(), {
  title: '',
  data: () => []
})

/**
 * echarts options
 */
const options = computed((): echarts.EChartsCoreOption => {
  return {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: props.data
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
