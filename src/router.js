import Vue from 'vue'
import Router from 'vue-router'
//import Home from './views/Home.vue'
import Register from './views/Register'
import Login from './views/Login'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'logins',
      redirect: '/login'  //重定向
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/Login.vue')
    },
    {
        path: '/index',
        name: 'index',
        component: () => import( './views/Index.vue')
    },
    {
        //一级路由
        path: '/botnav',
        name: 'botnav',
        component: () => import( './views/Botnav.vue'),
        children:[
            {
                path: 'index',
                name: 'index1',
                component: () => import( './views/Index.vue')
            },
            {
                path: 'list',
                name: 'list',
                component: () => import( './views/List.vue')
            },
            {
                path: 'search',
                name: 'search',
                component: () => import( './views/Search.vue')
            },
            {
                path: 'cart',
                name: 'cart',
                meta:{
                    requireAuth:true, //当有这个字段的时候，我们就认为它这个路由页面要登录权限2的
                },
                component: () => import( './views/Car.vue')
            },
            {
                path: 'mine',
                name: 'mine',
                meta:{
                    requireAuth:true, //当有这个字段的时候，我们就认为它这个路由页面要登录权限的
                },
                component: () => import( './views/Mine.vue')
            },
        ]
    },
  ]
})
