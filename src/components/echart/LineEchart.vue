<script setup lang="ts">
import BaseEchart from "./BaseEchart.vue";
import { ref } from "vue";
import * as echarts from "echarts";

let option = ref<echarts.EChartsCoreOption>({
  xAxis: {
    type: "category",
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [150, 230, 224, 218, 135, 147, 260],
      type: "line",
    },
  ],
});

setTimeout(() => {
  option.value = {
    xAxis: {
      type: "category",
      boundaryGap: false,
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: "line",
        areaStyle: {},
      },
    ],
  };
}, 2000);
</script>

<template>
  <div class="line-chart">
    <base-echart :option="option" />
  </div>
</template>

<style scoped></style>
