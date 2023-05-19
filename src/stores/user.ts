import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import { getSession, postLogin } from "@/api/user";
import { setToken } from "@/utils/token";
import type { IRoute } from "@/api/user/data";
import { addRoutes } from "@/perssions";

export interface UserState {
  user: any,
  token: string,
  routes: IRoute[]
}

export const useUserStore = defineStore("user", () => {
  const state = reactive<UserState>({ user: {}, token: "", routes: [] });
  const logged = computed(() => !!state.token);
  const gotRoutes = computed(() => state.routes.length > 0);

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
      const response = await postLogin({ username, password });
      if (response) {
        state.user = response.data.user;
        state.token = response.data.token;
        state.routes = response.data.routes;
        addRoutes(state.routes);
        setToken(state.token);
      }
      return Promise.resolve(true);
    } catch (error) {
      return Promise.reject(false);
    }
  }

  async function fetchSession() {
    try {
      const response = await getSession();
      if (response) {
        state.user = response.data.user;
        state.token = response.data.token;
        state.routes = response.data.routes;
        addRoutes(state.routes);
        setToken(state.token);
      }
      return Promise.resolve(true);
    } catch (error) {
      return Promise.reject(false);
    }
  }

  return { state, logged, gotRoutes, login, fetchSession };
});
