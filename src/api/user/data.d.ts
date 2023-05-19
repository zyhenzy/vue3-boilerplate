export interface User {
    name:string
    age:number,
}

export interface Session{
    user:User
    token:string
    routes:IRoute[]
}

export interface IRoute {
    path:string,
    name:string,
    component:string
}
