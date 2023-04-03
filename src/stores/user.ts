import { computed, reactive } from 'vue'
import { defineStore } from 'pinia'
import {getSession, postLogin} from '@/api/user';
import {setToken} from "@/utils/token";

export interface UserState {
  user: any,
  token:string
}

export const useUserStore = defineStore('user', () => {
  const state = reactive<UserState>({ user: {},token:'' })
  const isLogged = computed(() => state.user)
  /**
   * 登陆
   * @param username
   * @param password
   */
  async function login({username,password}:{
    username:string,
    password:string
  }) {
    try {
      const response = await postLogin({username,password})
      if (response) {
        state.user = response.data.user
        state.token = response.data.token
        setToken(state.token)
      }
      return Promise.resolve(true)
    } catch (error) {
      return Promise.reject(false)
    }
  }

  async function fetchSession() {
    try {
      const response = await getSession()
      if (response) {
        state.user = response.data.user
        state.token = response.data.token
        setToken(state.token)
      }
      return Promise.resolve(true)
    } catch (error) {
      return Promise.reject(false)
    }
  }

  return { state, isLogged, login,fetchSession }
})
