<template>
  <div class="newsComponent">
    <div class="newsye">
      <div class="container">
        <div class="row">
          <div class="col-md-3">
            <ul>
              <li>
                <a href style="color: #1e5077;font-weight: bold;">法标资讯</a>
              </li>
              <li>
                <a href="news_2.html">行业资讯</a>
              </li>
              <li>
                <a href>产品资讯</a>
              </li>
              <li>
                <a href>媒体来风</a>
              </li>
              <li>
                <a href>营销活动</a>
              </li>
              <li>
                <a href>招商动态</a>
              </li>
            </ul>
          </div>
          <div class="col-md-9 news-col9">
            <div class="row">
              <div class="col-md-4 col-sm-6" v-for="(item,index) in news" :key="index">
                <a href>
                  <img :src="item.img_url" alt />
                </a>
                <span>{{item.date}}</span>
                <p>{{item.title}}</p>
                <p>
                  <a href>了解详情</a>
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
    <!--回到顶部-->
    <!--在线客服-->
    <!--qq聊天代码部分begin-->
    <div class="izl-rmenu">
      <a class="consult" target="_blank">
        <div class="phone" style="display:none;">0592-1234567</div>
      </a>
      <a class="cart">
        <div class="pic"></div>
      </a>
      <a href="javascript:void(0)" class="btn_top" style="display: block;"></a>
    </div>
    <a
      target="_blank"
      href="http://wpa.qq.com/msgrd?v=3&uin=123456&site=qq&menu=yes"
      id="udesk-feedback-tab"
      class="udesk-feedback-tab-left"
      style="display: block; background-color: black;"
    ></a>
    <!--qq聊天代码部分end-->
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
      news: [
        {
          url: "",
          img_url:
            require("../../static/library.jpg"),
          date: "[ 2017-06-11 ]",
          title: "VR全景漫游展示为世界文化遗产推广提供新思路"
        },
        {
          url: "",
          img_url:
            require("../../static/library.jpg"),
          date: "[ 2017-06-11 ]",
          title: "VR全景漫游展示为世界文化遗产推广提供新思路"
        },
        {
          url: "",
          img_url:
            require("../../static/library.jpg"),
          date: "[ 2017-06-11 ]",
          title: "VR全景漫游展示为世界文化遗产推广提供新思路"
        },
        {
          url: "",
          img_url:
            require("../../static/library.jpg"),
          date: "[ 2017-06-11 ]",
          title: "VR全景漫游展示为世界文化遗产推广提供新思路"
        },
        {
          url: "",
          img_url:
            require("../../static/library.jpg"),
          date: "[ 2017-06-11 ]",
          title: "VR全景漫游展示为世界文化遗产推广提供新思路"
        }
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
