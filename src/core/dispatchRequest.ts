import { AxiosRequestConfig, AxiosPromise ,AxiosResponse } from '../types'
import { transformRequest ,transformResponse} from '../helper/data'
import {processHeaders} from '../helper/headers'
import xhr from './xhr';
import { buildURL } from '../helper/url';
export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then((res) => {
    return transformResponseData(res)
  })
}
function processConfig(config: AxiosRequestConfig): void {
  // 处理url传参
  config.url = transformURL(config)
  // 处理herder数据   处理herder数据需要在处理body数据的前面，因为处理body数据时会改变data数据
  config.headers = transformHeaders(config)
  // 处理body数据
  config.data = transformRequestData(config)
}
function transformURL(config: AxiosRequestConfig): string {
  const { url, params } = config
  return buildURL(url!, params)
}

function transformRequestData (config: AxiosRequestConfig): any {
  return transformRequest(config.data)
}

function transformHeaders (config: AxiosRequestConfig) {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}
// 处理响应数据返回
function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}