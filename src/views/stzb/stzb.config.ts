export const COLUMNS = [
  {
    name: '金额',
    dataIndex: 'price',
    key: 'price'
  },
  {
    title: '英雄',
    dataIndex: 'cardHeroId',
    key: 'cardHeroId'
  },
  {
    title: '进阶',
    key: 'cardAdvanceNum',
    dataIndex: 'cardAdvanceNum'
  },
  {
    title: '公示期',
    dataIndex: 'passFairShow',
    key: 'passFairShow'
  },
  {
    title: '操作',
    key: 'action'
  }
]

export const DETAIL_COLUMNS = [
  {
    name: '金额',
    dataIndex: 'price',
    key: 'price',
    sorter: {
      compare: (a, b) => a.price - b.price,
    },
  },
  {
    title: '标签',
    dataIndex: 'tag',
    key: 'tag',
    sorter: {
      compare: (a, b) => a.tag.length - b.tag.length,
    },
  },
  {
    title: '标签2',
    key: 'skillTag',
    dataIndex: 'skillTag',
    sorter: {
      compare: (a, b) => a.skillTag.length - b.skillTag.length,
    },
  },
  {
    title: '核心分数',
    dataIndex: 'coreScore',
    key: 'coreScore',
    sorter: {
      compare: (a, b) => a.coreScore - b.coreScore,
    },
  },
  {
    title: '核心性价比',
    dataIndex: 'coreScoreRate',
    key: 'coreScoreRate',
    sorter: {
      compare: (a, b) => a.coreScoreRate - b.coreScoreRate,
    },
  },
  {
    title: '综合分数',
    dataIndex: 'score',
    key: 'score',
    sorter: {
      compare: (a, b) => a.score - b.score,
    },
  },
  {
    title: '综合性价比',
    dataIndex: 'scoreRate',
    key: 'scoreRate',
    sorter: {
      compare: (a, b) => a.scoreRate - b.scoreRate,
    },
  },
  {
    title: '收藏',
    dataIndex: 'collect_num',
    key: 'collect_num',
    sorter: {
      compare: (a, b) => a.collect_num - b.collect_num,
    },
  },
  {
    title: '操作',
    key: 'action'
  }
]