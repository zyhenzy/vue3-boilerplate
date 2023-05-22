import type {MockMethod} from 'vite-plugin-mock'
import { permissions1, permissions2 } from "./db/user";

const mockList: MockMethod[] = [
    {
        url: '/mock/login',
        method: 'post', // 请求方式
        statusCode: 200, // 返回的http状态码
        response: (opt: any) => {
            const {username, password} = opt.body
            if(username==='admin'&&password==='1'){
                return {
                    // 返回的结果集
                    code: 200,
                    message: '登录成功',
                    data: {
                        token: 'token1',
                    },
                }
            }else if(username==='root'&&password==='1'){
                return {
                    // 返回的结果集
                    code: 200,
                    message: '登录成功',
                    data: {
                        token: 'token2',
                    },
                }
            }else{
                return {
                    code:400,
                    message:'登录失败'
                }
            }
        },
    },
    {
        url: '/mock/session',
        method: 'get', // 请求方式
        statusCode: 200, // 返回的http状态码
        response: (opt: any) => {
            const { headers } = opt;
            const token = headers.authorization;
            if (token === "token1") {
                return {
                    // 返回的结果集
                    code: 200,
                    message: '获取session成功',
                    data: {
                        user: {name: '小明', age: 18},
                        token: 'token1',
                        routes:permissions1
                    },
                }
            } else if (token === "token2") {
                return {
                    // 返回的结果集
                    code: 200,
                    message: '获取session成功',
                    data: {
                        user: {name: '小红', age: 18},
                        token: 'token2',
                        routes:permissions2
                    },
                }
            }else{
                return {
                    code:401,
                    message:'登陆过期，请重新登录'
                }
            }
        },
    },
]
export default mockList
