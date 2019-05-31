<!--分类  scroll 滚动-->
<template>
    <div class="panelsbox"> <!--盒子包裹着-->
        <cube-scroll class="leftpanels"> <!--左边的盒子-->
            <ul>  <!--循环左边的数据  selectlist是点击左边的时，右边数据会改变  :class绑定类名 真的时候是active 假的时候是空值-->
                <li v-for="(list,index) in tablabel" @click="selectlist(index)" :class="list.active?'active':''" :key='index'>
                    {{list.label}}
                </li>
            </ul>
        </cube-scroll>
        <!--右边的盒子-->
        <cube-scroll class="rightpanels">
            <ul>
                <li v-for="(tag,index) in tags" :key="index">
                    <img :src="tag.image" >
                    <!--cubeic-add是添加标签--> <!--addtocart是添加商品到购物车-->
                    <p>{{tag.label}} <i class="cubeic-add" @click="addtocar($event,tag)"></i></p>
                </li>
            </ul>
        </cube-scroll>
        <!--小球的动画 (一个盒子包裹)-->
        <div class="small-ball">
            <transition
                @before-enter = 'beforeEnter'
                @enter = 'enter'
                @afterEnter = 'afterEnter'
            ><!--动画组件 开始，执行，结束-->
                <div class="ball" v-if = "ball.show"><!--小球-->
                    <div class="inner"><!--横坐标是水平移动，纵坐标是贝赛尔曲线运动-->
                        <i class="cubeic-add"></i>
                    </div>
                </div>

            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        name: "List",
        data(){
            return {
                ball:{/*小球的对象，是否显示，一开始不显示*/
                   show:false,
                   el:'',
                },
                tags:[],
                tablabel:[  //数组名
                    {
                        label:'热门推荐',
                        active:true
                    },
                    {
                        label:'手机数码',
                        active:false
                    },
                    {
                        label:'家用电器',
                        active:false
                    },
                    {
                        label:'电脑办公',
                        active:false
                    },
                    {
                        label:'美肤护妆',
                        active:false
                    },
                    {
                        label:'个人清洁',
                        active:false
                    },
                    {
                        label:'汽车生活',
                        active:false
                    },
                    {
                        label:'京东超市',
                        active:false
                    },
                    {
                        label:'男装',
                        active:false
                    },
                    {
                        label:'男鞋',
                        active:false
                    },
                    {
                        label:'女装',
                        active:false
                    },
                    {
                        label:'女鞋',
                        active:false
                    },
                    {
                        label:'运动户外',
                        active:false
                    },
                    {
                        label:'母婴童装',
                        active:false
                    },
                    {
                        label:'图书音像',
                        active:false
                    },
                    {
                        label:'运动户外',
                        active:false
                    },
                ]
            }
        },
        methods:{
            //点击左侧分类
            selectlist(index){
                this.tablabel.forEach((val,ind)=>{  //ind就像索引 就是第几个case
                    if( index === ind ){  //点击的时候 真就跳转， 假就不跳转
                        val.active = true
                    }else{
                        val.active = false
                    }
                })
                this.getclassify(index)
            },
            //获取分类
            async getclassify(index){
                const result = await this.$http.get('/api/classify',
                    {params:{type:index}} //获取一个值 这里是type
                )
                this.tags = result.data //显示到数据上
            },
            //添加商品到购物车
            addtocar(e,tag){  //这个是从分类页那边可以添加商品到购物车的做法
                this.$store.commit('tocar',tag)
                this.ball.show = true//小球显示出出来
                this.ball.el = e.target//获取点击元素
            },
            //小球动画
            beforeEnter(el){
                //让小球移动到点击的位置
                const dom = this.ball.el//获取点击位置
                //console.log(dom)
                //获取点击的dom的位置，
                const rect = dom.getBoundingClientRect()//获取某个元素相对于视窗的位置集合(矩形集合)
                //console.log(rect)
                const x = rect.left-window.innerWidth*0.72//当前点击的位置减去横轴70 %的位置
                const y = -(window.innerHeight-rect.top)//向下移动所以要加减号
                //console.log(x,y)
                el.style.display = 'block'//移动显示出来
                el.style.transform = `translate3d(0,${y}px,0)`//定义过渡效果 y轴 纵轴
                const inner = el.querySelector('.inner')//获取inner
                inner.style.transform = `translate3d(${x}px,0,0)`//inner的x轴
            },
            enter(el,done){//done是动画结束的参数
                //触发重绘
                document.body.offsetHeight

                //小球移动回到原点，就是购物车的位置
                el.style.transform = `translate3d(0,0,0)`
                const inner = el.querySelector('.inner')
                inner.style.transform = `translate3d(0,0,0)`
                //过渡完成后执行的事件
                el.addEventListener('transitionend',done)//transitionend是过渡后触发
            },
            afterEnter(el){//动画结束后隐藏小球
                //结束隐藏小球
                this.ball.show = false
                el.style.display = 'none'//移动隐藏出来
            }
        },
        //页面加载前加载的页面 钩子函数
        created(){
            //获取默认的分类数据 (页面一加载时就获取)
            this.getclassify(0)  //第0个
        },
        mounted(){
        //dom挂载完要做的事
        //设置页面变成滚动盒子 有高度
            const leftpan = document.querySelector('.leftpanels')//左边盒子
            const rightpan = document.querySelector('.rightpanels')//右边盒子
            const bodyheight = document.documentElement.clientHeight //获取页面的高度 height
            leftpan.style.height = bodyheight - 57 + 'px' //可视区高度减去border高度(底部的边框)
            rightpan.style.height = bodyheight - 57 + 'px'
        }
    }
</script>

<style lang="stylus" scoped>
    .panelsbox
        display flex
        .leftpanels
            width 30%
            li
                height 50px
                line-height 50px
                border-bottom 1px solid #fff
                color #333
                background #F8F8F8
                font-size 14px
            .active
                background #fff
                color: red
        .rightpanels
            width 70%
            ul
                display flex
                flex-wrap wrap /*分行*/
                li
                    width 50%
                    justify-content center
                    align-items center /*纵向居中对齐 flex*/
                    font-size 14px
                    img
                        width 80px
                        height 80px
                        margin-top 5px
                    .cubeic-add
                        font-size 18px


    .small-ball/*小球盒子*/
        .ball
            position fixed
            left 72%
            bottom 10px
            z-index 1003
            color red
            transition all .8s cubic-bezier(0.49,-0.29,0.75,0.41)/*贝塞尔曲线*/
            .inner
                width 16px
                height 16px
                transition all 1s linear
</style>