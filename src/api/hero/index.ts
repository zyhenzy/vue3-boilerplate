/**
 * @Name:
 * @Description:
 * @Author: ying.zhang_zhang
 * @Date: 2023/4/10 16:48
 * @LastEditors: ying.zhang_zhang
 * @LastEditTime: 2023/4/10 16:48
 * @Url: src/api/stzb/index.ts
 */

import request from "@/utils/request/request";
import requestNoRepeat from "@/utils/request/request-no-repeat";
import type {IHero,IHeroCreate,IHeroUpdate} from "@/api/hero/data";

/**
 * 新增英雄
 */
export const requestHeroCreate = (params:IHeroCreate)=>{
  return request.post('/mock/stzb',params)
}

/**
 * 删除英雄
 * @param id
 */
export const requestHeroDelete = (id:string)=>{
  return request.delete(`/mock/hero/${id}`)
}

/**
 * 修改英雄
 */
export const requestHeroUpdate = (params:IHeroUpdate)=>{
  return request.put('/mock/stzb',params)
}

/**
 * 获取英雄列表
 */
export const requestHeroList = () => {
  return requestNoRepeat.get<IHero[]>('/mock/heroList')
}

/**
 * 获取英雄详情
 * @param id
 */
export const requestHeroById = (id:string) => {
  return request.get<IHero>(`/mock/hero/${id}`)
}
