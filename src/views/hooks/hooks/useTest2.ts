/**
 * use test
 */

import type { MyEvent } from '@/views/hooks/util/Event'
import type { Ref } from 'vue'
import { unref } from 'vue'

export function useTest2(util:MyEvent) {

  const save2 = (id:Ref<string>)=>{
    id.value = util.save2(unref(id))
  }

  // 通过返回值暴露所管理的状态
  return { save2 }
}