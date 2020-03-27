<template>
  <div class="container">
    <div class="w750 fleft">
      <div id="content">
        <ul id="tab"  class="tab_content" >
          <li class="cur tab tab_curs" style="color: #000;">
            <a href="/i/i/replyme" target="_self">回复我的</a>
          </li>
          <li class="tab">
            <a href="/i/i/atme" target="_self">我的评论</a>
          </li>
          <li class="tab">
            <a href="/i/i/storethread" target="_self">我赞过的</a>
          </li>
        </ul>
        <!-- <ul id="sub_tab" class="sub_tab_content">
          <li b-type="all" class="sub_tab sub_tab_cur">
            <a href="#" onclick="return false" target="_self">全部</a>
          </li>
          <li b-type="bythread" class="sub_tab">
            <a href="#" onclick="return false" target="_self">按主题查看</a>
          </li>
        </ul> -->
        <div id="feed" class="feed">
          <div class="feed_head"></div>
          <ul>
            <li class="feed_item clearfix feed_replyme j_feed_replyme">
              <div class="feed_left j_del_ctrl clearfix" data-tuid="821157301">
                <div class="replyme_text clearfix j_replyme">
                  <div class="replyme_user">
                    <a
                      href=""
                      target="_blank"
                    >画影倾城：</a>
                  </div>
                  <div class="replyme_content">
                    <a
                      href=""
                      target="_blank"
                    >555~我也好想去武汉看看</a>
                  </div>
                </div>
                <div class="feed_rich">
                  <!---->
                </div>
                <div class="feed_from">
                  回复我的主题：“
                  <a
                    class="itb_thread"
                    href=""
                    title="想回图书馆学习"
                    target="_blank"
                  >听过黄鹤楼前的花都开了</a>” &gt;
                  <a class="itb_kw" href="" title="" target="_blank">黄鹤楼</a>
                </div>
              </div>
              <div class="feed_right j_del_ctrl" data-tuid="821157301">
                <div class="feed_time">2020-02-27 07:40</div>
                <div class="reply icon_reply">
                  <a
                    href="#"
                    onclick="return false;"
                    class="reply_del"
                    data-param="{&quot;is_finf&quot;: &quot;1&quot;,&quot;fid&quot;: &quot;450874&quot;,&quot;pid&quot;: &quot;123257779150&quot;,&quot;tid&quot;: &quot;2849926737&quot;,&quot;tbs&quot;:&quot;4791688a2f36dabe1585274145&quot;,&quot;ie&quot;:&quot;utf-8&quot;,&quot;kw&quot;:&quot;沧月&quot;,&quot;is_vipdel&quot;:1}"
                  >删除</a>
                  <a
                    href="/p/2849926737?fid=450874&amp;pid=45545562832&amp;cid=123257779150#123257779150"
                    target="_blank"
                  >回复</a>
                </div>
              </div>
            </li>
          </ul>
          <div class="feed_foot"></div>
        </div>
        <div id="pager" class="itb_pager"></div>
      </div>
    </div>
  </div>
</template>
<script></script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
#main_wrapper .ibody {
  width: 978px;
  margin: 0 auto;
  border: 1px solid #d1dcce;
  background: url(//tb2.bdstatic.com/tb/static-itieba3/img/ibg.png?t=1572504355551)
    repeat-y top right;
}
.fleft {
  float: left;
}
.w750 {
  width: 750px;
}
#content {
  margin: 18px 10px 10px;
}
.tab_content {
  border-bottom: 1px solid #e7e7e7;
  height: 30px;
  margin: 14px 6px 0;
}
ul,
ol,
li {
  list-style: none;
}
.sub_tab_content {
  margin: 10px 6px 0;
  height: 32px;
  line-height: 22px;
  background: #f4f4f4;
  padding: 0 10px;
  border-bottom: 1px dotted #dfdfdf;
}
ul,
ol,
li {
  list-style: none;
}
.tab_content .tab_cur {
  border-bottom: 1px solid #fff;
}

.tab_content .tab {
  background: url(http://tb1.bdstatic.com/tb/static-itieba3/img/tabBg.jpg?t=1572504375604)
    repeat scroll 0 0 #f0f0f0;
  border: 1px solid #e6e6e6;
  float: left;
  font-weight: 700;
  width: 78px;
  height: 28px;
  line-height: 28px;
  margin-right: 5px;
  text-align: center;
  position: relative;
  top: 1px;
}
.sub_tab_cur {
  line-height: 20px;
}
.sub_tab {
  padding: 5px 0;
  margin-right: 5px;
  float: left;
}
.ibody a,
.ibody a:link {
  text-decoration: none;
}
.sub_tab_cur a {
  font-weight: 700;
  background: #fff;
  border: 1px solid #ddd;
}
.feed {
  margin: 0 6px;
  width: 718px;
  _overflow: hidden;
}
html,
body,
div,
p,
ul,
li,
ol,
dl,
dt,
dd,
pre,
code,
table,
tr,
td,
form,
fieldset,
legend,
button,
input,
textarea,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
blockquote {
  margin: 0;
  padding: 0;
}
.feed_item {
  border-bottom: 1px dotted #e0e0e0;
}
.clearfix {
  zoom: 1;
}
.itb_pager {
  text-align: center;
  padding: 10px;
}
html,
body,
div,
p,
ul,
li,
ol,
dl,
dt,
dd,
pre,
code,
table,
tr,
td,
form,
fieldset,
legend,
button,
input,
textarea,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
blockquote {
  margin: 0;
  padding: 0;
}
.tab_curs a:link, .tab_cur a:hover, .tab_cur a:visited {
    text-decoration: none;
    color: #000;
}
.tab a:link, .tab a:hover, .tab a:visited {
    text-decoration: none;
    color: #989898;
}
.cur{
  color: #000;
}
.feed {
    margin: 0 6px;
    width: 718px;
    _overflow: hidden;
}
.feed_item {
    border-bottom: 1px dotted #E0E0E0;
}
.clearfix {
    zoom: 1;
}
li {
    list-style: none;
}
.feed_left {
    float: left;
    width: 600px;
    padding: 20px 0 21px 10px;
}
.clearfix {
    zoom: 1;
}
.replyme_text {
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 10px;
}
.clearfix {
    zoom: 1;
}
.replyme_user {
    float: left;
}
.ibody a, .ibody a:link {
    text-decoration: none;
}
.replyme_text {
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 10px;
}

.replyme_text {
    font-size: 14px;
    line-height: 20px;
    padding-bottom: 10px;
}
.ibody a, .ibody a:link {
    text-decoration: none;
}
a:visited {
    text-decoration: none;
}
a {
    color: #2d64b3;
    text-decoration: none;
}
.feed_from {
    color: #989898;
}
.feed_from a, .feed_from a:link {
    color: #000;
    padding: 0 3px;
}
.feed_from a, .feed_from a:link {
    color: #000;
    padding: 0 3px;
}
.ibody a, .ibody a:link {
    text-decoration: none;
}
.feed_right {
    text-align: right;
    color: #989898;
    padding: 20px 10px 21px 0;
}
.feed_time {
    line-height: 20px;
    padding-bottom: 10px;
}
.feed_right {
    text-align: right;
    color: #989898;
    padding: 20px 10px 21px 0;
}
.feed_right {
    text-align: right;
    color: #989898;
    padding: 20px 10px 21px 0;
}
.ibody a, .ibody a:link {
    text-decoration: none;
}
.icon_reply a {
    background: url(//tb2.bdstatic.com/tb/static-itieba3/img/replyPop.gif?t=1572504353498) transparent no-repeat 0 0;
    padding-left: 18px;
}
</style>