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
    title: '核心最高分',
    dataIndex: 'maxCoreScore',
    key: 'maxCoreScore',
    width: 60
  },
  {
    title: '红度最高分',
    dataIndex: 'maxRedScore',
    key: 'maxRedScore',
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
    width: 90,
    sorter: {
      compare: (a, b) => a.price - b.price
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
    title: '核心标签',
    dataIndex: 'heTag',
    key: 'heTag',
    width: 100,
    sorter: {
      compare: (a, b) => a.heTag.length - b.heTag.length
    }
  },
  {
    title: '标签2',
    key: 'skillTag',
    dataIndex: 'skillTag',
    width: 200,
    sorter: {
      compare: (a, b) => a.skillTag.length - b.skillTag.length
    }
  },
  {
    title: '赛季分数',
    dataIndex: 'seasonScore',
    key: 'seasonScore',
    width: 60,
    sorter: {
      compare: (a, b) => a.seasonScore - b.seasonScore
    }
  },
  {
    title: '赛季性价比',
    dataIndex: 'seasonScoreRate',
    key: 'seasonScoreRate',
    width: 60,
    sorter: {
      compare: (a, b) => a.seasonScoreRate - b.seasonScoreRate
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
    key: 'redScore',
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
    title: '完整度',
    dataIndex: 'integrity',
    key: 'integrity',
    width: 60,
    sorter: {
      compare: (a, b) => a.integrity - b.integrity
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
    width: 60
  }
]

// 条件
const condition = [
  {"priceMin":200,"priceMax":5000,"passFairShow":"2","cardHeroId":[100479,100013,100030,100035,100496,100016,100023,100526],"cardAdvanceNum":0,"id":"fbeytaf96-d44b-4a0b-822f-306b3ca0022a"},
  {"priceMin":5001,"priceMax":10000,"passFairShow":"2","cardHeroId":[100479,100013,100030,100035,100496,100016,100023,100526],"cardAdvanceNum":0,"id":"fbe3af96-d44b-4a0b-822f-306b3ca0022a"},
  {"priceMin":10001,"priceMax":20000,"passFairShow":"2","cardHeroId":[100479,100013,100030,100035,100496,100016,100023,100526],"cardAdvanceNum":0,"id":"fbe3af96-d44b-4a0b-822f-306b3ca00222a"},
  {"priceMin":20001,"priceMax":50000,"passFairShow":"2","cardHeroId":[100479,100013,100030,100035,100496,100016,100023,100526],"cardAdvanceNum":0,"id":"fbe3af96-d44b-4a0b-822f-306b3ca034022a"},
  {"priceMin":200,"priceMax":1000,"passFairShow":"2","cardHeroId":[100479],"cardAdvanceNum":0,"apprentice":true,"id":"b547f70a-79f9-4b86-a6a7-b92b953eaddc"},
  {"priceMin":200,"priceMax":2000,"passFairShow":"2","cardHeroId":[100479,100496],"cardAdvanceNum":0,"apprentice":true,"id":"6da4833a-0507-4d6d-a26c-462c6a994a29"}
]