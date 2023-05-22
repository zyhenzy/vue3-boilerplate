import type{ IRoute } from '@/api/user/data'
import DashboardView from '@/views/dashboard/DashboardView.vue'
import ChartView from '@/views/ChartView.vue'
import HeroView from '@/views/HeroView.vue'

export const BaseRoute:IRoute[] = [
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: {
      name: 'dashboard',
      hidden: false
    }
  },
  {
    path: '/chart',
    name: 'ChartView',
    component: ChartView,
    meta: {
      name: 'eChart',
    }
  },
  {
    path: '/hero',
    name: 'HeroView',
    component: HeroView,
    meta: {
      name: '英雄列表',
      hidden: false
    }
  }
]
