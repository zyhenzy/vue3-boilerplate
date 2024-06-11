<template>
  <div class='iframe-test-view'>
    <iframe id='my-iframe' style='width: 800px;height: 500px' :src='iframeSrc' frameborder='0'></iframe>
  </div>
</template>

<script setup lang='ts'>

import { onMounted, ref } from 'vue'

// const iframeSrc = 'https://www.bing.com/' // iframe的Url
// const iframeSrc = 'http://localhost:5173/resolver/1795375292556828673' // iframe的Url
// const iframeSrc = '/lowcode/page' // iframe的Url

const iframeSrc = 'http://app-lowcode.realone-suite-dev.192.168.157.122.nip.io:30660/resolver/1782277549915176961' // iframe的Url


onMounted(() => {

})

</script>

<style lang='scss' scoped>
.iframe-test-view {
  #my-iframe{
    border: 1px solid #999;
  }
}
</style>
