import axios, {AxiosError}from '../../src/index'

// get demo
axios({
  method: 'get',
  url: '/error/get1',
}).then(res =>{
  console.log(res)
}).catch((e) =>{
  console.log(e, '/error/get1')
})
axios({
  method: 'get',
  url: '/error/get',
}).then(res =>{
  console.log(res)
}).catch((e) =>{
  console.log(e, '/error/get')
})
setTimeout(() => {
  axios({
    method: 'get',
    url: '/error/get',
  }).then(res =>{
    console.log(res)
  }).catch((e) =>{
    console.log(e)
  })
}, 5000);
// 模拟超时效果
axios({
  method: 'get',
  url: '/error/timeout',
  timeout: 2000
}).then(res =>{
  console.log(res)
}).catch((e:AxiosError) =>{
  console.log(e,'/error/timeout')
})