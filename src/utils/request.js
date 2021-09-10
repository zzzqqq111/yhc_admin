import axios from "axios";
// import store from "@/store";
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
    // if (store.state.token) {
    config.headers["authorization"] =
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJaTF9TUFUiLCJTQUFTIiwiRVhDRVBUSU9OX1BBR0UiLCJaTF9DRU5UUkFMX1dBUkVIT1VTRSIsIlNFVF9VUCIsIkpDX1NQVSIsIkFDQ09VTlQiLCJIT01FX1BBR0UiLCJGSU5BTkNFIiwiQURWRVJUSVNFTUVOVF9CQU5ORVIiLCJKQ19DRU5UUkFMX1dBUkVIT1VTRSIsIkFETUlOX1RPUCIsIkpDX09SREVSIiwiWkxfT1JERVIiXSwidXNlcm5hbWUiOiJhZG1pbiIsImlzcyI6InNpdGUuaGF5b25kLmFjY291bnQiLCJzdWIiOiIxMzQwIiwiYXVkIjoiWlhISiIsImlhdCI6MTYzMDkwODk4MCwiZXhwIjoxNjQ2NDYwOTgwfQ.gbLg7fZ0pLMCSJ0VgER0gWlsCxvTyH5dwxlKygT28s0";
    // }
    return config;
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
      console.log('response', res)
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
    axios
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
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
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
