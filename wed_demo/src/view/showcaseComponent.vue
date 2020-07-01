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
                <a :href="item.src">{{item.name}}</a>
              </li>
            </ul>
            <ul>
              <li class="products-leli">
                <a href="#" class="Js-prod-a1">最热搜索</a>
              </li>
              <li v-for="(item,index) in hots" :key="index"> 
                <a :href="item.src">{{item.name}}</a>
              </li>
            </ul>
          </div>
          <div class="col-md-9">
            <div class="row">
              <div class="col-md-3 col-sm-3" v-for="(item,index) in products" :key="index">
                <a :href="item.url" class="products-border">
                  <img :src="item.img_src" alt />
                </a>
                <strong>{{item.name}}</strong>
                <p>{{item.classfication}}</p>
                <p style="height: 35px;">
                  <!-- <a :href="item.detail_url" class="products-aniu"> -->
                  <a :href="item.detail_url" class="btn btn-primary" style="float:left;width: 75px;">
                    了解更多
                    <!-- <i class="fa fa-angle-right"></i> -->
                  </a>
                  <a  class="btn btn-success" style="float:right;width: 50px;">
                    收藏
                    <!-- <i class="fa fa-angle-right"></i> -->
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
                <!-- <li>
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
                </li> -->
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
          url: "http://49.234.154.17/potree-org/examples/1f.html",
          img_src:
            require("../../static/library.jpg"),
          classfication: "校园",
          name: "武汉理工大学南湖图书馆",
          detail_url:
            "http://49.234.154.17/potree-org/examples/1f.html"
        },
        {
          url: "#",
          img_src:
            require("../../static/hhl.jpg"),
          classfication: "景区",
          name: "黄鹤楼",
          detail_url:
            "#"
        },
        // {
        //   url: "#",
        //   img_src:
        //     require("../../static/he.jpg"),
        //   classfication: "景区",
        //   name: "合美术馆",
        //   detail_url:
        //     "#"
        // },
        {
          url: "#",
          img_src:
            require("../../static/hm.jpg"),
          classfication: "景区",
          name: "湖北省美术馆",
          detail_url:
            "#"
        },
        {
          url: "#",
          img_src:
           require("../../static/zzd.jpg"),
          classfication: "景区",
          name: "张之洞博物馆",
          detail_url:
            "#"
        },
        //  {
        //   url: "#",
        //   img_src:
        //    require("../../static/build_one.jpg"),
        //   classfication: "校园",
        //   name: "武汉理工大学博学主楼",
        //   detail_url:
        //     "#"
        // },
        {
          url: "#",
          img_src:
           require("../../static/hk.jpg"),
          classfication: "景区",
          name: "汉口江滩",
          detail_url:
            "#"
        },
        //  {
        //   url: "#",
        //   img_src:
        //    require("../../static/siyuan.jpg"),
        //   classfication: "校园",
        //   name: "武汉理工大学思源广场",
        //   detail_url:
        //     "#"
        // },
        {
          url: "#",
          img_src:
           require("../../static/thl.png"),
          classfication: "景区",
          name: "昙华林",
          detail_url:
            "#"
        },
        {
          url: "#",
          img_src:
           require("../../static/msyy.png"),
          classfication: "景区",
          name: "磨山樱园",
          detail_url:
            "#"
        },
        {
          url: "#",
          img_src:
           require("../../static/whdh.png"),
          classfication: "景区",
          name: "武汉东湖",
          detail_url:
            "#"
        },
      ],
      latests:[
        {
          src:"http://49.234.154.17/potree-org/examples/1f.html",
          name:"南湖图书馆"
        },
        {
          src:" ",
          name:"黄鹤楼"
        },
        {
          src:" ",
          name:"张之洞博物馆"
        },
        {
          src:" ",
          name:"湖北省美术馆"
        },
        
        
      ],
      hots:[
        {
          src:"http://49.234.154.17/potree-org/examples/1f.html",
          name:"南湖图书馆"
        },
        {
          src:"",
          name:"黄鹤楼"
        },
        {
          src:"",
          name:"合美术馆"
        },
      ]
    };
  },
  mounted() {
    //取出缓存 因为存入的时候用JSON序列化了，所以取要反序列化
    var list = JSON.parse(localStorage.getItem('products'));
    // console.log(list);
    // console.log(this.products);
    if (list) {
      this.products = list;
    }
    localStorage.removeItem("products");
  }
};
</script>
<style  scoped>
@import "../css/main.css";
@import "../plug/bootstrap-3.2.0-dist/css/bootstrap.min.css";
@import "../plug/Font-Awesome-4.7.0/css/font-awesome.min.css";
</style>
