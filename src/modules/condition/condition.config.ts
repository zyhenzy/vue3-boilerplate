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
        key: 'advanceNum',
        dataIndex: 'advanceNum',
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

export const ACCOUNT_COLUMNS = [
    {
        title: 'ID',
        dataIndex: 'id',
        key: 'id',
        width: 120,
    },
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
        title: '中介报价',
        dataIndex: 'intermediaryPrice',
        key: 'intermediaryPrice',
        width: 120,
        sorter: {
            compare: (a, b) => a.intermediaryPrice - b.intermediaryPrice
        }
    },
    {
        title: '卡片金额',
        dataIndex: 'cardPrice',
        key: 'cardPrice',
        width: 120,
        sorter: {
            compare: (a, b) => a.cardPrice - b.cardPrice
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
        dataIndex: 'siTong',
        key: 'siTong',
        sorter: {
            compare: (a, b) => a.siTong - b.siTong
        }
    },
    {
        title: '试师',
        dataIndex: 'apprentice',
        key: 'apprentice',
        width: 60
    },
    {
        title: 'S赛季',
        dataIndex: 'seasonScore',
        key: 'seasonScore',
        width: 60,
        sorter: {
            compare: (a, b) => a.seasonScore - b.seasonScore
        }
    },
    {
        title: '性价比',
        dataIndex: 'seasonScoreRate',
        key: 'seasonScoreRate',
        width: 60,
        sorter: {
            compare: (a, b) => a.seasonScoreRate - b.seasonScoreRate
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
        title: '性价比',
        dataIndex: 'coreScoreRate',
        key: 'coreScoreRate',
        width: 60,
        sorter: {
            compare: (a, b) => a.coreScoreRate - b.coreScoreRate
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
        dataIndex: 'collectNum',
        key: 'collectNum',
        width: 60,
        sorter: {
            compare: (a, b) => a.collectNum - b.collectNum
        }
    },
    {
        title: '操作',
        key: 'action',
        width: 120
    }
]