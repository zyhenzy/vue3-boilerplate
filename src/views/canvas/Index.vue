<template>
  <div id='canvasView' class='canvas-view'>

  </div>
</template>

<script setup lang='ts'>

import { onMounted, ref } from 'vue'
import { imageBase64 } from '@/constants/testData'

onMounted(() => {
  setTimeout(() => {
    handleFunc1()
  }, 1000)
})

const handleFunc1 = async () => {
  const canvas = document.createElement('canvas')
  canvas.width = 300
  canvas.height = 200
  const ctx = canvas.getContext('2d')! as CanvasRenderingContext2D // 获取画布上下文
  const img = new Image()
  img.src = imageBase64
  // 5. 在图片加载完成后将其绘制到 Canvas 上


  // 5. 使用 Promise 封装图片加载
  await new Promise((resolve, reject) => {
    img.onload = resolve;
    img.onerror = reject;
  });

  // img.onload = function() {
    ctx.drawImage(img, 0, 0, 200, 200)
    // const dom = document.getElementById('canvasView')
    // dom.appendChild(canvas);
    const url = canvas.toDataURL()
    const dom = document.getElementById('canvasView')
    dom.style.backgroundImage = `url('${url}')`
  // };


  // const url = canvas.toDataURL()
  // const dom = document.getElementById('canvasView')
  // dom.style.backgroundImage = `url('${url}')`
}

const handleFunc2 = () => {
  // 2. 应用 base64 编码的图片为元素的背景
  const elementWithBackground = document.getElementById('canvasView')
  elementWithBackground.style.backgroundImage = `url('${imageBase64}')`
}

</script>

<style lang='scss' scoped>
.canvas-view {
  width: 100vw;
  height: 100vh;
  background-size: cover;
}
</style>
