import axios from 'axios';
import { Toast } from "vant";
import Loading from "../store/index";

export function request(config){
	// 1.创建axios实例
	const instance = axios.create({
		baseURL:'http://152.136.185.210:8000/api/w6',
		timeout:5000
	})
	  // 2.请求拦截器
  instance.interceptors.request.use(config => {
    //拦截后需要将拦截下来的请求数据返回发送
    if (Loading.getters.isLoading) {     
        Toast.loading({
        message: '加载中...',
        forbidClick: true,
      });
     
    }
    return config;
  }, err => {
     console.log(err);
  })

  // 2.2响应拦截器
  instance.interceptors.response.use(res => {
    // 拦截后需要将拦截下来处理成的结果返回
    Toast.clear();
    return res.data;
  }, err => {
    Toast.clear();
    return err;
  })
  // 3.发送真正的网络请求,返回 Promise
  return instance(config)
}
