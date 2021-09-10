
import request from '@/utils/request'
export function getList(params) {
  return request({
    url: '/spu',
    method: 'get',
    params
  })
}