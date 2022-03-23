import { get, post } from "@/utils/request";
// 修改商品状态
export const login = (params) => {
  return post(`/account/login`, params );
};

// 获取当前登录人信息
export const getUserInfo = (params) => {
  return get(`/userDetail/getLoginUser`, params );
};
