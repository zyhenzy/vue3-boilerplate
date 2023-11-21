/**
 * use test
 */

import { ref } from 'vue'

export function useTest3() {

  const data = ref<string>()

  const fetchData = () =>{
    setTimeout(()=>{
      data.value = '获取到的数据'
    },1000)
  }

  // 通过返回值暴露所管理的状态
  return { fetchData,data }
}