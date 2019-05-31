<template>
    <div>
        <transition :name="transitionName">
            <router-view class="Router"/>
        </transition>
        <cube-tab-bar
                class="botnavs"
                v-model="selectedLabelDefault"
                :data="tabs"
                @click="clickHandler"
                @change="changeHandler">
        </cube-tab-bar>
        <span class="countsum">{{countsum}}</span>  <!--购物车数量总数记录-->
    </div>

</template>

<script>
    import {mapGetters} from 'vuex'
    export default {
        name: "botnav",
        data () {
            return {
                //countsum:10,
                transitionName:'slide-right',
                selectedLabelDefault: '首页',
                tabs: [
                    {
                        label: '首页',
                        icon: 'cubeic-home'
                    },
                    {
                        label: '分类',
                        icon: 'cubeic-tag'
                    },
                    {
                        label: '搜索',
                        icon: 'cubeic-search'
                    },
                    {
                        label: '购物车',
                        icon: 'cubeic-mall'
                    },
                    {
                        label: '我的',
                        icon: 'cubeic-person'
                    },
                ]
            }
        },
        methods: {
            clickHandler (label) {
                //console.log(label)
            },
            //点击与自身不同的其他导航
            changeHandler (label) {
                switch (label) {
                    case '首页':
                        this.$router.push({path:'/botnav/index'})//并接路由跳转
                        break;
                    case '分类':
                        this.$router.push({path:'/botnav/list'})//并接路由跳转
                        break;
                    case '搜索':
                        this.$router.push({path:'/botnav/search'})//并接路由跳转
                        break;
                    case '购物车':
                        this.$router.push({path:'/botnav/cart'})//并接路由跳转
                        break;
                    case '我的':
                        this.$router.push({path:'/botnav/mine'})//并接路由跳转
                        break;
                }
            }
        },
        computed:{
            ...mapGetters({
                countsum:'countsum'  //countsum这个可以写单个，如果前后都一样的话  es6写法countsum
            })
        },
        created(){ //在模板渲染成html前调用
            switch (this.$route.path) {
                case '/botnav/index':
                this.selectedLabelDefault = '首页';
                break;
                case '/botnav/list':
                this.selectedLabelDefault = '分类';
                break;
                case '/botnav/search':
                this.selectedLabelDefault = '搜索';
                break;
                case '/botnav/cart':
                this.selectedLabelDefault = '购物车';
                break;
                case '/botnav/mine':
                this.selectedLabelDefault = '我的';
                break;

            }
        }
    }
</script>

<style lang="stylus">
    .botnavs
        position fixed
        bottom 0
        left 0
        width 100%
        z-index 999
        background #fff
        .cube-tab div
            font-size 16px
            padding-top 3px
        i
            font-size 20px
    .Router
        position absolute
        width 100%
        transition all 0.8s ease  /*ease 默认快到慢*/

    .silde-left-enter,.slide-right-leave-active  /*左边进入，右边离开*/
        opacity 0
        -webkit-transform  translate(100%,0)
        transform  translate(100%,0)
    .slide-left-leave-active,.slide-right-enter  /*左边离开，右边进入*/
        opacity 0
        -webkit-transform  translate(-100%,0)
        transform  translate(-100%,0)
    .countsum
        position fixed
        bottom 30px
        right 22%
        z-index 1000
        width 18px
        height 18px
        line-height 18px
        border-radius 50%
        font-size 14px
        background red
        color white
</style>