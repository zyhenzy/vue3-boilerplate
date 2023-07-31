<!--
    @Name: EChart基础组件
    @Description: EChart基础组件
    @Author: ying.zhang
    @Date: 2023/7/31 11:05
    @LastEditors: ying.zhang
    @LastEditTime: 2023/7/31 11:05
    @Url: src/components/echart/BaseEchart.vue
-->
<template>
  <div ref='eChartRef' v-resize='handleResize'></div>
</template>

<script setup lang='ts'>
import { ref, onMounted, watch } from 'vue'
import * as echarts from 'echarts'
import { debounce } from '@/utils/debounce'

interface IProps {
  option: echarts.EChartsCoreOption;
}

const props = withDefaults(defineProps<IProps>(), {})

const eChartRef = ref<HTMLElement | null>(null)
let eChartInstance: echarts.ECharts | null = null

onMounted(() => {
  initChart()
})

watch(
  () => props.option,
  () => {
    initChart()
  }
)

/**
 * 浏览器窗口大小变更指令
 */
const vResize = {
  mounted: (el:any,bind:any) => {
    const cb = bind.value
    el.$_resizeHandler = debounce(() => {
      cb();
    }, 100);
    window.addEventListener('resize',el.$_resizeHandler)
  },
  unmounted:(el:any)=>{
    if(!el.$_resizeHandler) return
    window.removeEventListener("resize", el.$_resizeHandler);
    el.$_resizeHandler=null
  }
}

const handleResize = ()=>{
  eChartInstance?.resize()
}

const initChart = () => {
  eChartInstance = echarts.init(eChartRef.value!, 'light', {
    renderer: 'canvas'
  })
  eChartInstance.setOption(props.option)
}
</script>

<style scoped></style>
