import { useUserStore } from "@/stores/user";
import type { Router } from "vue-router";

const setupAuthentication = (router: Router) => {
  router.beforeEach(async (to, from, next) => {
    try {
      const {
        meta: { excludeAuth = false }
      } = to;
      if (!excludeAuth) {
        // 如果页面需要登陆
        const store = useUserStore();
        if (!store.logged) {
          // 如果没登陆，获取session信息
          await store.fetchSession();
          next({ path: to.path, replace: true });
        } else {
          next();
        }
      } else {
        next();
      }
    } catch (error) {
      throw new Error();
    }
  });
};

export default setupAuthentication;
