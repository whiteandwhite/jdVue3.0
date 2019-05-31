import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let store =  new Vuex.Store({
  //变量存储库  token就存在这
  state: {
    token:'',
    cararry:JSON.parse(localStorage.getItem('cararry')) || [],//存储购物车商品的数组，如果localS里有数据的就调用localS里的
    //取
  },
  //同步的方法 通过这个来存储
  //调用的时候用commit
  mutations: {
      settoken(state,token){//设置vuex的token
          state.token=token
      },
      //添加商品到购物车
      tocar(state,tag){ //第一个参数是数据仓库，第二个是要传进来的
          let goods = state.cararry.find(v=>v.title === tag.label )       //1、tag(分类页里)里商品的名称定义为label 2、title是购物车里定义的的名字
          if(goods){ //如果有了就+=                                          //所以判断这两个是否相等就知道有没有添加商品了
            goods.carCount += 1
          }else{  //如果没有就push一个进去
              state.cararry.push({title:tag.label,carCount:1}) //名称和数量
          }
      },
      //购物车商品数量加一
      caradd(state,index){
          state.cararry[index].carCount++
      },
      //购物车商品数量减一
      carremove(state,index){//减一的时候。减到0的时候要把商品移除出去
          if( state.cararry[index].carCount>1 ){//大于1就减
              state.cararry[index].carCount--
          }else {//少于1就移除
            if( window.confirm('确定从购物车移除商品吗？') ){//confirm用于显示一个带有指定消息和确认及取消按钮的对话框。
                state.cararry.splice(index,1)
            }
          }
      },
      //清空购物车(把商品清除了）
      clearcar(state){
          state.cararry = []
      }
  },
  //异步的方法
  actions: {

  },
  //相当于vue的computed 计算属性
  getters:{
      countsum:state => { //计算购物车添加商品的数量
          let num = 0
          state.cararry.forEach(v=>{
              num += v.carCount //数量
          })
          return num
      }
  },
//配合本地存储跟vuex去配合实现数据持久化(就是刷新的时候本地存储不会掉失)
})
//每次调用mutation的时候，都会进入这个方法，然后我们可以做一些其他的处理
store.subscribe((mutation,state) => {
    localStorage.setItem('cararry',JSON.stringify(state.cararry))//存
})
export default store

/*
* 添加商品到购物车的逻辑
* 1、先判断商品在cartarry这个数组里有没有
* 2、如果有就数据加等于1
* 3、如果没有就把整个商品名称和数量添加进来(数量肯定是1 ：因为第一次添加)
* 4、tag是(分类页的)尚品的名称 定义为label
* 5、title是购物车页定义的名字
* */