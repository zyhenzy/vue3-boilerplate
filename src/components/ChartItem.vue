<template>
  <a-card title="Card Title" class='chart-item' >
    <a-card-grid class='card-grid'>
      <slot name="data1" />
    </a-card-grid>
    <a-card-grid class='card-grid'>
      <slot name="data2" />
    </a-card-grid>
    <a-card-grid class='card-grid'>
      <slot name="data3" />
    </a-card-grid>
    <a-card-grid class='card-grid chart-gird'>
      <slot name="chart" />
    </a-card-grid>
  </a-card>
</template>

<script>
export default {
  name: 'ChartItem'
}
</script>

<style lang='scss' scoped>
.chart-item{
  ::v-deep(.ant-card-body){
    display: grid;
    grid-template-columns: repeat(3, 33.33%);
    grid-template-rows: repeat(3, 33.33%);
    &:before{
      display: none;
    }
    .card-grid{
      text-align: center;
      width: 100%;
    }
    .chart-gird{
      grid-column-start: 2;
      grid-column-end: 4;
      grid-row-start: 1;
      grid-row-end: 4;
    }
  }

}

</style>
