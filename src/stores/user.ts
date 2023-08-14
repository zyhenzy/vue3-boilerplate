import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import { getSession, postLogin } from '@/api/user'
import { clearToken, setToken } from '@/utils/token'
import type { IRoute } from '@/api/user/data'
import { addRoutes } from '@/utils/perssions'
import { BaseRoute } from '@/constants/config/config.routes'
import router from '@/router'

export interface UserState {
  user: any,
  token: string,
  asyncRoutes: IRoute[], // 动态路由
}

export const useUserStore = defineStore('user', () => {
  const state = reactive<UserState>({
    user: {},
    token: '',
    asyncRoutes: [] // 动态路由
  })

  const logged = computed(() => !!state.token)
  const gotRoutes = computed(() => state.asyncRoutes.length > 0)

  /**
   * 静态路由与动态路由组合成菜单
   */
  const getMenus = computed(() => {
    return [...BaseRoute, ...state.asyncRoutes]
  })

  /**
   * 登陆
   * @param username
   * @param password
   */
  async function login({ username, password }: {
    username: string,
    password: string
  }) {
    try {
      const response = await postLogin({ username, password })
      if (response) {
        state.token = response.data.data.token
        setToken(state.token)
        await fetchSession()
      }
      return Promise.resolve(true)
    } catch (error) {
      return Promise.reject(false)
    }
  }

  /**
   * 登出
   */
  async function logout() {
    state.user = {}
    state.token = ''
    state.asyncRoutes.forEach(route => {
      router.removeRoute(route.name)
    })
    state.asyncRoutes = []
    clearToken()
  }

  /**
   * 获取session
   * 用户信息、动态路由等
   */
  async function fetchSession() {
    try {
      const response = await getSession()
      if (response) {
        state.user = response.data.data.user
        state.token = response.data.data.token
        state.asyncRoutes = response.data.data.routes
        addRoutes(state.asyncRoutes)
        setToken(state.token)
      }
      return Promise.resolve(true)
    } catch (error) {
      return Promise.reject(false)
    }
  }

  return { state, logged, gotRoutes, getMenus, login, logout, fetchSession }
})
