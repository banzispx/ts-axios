export type Method = 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
// 对于一个 AJAX 请求的 response，我们是可以指定它的响应的数据类型的，通过设置 XMLHttpRequest对象的 responseType属性，于是我们可以给 AxiosRequestConfig 类型添加一个可选属性：

export interface AxiosRequestConfig {
  url?: string
  method?: Method
  data?: any
  params?: any
  headers?: any
  responseType?: XMLHttpRequestResponseType
  timeout?: number
}
// 定义响应数据类型
export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}
// 另外，axios 函数返回的是一个 Promise 对象，我们可以定义一个 AxiosPromise 接口，它继承于 Promise<AxiosResponse> 这个泛型接口：
export interface AxiosPromise extends Promise<AxiosResponse> {
}
export interface AxiosError extends Error {
  isAxiosError: boolean
  config: AxiosRequestConfig
  code?:string|null
  request?:any
  response?:AxiosResponse
}
// 定义axios接口
export interface Axios {
  request(config: AxiosRequestConfig): AxiosPromise
  request<T = any>(config: AxiosRequestConfig): AxiosPromise;

  get<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise;

  delete<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise;

  head<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise;

  options<T = any>(url: string, config?: AxiosRequestConfig): AxiosPromise;

  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise;

  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise;

  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): AxiosPromise;

  getUri(config?: AxiosRequestConfig): string;
}

export interface AxiosInstance extends Axios {
  (config: AxiosRequestConfig): AxiosPromise;

  // (url: string, config?: AxiosRequestConfig): AxiosPromise;
}
