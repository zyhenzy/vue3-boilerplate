export const permissions1 = [
  {
    path: '/page1',
    name: 'page1',
    component: 'Page1'
  },
  {
    path: '/page2',
    name: 'page2',
    component: 'Page2'
  }
]

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
