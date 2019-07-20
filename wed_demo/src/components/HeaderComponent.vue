<template>
  <div class="headerComponent">
    <div class="h-controller"> 
          <a href="#/findMusicComponent" class="h-logo">
            PcbVR
          </a>
          <div class="h-tab">
              <ul>
                  <router-link to="/homePageComponent"><li v-bind:class="{ active: layout.changeColor[0] }" @click="changeBgcEvent(0)"><span><a href="">首页</a></span></li></router-link>
                  <router-link to="/showcaseComponent">  <li v-bind:class="{ active: layout.changeColor[1] }" @click="changeBgcEvent(1)"><span><a href="">模型</a></span></li></router-link>
                  <router-link to="/communityComponent">   <li v-bind:class="{ active: layout.changeColor[2] }" @click="changeBgcEvent(2)"><span><a href="">社区</a></span></li></router-link>
                  <router-link to="/newsComponent"><li v-bind:class="{ active: layout.changeColor[3] }" @click="changeBgcEvent(3)"><span><a href="">资讯</a></span></li></router-link>
                  <router-link to="/aboutComponent"> <li v-bind:class="{ active: layout.changeColor[4] }" @click="changeBgcEvent(4)"><span><a href="">关于我们</a></span></li></router-link>   
                  <!--<router-link to="/downLoadComponent"> <li v-bind:class="{ active: layout.changeColor[5] }" @click="changeBgcEvent(5)"><span><a href="">下载客户端</a></span></li></router-link>   -->
              </ul>
          </div>
          <div class="h-search">
            <input type="text" id="search" value="校园/景点/车站" onFocus="if(value=='校园/景点/车站') {value=''}" onBlur="if(value==''){value='校园/景点/车站'}">
            <i class="fa fa-search"></i>
          </div>
          <!-- <div class="h-author">
          <a class="h-author">创作者中心</a>
          </div> -->
          <div class="h-login" >
              <!-- <span>登录</span> -->
              <button class="login" @click="show_logpop()">登录</button>
              <!-- <div class="h-login-type" v-if="layout.isShowLoginType">
                  <ul>
                      <li v-for="(item, index) in loginType">
                          {{item}}
                      </li>
                  </ul>
              </div> -->
              <!-- <span v-text="loginName"></span> -->
          </div>
      </div>
      <div class="login_pop" style="display: none">
        <div class="graybox" ></div>
            <div class="popbox">
                <div class="poptop">
                    <h3>登录</h3>
                    <a href="#" class="close" @click="close_logpop()">x</a>
                </div>
                <div class="popcon">
                    <div>
                        <div class="group">
                            <input type="text" id="user_num" value="请输入邮箱" onFocus="if(value=='请输入邮箱') {value=''}" onBlur="if(value==''){value='请输入邮箱'}">
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="group">
                            <input type="text" id="pwd" value="请输入密码" onFocus="if(value=='请输入密码') {value=''}" onBlur="if(value==''){value='请输入密码'}">
                            <i class="fa fa-lock"></i>
                        </div>
                    </div>
                    <div class="remember clearfix">
                        <div class="remember-con">
                            <input type="checkbox" id="input1" class="inputbox">
                            <label for="input1">记住密码</label>
                        </div>
                        <div class="remember-con">
                        <a href="#" class="code" @click="show_registerpop()"><i class="fa fa-question-circle"></i>注册账号</a>
                        <a href="#" class="code"><i class="fa fa-question-circle"></i>忘记密码</a>
                        </div>
                    </div>
                </div>
                <div class="divbtn clearfix">
                    <a href="#" class="btn" id="cancel" @click="close_logpop()" >取消</a>
                    <a href="#" class="btn ok" @click="login()">登陆</a>
                </div>
        </div>
      </div>
      <div class="register_pop" style="display: none">
        <div class="graybox" ></div>
            <div class="popbox">
                <div class="poptop">
                    <h3>注册</h3>
                    <a href="#" class="close" @click="close_registerpop()">x</a>
                </div>
                <div class="popcon">
                    <div>
                        <div class="group">
                            <input type="text" id="user_num" value="请输入邮箱" onFocus="if(value=='请输入邮箱') {value=''}" onBlur="if(value==''){value='请输入邮箱'}">
                            <i class="fa fa-user"></i>
                        </div>
                        <div class="group">
                            <input type="text" id="pwd" value="请输入密码" onFocus="if(value=='请输入密码') {value=''}" onBlur="if(value==''){value='请输入密码'}">
                            <i class="fa fa-lock"></i>
                        </div>
                    </div>
                </div>
                <div class="divbtn clearfix">
                    <a href="#" class="btn" id="cancel" @click="close_registerpop()" >取消</a>
                    <a href="#" class="btn ok" @click="register()">注册</a>
                </div>
        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderComponent',
  data () {
          return {
            layout:{
              changeColor: [true, false, false, false, false,false],
            }
          }
  },
  methods: {
    changeBgcEvent(e) {
        let arr = [];
        for( let elem in this.layout.changeColor ) { 
            parseInt(elem)
            if ( e == elem ) {
                arr.push(true);
            }else {
                arr.push(false)
            }
        }
        this.layout.changeColor = arr;
    },
    // 登录窗口弹出
    show_logpop(){
        $('.login_pop').show();
    },
    // 登录窗口消失
    close_logpop(){
        $('.login_pop').hide();
    },
    login(){
        var user_num = $("#user_num").val();
        var pwd = $("#pwd").val();
        if(user_num=="请输入邮箱"||pwd=="请输入密码"){
          alert("请输入账号密码");
        }else{
            $.ajax({
                url: "http://101.132.40.201:8080/Myhouse1/demo/login.php",//填一下登录接口就好了
                type: "post",    // 提交方式
                data: {"email":user_num,"password":pwd},  // data为String类型，必须为 Key/Value 格式。
                dataType: "json",    // 服务器端返回的数据类型
                success: function (data) {    
                    //console.log(data);
                    if (data.code == 200) {
                        close_logpop();
                        alert("登录成功");
                        close_logpop();
                    }
                    else{
                        alert("登录失败");
                    }
                },
            });
        }
    },
    // 注册窗口弹出
    show_registerpop(){
        $('.login_pop').hide();
        $('.register_pop').show(); 
    },
    // 注册窗口消失
    close_registerpop(){
        $('.register_pop').hide();
    },
    register(){
        var user_num = $("#user_num").val();
        var pwd = $("#pwd").val();
        if(user_num=="请输入邮箱"||pwd=="请输入密码"){
          alert("请输入账号密码");
        }else{
            $.ajax({
                url: "http://101.132.40.201:8080/Myhouse1/demo/login.php",//填一下登录接口就好了
                type: "post",    // 提交方式
                data: {"email":user_num,"password":pwd},  // data为String类型，必须为 Key/Value 格式。
                dataType: "json",    // 服务器端返回的数据类型
                success: function (data) {    
                    //console.log(data);
                    if (data.code == 200) {
                        close_logpop();
                        alert("注册成功");
                        close_logpop();
                    }
                    else{
                        alert("注册失败");
                    }
                },
            });
        }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@import "//netdna.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css";
a {
    text-decoration:none;
}
.headerComponent{
    width: 100%;
    height: 70px;
    background-color: #42626d;
}
.h-controller{
    width: 50%;
    min-width: 1100px;
    height: 70px;
    line-height: 70px;
    margin: 0 auto;
}
.h-controller .h-logo{
    float: left;
    padding-right: 30px;
    font-size: 1.5rem;
    font-weight: 600;
    color: #fff;
}
.h-controller .h-tab{
    float: left;
    width: 50%;
    height: 69px;
}
.h-controller .h-tab ul{
    list-style-type: none;
    float: left;
    width: 100%;
}
.h-controller .h-tab li{
    padding: 0 19px;
    text-align: center;
    float: left;
    cursor: pointer;
    font-size: 14px; 
    line-height: 69px;
    color: #ccc;
}
.h-controller .h-tab li:hover{
     /* background-color: #000; */
    background-color:  #6797a5;
}
.h-controller .h-tab li.active{
    /* background-color: #000; */
    background-color:  #6797a5;
   
}
.h-controller .h-tab span{
    display: inline-block;
    width: 100%;
}
.h-controller .h-tab a{
    font-size: .9rem;
    color: #ccc;
}
.h-controller .h-search{
    position: relative;
    float: left;
    width: 300px;
    height: 32px;
    margin-top: 19px;
    /* background: url(../assets/search.png) no-repeat; */
    /* background-size: 10%; */
    /* background-position: 5px 8px; */
    background-color: #fff;
    border-radius: 32px;
}
.h-controller .h-search input{
    position: absolute;
    margin: 8px 0 0 25px;
    color: #333;
    line-height: 16px;
    width: 75%;
    font-size: 12px;
    padding: 0;
    border: 0;  
    outline: none; 
    background: transparent;
    color: #9b9b9b;
    /* width: 160px;
    height: 25px;
    line-height: 25px;
    padding-left: 10px; 
    border-radius: 5px;
    box-sizing: border-box; */
}
.h-controller .h-search i{
  position: absolute;
  left: 6px;
  top:6px;
  font-size:18px;
  color: #bbbbbb;
}
.h-controller .h-author{
    float: left;
    margin-left: 20px;  
    width: 90px;
    height: 32px;
    margin: 19px 0 0 12px;
    box-sizing: border-box;
    padding-left: 16px;
    border: 1px solid #4F4F4F;
    background-position: 0 -140px;
    font-size: 12px;
    line-height: 33px;
    color: #ccc;
    border-radius: 20px;
}
.h-controller .h-author:hover{
    cursor: pointer;
    color: #fff;
    text-decoration: none;
    border: 1px solid #ccc;
}

.h-controller .h-login{
    position: relative;
    float: right;
    margin-left: 20px;
}
.h-controller .h-login span{
    font-size: .80em;
    color: #929292;
    cursor: pointer;
}
.h-controller .h-login .h-login-type{
    z-index: 10;
    position: absolute;
    right: -65px;
    top: 60px;
    width: 150px;
    height: 200px;
    background-color: #333;
}
.h-controller .h-login .h-login-type li{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-size: .85em;
    color: #ccc;
}

/* 登录框 */
.clearfix:after{
    content: '';
    height: 0;
    display: block;
    visibility: hidden;
    clear: both;
}
.clearfix{
    zoom: 1;
}
a{
    text-decoration: none;
}
.login{
    width: 120px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius:20px;
    border: none;
    background:linear-gradient(#749dcf,#1c7ecf);
    color: #FFFFff;
    cursor: pointer;
    outline: none;
}
.login:hover{
    background: #1c7ecf;
    cursor: pointer;
}
.graybox{
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,.6);
    position: fixed;
    top:0;
    left: 0;
    z-index: 9;
}
.popbox{
    width: 600px;
    padding-bottom: 30px;
    border-radius: 6px;
    background: #FFFFff;
    position: absolute;
    left: 50%;
    margin-left: -250px;
    top:26%;
    z-index: 19;
}
.poptop{
    width: 100%;
    height: 120px;
    line-height: 120px;
    text-align: center;
    border-bottom: 1px solid #F2F2F2;
    position: relative;
}
.poptop h3{
    font-size:32px;
    font-weight: 600;
    color:#749dcf;
}
.poptop a.close{
    position: absolute;
    right:0;
    top:0;
    font-size: 20px;
    font-weight: bold;
    width: 36px;
    height: 36px;
    /* background: url("images/popbox-close.png") center no-repeat; */
}
.popcon{
    padding: 20px 50px;
}
.popcon .group{
    position: relative;
}
.popcon .group  input[type="text"]{
    color: #999999;
}
.popcon .group i{
    position: absolute;
    left: 12px;
    top:28px;
    font-size: 20px;
    color: #bbbbbb;
}
.popcon input[type="text"]{
    width:90%;
    height: 36px;
    line-height: 36px;
    border-radius:26px;
    margin-top:20px;
    padding:0 10px 0 40px;
    border:none;
    background: #f0f0f0;
}
.popcon input:focus{
    outline: none;
    background: #DDDDDD;
}
/*点击输入框之后图标颜色改变*/
.popcon .group input:focus+i{
    color: #749dcf;
}
.popcon .remember{
    font-size: 12px;
    margin-top: 15px;
    color: #749dcf;
}
.popcon .remember .remember-con{
    width:50%;
    display: block;
    float: left;
}
.popcon input[type="checkbox"]{
    vertical-align: -1px;
    margin-right: -2px;
}
/*自定义checked样式*/
.popcon .remember .inputbox{
    -moz-appearance: none;
    -webkit-appearance:none;
    width: 12px;
    height: 12px;
    border-radius: 2px;
    border: 1px solid #749dcf;
    background: #FFFFff;
}
/*自定义checked选中之后的样式*/
.popcon .remember .inputbox:checked{
    border: 1px solid #749dcf;
    /* background:#FFFFff url("images/dh.png") center no-repeat; */
    cursor: pointer;
}
.popcon .remember .code{
    display: block;
    float: right;
    font-size: 14px;
    color: #749dcf;
}
.popcon .remember .code:hover{
    text-decoration: underline;
    color: #749dcf;
}
.popcon .remember .fa-question-circle{
    color: #749dcf;
    margin-right:3px;
}
.divbtn{
    width: 260px;
    margin:20px auto 0;
 }
.divbtn .btn{
    display: block;
    float: left;
    width:120px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius:6px;
    background: #eeeeee;
    color: #464646;
}
.divbtn .btn:hover{
    background: #DDDDDD;
}
.divbtn .ok{
    background: #749dcf;
    margin-left: 20px;
    color: #FFFFff;
}
.divbtn .ok:hover{
    background: #5e8ecf;
}

</style>
