<!--我的-->
<template>
    <div>
        <img class="headerlogo" src="https://imgcps.jd.com/ling4/100005584072/5omL5py66ICz5py66LSt566A5Y2V/55yB5pe255yB5Yqb55yB6ZKx/p-5c13869682acdd181deefedf/6df82ed1/cr_1125x549_0_72/s1125x690/q70.jpg">
        <ul>
            <li v-for="item in minarray" class="minitem" @click="itemclick(item)" :key="item.label">
                <span class="mintitle">{{item.label}}</span><!--输出点击事件-->
                <i class="cubeic-arrow"></i><!--右箭头-->
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Mime",
        data(){
            return{
                minarray:[
                    {label:'商品收藏'},
                    {label:'店铺收藏'},
                    {label:'我的足迹'},
                    {label:'我的预约'},
                    {label:'退出',type:'exit'},
                ]
            }
        },
        methods:{
            itemclick(item){//点击退出的时候 清空token 和 本地存储 和 跳转到登录页面
                if( item.type == 'exit' ){
                    this.$store.commit('settoken','')
                    localStorage.removeItem('token')
                    this.$router.push({path:'/login'})
                }

            }
        }
    }
</script>

<style lang="stylus" scoped>
    .minitem
        font-size 16px
        text-align left
        height 60px
        line-height 60px
        padding-left 20px
        border-bottom solid 1px #c0c0c0
        .mintitle
            display inline-block
            width 90%
    .headerlogo{
        width 100%
        height 150px
    }
</style>