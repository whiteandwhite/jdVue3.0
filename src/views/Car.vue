<!--购物车-->
<template>
    <div>
        <div  class="goods" v-for="(item,index) in carArr" :key = "index">
            {{item.title}}
            <div class="goodsright">
                <i class="cubeic-remove" @click="removeCar(index)"></i> <!--删除按钮-->
                <span>{{item.carCount}}</span>
                <i class="cubeic-add" @click="addCar(index)"></i> <!--添加按钮-->
            </div>
        </div>
        <cube-button class="purchase">下单</cube-button>
        <cube-button @click="clearcar">清空购物车</cube-button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    export default {
        name: "Car",
        data(){
            return{
                //carArr:[]
            }
        },
        computed:{
            ...mapState({
                carArr:state => state.cararry
            })
        },
        methods:{//减少和增加都是要操作vuex里的数据的
            //减少商品
            removeCar(index){
                this.$store.commit('carremove',index)
            },
            //增加商品
            addCar(index){
                this.$store.commit('caradd',index)
            },
            //清空购物车
            clearcar(){
                this.$store.commit('clearcar')
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .goods
        padding 10px 0
        text-align left
        .goodsright
            float right
        i
            font-size 18px
    .purchase
        margin 10px 0
</style>