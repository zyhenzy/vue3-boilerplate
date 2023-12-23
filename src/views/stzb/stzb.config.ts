export const COLUMNS = [
  {
    name: '金额',
    dataIndex: 'price',
    key: 'price',
    width: 200
  },
  {
    title: '英雄',
    dataIndex: 'cardHeroId',
    key: 'cardHeroId',
    width: 400
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
    title: '核心最高分',
    dataIndex: 'maxCoreScore',
    key: 'maxCoreScore',
    width: 80
  },
  {
    title: '红度最高分',
    dataIndex: 'maxRedScore',
    key: 'maxRedScore',
    width: 80
  },
  {
    title: '综合最高分',
    dataIndex: 'maxScore',
    key: 'maxScore',
    width: 80
  },
  {
    title: '备注',
    dataIndex: 'remark',
    key: 'remark'
  },
  {
    title: '操作',
    key: 'action',
    width: 120
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
    title: '标签',
    dataIndex: 'tag',
    key: 'tag',
    width: 280,
    sorter: {
      compare: (a, b) => a.tag.length - b.tag.length
    }
  },
  {
    title: '标签2',
    key: 'skillTag',
    dataIndex: 'skillTag',
    width: 180,
    sorter: {
      compare: (a, b) => a.skillTag.length - b.skillTag.length
    }
  },
  {
    title: '核心分数',
    dataIndex: 'coreScore',
    key: 'coreScore',
    width: 60,
    sorter: {
      compare: (a, b) => a.coreScore - b.coreScore
    }
  },
  {
    title: '核心性价比',
    dataIndex: 'coreScoreRate',
    key: 'coreScoreRate',
    width: 60,
    sorter: {
      compare: (a, b) => a.coreScoreRate - b.coreScoreRate
    }
  },
  {
    title: '高红分数',
    dataIndex: 'redScore',
    key: 'coreScore',
    width: 60,
    sorter: {
      compare: (a, b) => a.redScore - b.redScore
    }
  },
  {
    title: '高红性价比',
    dataIndex: 'redScoreRate',
    key: 'redScoreRate',
    width: 60,
    sorter: {
      compare: (a, b) => a.redScoreRate - b.redScoreRate
    }
  },
  {
    title: '综合分数',
    dataIndex: 'score',
    key: 'score',
    width: 60,
    sorter: {
      compare: (a, b) => a.score - b.score
    }
  },
  {
    title: '综合性价比',
    dataIndex: 'scoreRate',
    key: 'scoreRate',
    width: 60,
    sorter: {
      compare: (a, b) => a.scoreRate - b.scoreRate
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
    key: 'action'
  }
]