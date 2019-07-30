<template>
  <div class="showcaseComponent" id="showcase">
      <div class="products-yemian">
      <div class="container">
          <div class="row">
              <div class="col-md-3 col-sm-4 products-leul">
                  <h3>马克森厨卫产品列表</h3>
                  <ul class="tarr">
                      <li class="products-leli"><a class="Js-prod-a1">全部产品</a></li>
                      <li><a>榻榻米</a></li>
                      <li><a>卧房</a></li>
                      <li><a>客厅</a></li>
                      <li><a>餐厅</a></li>
                      <li><a>书房</a></li>
                      <li><a>儿童房</a></li>
                  </ul>
                  <ul>
                      <li class="products-leli"><a href="#" class="Js-prod-a1">橱柜</a></li>
                      <li><a href="">欧式</a></li>
                      <li><a href="">现代简约</a></li>
                      <li><a href="">新中式</a></li>
                      <li><a href="">地中海</a></li>
                      <li><a href="">台下盆</a></li>
                      <li><a href="">新实用</a></li>
                      <li><a href="">水箱</a></li>

                  </ul>
                  <ul>
                      <li class="products-leli"><a href="#" class="Js-prod-a1">地板</a></li>
                      <li><a href="">田园之美</a></li>
                      <li><a href="">同步对纹</a></li>
                      <li><a href="">雅致系列</a></li>
                      <li><a href="">新品多层实木</a></li>
                      <li><a href="">精品实木</a></li>
                      <li><a href="">润木系列</a></li>
                      <li><a href="">枫丹白露系列</a></li>
                      <li><a href="">碧丽丝</a></li>
                      <li><a href="">心境如兰</a></li>
                      <li><a href="">晶莹系列</a></li>

                  </ul>

              </div>
              <div class="col-md-9">
                  <!--箭牌卫浴-->
                  <div class="row" >
                      <div class="col-md-3 col-sm-3" v-for="item in products">
                          <a :href="item.url"  class="products-border"><img :src="item.img_src" alt=""></a>
                          <strong>{{item.classfication}}</strong>
                          <p>{{item.name}}</p>
                          <p>
                          <a :href="item.detail_url" class="products-aniu">了解更多 <i class="fa fa-angle-right"></i></a>
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  </div>
  </div>
</template>
<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="../js/jquery-1.11.1.js"></script>
<script src="../js/jquery-1.8.3.min.js"></script>
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="../plug/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<!--自己写的js-->
<script src="../js/main.min.js"></script>
<script>
    export default {
        data () {
            return {
                products:[
                  {
                  url:"https://www.baidu.com",
                  img_src:"http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
                  classfication:"衣帽柜",
                  name:"现代简约系列",
                  detail_url:"https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-2634161568.20.jpN6qf&id=523353236389"
                  },
                   {
                  url:"https://www.baidu.com",
                  img_src:"http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
                  classfication:"衣帽柜",
                  name:"现代简约系列",
                  detail_url:"https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-2634161568.20.jpN6qf&id=523353236389"
                  },
                   {
                  url:"https://www.baidu.com",
                  img_src:"http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
                  classfication:"衣帽柜",
                  name:"现代简约系列",
                  detail_url:"https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-2634161568.20.jpN6qf&id=523353236389"
                  },
                   {
                  url:"https://www.baidu.com",
                  img_src:"http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
                  classfication:"衣帽柜",
                  name:"现代简约系列",
                  detail_url:"https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-2634161568.20.jpN6qf&id=523353236389"
                  },
                  {
                  url:"https://www.baidu.com",
                  img_src:"http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
                  classfication:"衣帽柜",
                  name:"现代简约系列",
                  detail_url:"https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-2634161568.20.jpN6qf&id=523353236389"
                  },
              ]
            }
        }
    }
</script>
<style  scoped>
@import "../css/main.css";
@import "../plug/bootstrap-3.2.0-dist/css/bootstrap.min.css";
@import "../plug/Font-Awesome-4.7.0/css/font-awesome.min.css";
</style>
