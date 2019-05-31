//放一些扩展的内容和Mock数据

module.exports = {
  configureWebpack:{   //扩展数据
    devServer:{
      //Mock接口填写的地方
      //每次更改这个配置文件的时候，都必须重启项目才生效
      before(app){
        /*add.get('请求地址',(req,res)=>{    //req请求参  res返回数据
          res.json({
          })
        })*/

        //用户信息池(模拟类似数据)
          let userpoor=[
              {username:'white',password:'123456'},
              {username:'black',password:'123456'}
          ]
        //注册接口
          app.get('/api/register',(req,res)=>{
            const {username,password} = req.query //解构赋值 获取到get请求过来的参数
            const userlength = userpoor.filter(v=>v.username == username).length
              //过滤一下里面已存在的数据，查到有username就证明大于0
            if(userlength>0){
              res.json({
                success:false,
                message:'用户名已存在'
              })
            }else{
              res.json({
                success:true,
                message:'注册成功'
              })
            }
          })

        //登录接口
        let tokenkey = 'whiteclass'
        app.get('/api/login',(req,res)=>{
            const {username,password} = req.query
            //判断一下token 并且  或
            if( username == 'white' && password == '123456' ||
                username == 'black' && password == '123456'){
                res.json({
                    code:0,
                    message:'登录成功',
                    token: tokenkey + '-' + username + '-' + (new Date().getTime()+60*60*1000)
                })
            }else {
                res.json({
                    code:1,
                    message:'账号密码错误'
                })
            }
        })

        //首页轮播图数据接口
          app.get('/api/banner',(req,res)=>{
              res.json({
                  data:[
                      {
                          url: 'https://m.jd.com//',
                          image: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/31162/17/1128/101786/5c46ead8E22ee9740/f66061da227c1965.jpg!cr_1125x549_0_72!q70.jpg.dpg'
                      },
                      {
                          url: 'https://m.jd.com//',
                          image: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/34522/40/1289/96946/5cb07f29E3fe15e75/d137b044696c70e0.jpg!cr_1125x549_0_72!q70.jpg.dpg'
                      },
                      {
                          url: 'https://m.jd.com//',
                          image: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/32131/36/11226/356953/5cb458a1Ed831e34d/fb7cd382023aac80.jpg!cr_1125x549_0_72!q70.jpg.dpg'
                      },
                      {
                          url: 'https://m.jd.com//',
                          image: 'https://m.360buyimg.com/mobilecms/s750x366_jfs/t1/23112/33/6431/99212/5c540d7fEf8000223/fddb6b047c02ba3d.jpg!cr_1125x549_0_72!q70.jpg.dpg'
                      }
                  ]
              })
          })
        //主页分类类别接口
          app.get('/api/listss',(req,res)=>{
              res.json({
                  data:[
                      [
                          {
                              url: 'https://m.jd.com/',
                              image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/29256/16/1420/4265/5c120d2aE83ef9fd4/ca89a8718704215c.png',
                              label:'京东超市'
                          },
                          {
                              url: 'https://m.jd.com/',
                              image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t26635/320/1832919204/11533/a2f9878a/5bee366dN1627d554.png',
                              label:'海囤全球'
                          },
                          {
                              url: 'https://m.jd.com/',
                              image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/17169/3/4127/4611/5c2f35cfEd87b0dd5/65c0cdc1362635fc.png',
                              label:'京东服饰'
                          },
                          {
                              url: 'https://m.jd.com/',
                              image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t1/27962/13/1445/4620/5c120b24Edd8c34fe/43ea8051bc50d939.png',
                              label:'京东生鲜'
                          },
                          {
                              url: 'https://m.jd.com/',
                              image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t28555/115/779891280/9203/882d1b69/5bfe3365N4b8a218f.png',
                              label:'京东旅行'
                          },
                          {
                              url: 'https://m.jd.com/',
                              image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t18454/342/2607665324/6406/273daced/5b03b74eN3541598d.png',
                              label:'充值缴费'
                          },
                          {
                              url: 'https://m.jd.com/',
                              image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t22228/270/207441984/11564/88140ab7/5b03fae3N67f78fe3.png',
                              label:'9.9元拼'
                          },
                          {
                              url: 'https://m.jd.com/',
                              image: 'https://m.360buyimg.com/mobilecms/jfs/t1/33384/2/4243/187337/5cb6e1f5E536f64a1/8b5dc162ed588d4d.gif',
                              label:'领劵'
                          },
                          {
                              url: 'https://m.jd.com/',
                              image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t16828/63/2653634926/5662/d18f6fa1/5b03b779N5c0b196f.png',
                              label:'赚钱'
                          },
                          {
                              url: 'https://m.jd.com/',
                              image: 'https://m.360buyimg.com/mobilecms/s120x120_jfs/t21481/263/412160889/15938/4246b4f8/5b0cea29N8fb2865f.png',
                              label:'全部'
                          },
                      ],

                  ]
              })
          })
        //获取分类页的分类接口
          app.get('/api/classify',(req,res)=>{
              switch (req.query.type) {
                  case '0':
                  res.json({
                      data:[
                          {
                              image:'https://img14.360buyimg.com/focus/s140x140_jfs/t27136/183/1628977274/31007/a6f7ed55/5be6ebd8Nb07ef492.png',
                              label:'手机'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t1/21233/40/7634/13890/5c6d039bE8a65d667/aef9581abcc85725.png',
                              label:'耳机'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t1/1446/14/631/8500/5b9237e5E0d1f9e16/b1a627b92323b5ed.png',
                              label:'华为'
                          },
                          {
                              image:'https://img20.360buyimg.com/focus/s140x140_jfs/t1/29265/29/7571/29171/5c6d0389E251fe5f2/987962eb75bfe813.png',
                              label:'电饭煲'
                          },
                          {
                              image:'https://img11.360buyimg.com/focus/s140x140_jfs/t1/26217/19/7605/22816/5c6d03a3E4f263c9d/d6fc27b51078358c.png',
                              label:'电磁炉'
                          },
                          {
                              image:'https://img10.360buyimg.com/focus/s140x140_jfs/t1/21353/14/7486/17896/5c6d03c0Eb9c58d49/9210736682f59e39.png',
                              label:'微波炉'
                          },
                          {
                              image:'https://img12.360buyimg.com/focus/s140x140_jfs/t1/25144/37/2370/7617/5c1cae45Ea0ec5a85/f7ba433b5d1e072f.png',
                              label:'吹风机'
                          },
                          {
                              image:'https://img13.360buyimg.com/focus/s140x140_jfs/t1/25168/27/9848/15397/5c822507E35d2ad16/384983a98758f8f8.png',
                              label:'洗发水'
                          },
                          {
                              image:'https://img11.360buyimg.com/focus/s140x140_jfs/t1/11731/9/10730/9518/5c822298Eb50b3275/33f88663e1c0284e.png',
                              label:'保温杯'
                          },
                          {
                              image:'https://img13.360buyimg.com/focus/s140x140_jfs/t1/23312/39/9884/7280/5c822292E65f3929b/78ba741d321954b0.png',
                              label:'洗衣液'
                          },
                          {
                              image:'https://img11.360buyimg.com/focus/s140x140_jfs/t1/30718/32/2643/9923/5c6d03ecEabd2d664/aaee556800519e1f.png',
                              label:'三只松鼠'
                          },
                          {
                              image:'https://img14.360buyimg.com/focus/s140x140_jfs/t27400/283/1600620667/15106/a935e7bd/5be6f2e1Nfa8d9d6e.png',
                              label:'路由器'
                          },
                          {
                              image:'https://img12.360buyimg.com/focus/s140x140_jfs/t18106/218/2672347202/29951/3618e960/5b0567cdN275fbcdd.png',
                              label:'电视机'
                          },
                          {
                              image:'https://img14.360buyimg.com/focus/s140x140_jfs/t21664/15/237213959/24996/a3c6c7d6/5b0567c7N9cc1c355.png',
                              label:'洗衣机'
                          },
                      ]
                  });
                  break;
                  case '1':
                  res.json({
                      data:[
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                              label:'小米'
                          },
                          {
                              image:'https://img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                              label:'华为'
                          },
                          {
                              image:'https://img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                              label:'苹果'
                          },
                          {
                              image:'https://img13.360buyimg.com/focus/s140x140_jfs/t11209/71/2351231464/4158/fc0c415c/5a16923fNfc14307e.jpg',
                              label:'一加'
                          },
                      ]
                  });
                  break;
                  case '2':
                  res.json({
                      data:[
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t12559/262/969294499/3436/8c0ce9c9/5a17f1d2N8078d5e6.jpg',
                              label:'电水壶'
                          },
                          {
                              image:'https://img11.360buyimg.com/focus/s140x140_jfs/t14185/134/950962305/3800/eb1bafb8/5a17f224Nea1d3f59.jpg',
                              label:'电饭煲'
                          },
                          {
                              image:'https://img12.360buyimg.com/focus/s140x140_jfs/t12367/112/996967887/2205/e8c82674/5a17f20aNde6af185.jpg',
                              label:'面包机'
                          },
                          {
                              image:'https://img11.360buyimg.com/focus/s140x140_jfs/t14065/132/988058896/1688/99cd0a3d/5a17f229Nc4c681fb.jpg',
                              label:'豆浆机'
                          },
                      ]
                  });
                  break;
                  case '3':
                  res.json({
                      data:[
                          {
                              image:'https://img13.360buyimg.com/focus/s140x140_jfs/t11071/195/2462134264/9117/cd0688bf/5a17ba79N18b9f3d4.png',
                              label:'轻薄本'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t11155/36/2330310765/10690/eb6754c3/5a17ba96N49561fea.png',
                              label:'游戏本'
                          },
                          {
                              image:'https://img12.360buyimg.com/focus/s140x140_jfs/t12304/245/965858782/6481/37cb5a9b/5a17ba5aN0406a1b5.jpg',
                              label:'机械键盘'
                          },
                          {
                              image:'https://img20.360buyimg.com/focus/s140x140_jfs/t12679/262/982342141/7023/d05a11e5/5a17ba57Nf179b4e4.jpg',
                              label:'显卡'
                          },
                      ]
                  });
                  break;
                  case '4':
                  res.json({
                      data:[
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t19531/110/2538137867/14848/c3ec84ac/5afd3cc5N8aa4b7c8.jpg',
                              label:'美白'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t17560/320/2504739891/10347/f04150c4/5afd3cbeN77d00886.jpg',
                              label:'防晒'
                          },
                          {
                              image:'https://img14.360buyimg.com/focus/s140x140_jfs/t19291/98/2577005836/12222/7107fb29/5afd3cc9N3add85ae.jpg',
                              label:'控油'
                          },
                          {
                              image:'https://img20.360buyimg.com/focus/s140x140_jfs/t20959/91/124730120/12985/5284a79e/5afd3d41N088429d4.jpg',
                              label:'护肤礼盒'
                          },
                      ]
                  });
                  break;
                  case '5':
                  res.json({
                      data:[
                          {
                              image:'https://img11.360buyimg.com/focus/s140x140_jfs/t21343/109/200166835/32189/655b48ef/5b03c73fN69e0c2b7.jpg',
                              label:'个人馆'
                          },
                          {
                              image:'https://img11.360buyimg.com/focus/s140x140_jfs/t22015/174/193799214/56285/64f190df/5b03bf93Na049c54e.jpg',
                              label:'清洁馆'
                          },
                          {
                              image:'https://img10.360buyimg.com/focus/s140x140_jfs/t22123/187/137040009/6892/6b0cbf68/5afd572dN7ed9c341.jpg',
                              label:'花露水'
                          },
                          {
                              image:'https://img14.360buyimg.com/focus/s140x140_jfs/t20293/233/118774843/46835/4e4eaf16/5afd5727N9f7271c7.jpg',
                              label:'驱蚊用品'
                          },
                      ]
                  });
                  break;
                  case '6':
                  res.json({
                      data:[
                          {
                              image:'https://img20.360buyimg.com/focus/s140x140_jfs/t13684/103/181232450/2817/1bd36d3d/5a057f17Nc76b625d.jpg',
                              label:'纸品湿巾'
                          },
                          {
                              image:'https://img10.360buyimg.com/focus/s140x140_jfs/t12136/32/190594635/3030/39a660be/5a057ef3N4b20576c.jpg',
                              label:'衣物清洁'
                          },
                          {
                              image:'https://img12.360buyimg.com/focus/s140x140_jfs/t12046/51/196865136/2542/dd0cb394/5a057eeaNe24e73fb.jpg',
                              label:'洗发护发'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t11257/264/1649145508/5426/5f7c71bb/5a057ee0N0dc59d02.jpg',
                              label:'家庭清洁'
                          },
                      ]
                  });
                  break;
                  case '7':
                  res.json({
                      data:[
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t17449/23/1286271766/3527/870ce296/5ac4780cN6087feb5.jpg',
                              label:'夹克'
                          },
                          {
                              image:'https://img12.360buyimg.com/focus/s140x140_jfs/t19312/140/1294064569/4871/1c61d372/5ac47812N52823c3e.jpg',
                              label:'T恤'
                          },
                          {
                              image:'https://img10.360buyimg.com/focus/s140x140_jfs/t18397/74/1297264628/2293/fcca865c/5ac47821N48c68336.jpg',
                              label:'衬衫'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t18886/239/1308846966/4452/3baec65f/5ac4782aN695a7262.jpg',
                              label:'卫衣'
                          },
                      ]
                  });
                  break;
                  case '8':
                  res.json({
                      data:[
                          {
                              image:'https://img12.360buyimg.com/focus/s140x140_jfs/t11089/341/2234800375/3425/8950afe8/5a139577N054caadb.jpg',
                              label:'皮鞋'
                          },
                          {
                              image:'https://img14.360buyimg.com/focus/s140x140_jfs/t13225/243/786727983/5634/d19769f6/5a139554N4c666839.jpg',
                              label:'男靴'
                          },
                          {
                              image:'https://img13.360buyimg.com/focus/s140x140_jfs/t13318/275/759603762/2622/2e47bbbf/5a139565N882a63c6.jpg',
                              label:'板鞋'
                          },
                          {
                              image:'https://img14.360buyimg.com/focus/s140x140_jfs/t13807/314/786063079/2610/c0e7de7b/5a139490Nc7fa0e4a.jpg',
                              label:'休闲鞋'
                          },
                      ]
                  });
                  break;
                  case '9':
                  res.json({
                      data:[
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t16891/72/715748110/3080/182127b5/5a9fb67aN37c4848f.jpg',
                              label:'连衣裙'
                          },
                          {
                              image:'https://img20.360buyimg.com/focus/s140x140_jfs/t19471/233/655303672/4619/b23fea4b/5a9fb684Ne1ec9fe8.jpg',
                              label:'T恤'
                          },
                          {
                              image:'https://img12.360buyimg.com/focus/s140x140_jfs/t19270/200/692436631/4169/b502c81c/5a9fb68eN125c9ddd.jpg',
                              label:'卫衣'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t11794/114/2228059199/2529/60e8b474/5a12b21eN10fd877c.jpg',
                              label:'针织衫'
                          },
                      ]
                  });
                  break;
                  case '10':
                  res.json({
                      data:[
                          {
                              image:'https://img13.360buyimg.com/focus/s140x140_jfs/t16897/285/796666413/5829/5a7ad788/5aa640b5N0342a5e7.jpg',
                              label:'休闲鞋'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t16759/94/754872702/7353/e3c21cea/5aa640fdN8d5d8afd.jpg',
                              label:'粗跟单鞋'
                          },
                          {
                              image:'https://img10.360buyimg.com/focus/s140x140_jfs/t14149/102/2685329591/4506/b16d41d0/5aa640f0N2a7e6946.jpg',
                              label:'高根单鞋'
                          },
                          {
                              image:'https://img20.360buyimg.com/focus/s140x140_jfs/t16498/252/2120570989/4156/a43a5472/5aa640d9N0a8135c7.jpg',
                              label:'平底单鞋'
                          },
                      ]
                  });
                  break;
                  case '11':
                  res.json({
                      data:[
                          {
                              image:'https://img13.360buyimg.com/focus/s140x140_jfs/t16897/285/796666413/5829/5a7ad788/5aa640b5N0342a5e7.jpg',
                              label:'休闲鞋'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t16759/94/754872702/7353/e3c21cea/5aa640fdN8d5d8afd.jpg',
                              label:'粗跟单鞋'
                          },
                          {
                              image:'https://img10.360buyimg.com/focus/s140x140_jfs/t14149/102/2685329591/4506/b16d41d0/5aa640f0N2a7e6946.jpg',
                              label:'高根单鞋'
                          },
                          {
                              image:'https://img20.360buyimg.com/focus/s140x140_jfs/t16498/252/2120570989/4156/a43a5472/5aa640d9N0a8135c7.jpg',
                              label:'平底单鞋'
                          },
                      ]
                  });
                  break;
                  case '12':
                  res.json({
                      data:[
                          {
                              image:'https://img13.360buyimg.com/focus/s140x140_jfs/t16897/285/796666413/5829/5a7ad788/5aa640b5N0342a5e7.jpg',
                              label:'休闲鞋'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t16759/94/754872702/7353/e3c21cea/5aa640fdN8d5d8afd.jpg',
                              label:'粗跟单鞋'
                          },
                          {
                              image:'https://img10.360buyimg.com/focus/s140x140_jfs/t14149/102/2685329591/4506/b16d41d0/5aa640f0N2a7e6946.jpg',
                              label:'高根单鞋'
                          },
                          {
                              image:'https://img20.360buyimg.com/focus/s140x140_jfs/t16498/252/2120570989/4156/a43a5472/5aa640d9N0a8135c7.jpg',
                              label:'平底单鞋'
                          },
                      ]
                  });
                  break;
                  case '13':
                  res.json({
                      data:[
                          {
                              image:'https://img13.360buyimg.com/focus/s140x140_jfs/t16897/285/796666413/5829/5a7ad788/5aa640b5N0342a5e7.jpg',
                              label:'休闲鞋'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t16759/94/754872702/7353/e3c21cea/5aa640fdN8d5d8afd.jpg',
                              label:'粗跟单鞋'
                          },
                          {
                              image:'https://img10.360buyimg.com/focus/s140x140_jfs/t14149/102/2685329591/4506/b16d41d0/5aa640f0N2a7e6946.jpg',
                              label:'高根单鞋'
                          },
                          {
                              image:'https://img20.360buyimg.com/focus/s140x140_jfs/t16498/252/2120570989/4156/a43a5472/5aa640d9N0a8135c7.jpg',
                              label:'平底单鞋'
                          },
                      ]
                  });
                  break;
                  case '14':
                  res.json({
                      data:[
                          {
                              image:'https://img13.360buyimg.com/focus/s140x140_jfs/t16897/285/796666413/5829/5a7ad788/5aa640b5N0342a5e7.jpg',
                              label:'休闲鞋'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t16759/94/754872702/7353/e3c21cea/5aa640fdN8d5d8afd.jpg',
                              label:'粗跟单鞋'
                          },
                          {
                              image:'https://img10.360buyimg.com/focus/s140x140_jfs/t14149/102/2685329591/4506/b16d41d0/5aa640f0N2a7e6946.jpg',
                              label:'高根单鞋'
                          },
                          {
                              image:'https://img20.360buyimg.com/focus/s140x140_jfs/t16498/252/2120570989/4156/a43a5472/5aa640d9N0a8135c7.jpg',
                              label:'平底单鞋'
                          },
                      ]
                  });
                  break;
                  case '15':
                  res.json({
                      data:[
                          {
                              image:'https://img13.360buyimg.com/focus/s140x140_jfs/t16897/285/796666413/5829/5a7ad788/5aa640b5N0342a5e7.jpg',
                              label:'休闲鞋'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t16759/94/754872702/7353/e3c21cea/5aa640fdN8d5d8afd.jpg',
                              label:'粗跟单鞋'
                          },
                          {
                              image:'https://img10.360buyimg.com/focus/s140x140_jfs/t14149/102/2685329591/4506/b16d41d0/5aa640f0N2a7e6946.jpg',
                              label:'高根单鞋'
                          },
                          {
                              image:'https://img20.360buyimg.com/focus/s140x140_jfs/t16498/252/2120570989/4156/a43a5472/5aa640d9N0a8135c7.jpg',
                              label:'平底单鞋'
                          },
                      ]
                  });
                  break;
                  case '16':
                  res.json({
                      data:[
                          {
                              image:'https://img13.360buyimg.com/focus/s140x140_jfs/t16897/285/796666413/5829/5a7ad788/5aa640b5N0342a5e7.jpg',
                              label:'休闲鞋'
                          },
                          {
                              image:'https://img30.360buyimg.com/focus/s140x140_jfs/t16759/94/754872702/7353/e3c21cea/5aa640fdN8d5d8afd.jpg',
                              label:'粗跟单鞋'
                          },
                          {
                              image:'https://img10.360buyimg.com/focus/s140x140_jfs/t14149/102/2685329591/4506/b16d41d0/5aa640f0N2a7e6946.jpg',
                              label:'高根单鞋'
                          },
                          {
                              image:'https://img20.360buyimg.com/focus/s140x140_jfs/t16498/252/2120570989/4156/a43a5472/5aa640d9N0a8135c7.jpg',
                              label:'平底单鞋'
                          },
                      ]
                  });
                  break;
              }
          })
      },
        port:8080, //端口号
        open:true,  //默认打开

    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  }
}
