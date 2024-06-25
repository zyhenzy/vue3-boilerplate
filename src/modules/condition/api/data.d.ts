/**
 * 条件
 */
export interface ICondition {
    id: string; // ID
    priceMin: number; // 最小金额
    priceMax: number; // 最大金额
    passFairShow: string; // 公示期 0：公示期 1：非公示期 2 所有
    cardHeroId: string[]
    advanceNum: number // 进阶
    apprentice: boolean // 试师
    remark: string // 备注
}

/**
 * 新增条件
 */
export interface IConditionCreate {
    priceMin: number; // 最小金额
    priceMax: number; // 最大金额
    passFairShow: string; // 公示期 0：公示期 1：非公示期 2 所有
    cardHeroId: string[]
    advanceNum: number // 进阶
    apprentice: boolean // 试师
    remark: string // 备注
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
    advanceNum: number // 进阶
    apprentice: boolean // 试师
    remark: string // 备注
}
