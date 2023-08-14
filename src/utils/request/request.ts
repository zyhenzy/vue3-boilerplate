// index.ts
import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import { getToken } from '@/utils/token'
import router from '@/router'
import { message } from 'ant-design-vue'
import { HTTP_ERROR } from '@/constants/http-error'

type Result<T> = {
  code: number;
  message: string;
  data: T;
};

// 导出Request类，可以用来自定义传递配置来创建实例
export class Request {
  // request 实例
  instance: AxiosInstance
  // 基础配置，url和超时时间
  private baseConfig: AxiosRequestConfig = {
    baseURL: '/',
    timeout: 60000,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  constructor(config: AxiosRequestConfig) {
    // 使用axios.create创建axios实例
    this.instance = axios.create(Object.assign(this.baseConfig, config))

    this.instance.interceptors.request.use(
      (config: InternalAxiosRequestConfig) => {
        // 一般会请求拦截里面加token，用于后端的验证
        const token = getToken()
        if (token) {
          config.headers!.Authorization = token
        }
        return config
      },
      (err: any) => {
        // 请求错误，这里可以用全局提示框进行提示
        return Promise.reject(err)
      }
    )

    this.instance.interceptors.response.use(
      (res: AxiosResponse) => {
        // 系统如果有自定义code可以在这里处理
        if (res.data.code === 401) {
          message.error('登陆过期，请重新登录')
          setTimeout(() => {
            router.replace('/login')
          }, 500)
          return Promise.reject(res.data)
        } else if (res.data.code !== 200) {
          return Promise.reject(res.data)
        } else {
          return res // fixme:返回的必须是res，否则继承该类的拦截器中，回调函数的参数不一致
        }
      },
      (err: any) => {
        // 处理http请求错误
        const httpStatus = err.response.status
        // @ts-ignore
        const msg = HTTP_ERROR[httpStatus]
        message.error(msg)
        return Promise.reject(err.response)
      }
    )
  }

  // 定义请求方法
  public request(config: AxiosRequestConfig): Promise<AxiosResponse> {
    return this.instance.request(config)
  }

  public get<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.get(url, config)
  }

  public post<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.post(url, data, config)
  }

  public put<T>(
    url: string,
    data?: any,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.put(url, data, config)
  }

  public delete<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<Result<T>>> {
    return this.instance.delete(url, config)
  }
}

// 默认导出Request实例
export default new Request({})
