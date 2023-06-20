export const permissions1 = [
  {
    path: '/page1',
    name: 'page1',
    component: 'Page1'
  },
  {
    path: '/page2',
    name: 'page2',
    component: 'Page2'
  }
]

export const permissions2 = [
  {
    path: '/development',
    name: 'development',
    meta: {
      title: '可持续发展',
      icon: 'plus-square-outlined'
    },
    children: [
      {
        path: '/development/structure',
        name: 'developmentStructure',
        component: 'development/DevelopmentStructure',
        meta: {
          title: '人员结构'
        }
      },
      {
        path: '/development/cultivate',
        name: 'developmentCultivate',
        component: 'development/DevelopmentCultivate',
        meta: {
          title: '人才培养'
        }
      },
      {
        path: '/development/subject',
        name: 'developmentSubject',
        component: 'development/DevelopmentSubject',
        meta: {
          title: '学科建设'
        }
      },
      {
        path: '/development/credit',
        name: 'developmentCredit',
        component: 'development/DevelopmentCredit',
        meta: {
          title: '信用建设',
          subjectId: 'patient'
        }
      }
    ]
  },
  {
    path: '/efficiency',
    name: 'efficiency',
    meta: {
      title: '运营效率'
    },
    children: [
      {
        path: '/efficiency/resource',
        name: 'efficiencyResource',
        component: 'efficiency/EfficiencyResource',
        meta: {
          title: '资源效率'
        }
      },
      {
        path: '/efficiency/revenue',
        name: 'efficiencyRevenue',
        component: 'efficiency/EfficiencyRevenue',
        meta: {
          title: '收支结构'
        }
      },
      {
        path: '/efficiency/cost',
        name: 'efficiencyCost',
        component: 'efficiency/EfficiencyCost',
        meta: {
          title: '费用控制'
        }
      },
      {
        path: '/efficiency/economy',
        name: 'efficiencyEconomy',
        component: 'efficiency/EfficiencyEconomy',
        meta: {
          title: '经济管理'
        }
      }
    ]
  }
]
