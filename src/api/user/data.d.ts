export interface User {
    name:string
    age:number,
}

export interface Session{
    user:User
    token:string
}
