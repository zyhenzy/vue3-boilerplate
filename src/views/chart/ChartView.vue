<script setup lang="ts">
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons-vue';
import ChartItem from '../../components/ChartItem.vue'
import LineEchart from '../../components/echart/LineEchart.vue'
const list = [1,2,3,4,5,6,7,8]
const monthRange = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'] // 月份范围
const data = [150, 230, 224, 218, 135, 147, 260] // 数据
</script>

<template>
  <div class='chart-view'>
    <a-row :gutter="[16, 16]">
      <a-col :span="12" v-for='item in list'>
        <ChartItem :key='item'>
          <template #data1>
            <a-statistic
              title="Feedback"
              :value="11.28"
              :precision="2"
              suffix="%"
              :value-style="{ color: '#3f8600' }"
            >
              <template #prefix>
                <arrow-up-outlined />
              </template>
            </a-statistic>
          </template>

          <template #data2>
            <a-statistic
              title="Idle"
              :value="9.3"
              :precision="2"
              suffix="%"
              class="demo-class"
              :value-style="{ color: '#cf1322' }"
            >
              <template #prefix>
                <arrow-down-outlined />
              </template>
            </a-statistic>
          </template>

          <template #data3>
            <a-statistic
              title="Idle"
              :value="9.3"
              :precision="2"
              suffix="%"
              class="demo-class"
              :value-style="{ color: '#cf1322' }"
            >
              <template #prefix>
                <arrow-down-outlined />
              </template>
            </a-statistic>
          </template>

          <template #chart>
            <line-echart :month-range='monthRange' :data='data'/>
          </template>

        </ChartItem>
      </a-col>
    </a-row>
  </div>
</template>

<style lang='scss' scoped>
.chart-view{

}
</style>
