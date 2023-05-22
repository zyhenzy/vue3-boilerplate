import { computed, reactive } from "vue";
import { defineStore } from "pinia";
import { getSession, postLogin } from "@/api/user";
import { clearToken, setToken } from "@/utils/token";
import type { IRoute } from "@/api/user/data";
import { addRoutes } from "@/utils/perssions";
import router from "@/router";
import type { RouteRecordRaw } from "vue-router";

export interface Menu {
  name: string;
  path: string;
}

export interface UserState {
  user: any,
  token: string,
  routes: IRoute[],
}

export const useUserStore = defineStore("user", () => {
  const state = reactive<UserState>({
    user: {},
    token: "",
    routes: [],
  });

  const logged = computed(() => !!state.token);
  const gotRoutes = computed(() => state.routes.length > 0);

  /**
   * 静态路由与动态路由匹配
   */
  const getMenus = computed(() => {
    let baseMenus: Menu[] = [];
    const routes = router.options.routes;
    const [layoutRoute] = routes.filter((i) => i.name === "layout");
    const layoutChildren = layoutRoute.children as RouteRecordRaw[];
    baseMenus = layoutChildren.map(route => {
      return { name: route.name as string, path: route.path };
    });
    const asyncMenus = state.routes.map(route => {
      return { name: route.name, path: route.path };
    });
    return [...baseMenus, ...asyncMenus];
  });

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

  /**
   * 登出
   */
  async function logout() {
    state.user = {};
    state.token = "";
    state.routes = [];
    clearToken();
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

  return { state, logged, gotRoutes, getMenus, login, logout, fetchSession };
});
