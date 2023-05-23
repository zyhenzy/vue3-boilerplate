import router from "../router";
import type { IRoute } from "@/api/user/data";
import type { RouteRecordRaw } from "vue-router";

const loadView = import.meta.glob('../views/*.vue')

/**
 * 添加路由配置
 * @param routes
 */
export const addRoutes = (routes:IRoute[])=>{
  routes.forEach(routeObj=>{
    const _route:RouteRecordRaw={
      name:routeObj.name,
      path:routeObj.path,
      component:loadView[`../views/${routeObj.component}.vue`]
    }
    router.addRoute('layout',_route)
  })
}
