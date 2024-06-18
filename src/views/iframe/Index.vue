<template>
  <div class='iframe-view'>
    <button @click='handlePass'>父传子</button>
    <iframe id='my-iframe' style='width: 800px;height: 500px' :src='iframeSrc' frameborder='0' @load="handleIframeOnload"></iframe>
    <div>iframe消息：{{ iframeMessage }}</div>
  </div>
</template>

<script setup lang='ts'>

import {onMounted, ref} from 'vue'

const iframeSrc = 'http://localhost:5173/resolver/1782277549915176961' // iframe的Url
// const iframeSrc = 'http://app-lowcode.realone-suite-dev.192.168.157.122.nip.io:30660/resolver/1782277549915176961' // iframe的Url

const iframeMessage = ref<string>('')

onMounted(() => {
  // // 父页面监听iframe消息，并接收处理
  // window.addEventListener('message', e => {
  //   const data = e.data
  //   if (data.type === 'MESSAGE_ONE') {
  //     console.log('接收到了')
  //     console.log(e.data.data.name)
  //     iframeMessage.value = e.data.data.name
  //   }
  // }, false)
  const iframeDom = document.getElementById('my-iframe')
  iframeDom.onload
  console.log(666)
})

const handleIframeOnload = ()=>{
  console.log('iframe on load----------')
  handlePass()
}

/**
 * 父传子
 */
const handlePass = async () => {
  const iframeDom = document.getElementById('my-iframe')
  const message = {
    type: 'postHeader',
    data: {
      userId:'123456'
    }
  }
  iframeDom?.contentWindow?.postMessage(message, iframeSrc)
}


</script>

<style lang='scss' scoped>
.iframe-view {
  #my-iframe {
    border: 1px solid #999;
  }
}
</style>
