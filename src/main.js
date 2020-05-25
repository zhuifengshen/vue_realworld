import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

new Vue({
  router,
  store,  // 把store对象提供给“store”选项，这可以把store的实例注入所有的子组件，然后子组件就可以通过this.$store访问到
  render: h => h(App)
}).$mount('#app')
