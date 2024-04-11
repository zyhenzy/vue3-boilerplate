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
import { v4 as uuidv4 } from 'uuid'
import { SEARCH_STORE } from '@/constants/store'
import request from '@/utils/request/request'
import type { Account } from './data'

/**
 * 新增检索
 */
export const requestSearchCreate = (params: ISearch) => {
  return new Promise(resolve => {
    const search = { ...params, id: uuidv4() }
    const store = localStorage.getItem(SEARCH_STORE)
    if (store) {
      const newList = [...JSON.parse(store), search]
      localStorage.setItem(SEARCH_STORE, JSON.stringify(newList))
    } else {
      localStorage.setItem(SEARCH_STORE, JSON.stringify([search]))
    }
    resolve(search)
  })
}


/**
 * 保存整个检索列表
 * @param params
 */
export const requestSaveList = (params:ISearch[]) => {
  localStorage.setItem(SEARCH_STORE, JSON.stringify(params))
}

/**
 * 删除检索
 * @param id
 */
export const requestDeleteSearch = (id: string) => {
  const store: ISearch[] = JSON.parse(localStorage.getItem(SEARCH_STORE) || '')
  const storeNew = store.filter(item => {
    return item.id !== id
  })
  localStorage.setItem(SEARCH_STORE, JSON.stringify(storeNew))
}

/**
 * 获取检索列表
 */
export const requestSearchList = () => {
  return new Promise<ISearch[]>(resolve => {
    const store: ISearch[] = JSON.parse(localStorage.getItem(SEARCH_STORE) || '')
    resolve(store ? store : [])
  })
}

/**
 * 执行搜索
 * @param params
 */
export const requestPreform = (params: ISearch) => {
  return request.post('/api/stzb', params)
}

/**
 * 查看详情
 * @param id
 */
export const requestSearchDetail = (id: string) => {
  return request.get<Account[]>(`/api/stzb/${id}`)
}

/**
 * 设置cookie
 * @param cookie
 */
export const requestSetCookie = (cookie: string) => {
  const params = {cookie}
  return request.post(`/api/stzb/setCookie`,params)
}
