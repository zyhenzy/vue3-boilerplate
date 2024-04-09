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
    title: '赛季最高分',
    dataIndex: 'maxSeasonScore',
    key: 'maxSeasonScore',
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
    width: 90
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
    sorter: {
      compare: (a, b) => a.tag.length - b.tag.length
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
    width: 60
  }
]

// 条件
const condition = [{
  "priceMin": 200,
  "priceMax": 5000,
  "passFairShow": "2",
  "cardHeroId": [100479, 100013, 100030, 100035, 100496, 100016, 100023, 100526],
  "cardAdvanceNum": 0,
  "id": "fbeytaf96-d44b-4a0b-822f-306b3ca0022a"
}, {
  "priceMin": 5001,
  "priceMax": 10000,
  "passFairShow": "2",
  "cardHeroId": [100479, 100013, 100030, 100035, 100496, 100016, 100023, 100526],
  "cardAdvanceNum": 0,
  "id": "fbe3af96-d44b-4a0b-822f-306b3ca0022a"
}, {
  "priceMin": 10001,
  "priceMax": 20000,
  "passFairShow": "2",
  "cardHeroId": [100479, 100013, 100030, 100035, 100496, 100016, 100023, 100526],
  "cardAdvanceNum": 0,
  "id": "fbe3af96-d44b-4a0b-822f-306b3ca00222a"
}, {
  "priceMin": 20001,
  "priceMax": 50000,
  "passFairShow": "2",
  "cardHeroId": [100479, 100013, 100030, 100035, 100496, 100016, 100023, 100526],
  "cardAdvanceNum": 0,
  "id": "fbe3af96-d44b-4a0b-822f-306b3ca034022a"
}, {
  "priceMin": 200,
  "priceMax": 1000,
  "passFairShow": "2",
  "cardHeroId": [100479],
  "cardAdvanceNum": 0,
  "apprentice": true,
  "id": "b547f70a-79f9-4b86-a6a7-b92b953eaddc"
}, {
  "priceMin": 200,
  "priceMax": 2000,
  "passFairShow": "2",
  "cardHeroId": [100479, 100496],
  "cardAdvanceNum": 0,
  "apprentice": true,
  "id": "6da4833a-0507-4d6d-a26c-462c6a994a29"
}, {
  "priceMin": 200,
  "priceMax": 50000,
  "passFairShow": "2",
  "cardHeroId": [100479, 100030, 100016, 100023],
  "cardAdvanceNum": 2,
  "id": "198ad6ca-f300-4b5d-b0d8-bc4c24a0d443"
}]