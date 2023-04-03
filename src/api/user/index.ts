import request from "@/utils/request";
import type {Session} from "@/api/user/data";

/**
 * 获取用户session
 */
export const getSession = () => {
  return request.get<Session>('/session')
}

/**
 * 登陆
 */
export const postLogin = (data:{username:string,password:string}) => {
  return request.post<Session>('/login',data)
}
