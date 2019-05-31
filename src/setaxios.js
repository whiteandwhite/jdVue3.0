import axios from 'axios'
import store from './store'
import router from './router'

//http的全局拦截
//token要放在我们请求的header上面带回去后端

export default function setAxios(){
    //请求拦截
    axios.interceptors.request.use(  //固定写法
        config=>{
            if(store.state.token){  //从vuex拿到store上的token
                config.headers.token = store.state.token  //如果这个token存在就带回去
            }
            return config  //返回
        }
    )
    //每次的请求有返回的，都是先经过这个拦截器先的  拦截了data那个
    axios.interceptors.response.use(
        response=>{
            //一些状态码什么的都可以在这写
            if(response.status == 200){  //状态码
                const data = response.data
                if(data.code == -1){
                    //等于-1的时候 登录过期 需要重新登录 清空vuex的token和本地存储上的token
                    store.commit('settoken','')
                    localStorage.removeItem('token') //本地存储
                    //跳转到Login页面
                    router.replace({path:'/login'})
                }
                return data
            }
            return response
        }
    )
}
















