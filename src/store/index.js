import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  /**
   * 全局共享的状态，类似于组件中的 data
   */
  state: {
	  user: JSON.parse(window.localStorage.getItem('user'))
  },
  /**
   * 使用 mutations 来修改 state 状态（都是函数，第一个参数是 state 对象，其他的都是参数）
   */
  mutations: {
	  setUser(state, user){
		  state.user = user
		  // 不要忘了将数据持久化，避免刷新丢失用户登录状态（本地存储只能放字符串）
		  window.localStorage.setItem('user', JSON.stringify(state.user))
	  }
  },
  actions: {
  },
  modules: {
  }
})
