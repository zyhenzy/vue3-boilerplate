/**
 * @Name:
 * @Description:
 * @Author: ying.zhang_zhang
 * @Date: 2023/4/10 16:48
 * @LastEditors: ying.zhang_zhang
 * @LastEditTime: 2023/4/10 16:48
 * @Url: src/api/stzb/index.ts
 */

import type { ISearch } from './data'
import { getUUID } from 'ant-design-vue/es/vc-dialog/util'

const SEARCH_STORE = 'SEARCH_STORE'

/**
 * 新增检索
 */
export const requestSearchCreate = (params: ISearch) => {
  return new Promise(resolve => {
    const search = { ...params, id: getUUID() }
    const store = localStorage.getItem(SEARCH_STORE)
    if (store) {
      console.log(store)
      debugger
    } else {
      localStorage.setItem(SEARCH_STORE, JSON.stringify([search]))
    }
    resolve(search)
  })
}

/**
 * 获取英雄列表
 */
export const requestSearchList = () => {
  return new Promise<ISearch[]>(resolve => {
    const store: ISearch[] = JSON.parse(localStorage.getItem(SEARCH_STORE) || '')
    resolve(store ? store : [])
  })
}

