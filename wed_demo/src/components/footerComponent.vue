<template>
  <div class="footerComponent">
    <div class="footer">
        <div class="footer_text">
            <div class="copy">
                <p>
                    <a href="" target="_blank" class="copy_text">关于我们</a><span class="line">|</span>
                    <a href="" target="_blank" class="copy_text">客户服务</a><span class="line">|</span>
                    <a href="" target="_blank" class="copy_text">服务条款</a><span class="line">|</span>
                    <a href="" target="_blank" class="copy_text">网站导航</a><span class="line">|</span>
                    <a href="#" class="copy_text">意见反馈</a>
                </p>
                <p class="copy_text2">
                    <span class="copy_right">PcbVr团队版权所有©2018-2028</span><span>武汉理工大学PcbVr团队运营：</span>
                    <a href="http://p1.music.126.net/03WF0APmm-J0TqdbOc8-XQ==/109951163649544962.png" target="_blank" class="alink copy_text2">鄂网文[2018]3506-263号</a>
                </p>
                <p class="copy_text2">
                    <span class="copy_right">违法和不良信息举报电话：0571-89853516</span>
                    <span>举报邮箱：</span>
                    <a href="mailto:ncm5990@163.com">ncm5990@163.com</a>
                </p>
            </div>
            <ul class="enter">
                <li class="unit">
                    <a class="logo logonew logo-auth f-tid" href="#" target="_blank"></a>
                    <span class="tt tt-auth"></span>
                </li>
                <li class="unit">
                    <a class="logo logonew logo-musician f-tid" href="#" target="_blank"></a>
                    <span class="tt tt-musician"></span>
                </li>
                <li class="unit">
                    <a class="logo logonew logo-reward f-tid" href="#" target="_blank"></a>
                    <span class="tt tt-reward"></span>
                </li>
                <li class="unit">
                    <a class="logo logonew logo-cash f-tid" href="#" target="_blank"></a>
                    <span class="tt tt-cash"></span>
                </li>
            </ul>
        </div>
    </div>
    <a title="回到顶部" class="box" id="box"  hidefocus="true" >回到顶部</a>
  </div>
</template>
<script>
    export default {
        name: 'footerComponent',
        data () {
            return {

            }
        },
        mounted: function() {
            //top
            function getScrollTop() {
                    var scrollTop = 0;

                    if(document.documentElement && document.documentElement.scrollTop) {
                        scrollTop = document.documentElement.scrollTop;
                    } else if(document.body) {
                        scrollTop = document.body.scrollTop;
                    }
                    
                    return scrollTop;
                }
            
            //获取当前可视范围的高度
            function getClientHeight() {
                var clientHeight = 0;

                if(document.body.clientHeight && document.documentElement.clientHeight) {
                    clientHeight = Math.min(document.body.clientHeight, document.documentElement.clientHeight);
                } else {
                    clientHeight = Math.max(document.body.clientHeight, document.documentElement.clientHeight);
                }

                return clientHeight;
            }
            
            //获取文档完整的高度
            function getScrollHeight() {
                return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
            }
            //检测滚轮事件
            var box = document.getElementById('box');
            window.onscroll = function() {
            var top = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
                // console.log(top);
                // console.log(window.innerHeight);
                if(top>0){
		            box.style.visibility = "visible";
		        }else{
		            box.style.visibility = "hidden";
		        }
            }
            var timer = null;
            box.onclick = function(){
                cancelAnimationFrame(timer);
                timer = requestAnimationFrame(function fn(){
                var oTop = document.body.scrollTop || document.documentElement.scrollTop;
                    console.log(oTop);
                    if(oTop > 0){
                    document.body.scrollTop = document.documentElement.scrollTop = oTop - 50;
                    timer = requestAnimationFrame(fn);
                    }else{
                    cancelAnimationFrame(timer);
                    } 
                });
            }    	
        }
    }
</script>
<style scoped>
li{
    list-style: none;
}
a{
    text-decoration: none;
    color: #333;
}
a:hover{
    text-decoration: underline;
}
.footerComponent{
    /* position: relative;  */
    height: 148px;
    overflow: hidden;
    border-top: 1px solid #d3d3d3;
    background: #f2f2f2;
}
.footer{
    width: 980px;
    height: 91px;
    margin: 0 auto;
}

.footer_text{
    font-size: 12px;
    height: 91px;
    color: #333;
}

.copy{
    float: left;
    width: 520px;
    padding-top: 15px;
    line-height: 24px;
}
.copy_text{
    color: #999;
}
.line{
    margin: 0 8px 0 10px;
    color: #c2c2c2;
}
.copy_text2{
    color: #666;
}
.copy_right{
    margin-right: 14px;
}
.enter{
    width: 330px;
    margin-top: 21px;
    float: right;
}
.unit:first-child {
    margin-left: 0;
}
.unit {
    float: left;
    width: 60px;
    height: 70px;
    margin-left: 30px;
    text-align: center;
    color: #666;
}








.footerComponent .selfResume{
    position: absolute;
    bottom: 10px;
    left: 50%;
    margin-left: -320px;
    width: 620px;
    height: 30px;
}
.footerComponent .selfResume ul{
    width: 100%;
    height: 100%;
}
.footerComponent .selfResume ul li{
    float: left;
    width: 155px;
    height: 30px;
    line-height: 30px;
    font-size: .75em;
    color: #555;
    text-align: center;
}
.footerComponent .selfResume ul li span:nth-child(1){
    display: inline-block;
    width: 60px;
    text-align: right;
}
.footerComponent .blogLink{
    position: absolute;
    right: 10%;
    width: 160px;
    height: 100px;
}
.box {
    /* display: block; */
    visibility : hidden;
    position: fixed;
    text-indent: -9999px;
    left: 50%;
    margin-left: 600px;
    bottom: 160px;
    width: 49px;
    height: 44px;
    background-position: -265px -47px;
    cursor: pointer;
    background: url(../assets/top.png);
}
.box:hover{
    background: url(../assets/top_click.png);
}
</style>
