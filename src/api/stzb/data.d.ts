export interface IHero{
    id:string
    name:string
}

/**
 * 检索
 */
export interface ISearchBase {
    priceMin:number // 最小金额
    priceMax:number // 最大金额
    passFairShow:string // 公示期 0：公示期 1：非公示期 2 所有
    cardHero:IHero[] // 英雄
    cardAdvanceNum:number // 进阶
}

/**
 * 检索详情
 */
export interface ISearch extends ISearchBase{
    id:string
}

/**
 * 新增检索
 */
export interface ISearchCreate extends ISearchBase{

}
