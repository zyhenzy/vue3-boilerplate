/**
 * use test
 */

import type { MyEvent } from '@/views/hooks/util/Event'
import type { Ref } from 'vue'
import { ref, unref } from 'vue'

export function useTest(util:MyEvent) {

  const num = ref<number>(0)

  const save = (id:Ref<string>) =>{
    id.value = util.save(unref(id))
  }

  const add = ()=>{
    num.value+=1
  }

  // 通过返回值暴露所管理的状态
  return { save,add }
}