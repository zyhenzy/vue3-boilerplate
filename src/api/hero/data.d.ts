/**
 * 英雄
 */
export interface IHero {
    id:string
    name:string
    description:string
    star:number
    sex:number
    active:boolean
}

/**
 * 新增英雄
 */
export interface IHeroCreate {
    name:string
    description:string
    star:number
    sex:number
    active:boolean
}

/**
 * 修改英雄
 */
export interface IHeroUpdate {
    id:string
    description:string
    star:number
    active:boolean
}
