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
                <strong>{{item.title}}</strong>
                <p>{{item.creator}}:{{item.date}}</p>
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
    <!--回到顶部-->
    <!--在线客服-->
    <!--qq聊天代码部分begin-->
    <!-- <div class="izl-rmenu">
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
    ></a> -->
    <!--qq聊天代码部分end-->
  </div>
</template>
<!-- jQuery文件。务必在bootstrap.min.js 之前引入 -->
<script src="../js/jquery-1.11.1.js"></script>
<script src="../js/jquery-1.8.3.min.js"></script>
<!-- 最新的 Bootstrap 核心 JavaScript 文件 -->
<script src="../plug/bootstrap-3.2.0-dist/js/bootstrap.min.js"></script>
<script src="../js/main.min.js"></script>
<script>
export default {
  data() {
    return {
      news: [
        {
          url: "",
          img_url:
            require("../../static/vr_news1.jpeg"),
          date: "[2020-02-26]",
          creator:"萌科MK",
          title: "VR教育优势，让虚拟照进现实"
        },
        {
          url: "",
          img_url:
            require("../../static/vr_news6.jpeg"),
          date: "[2019-05-12]",
          creator:"中关村在线",
          title: "VR已死？一组数据告诉你，不存在的！"
        },
        {
          url: "",
          img_url:
            require("../../static/vr_news3.png"),
          date: "[2019-03-10]",
          creator:"新浪VR",
          title: "为什么5G对VR比想象更重要"
        },
        {
          url: "",
          img_url:
            require("../../static/vr_news2.jpeg"),
          date: "[2020-02-25]",
          creator:"科技章鱼烧",
          title: "轻薄才是VR真潮流，HUAWEI VR Glass上手体验"
        },
        {
          url: "",
          img_url:
            require("../../static/vr_news4.jpg"),
          date: "[2019-02-14]",
          creator:"深响",
          title: "半年收入超千万，AR落地应有时|专访网易人工智能事业部总经理李晓燕"
        },
        {
          url: "",
          img_url:
            require("../../static/vr_news5.jpg"),
          date: "[2019-06-28]",
          creator:"深响",
          title: "从图文到互动影视：1-5G技术搅动下的娱乐跃进史 "
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
