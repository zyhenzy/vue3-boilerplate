import { Request } from '@/utils/request/request'
import type { AxiosRequestConfig } from 'axios'
import type { AxiosResponse, InternalAxiosRequestConfig } from 'axios'

// 防止重复提交
export class RequestNoRepeat extends Request {

  private hasRequest: string[] = [] // 正在请求的url

  constructor(config: AxiosRequestConfig) {
    super(config)
    this.requestGuard()
    this.responseGuard()
  }

  private requestGuard() {
    this.instance.interceptors.request.use((config: InternalAxiosRequestConfig) => {
      const url = config.url
      if (url && this.hasRequest.indexOf(url) !== -1) {
        return Promise.reject({ mes: '请求已经提交' })
      } else if (url) {
        this.hasRequest.push(url)
      }
      return config
    })
  }

  private responseGuard() {
    this.instance.interceptors.response.use((res: AxiosResponse) => {
      if (res.config.url && this.hasRequest.indexOf(res.config.url) !== -1) {
        this.removeUrl(res.config.url)
      }
      return res
    })
  }

  // 从正在请求的url列表中，移除url
  private removeUrl(url: string) {
    this.hasRequest = this.hasRequest.filter((item) => {
      if (item !== url) {
        return item
      }
    })
  }

}

// 默认导出Request实例
export default new RequestNoRepeat({})
