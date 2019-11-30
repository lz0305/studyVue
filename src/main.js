import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import VueRouter from 'vue-router'
import routerConfig from './route/router.config.js'
import vuexConfig from './store/vuex.config.js'
//引入动画组件
import './assets/animate.css'

Vue.config.productionTip = false
//使用路由
Vue.use(VueRouter)
//使用vuex 
Vue.use(Vuex)
//生成路由实例
let router = new VueRouter(routerConfig );
//生成示例
let store = new Vuex.Store(vuexConfig);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
