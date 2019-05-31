import Vue from 'vue'
import './cube-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import 'amfe-flexible'

//拦截引入
import setaxios from './setaxios'
setaxios()

//全局路由守卫
router.beforeEach((to,from,next)=>{
  //无论是刷新还是路由跳转，第一个进入的就是这个路由前置的钩子函数
  store.commit('settoken',localStorage.getItem('token'))
  //直接刷新数据会掉失的，要使用本地存储token，获取vuex里的数据
  if( to.meta.requireAuth ){ //这是要跳转进入的第一个路由
    //判断里面的token是否存在
    if(store.state.token){
      next()//存在就跳过去
    }else {
      next({
          path:'/login', //不存在就跳转去登录页面
          query:{redirrect:to.fullPath} //重定向到这个地方
      })
    }
  }else {
    next()
  }
})

Vue.config.productionTip = false
Vue.prototype.$http = axios //挂载带全局去

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
