export interface ISession{
    user:IUser
    token:string
    routes:IRoute[]
}

export interface IUser {
    name:string
    age:number,
}

export interface IRoute {
    path:string,
    name:string,
    component:any, // 组件
    children?:IRoute[]
    meta?:{
        title?:string, // 菜单名称
        hidden?:boolean // 是否在菜单隐藏
        excludeAuth?:boolean // 不需要登陆即可访问
    }
}
