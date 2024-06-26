// 英雄卡片
export interface IHeroCard{
    country: string,
    hero_type: number,
    icon_hero_id: number,
    label: string,
    name: string,
    pinyin: string,
    quality: number,
    season: string,
    star: number,
    value: number
}

/**
 * 检索
 */
export interface ISearch {
    id?:string // uuid
    priceMin?:number // 最小金额
    priceMax?:number // 最大金额
    passFairShow:string // 公示期 0：公示期 1：非公示期 2 所有
    cardHeroId:number[] // 英雄ID
    cardAdvanceNum:number // 进阶
    maxScore?:number // 历史最高分
    maxSeasonScore?:number // 赛季最高分
    maxCoreScore?:number // 核心最高分
    remark?:string // 备注
    apprentice?:boolean // 试师
}

// 账号
export interface Account{
    game_ordersn:string // 主键
    [key: string]: any;
}