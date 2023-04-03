import type {MockMethod} from 'vite-plugin-mock'

const mockList: MockMethod[] = [
    {
        url: '/mock/login',
        method: 'post', // 请求方式
        statusCode: 200, // 返回的http状态码
        response: (opt: any) => {
            const {username, password} = opt.body
            return {
                // 返回的结果集
                code: 200,
                message: '登录成功',
                data: {
                    user: {name: '小明', age: 18, username, password},
                    token: 'my token'
                },
            }
        },
    },
    {
        url: '/mock/session',
        method: 'get', // 请求方式
        statusCode: 200, // 返回的http状态码
        response: () => {
            return {
                // 返回的结果集
                code: 200,
                message: '获取session成功',
                data: {
                    user: {name: '小明', age: 18},
                    token: 'my token'
                },
            }
        },
    },
]
export default mockList
