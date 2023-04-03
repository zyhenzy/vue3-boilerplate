import request from "@/utils/request";
import type {Hero} from "@/api/hero/data";

/**
 * 获取英雄列表
 */
export const getHeroList = () => {
  return request.get<Hero[]>('/heroList')
}
