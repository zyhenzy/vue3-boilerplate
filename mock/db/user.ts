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
  // 指标chart
  {
    path: '/chart/BI00001',
    name: 'chartBI00001',
    component: 'chart/ChartView',
    meta: {
      title: '医疗收入指标汇总',
      subjectId: 'BI00001',
      icon: 'LineChartOutlined'
    }
  },
  {
    path: '/chart/BI00002',
    name: 'chartBI00002',
    component: 'chart/ChartView',
    meta: {
      title: '出院患者手术指标汇总',
      subjectId: 'BI00002',
      icon: 'DotChartOutlined'
    }
  },
  {
    path: '/chart/CNLC2022',
    name: 'chartCNLC2022',
    component: 'chart/ChartView',
    meta: {
      title: '肝癌医疗治疗控制指标',
      subjectId: 'CNLC2022',
      icon: 'PieChartOutlined'
    }
  },
  // 医疗质量
  {
    path: '/quality',
    name: 'quality',
    meta: {
      title: '医疗质量',
      icon: 'AimOutlined'
    },
    children: [
      {
        path: '/quality/location',
        name: 'qualityLocation',
        component: 'quality/QualityLocation',
        meta: {
          title: '功能定位',
          icon: 'AimOutlined'
        }
      },
      {
        path: '/quality/security',
        name: 'qualitySecurity',
        component: 'quality/QualitySecurity',
        meta: {
          title: '质量安全',
          icon: 'SafetyCertificateOutlined'
        }
      },
      {
        path: '/quality/medication',
        name: 'qualityMedication',
        component: 'quality/QualityMedication',
        meta: {
          title: '合理用药',
          icon: 'SubnodeOutlined'
        }
      },
      {
        path: '/quality/procedure',
        name: 'qualityProcedure',
        component: 'quality/QualityProcedure',
        meta: {
          title: '服务流程',
          icon: 'CloudServerOutlined'
        }
      }
    ]
  },
  // 运营效率
  {
    path: '/efficiency',
    name: 'efficiency',
    meta: {
      title: '运营效率',
      icon: 'PercentageOutlined'
    },
    children: [
      {
        path: '/efficiency/resource',
        name: 'efficiencyResource',
        component: 'efficiency/EfficiencyResource',
        meta: {
          title: '资源效率',
          icon: 'PercentageOutlined'
        }
      },
      {
        path: '/efficiency/revenue',
        name: 'efficiencyRevenue',
        component: 'efficiency/EfficiencyRevenue',
        meta: {
          title: '收支结构',
          icon: 'ApartmentOutlined'
        }
      },
      {
        path: '/efficiency/cost',
        name: 'efficiencyCost',
        component: 'efficiency/EfficiencyCost',
        meta: {
          title: '费用控制',
          icon: 'PayCircleOutlined'
        }
      },
      {
        path: '/efficiency/economy',
        name: 'efficiencyEconomy',
        component: 'efficiency/EfficiencyEconomy',
        meta: {
          title: '经济管理',
          icon: 'PayCircleOutlined'
        }
      }
    ]
  },
  // 可持续发展
  {
    path: '/development',
    name: 'development',
    meta: {
      title: '可持续发展',
      icon: 'AlertOutlined'
    },
    children: [
      {
        path: '/development/structure',
        name: 'developmentStructure',
        component: 'development/DevelopmentStructure',
        meta: {
          title: '人员结构',
          icon: 'ApartmentOutlined'
        }
      },
      {
        path: '/development/cultivate',
        name: 'developmentCultivate',
        component: 'development/DevelopmentCultivate',
        meta: {
          title: '人才培养',
          icon: 'UsbOutlined'
        }
      },
      {
        path: '/development/subject',
        name: 'developmentSubject',
        component: 'development/DevelopmentSubject',
        meta: {
          title: '学科建设',
          icon: 'BlockOutlined'
        }
      },
      {
        path: '/development/credit',
        name: 'developmentCredit',
        component: 'development/DevelopmentCredit',
        meta: {
          title: '信用建设',
          icon: 'UsergroupAddOutlined'
        }
      }
    ]
  },
  // 满意度评价
  {
    path: '/satisfaction',
    name: 'satisfaction',
    meta: {
      title: '满意度评价',
      icon: 'LikeOutlined'
    },
    children: [
      {
        path: '/satisfaction/patient',
        name: 'satisfactionPatient',
        component: 'satisfaction/SatisfactionPatient',
        meta: {
          title: '患者满意度',
          icon: 'LikeOutlined'
        }
      },
      {
        path: '/satisfaction/employee',
        name: 'satisfactionEmployee',
        component: 'satisfaction/SatisfactionEmployee',
        meta: {
          title: '医务人员满意度',
          icon: 'LikeOutlined'
        }
      }
    ]
  },
  {
    path: '/system',
    name: 'system',
    meta: {
      title: '系统管理',
      icon: 'SettingOutlined'
    },
    children: [
      {
        path: '/system/user',
        name: 'user',
        component: 'system/User',
        meta: {
          title: '用户管理',
          icon: 'UsergroupDeleteOutlined'
        }
      },
      {
        path: '/system/role',
        name: 'role',
        component: 'system/Role',
        meta: {
          title: '角色管理',
          icon: 'UserSwitchOutlined'
        }
      },
      {
        path: '/system/permission',
        name: 'permission',
        component: 'system/Permission',
        meta: {
          title: '权限管理',
          icon: 'FieldNumberOutlined'
        }
      }
    ]
  }
]
