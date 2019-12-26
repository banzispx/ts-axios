import {
  AxiosPromise,
  AxiosRequestConfig,
  Method
} from '../types';
import dispatchRequest from './dispatchRequest';

export default class Axios {
  request(config: AxiosRequestConfig): AxiosPromise {
    return dispatchRequest(config)
  }
  get(url: string, config?: AxiosRequestConfig): AxiosPromise {
    return this.request(Object.assign(config || {}, {
      method: 'get',
      url
    }));
  }

}
