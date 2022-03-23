
import { get, post } from "@/utils/request";
// 上传
export const upload = (params) => {
  return post("/upload", params);
};