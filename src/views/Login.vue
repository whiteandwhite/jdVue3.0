<template>
    <div>
        <img class="headerlogo" src="https://imgcps.jd.com/ling4/3082122/56m66LCD5paw5qy-6YCf6YCS/5Lq65rCU55av5oqi5Zeo57-75aSp/t-5c121acc2c8c7fa5f5454bc0/86c8fe78/cr_1125x549_0_72/s1125x690/q70.jpg ">
        <cube-form
                :model="model"
                :schema="schema"
                @submit="submitHandler">
        </cube-form>
    </div>
</template>

<script>
    export default {
        //name: "Login",
        data(){
            return{
                model:{
                    username:'',
                    password:''
                },
                schema:{
                    fields:[
                        //用户名配置
                        {
                            type:'input',//类型
                            modelKey:'username',//对应上面的
                            label:'用户名',//上面的名字
                            props:{
                                placeholder:'请输入用户名'  //提醒
                            },
                            rules:{
                                //校验规则
                                required:true, //输入不能为空
                                type:'string', //字符串类型
                                min:3,  //最小字数
                                max:10, //最大字数
                            },
                            trigger:'blur', //当失去焦点时,光标不显示的时候
                            messages:{
                                //与rule里一一对应
                                required:'用户名不能为空',
                                min:'用户名不能少于3个字符',
                                max:'用户名不能多于10个字符'
                            }
                        },
                        //密码配置
                        {
                            type:'input',
                            modelKey:'password',
                            label:'密码',
                            props:{
                                placeholder:'请输入密码',
                                type:'password', //密码的数据类型)
                                eye:{  //小眼睛
                                    open:false,  //默认不打开
                                }
                            },
                            rules:{
                                //校验规则
                                required:true, //输入不嫩为空
                                type:'password', //字符串类型
                                min:3,  //最小字数
                                max:10, //最大字数
                            },
                            trigger:'blur',  //失焦检测
                            messages:{
                                //与rule里一一对应
                                required:'用户名不能为空',
                                min:'用户名不能少于3个字符',
                                max:'用户名不能多于10个字符'
                            }
                        },
                        //按钮
                        {
                            type:'submit',
                            label:'登录'
                        }
                    ]
                }
            }
        },
        methods:{
            async submitHandler(e){
                e.preventDefault()//阻止冒泡
                try {
                    const result = await this.$http.get('/api/login',{
                        params:this.model
                    })
                    if( result.code == '0' ){
                        //alert(resu.data.message)
                        this.$store.commit('settoken',result.token)//调用vuex的
                        window.localStorage.setItem('token',result.token)//本地存储
                        //判断路由是否带参。带参就去到重定向参数地址，否则就去首页
                        if( this.$route.query.redirect ){
                            this.$route.replace({path:this.$route.query.redirect})
                        }else{
                            this.$router.replace({path:'/botnav/index'})  //登录页路由的跳转
                        }
                    }else {
                        alert(result.message)
                    }
                }catch(err){ //错误抛出
                    console.log(err)
                }
            }
        }
    }
</script>

<style lang="stylus" scoped>
    .headerlogo{
        width 100%
        height 150px
    }
</style>