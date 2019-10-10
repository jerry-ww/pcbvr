<template>
  <div class="showcaseComponent" id="showcase">
    <div class="products-yemian">
      <div class="container">
        <div class="row">
          <div class="col-md-3 col-sm-4 products-leul">
            <h3>云景产品列表</h3>
            <ul class="tarr">
              <li class="products-leli">
                <a class="Js-prod-a1">全部产品</a>
              </li>
              <li>
                <a>校园</a>
              </li>
              <li>
                <a>景区</a>
              </li>
              <li>
                <a>商场</a>
              </li>
              <li>
                <a>火车站</a>
              </li>
            </ul>
            <ul>
              <li class="products-leli">
                <a href="#" class="Js-prod-a1">最新发布</a>
              </li>
              <li v-for="(item,index) in latests" :key="index">
                <a href="item.src">{{item.name}}</a>
              </li>
            </ul>
            <ul>
              <li class="products-leli">
                <a href="#" class="Js-prod-a1">最热搜索</a>
              </li>
              <li v-for="(item,index) in hots" :key="index"> 
                <a href="item.src">{{item.name}}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-3 col-sm-3" v-for="(item,index) in products" :key="index">
                <a :href="item.url" class="products-border">
                  <img :src="item.img_src" alt />
                </a>
                <strong>{{item.classfication}}</strong>
                <p>{{item.name}}</p>
                <p>
                  <a :href="item.detail_url" class="products-aniu">
                    了解更多
                    <i class="fa fa-angle-right"></i>
                  </a>
                </p>
              </div>
            </div>
            <nav class="nav" aria-label="Page navigation">
              <ul class="pagination pagination-lg">
                <li class="disabled">
                  <a href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li>
                  <a href="news.html" style="background:#ccc;">1</a>
                </li>
                <li>
                  <a href>2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li>
                  <a href="#">...</a>
                </li>
                <li>
                  <a href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
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
  data() {
    return {
      products: [
        {
          url: "https://www.baidu.com",
          img_src:
            "http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
          classfication: "图书馆",
          name: "校园",
          detail_url:
            "https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-2634161568.20.jpN6qf&id=523353236389"
        },
        {
          url: "https://www.baidu.com",
          img_src:
            "http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
          classfication: "图书馆",
          name: "校园",
          detail_url:
            "https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-2634161568.20.jpN6qf&id=523353236389"
        },
        {
          url: "https://www.baidu.com",
          img_src:
            "http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
          classfication: "图书馆",
          name: "校园",
          detail_url:
            "https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-2634161568.20.jpN6qf&id=523353236389"
        },
        {
          url: "https://www.baidu.com",
          img_src:
            "http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
          classfication: "图书馆",
          name: "校园",
          detail_url:
            "https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-2634161568.20.jpN6qf&id=523353236389"
        },
        {
          url: "https://www.baidu.com",
          img_src:
            "http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
          classfication: "图书馆",
          name: "校园",
          detail_url:
            "https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-2634161568.20.jpN6qf&id=523353236389"
        }
      ],
      latests:[
        {
          src:" ",
          name:"武汉理工"
        },
        {
          src:" ",
          name:"华中科技"
        },
        {
          src:" ",
          name:"华中师范"
        },
        {
          src:" ",
          name:"中南财大"
        }
        
      ],
      hots:[
        {
          src:"",
          name:"黄鹤楼"
        },
        {
          src:"",
          name:"晴川阁"
        },
        {
          src:"",
          name:"长江大桥"
        },
      ]
    };
  }
};
</script>
<style  scoped>
@import "../css/main.css";
@import "../plug/bootstrap-3.2.0-dist/css/bootstrap.min.css";
@import "../plug/Font-Awesome-4.7.0/css/font-awesome.min.css";
</style>
