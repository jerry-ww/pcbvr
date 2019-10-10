<template>
  <div class="home">
        <carousel :slides="slides" :inv="invTime"></carousel> 
        <div class="container"> 
            <div class="container-main">
                    <div class="main-list">
                        <div class="rcmd">
                            <div class="rcmd-header">
                                <a href="" class="tit">热门推荐</a>
                                <div class="tabs"> 
                                    <a href="" class="s-fc3">校园</a>
                                    <span class="line">|</span>
                                    <a href="" class="s-fc3">景区</a>
                                    <span class="line">|</span>
                                    <a href="" class="s-fc3">车站</a>
                                    <span class="line">|</span>
                                    <a href="" class="s-fc3">商场</a>
                                </div>
                                <span class="more">
                                    <a href="" class="s-fc3">更多</a>
                                    <i class="cor s-bg s-bg-6">&nbsp;</i>
                                </span> 
                                
                            </div>
                            <ul class="m-cvrlst f-cd">
                                <li v-for="(item,index) in commands" :key="index">
                                    <div class="u-cover u-cover-1">                               
                                        <a  href="item.src" class="msk" >
                                            <img :src="item.img">
                                        </a>
                                        <div class="bottom">
                                            <a class="icon-play" title="播放" href="javascript:;" ></a>
                                            <span class="icon-headset"></span>
                                            <span class="nb"></span>
                                        </div>
                                    </div>
                                    <p class="dec">
                                        <a class="tit s-fc0" href="item.src" >{{item.title}}</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        <div class="rcmd">
                            <div class="rcmd-header">
                                <a href="" class="tit">最新发布</a>
                                <div class="tabs"> 
                                    <a href="" class="s-fc3">校园</a>
                                    <span class="line">|</span>
                                    <a href="" class="s-fc3">景区</a>
                                    <span class="line">|</span>
                                    <a href="" class="s-fc3">车站</a>
                                    <span class="line">|</span>
                                    <a href="" class="s-fc3">商场</a>
                                </div>
                                <span class="more">
                                    <a href="" class="s-fc3">更多</a>
                                    <i class="cor s-bg s-bg-6">&nbsp;</i>
                                </span> 
                                
                            </div>
                            <ul class="m-cvrlst f-cd" v-for="(item,index) in latests" :key="index">
                                <li >
                                    <div class="u-cover u-cover-1">
                                        <a  href="item.src" class="msk" >
                                            <img :src="item.img_src">
                                        </a>
                                        <div class="bottom">
                                            <a class="icon-play" title="播放" href="javascript:;" ></a>
                                            <span class="icon-headset"></span>
                                            <span class="nb"></span>
                                        </div>
                                    </div>
                                    <p class="dec">
                                        <a class="tit s-fc0" href="item.src" >{{item.title}}</a>
                                    </p>
                                </li>
                            </ul>
                        </div>
                        
                    </div>
                </div>

        </div>
  </div> 
</template>
<script>
// import {findMusic} from '../service/dataProcessing'
import carousel from '../components/Carousel'
import ElementUI from 'element-ui'
    export default {
        data () {
            return {
                invTime: 3000,
                Library:require("../../static/library.jpg"),
                Build_one:require("../../static/build_one.jpg"),
                House:require("../../static/house.jpg"),
                Siyuan:require("../../static/siyuan.jpg"),
                slides: [
                    {
                        src:'static/library.jpg',
                        title:'南湖图书馆', 
                        url:'http://101.132.40.201:8080/Myhouse1/pageName.html',
                        // bgColor: '#487e42'
                        // bgColor: '#6797a5'
                    },
                    {
                        src:'static/build_one.jpg',
                        title:'新一教学楼',
                        // bgColor:'#c1d6f9'
                        // bgColor: '#6797a5'
                    },
                    {
                        src:'static/house.jpg',
                        title:'飞马广场',
                        // bgColor:'#e7be8c'
                        // bgColor: '#6797a5'
                    },
                    {
                        src:'static/siyuan.jpg',
                        title:'思源广场',
                        // bgColor:'#d3d6db'
                        // bgColor: '#6797a5'
                    }
                    
                ],

                commands:[
                    {
                        src:"http://101.132.40.201:8080/Myhouse1/pageName.html",
                        img_src:"Library",
                        title:"图书馆外围"
                    },
                    {
                        src:"http://49.234.223.75:8080/potree-annotation/examples/lion.html",
                        img_src:"Library",
                        title:"图书馆一楼"
                    },
                    {
                        src:"http://101.132.40.201:8080/Myhouse1/pageName.html",
                        img_src:"Library",
                        title:"图书馆二楼"
                    },
                    {
                        src:"http://49.234.156.168:8080/potree/examples/3f.html",
                        img_src:"Library",
                        title:"图书馆三楼"
                    },
                    {
                        src:"http://101.132.40.201:8080/Myhouse1/pageName.html",
                        img_src:"Library",
                        title:"图书馆四楼"
                    },
                    {
                        src:"http://101.132.40.201:8080/Myhouse1/pageName.html",
                        img_src:"Library",
                        title:"图书馆五楼"
                    }
                ],
                latests:[
                   {
                        src:"http://101.132.40.201:8080/Myhouse1/pageName.html",
                        img_src:"Build_one",
                        title:"新一教学楼"
                    }
                ]
                
            }
        },

        components: {
            carousel
        },

        computed:{

        },

        methods: {
          
        },
        created:function(){
            
        },
        mounted: function() {
        }
    }
   
</script>
<style scoped>
a{
    cursor: pointer;
    color: rgb(51, 51, 51);
    text-decoration: none;  
}
.home{
    width: 100%;
    height: auto;
}
.container{
    width:1100px;
    min-height: 1425px;
    background-color: rgb(255, 255, 255);
    margin: 0px auto;
    /* border-style: solid;
    border-color: rgb(211, 211, 211); */
    border-image: initial;
    border-width: 0px 1px;
}
.container-main{
    float: left;
    width: 100%;
    margin-right: -250px;
}
.main-list{
    padding: 20px 0px 40px;
}
.rcmd-header{
    height: 33px;
    padding: 0px 10px 0px 34px;
    background-position: -225px -156px;
    /* border-bottom: 2px solid #fdbfb2; */
}
.tit{
    float: left;
    font-size: 20px;
    font-weight: normal;
    line-height: 28px;
}
.tabs{
    float: left;
    font-size: 12px;
    margin: 7px 0px 0px 20px;
}
.tabs a:hover{
    text-decoration: underline;
}
.s-fc3{
     color: #666;
}
.line{
    margin: 0 8px 0 10px;
    color: #c2c2c2;
}
.more{
    float: right;
    margin-top: 7px;
}
.more a:hover{
    text-decoration: underline;
}
.m-cvrlst{
    margin: 20px 0px 0px 0px;
    display: block;
    overflow: hidden;/*添加高度，解决float浮动引起的高度坍陷*/
    zoom:1;
}
li{
    list-style: none;
    display: block;
}
.m-cvrlst li{
    display: inline-block;
    width: 230px;
    height: 200px;
    line-height: 1.4;
    overflow: hidden;
    padding: 0px 0px 30px 50px;
    padding-left: 34px;
}
.u-cover-1 {
    width: 230px;
    height: 180px;
}
.u-cover {
    position: relative;
    display: block;
}
.u-cover img {
    display: block;
    width: 100%;
    height: 100%;
}
.msk{
    background-position: 0px 0px;
}
.bottom{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 27px;
    background-position: 0 -537px;
    color: #ccc;
}
.icon-play{
    position: absolute;
    bottom: 0px;
    left: 0px;
    width: 100%;
    height: 27px;
    color: rgb(204, 204, 204);
    background-position: 0px -537px;
    float: right;
}
.icon-headset {
    float: left;
    width: 14px;
    height: 11px;
    background-position: 0px -24px;
    margin: 9px 5px 9px 10px;
}
.nb {
    float: left;
    margin: 7px 0px 0px;
}
.dec {
    font-size: 14px;
    margin: 8px 0px 3px;
    overflow: hidden;/*添加高度，解决float浮动引起的高度坍陷*/
    zoom:1;
}
.dec a:hover{
    text-decoration: underline;
}
.m-cvrlst li .tit {
    display: inline-block;
    max-width: 100%;
    vertical-align: middle;
    color: #000;
    font-size: 14px;
    line-height: 19px;
}

</style>