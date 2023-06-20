import DashboardView from '@/views/dashboard/DashboardView.vue'
import ChartView from '@/views/chart/ChartView.vue'
import HeroView from '@/views/HeroView.vue'
import type { RouteRecordRaw } from 'vue-router'

/**
 * 基础路由（左侧菜单）
 */
export const BaseRoute:RouteRecordRaw[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: {
      title: '仪表盘',
      hidden: false
    }
  },
  {
    path: '/chart',
    name: 'ChartView',
    component: ChartView,
    meta: {
      title: 'Echart示例',
    }
  },
  {
    path: '/hero',
    name: 'HeroView',
    component: HeroView,
    meta: {
      title: '英雄列表',
      hidden: false
    }
  }
]
