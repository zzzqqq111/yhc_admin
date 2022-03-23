import { get, post } from "@/utils/request";
// 获取商品库列表
export const getList = (params) => {
  return get("/spu", params);
};
// 修改商品状态
export const changeSpuStatus = (params) => {
  return post(`/spu/updatestatus/${params.id}`, {}, params);
};

// 获取商品的sku数据
export const getSkuList = (id) => {
  return get(`/spu/${id}`);
};

// 获取分类
export const getCategoryList = (params) => {
  return get(`/category/pageThreeCategory`, params);
}

// 获取初始化数据
export const getDefaultStatic = () => {
  return get(`/spu/init`)
}

export const getBrandList = () => {
  return get('/brand')
}



