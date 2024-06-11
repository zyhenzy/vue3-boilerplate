export const COLUMNS = [
  {
    name: '金额',
    dataIndex: 'price',
    key: 'price',
    width: 300
  },
  {
    title: '英雄',
    dataIndex: 'cardHeroId',
    key: 'cardHeroId',
    width: 360
  },
  {
    title: '进阶',
    key: 'cardAdvanceNum',
    dataIndex: 'cardAdvanceNum',
    width: 60
  },
  {
    title: '公示期',
    dataIndex: 'passFairShow',
    key: 'passFairShow',
    width: 60
  },
  {
    title: '是否试师',
    dataIndex: 'apprentice',
    key: 'apprentice',
    width: 40
  },
  {
    title: '赛季最高分',
    dataIndex: 'maxSeasonScore',
    key: 'maxSeasonScore',
    width: 60
  },
  {
    title: '核心最高分',
    dataIndex: 'maxCoreScore',
    key: 'maxCoreScore',
    width: 60
  },
  {
    title: '综合最高分',
    dataIndex: 'maxScore',
    key: 'maxScore',
    width: 60
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark',
    width: 120
  },
  {
    title: '操作',
    key: 'action',
    width: 210
  }
]

export const DETAIL_COLUMNS = [
  {
    title: '金额',
    dataIndex: 'price',
    key: 'price',
    width: 120,
    sorter: {
      compare: (a, b) => a.price - b.price
    }
  },
  {
    title: '武器金额',
    dataIndex: 'weaponPrice',
    key: 'weaponPrice',
    width: 120,
    sorter: {
      compare: (a, b) => a.weaponPrice - b.weaponPrice
    }
  },
  {
    title: '标签',
    dataIndex: 'tag',
    key: 'tag',
    sorter: {
      compare: (a, b) => a.tag.length - b.tag.length
    }
  },
  {
    title: '武将标签',
    dataIndex: 'heroTag',
    key: 'heroTag',
    sorter: {
      compare: (a, b) => a.heroTag.length - b.heroTag.length
    }
  },
  {
    title: '战法标签',
    dataIndex: 'skillTag',
    key: 'skillTag',
    sorter: {
      compare: (a, b) => a.skillTag.length - b.skillTag.length
    }
  },
  {
    title: '四通',
    dataIndex: 'sitong',
    key: 'sitong',
    sorter: {
      compare: (a, b) => a.sitong - b.sitong
    }
  },
  {
    title: '试师',
    dataIndex: 'isApprentice',
    key: 'isApprentice',
    width: 60
  },
  {
    title: '赛季',
    dataIndex: 'seasonScore',
    key: 'seasonScore',
    width: 60,
    sorter: {
      compare: (a, b) => a.seasonScore - b.seasonScore
    }
  },
  {
    title: '核心',
    dataIndex: 'coreScore',
    key: 'coreScore',
    width: 60,
    sorter: {
      compare: (a, b) => a.coreScore - b.coreScore
    }
  },
  {
    title: '综合',
    dataIndex: 'score',
    key: 'score',
    width: 60,
    sorter: {
      compare: (a, b) => a.score - b.score
    }
  },
  {
    title: '收藏',
    dataIndex: 'collect_num',
    key: 'collect_num',
    width: 60,
    sorter: {
      compare: (a, b) => a.collect_num - b.collect_num
    }
  },
  {
    title: '操作',
    key: 'action',
    width: 120
  }
]