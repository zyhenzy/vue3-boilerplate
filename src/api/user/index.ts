import request from "@/utils/request/request";
import type {ISession} from "@/api/user/data";

/**
 * 获取用户session
 */
export const getSession = () => {
  return request.get<ISession>('/mock/session')
}

/**
 * 登陆
 */
export const postLogin = (data:{username:string,password:string}) => {
  return request.post<{token:string}>('/mock/login',data)
}
