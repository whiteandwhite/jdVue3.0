<!--搜索-->
<template>
    <div class="inputbg">
        <div class="bg2">
            <i class="cubeic-search"></i>
            <input class="inputTitle" type="text" placeholder="洗脸奶"  v-model="inputValue">
            <span class="inputRigth">搜索</span>
            <p class="hotSerach">热门搜索</p>
            <ul class="hotTitle">
                <li class="hotContent" v-for="(item,index) in mintitle" :key="index">{{item}}</li>
            </ul>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
            return{
                inputValue:'',
                mintitle:[
                    '苏打水','运动鞋','脱脂牛奶','电动剃须刀',
                    '多功能沙发','照片扫描仪','蓝牙音箱','照相机',
                    '空气净化器','按摩椅','学习机','薰衣草精油',
                    '全自动热水壶','智能手环'
                ]
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .inputbg
        background #f6f6f6
        .bg2
            width 100%
            height 260px
            font-size 16px
            .hotContent
                float: left
                overflow hidden
                padding 0 6px
                margin  16px 0 0 10px
                line-height 30px
                font-size 12px
                color #686868
                background #fff
                border-radius 6px
            .hotSerach
                margin-left 20px
                text-align left
                color #232326
            .inputTitle
                margin 15px 10px
                padding-left 10px
                border-radius 15px
                font-size 18px
            .inputRigth
                padding 6px
                background-color #e93b3d
                color #fff
                border-radius 4px
                font-size 14px

</style>