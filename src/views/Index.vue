<template>
    <div>
        <!--轮播图-->
        <cube-slide ref="slide" :data="items" @change="changePage">
            <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
                <a :href="item.url">
                    <img class="banners" :src="item.image">
                </a>
            </cube-slide-item>
        </cube-slide>
        <!--分类列表-->
        <div ref="classlists" :data="lists">
            <cube-slide-item v-for="(list, index) in lists" :key="index">
                <ul class="listul">
                    <li class="listli" v-for="(item,index1) in list" :key="index1">
                        <a :href="item.url">
                            <img :src="item.image" >
                            <p>{{item.label}}</p>
                        </a>
                    </li>
                </ul>
            </cube-slide-item>
        </div>

        <!--为你推荐栏目-->
        <div class="mintitleCon">
            <img src="https://img11.360buyimg.com/jdphoto/jfs/t1/31601/22/15554/14040/5cc2a86fEbdb1098b/88174b36f85283b6.png" style="width: 375px; height: 35px;" alt=""><!--小标题图片-->
        </div>
        <!--商品简介-->
        <div class="goodsContent">
            <div>
                <img src="https://img10.360buyimg.com/mobilecms/s372x372_jfs/t1/68289/16/504/142252/5ceb4c29Edc2b9839/2f23c6c522d87ebe.jpg!q70.dpg.webp" style="width: 160px; height: 160px; opacity: 1;" alt=""><!--商品图片-->
            </div>
            <span class="goodsBrief">海尔（Haier） 冰箱 十字对开门多门风冷无霜变频 冰箱新品</span> <!--商品简介-->
            <p class="goodsPrice">
                <span class="priSymbol">¥</span>
                <span>4599</span>
                <span class="more">看相似</span>
            </p>
        </div>
        <div class="goodsContent">
            <div>
                <img src="https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/43363/20/5522/114307/5cefaab2Ef2af2da2/956589250b2cf2be.jpg!q70.dpg.webp" style="width: 160px; height: 160px; opacity: 1;" alt=""><!--商品图片-->
            </div>
            <span class="goodsBrief">海尔（Haier）洗衣机全自动迷你波轮洗衣机3.3公斤小型宝宝儿童洗EBM3365W</span> <!--商品简介-->
            <p class="goodsPrice">
                <span class="priSymbol">¥</span>
                <span>999</span>
                <span class="more">看相似</span>
            </p>
        </div>
        <div class="goodsContent">
            <div>
                <img src="https://img12.360buyimg.com/mobilecms/s372x372_jfs/t3916/35/1545028667/200093/2508e430/587c5986N769ebc71.jpg!q70.dpg.webp" style="width: 160px; height: 160px; opacity: 1;" alt=""><!--商品图片-->
            </div>
            <span class="goodsBrief">伊利 安慕希希腊风味常温酸奶原味205g*16盒</span> <!--商品简介-->
            <p class="goodsPrice">
                <span class="priSymbol">¥</span>
                <span>64</span>
                <span class="more">看相似</span>
            </p>
        </div>
        <div class="goodsContent">
            <div>
                <img src="https://img12.360buyimg.com/mobilecms/s372x372_jfs/t1/31456/16/14626/410465/5cbee858E71abe49f/cb39ab09173b2481.jpg!q70.dpg.webp" style="width: 160px; height: 160px; opacity: 1;" alt=""><!--商品图片-->
            </div>
            <span class="goodsBrief">蒙牛 真果粒牛奶饮品（草莓+芦荟+椰果+桃果粒）250g*24 四种口味缤纷装（新老包装随机发货）</span> <!--商品简介-->
            <p class="goodsPrice">
                <span class="priSymbol">¥</span>
                <span>60</span>
                <span class="more">看相似</span>
            </p>
        </div>

    </div>
</template>

<script>
    export default {
       data() {
            return {
                items:[], //轮播数组
                lists:[],  //分类数组
            }
        },
        methods: {
            changePage(current) {
                //console.log('当前轮播图序号为:' + current)
            },
            clickHandler(item, index) {
                console.log(item, index)
            },
        },
        async created(){ //这是创建的生命周期函数 这里调用轮播的数据接口 就是让它一进主页就加载出来
            try {
                //获取轮播数据 ---------
                const items = await this.$http.get('/api/banner')
                //调用获取的数据
                this.items = items.data
                const lists = await this.$http.get('/api/listss')
                //获取分类列表数据 ------
                this.lists = lists.data
            }catch (err) {
                console.log(err)
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .banners
        display block
        width 100%
        height 175px
    .listul
        display flex
        flex-wrap wrap
    .listli
        width 20%
        justify-content center
        img
            width 35px
            height 35px
            border-radius 50%
            padding 5px 0
        p
            font-size 14px
            padding-bottom 10px
    .goodsContent
        width: 180px;
        float: left;
        .goodsBrief
            height: 30px;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            word-break: break-word;
            font-size: 13px;
            overflow: hidden;
            color: #232326;
            margin-top: 5px;
            line-height: 16px;
            margin-bottom: 3px;
            padding: 0 4px;
        .goodsPrice
            position: relative;
            text-align left
            height: 26px;
            font-size: 16px;
            color: #f23030;
            padding-bottom: 50px;
            .priSymbol
                display: inline-block;
                padding: 0 5px 0 4px;
                position: relative;
                top: 1px;
                height: 25px;
                line-height: 25px;
            .more
                display: block;
                position: absolute;
                top: 0;
                right: 8px;
                text-align: center;
                color: #686868;
                font-size: 12px;
                width: 49px;
                height: 24px;
                line-height: 25px;






</style>