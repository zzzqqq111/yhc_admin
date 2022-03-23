import axios from "axios";
import store from "@/store";
import { Loading } from "element-ui";
// import { getToken } from '@/utils/auth'

axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8"; //设置编码
let loading = null; //初始化loading

// 创建axios实例
const service = axios.create({
  baseURL: "/api/v1", // api的base_url
  timeout: 5000, // 请求超时时间
});

if (process.env.NODE_ENV == 'development') {    
  service.defaults.baseURL = '/api/v1';
} else if (process.env.NODE_ENV == 'debug') {    
  service.defaults.baseURL = '';
} else if (process.env.NODE_ENV == 'production') {    
  service.defaults.baseURL = 'http://api.123dailu.com/';
}
/*
 *请求前拦截
 *用于处理需要请求前的操作
 */
service.interceptors.request.use(
  (config) => {
    loading = Loading.service({
      text: "正在加载中......",
      fullscreen: true,
    });
    config.headers = Object.assign(config.method === 'get' ? {
      'Accept': 'application/json',
      'Content-Type': 'application/json; charset=UTF-8'
    } : {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }, config.headers);
  
    if (config.method === 'post') {
      const contentType = config.headers['Content-Type'];
      // 根据Content-Type转换data格式
      if (contentType) {
        if (contentType.includes('multipart')) { // 类型 'multipart/form-data;'
          // config.data = data;
        } else if (contentType.includes('json')) { // 类型 'application/json;'
          // 服务器收到的raw body(原始数据) "{name:"nowThen",age:"18"}"（普通字符串）
          config.data = JSON.stringify(config.data);
        } else { // 类型 'application/x-www-form-urlencoded;'
          // 服务器收到的raw body(原始数据) name=nowThen&age=18
          config.data = Qs.stringify(config.data);
        }
      }
    }
    if (store.state.token) {
      config.headers["authorization"] = `Bearer ${store.state.token}`;
    }
    return Promise.resolve(config);
  },
  (error) => {
    return Promise.reject(error);
  }
);

/*
 *请求响应拦截
 *用于处理数据返回后的操作
 */
service.interceptors.response.use(
  (response) => {
    return new Promise((resolve, reject) => {
      //请求成功后关闭加载框
      if (loading) {
        loading.close();
      }
      const res = response.data;
      if (res.code === 200) {
        resolve(res.data);
      } else {
        reject(res);
      }
    });
  },
  (error) => {
    console.log(error);
    //请求成功后关闭加载框
    if (loading) {
      loading.close();
    }
    //断网处理或者请求超时
    if (!error.response) {
      //请求超时
      if (error.message.includes("timeout")) {
        console.log("超时了");
        this.$message("error", "请求超时，请检查互联网连接");
      } else {
        //断网，可以展示断网组件
        console.log("断网了");
        this.$message("error", "请检查网络是否已连接");
      }
      return;
    }
    const status = error.response.status;
    switch (status) {
      case 500:
        this.$message("error", "服务器内部错误");
        break;
      case 404:
        this.$message("error", "未找到远程服务器");
        break;
      case 401:
        this.$message("warning", "用户登陆过期，请重新登陆");
        localStorage.removeItem("token");
        // setTimeout(() => {
        //   router.replace({
        //     path: "/login",
        //     query: {
        //       redirect: router.currentRoute.fullPath,
        //     },
        //   });
        // }, 1000);
        break;
      case 400:
        this.$message("error", "数据异常");
        break;
      default:
        this.$message("error", error.response.data.message);
    }
    return Promise.reject(error);
  }
);

/*
 *get方法，对应get请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    service
      .get(url, {
        params,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}
/*
 *post方法，对应post请求
 *@param {String} url [请求的url地址]
 *@param {Object} params [请求时候携带的参数]
 */
export function post(url, params, query) {
  return new Promise((resolve, reject) => {
    service
      .post(url, params, {
        params: query,
      })
      .then((res) => {
        resolve(res);
      })
      .catch((err) => {
        reject(err);
      });
  });
}

// export function request(method, url,params){

// }
export default service;
