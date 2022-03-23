// 保存着更改数据的回调函数纯函数，，通过store.commit（方法名）调用
const mutations = {
  // 保存token
  COMMIT_TOKEN(state, object) {
    state.token = object.token
  },
  // 用户信息
  USER_INFO(state, data) {
    state.userInfo = data
  },
  IS_COLLAPSE(state, bool) {
    state.isCollapse = bool
  }
}
export default mutations
