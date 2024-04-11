<template>
  <div class='webgl-view'>
    <h3>web gl</h3>
    <button @click='draw'>绘制</button>
    <br>
    <canvas id="webgl" width="500" height="500" style="background: #000;"></canvas>
  </div>
</template>

<script setup lang='ts'>

import { onMounted } from 'vue'

onMounted(() => {

})

const draw = () => {
  console.log('666')
  const canvas:any = document.getElementById('webgl')
  const gl = canvas.getContext('webgl');
  gl.drawArrays();
  gl.createShader();
  gl.shaderSource();
  gl.compileShader();
  gl.createProgram();
  gl.attachShader();
  gl.linkProgram();
  gl.useProgram();
}

</script>

<style lang='scss' scoped>
.webgl-view {

}
</style>
