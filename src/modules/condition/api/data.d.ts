/**
 * 条件
 */
export interface ICondition {
    id: string; // ID
    priceMin: number; // 最小金额
    priceMax: number; // 最大金额
    passFairShow: string; // 公示期 0：公示期 1：非公示期 2 所有
    cardHeroId: string[]
}

/**
 * 新增条件
 */
export interface IConditionCreate {
    priceMin: number; // 最小金额
    priceMax: number; // 最大金额
    passFairShow: string; // 公示期 0：公示期 1：非公示期 2 所有
    cardHeroId: string[]
}

/**
 * 修改条件
 */
export interface IConditionUpdate {
    id: string
    priceMin: number; // 最小金额
    priceMax: number; // 最大金额
    passFairShow: string; // 公示期 0：公示期 1：非公示期 2 所有
    cardHeroId: string[]
}
