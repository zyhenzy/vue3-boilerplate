// import request from '@/utils/request/request'
// import type { ISession } from '@/api/user/data'


export const permissions2 = [
  {
    path: '/system',
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'SettingOutlined'
    },
    children: [
      {
        path: '/system/user',
        name: 'user',
        component: 'system/User',
        meta: {
          title: '用户管理',
          icon: 'UsergroupDeleteOutlined'
        }
      },
      {
        path: '/system/role',
        name: 'role',
        component: 'system/Role',
        meta: {
          title: '角色管理',
          icon: 'UserSwitchOutlined'
        }
      },
      {
        path: '/system/permission',
        name: 'permission',
        component: 'system/Permission',
        meta: {
          title: '权限管理',
          icon: 'FieldNumberOutlined'
        }
      }
    ]
  }
]

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
