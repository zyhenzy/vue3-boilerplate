/**
 * @Name:
 * @Description:
 * @Author: ying.zhang_zhang
 * @Date: 2023/4/10 16:48
 * @LastEditors: ying.zhang_zhang
 * @LastEditTime: 2023/4/10 16:48
 * @Url: src/api/hero/index.ts
 */

import request from "@/utils/request/request";
import requestNoRepeat from "@/utils/request/request-no-repeat";
import type {ISearchCreate,ISearch} from "./data";

/**
 * 新增检索
 */
export const requestSearchCreate = (params:ISearchCreate)=>{
  return request.post('/mock/hero',params)
}

/**
 * 获取英雄列表
 */
export const requestSearchList = () => {
  return requestNoRepeat.get<ISearch[]>('/mock/heroList')
}

