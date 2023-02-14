import axios from 'axios'
// import qs from 'qs'
// import { getToken } from '@/utils/auth'

// create an axios instance
const service = axios.create({
  baseURL: '/',
  timeout: 10000, // request timeout
})

service.interceptors.request.use(
  (config) => {
    // if (config.method === 'get') {
    //   config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    // } else {
    //   if (config.data) {
    //     config.data = JSON.stringify(config.data)
    //     config.headers['Content-Type'] = 'application/json'
    //   } else {
    //     config.data = qs.stringify(config.params)
    //     config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    //     delete config.params
    //   }
    // }

    return config
  },
  (error) => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  },
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  (response) => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.

    if (res.status && res.status !== 1) {
      ElMessage({
        message: res.message || 'Error',
        type: 'error',
        duration: 2 * 1000,
      })

      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  (error) => {
    console.log(`err${error}`) // for debug
    ElMessage({
      message: error.message,
      type: 'error',
      duration: 5 * 1000,
    })
    return Promise.reject(error)
  },
)

export const Get = (data: any) => service({
  ...data,
  method: 'get',
})

export const Post = (data: any) => service({
  ...data,
  method: 'post',
})

export default service
