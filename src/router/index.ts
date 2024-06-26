import {createRouter, createWebHistory} from 'vue-router'
import type {RouteRecordRaw} from 'vue-router'
import LoginView from '../views/login/LoginView.vue'
import HomeView from '../views/HomeView.vue'
import Layout from '../components/layout/Layout.vue'
import createRouterGuards from '@/router/guards'
import {BaseRoute} from '@/constants/config/config.routes'
import {ConditionRoute} from "@/modules/condition/route";

const REDIRECT_NAME = 'dashboard' // 重定向路由

const initRoutes: RouteRecordRaw[] = [
    {path: '/', redirect: REDIRECT_NAME},
    {
        path: '/',
        name: 'layout',
        component: Layout,
        children: [
            ...BaseRoute,
            ...ConditionRoute
        ] as RouteRecordRaw[]
    },
    {
        path: '/home',
        name: 'home',
        component: HomeView
    },
    {
        path: '/login',
        name: 'login',
        component: LoginView,
        meta: {
            name: '登陆',
            excludeAuth: true
        }
    },
    {
        // 404页面配置
        path: '/:catchAll(.*)',
        component: () => import('../views/ErrorView.vue')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/AboutView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: initRoutes
})


createRouterGuards(router)

export default router
