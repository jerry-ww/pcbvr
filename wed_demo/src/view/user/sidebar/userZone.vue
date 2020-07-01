<template>
  <div class="container">
    <div class="w750 fleft">
      <div id="content">
        <ul id="tab"  class="tab_content" >
          <li @click="user_zone_reply()" class="tab" >
            <a class="reply_anchor" style="color:#2d64b3;" href="#" target="_self">回复我的</a>
          </li>
          <li @click="user_zone_tag()" class="tab">
            <a class="tag_anchor" href="#" target="_self">我的标签</a>
          </li>
          <li @click="user_zone_comment()" class="tab">
            <a class="comment_anchor" href="#" target="_self">我的评论</a>
          </li>
          <!-- <li @click="user_zone_store()" class="tab">
            <a href="#" target="_self">我的收藏</a>
          </li> -->
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
          <!-- 回复我的 -->
          <ul id="user_zone_reply" >
            <li v-for="(item,index) in reply" :key="index" class="feed_item clearfix feed_replyme j_feed_replyme">
              <div class="feed_left j_del_ctrl clearfix" data-tuid="821157301">
                <div class="replyme_text clearfix j_replyme">
                  <div class="replyme_user">
                    <a
                      href=""
                      target="_blank"
                    >{{item.user_name}}：</a>
                  </div>
                  <div class="replyme_content">
                    <a
                      :href="item.reply_url"
                      target="_blank"
                    >{{item.reply_content}}</a>
                  </div>
                </div>
                <div class="feed_rich">
                  <!---->
                </div>
                <div class="feed_from">
                  回复我的评论：“
                  <a
                    class="itb_thread"
                    :href="item.reply_url"
                    target="_blank"
                  >{{item.reply_target}}</a>” &gt;
                  <a class="itb_kw" :href="item.reply_url" title="" target="_blank">{{item.model}}</a>
                </div>
              </div>
              <div class="feed_right j_del_ctrl" >
                <div class="feed_time">{{item.reply_time}}</div>
                <div class="reply icon_reply">
                  <a
                    :href="item.reply_url"
                    target="_blank"
                  >回复</a>
                </div>
              </div>
            </li>
          </ul>
          <!-- 我的标签 -->
          <ul id="user_zone_tag" style="display:none">
            <li v-for="(item,index) in tag" :key="index" class="simple_block_container">
              <cite>{{item.tag_time}}</cite>
              <div class="wrap_container">
                <table>
                  <tbody>
                    <tr>
                      <td class="nowrap">在  
                        <a style="" :href="item.url" target="_blank" >{{item.model}}</a> 
                        发表
                      </td>
                      <td class="wrap">
                        <a :href="item.url" class="thread_title" target="_blank">{{item.tag_title}}</a>
                        <nobr>
                          <span class="b_reply_txt">
                            <a class="b_reply" :href="item.url" target="_blank">回复</a>
                            ({{item.reply_num}})
                          </span>
                        </nobr>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="clear"></div>
            </li>
          </ul>
          <!-- 我的留言 -->
          <ul id="user_zone_comment" style="display:none">
            <li v-for="(item,index) in comment" :key="index" class="feed_item clearfix feed_replyme j_feed_replyme">
              <div class="feed_left j_del_ctrl clearfix" >
                <div class="replyme_text clearfix j_replyme">
                  <div class="replyme_user">
                    <a
                      :href="item.url"
                      target="_blank"
                    >回复@{{item.user_name}}：</a>
                  </div>
                  <div class="replyme_content">
                    <a
                      :href="item.url"
                      target="_blank"
                    >{{item.comment_content}}</a>
                  </div>
                </div>
                <div class="feed_rich">
                  <!---->
                </div>
                <div class="feed_from">
                  回复标签：“
                  <a
                    class="itb_thread"
                    :href="item.url"
                    target="_blank"
                  >{{item.comment_target}}</a>” &gt;
                  <a class="itb_kw" :href="item.url" title="" target="_blank">{{item.model}}</a>
                </div>
              </div>
              <div class="feed_right j_del_ctrl" data-tuid="821157301">
                <div class="feed_time">{{item.comment_time}}</div>
                <div class="reply icon_reply">
                  <a
                    :href="item.url"
                    class="reply_del"
                  >删除</a>
                </div>
              </div>
            </li>
          </ul>

          <!-- 我的收藏 -->
          <!-- <div class="col-md-9">
            <div class="row">
              <div class="col-md-3 col-sm-3" v-for="(item,index) in products" :key="index">
                <a :href="item.url" class="products-border">
                  <img :src="item.img_src" alt />
                </a>
                <strong>{{item.name}}</strong>
                <p>{{item.classfication}}</p>
                <p>
                  <a :href="item.detail_url" class="products-aniu">
                    了解更多
                    <i class="fa fa-angle-right"></i>
                  </a>
                </p>
              </div>
            </div>
          </div> -->

          <div class="feed_foot"></div>
        </div>
        <div id="pager" class="itb_pager"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      products: [{
          url: "https://www.baidu.com",
          img_src:
            require("../../../../static/library.jpg"),
          classfication: "校园",
          name: "武汉理工大学南湖图书馆",
          detail_url:
            "https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-2634161568.20.jpN6qf&id=523353236389"
        },
        {
          url: "https://www.baidu.com",
          img_src:
            require("../../../../static/hhl.jpg"),
          classfication: "景区",
          name: "黄鹤楼",
          detail_url:
            "https://item.taobao.com/item.htm?spm=a1z10.1-c.w4004-2634161568.20.jpN6qf&id=523353236389"
        },
      ], 
      //回复我的，包括回复我的标签，回复我的评论
      reply:[
        {
          user_name:"小明爱旅行",//回复我的用户的用户名
          reply_content:"555~我好想去武汉看看",//回复的内容
          reply_target:"听说黄鹤楼前的花都开了",//回复的目标标签，也可能是我的某个评论
          model:"黄鹤楼",//所在的model
          reply_time:"2020-02-27 07:40",//时间
          reply_url:"#",//那个model的url
        },
        {
          user_name:"little-prince",
          reply_content:"共待春暖，武汉加油！",
          reply_taget:"听说黄鹤楼前的花都开了",
          model:"黄鹤楼",
          reply_time:"2020-02-26 13:20",
          reply_url:"#",
        },
        {
          user_name:"plant",
          reply_content:"我也想，在家太废了！",
          reply_taget:"想开学，想我的图书馆了",
          model:"南湖图书馆",
          reply_time:"2020-02-20 23:30",
          reply_url:"#",
        },
        {
          user_name:"今天学习了吗",
          reply_content:"哈哈哈，等回学校约图书馆学习啊",
          reply_taget:"想开学，想我的图书馆了",
          model:"南湖图书馆",
          reply_time:"2020-02-17 07:39",
          reply_url:"#",
        },
        
      ],
      //我创建的标签
      tag:[
        {
          tag_time:"2020-2-26",//我创建这个标签的时间
          model:"黄鹤楼",//所在的model
          tag_title:"听说黄鹤楼前的花都开了",//标签的标题
          reply_num:"2",//标签下的回复数
          url:"#",//那个model的url
        },
        {
          tag_time:"2020-2-15",
          model:"南湖图书馆",
          tag_title:"想开学，想我的图书馆了",
          reply_num:"3",
          url:"#",
        },
      ],
      //我发表的评论
      comment:[
        {
          user_name:"小明爱旅行",//评论的对象的用户名
          comment_content:"我也想找研友，一个人学不进去。。",//我评论的内容
          comment_target:"找研友，一起互相监督",//我评论的目标，可能是某个标签，可能是某个人的评论
          comment_time:"2020-03-02 23:30",//我发表评论的时间
          model:"南湖图书馆",//所在的model
          url:"#",//那个model的url
        },
        {
          user_name:"小明爱旅行",
          comment_content:"哈哈哈哈，开学一起去拍照",
          comment_target:"听说黄鹤楼的花开了",
          comment_time:"2020-02-28 16:29",
          model:"黄鹤楼",
          url:"#",
        },
      ]
    };
  },
  methods: {
    user_zone_reply(){
      $('#user_zone_reply').show();
      $('.reply_anchor').css('color','#2d64b3');
      $('#user_zone_tag').hide();
      $('.tag_anchor').css('color','#989898');
      $('#user_zone_comment').hide();
      $('.comment_anchor').css('color','#989898');
    },
    user_zone_tag(){
      $('#user_zone_reply').hide();
      $('.reply_anchor').css('color','#989898');
      $('#user_zone_tag').show();
      $('.tag_anchor').css('color','#2d64b3');
      $('#user_zone_comment').hide();
      $('.comment_anchor').css('color','#989898')
    },
    user_zone_comment(){
      $('#user_zone_reply').hide();
      $('.reply_anchor').css('color','#989898');
      $('#user_zone_tag').hide();
      $('.tag_anchor').css('color','#989898');
      $('#user_zone_comment').show();
      $('.comment_anchor').css('color','#2d64b3');
    },
  },
  mounted: function() {
    console.log("请求数据");
    var _this=this;
    $.ajax({
            url: "http://49.234.154.17:5555/user_zone.php",//填一下登录接口就好了
            type: "post",    // 提交方式
            data: {}, // data为String类型，必须为 Key/Value 格式。
            dataType: "json",    // 服务器端返回的数据类型
            xhrFields: {
                withCredentials: true// 这里设置了withCredentials
            },
            success: function (data) {    
                console.log(data);
                if (data.code == 200) {
                    _this.reply=data.reply;
                    _this.tag=data.tag;
                    _this.comment=data.comment;
                }
                else{
                    alert("请求数据失败");
                }
            },
        });
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
  width: 950px;
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
  width: 918px;
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
    width: 918px;
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
/* 我的标签 */
.simple_block_container {
    padding: 10px 10px 0;
    border-bottom: 1px dotted #dbe1e6;
    padding: 8px 5px;
    font-size: 14px;
    line-height: 23px;
    zoom: 1;
}
.simple_block_container cite {
    font-size: 12px;
    color: #7f7f7f;
    margin-right: 10px;
    float: right;
    font-style: normal;
}
.simple_block_container .wrap_container {
    margin-right: 45px;
}
table {
    background-color: transparent;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
tbody {
    display: table-row-group;
    vertical-align: middle;
    border-color: inherit;
}
tr {
    display: table-row;
    vertical-align: inherit;
    border-color: inherit;
}
.simple_block_container .wrap_container .nowrap {
    vertical-align: top;
}
.simple_block_container table .nowrap {
    white-space: nowrap;
    vertical-align: top;
}
.simple_block_container table td {
    font-size: 14px;
    line-height: 23px;
}
td {
    font: 12px / 20px 宋体;
}
.simple_block_container li a:link, .simple_block_container li a:hover, .simple_block_container li a:visited {
    font-size: 14px;
}

.ibody a, .ibody a:link {
    text-decoration: none;
}
.simple_block_container table .wrap {
    padding-left: 4px;
}

.simple_block_container table td {
    font-size: 14px;
    line-height: 23px;
}
.simple_block_container li a:link, .simple_block_container li a:hover, .simple_block_container li a:visited {
    font-size: 14px;
}
.ibody a, .ibody a:link {
    text-decoration: none;
}
.thread_title:visited {
    color: purple;
}
.simple_block_container a {
    text-decoration: none;
}
nobr {
    white-space: nowrap;
}
.simple_block_container table td {
    font-size: 14px;
    line-height: 23px;
}
.simple_block_container .b_at_txt, .simple_block_container .b_reply_txt {
    color: #666;
    font-size: 12px;
    margin-left: 4px;
}
.simple_block_container .b_reply:link, .simple_block_container .b_reply:hover, .simple_block_container .b_reply:visited {
    color: #666;
    font-size: 12px;
}
</style>