import type { MockMethod } from 'vite-plugin-mock'
import {heroList} from './db/hero';

const mockList: MockMethod[] = [
    // 增加英雄
    {
        url: '/mock/hero',
        method: 'post',
        statusCode: 200,
        response: (opt: any) => {
            console.log(opt)
            const {headers,body} = opt
            if(headers.authorization){
                return {
                    code: 200,
                    message: '添加成功',
                    data: {body},
                }
            }else{
                return {
                    code:401,
                    message:'登陆过期，请重新登录'
                }
            }
        },
    },
    // 删除英雄
    {
        url: '/mock/hero/:id',
        method: 'delete',
        statusCode: 200,
        response: (opt: any) => {
            console.log(opt)
            const {headers,body} = opt
            if(headers.authorization){
                return {
                    code: 200,
                    message: '删除成功',
                    data: {body},
                }
            }else{
                return {
                    code:401,
                    message:'登陆过期，请重新登录'
                }
            }
        },
    },
    // 修改英雄
    {
        url: '/mock/hero',
        method: 'put',
        statusCode: 200,
        response: (opt: any) => {
            console.log(opt)
            const {headers,body} = opt
            if(headers.authorization){
                return {
                    code: 200,
                    message: '修改成功',
                    data: {body},
                }
            }else{
                return {
                    code:401,
                    message:'登陆过期，请重新登录'
                }
            }
        },
    },
    // 查看英雄列表
    {
        url: '/mock/heroList',
        method: 'get',
        statusCode: 200,
        response: (opt: any) => {
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
    },
    // 根据ID查看英雄详情
    {
        url: '/mock/hero/:id',
        method: 'get',
        statusCode: 200,
        response: (opt: any) => {
            const {headers} = opt
            if(headers.authorization){
                return {
                    code: 200,
                    message: '获取成功',
                    data: heroList[0],
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
