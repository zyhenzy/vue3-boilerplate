import request from "@/utils/request";
import type {ISession} from "@/api/user/data";

/**
 * 获取用户session
 */
export const getSession = () => {
  return request.get<ISession>('/session')
}

/**
 * 登陆
 */
export const postLogin = (data:{username:string,password:string}) => {
  return request.post<{token:string}>('/login',data)
}
