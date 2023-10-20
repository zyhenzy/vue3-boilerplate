<template>
  <div class='iframe-view'>
    <button @click='handlePass'>父传子</button>
    <iframe id='my-iframe' style='width: 500px;height: 300px' :src='iframeSrc' frameborder='0'></iframe>
    <div>iframe消息：{{iframeMessage}}</div>
  </div>
</template>

<script setup lang='ts'>

import { onMounted, ref } from 'vue'

const iframeSrc = 'http://127.0.0.1:8080/' // iframe的Url

const iframeMessage = ref<string>('')

onMounted(() => {
  // 父页面监听iframe消息，并接收处理
  window.addEventListener('message', e => {
    console.log('接收到了')
    console.log(e.data.data.name)
    iframeMessage.value = e.data.data.name
  }, false)
})

/**
 * 父传子
 */
const handlePass = async () => {
  const iframeDom = document.getElementById('my-iframe')
  const message = {
    type: 'MESSAGE_ONE',
    data: {
      id: '101',
      name: '小明'
    }
  }
  iframeDom.contentWindow.postMessage(message, iframeSrc)
}


</script>

<style lang='scss' scoped>
.iframe-view {
  #my-iframe{
    border: 1px solid #999;
  }
}
</style>
