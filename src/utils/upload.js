import { get, post } from "./request";

export default function uploadFile(info) {
  const { size, file, name } = info;
  const unOssFileMaxSize = 5 * 1024 * 1024;
  const formData = new FormData();
  formData.append("file", file);
  return new Promise((resolve, reject) => {
    if (size < unOssFileMaxSize) {
      // 小于5M直接上传
      post("/upload")
        .then((data) => resolve({ link: data.link }))
        .catch((err) => {
          reject(err);
        });
    } else {
      // 大于5M上传到oss上
      get("/upload/uploadPolicy").then((res) => {
        const { accessid, cdnPath, dir, host, policy, signature } = res;
        formData.append("key", `${dir}${name}`); //存储在oss的文件路径
        formData.append("policy", policy); //policy
        formData.append("OSSAccessKeyId", accessid); //accessKeyId
        formData.append("success_action_status", "200"); //成功后返回的操作码
        formData.append("signature", signature); //签名
        post(host, formData).then(() => {
          resolve({ link: `${cdnPath}${name}` });
        });
      });
    }
  });
}
