import type { MockMethod } from 'vite-plugin-mock'
import {heroList} from './db/hero';

const mockList: MockMethod[] = [
    {
        url: '/mock/heroList',
        method: 'get',
        statusCode: 200,
        response: (opt: any) => {
            console.log(opt)
            const {headers} = opt
            if(headers.authorization){
                return {
                    code: 200,
                    message: '获取成功',
                    data: heroList,
                }
            }else{
                return {
                    code:401,
                    message:'登陆过期，请重新登录'
                }
            }
        },
    }
]
export default mockList
