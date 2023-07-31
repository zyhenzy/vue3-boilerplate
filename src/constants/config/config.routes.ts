import DashboardView from '@/views/dashboard/DashboardView.vue'
import ChartView from '@/views/chart/ChartView.vue'
import HeroView from '@/views/HeroView.vue'
import type { IRoute } from '@/api/user/data'
import LineView from '@/views/chart/LineView.vue'

/**
 * 基础路由（左侧菜单）
 */
export const BaseRoute:IRoute[] = [
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
    meta: {
      title: 'Echart示例',
    },
    children:[
      {
        path: '/line',
        name: 'LineView',
        component: LineView,
        meta: {
          title: '折线图',
        }
      },
      {
        path: '/multi',
        name: 'ChartView',
        component: ChartView,
        meta: {
          title: '综合',
        }
      },
    ]
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
