// import request from '@/utils/request/request'
// import type { ISession } from '@/api/user/data'
import { permissions2 } from '../../../mock/db/user'

/**
 * 获取用户session
 */
export const getSession = () => {
  // mock的数据
  // return request.get<ISession>('/mock/session')
  return Promise.resolve({
    // 返回的结果集
    code: 200,
    message: '获取session成功',
    data: {
      user: { name: '小明', age: 18 },
      token: 'token1',
      routes: permissions2
    }
  })
}

/**
 * 登陆
 */
export const postLogin = (data: { username: string, password: string }) => {
  // mock的数据
  // return request.post<{token:string}>('/mock/login',data)
  return Promise.resolve({
    code: 200,
    message: '登录成功',
    data: {
      token: 'token1'
    }
  })
}
