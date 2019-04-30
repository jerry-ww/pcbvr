<template>
  <div class="showcaseComponent" id="showcase">
    <div class="g-bd" id="m-disc-pl-c">
      <div class="g-wrap p-pl f-pr">
        <div class="u-title f-cb">
          <h3>
            <span class="f-ff2 d-flag">全部</span>
            <a href="javascript:;" class="u-btn2 u-btn2-1 menu d-flag" id="cateToggleLink">
              <i>
                选择分类
                <em class="u-icn u-icn-38"></em>
              </i>
            </a>
          </h3>
          <div class="u-btn f-fr u-btn-hot d-flag">
            <a href="/discover/playlist/?order=hot" class="a1" data-order="hot">热门</a>
            <a href="/discover/playlist/?order=new" class="a2" data-order="new">最新</a>
          </div>
        </div>
        <ul class="m-cvrlst f-cb" id="m-pl-container">
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p1.music.126.net/6ho-MTSaBCz8X7M-Eq1dQw==/109951163971353073.jpg?param=140y140"
              >
              <a title="趁时光还未老，去见你想见的人吧" href="/playlist?id=2729966026" class="msk"></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="2729966026"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">30万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="趁时光还未老，去见你想见的人吧"
                href="/playlist?id=2729966026"
                class="tit f-thide s-fc0"
              >趁时光还未老，去见你想见的人吧</a>
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="YouTube视频推荐"
                href="/user/home?id=7394345"
                class="nm nm-icn f-thide s-fc3"
              >YouTube视频推荐</a>
              <sup class="u-icn u-icn-84"></sup>
            </p>
          </li>
          <li>
            <div class="u-cover u-cover-1">
              <img
                class="j-flag"
                src="http://p2.music.126.net/_Ikq-lUDulVaF-90Uo6iUA==/109951163777840285.jpg?param=140y140"
              >
              <a title="致敬老男孩｜怎么会迷上你，我在问自己" href="/playlist?id=2607570464" class="msk"></a>
              <div class="bottom">
                <a
                  class="icon-play f-fr"
                  title="播放"
                  href="javascript:;"
                  data-res-type="13"
                  data-res-id="2607570464"
                  data-res-action="play"
                ></a>
                <span class="icon-headset"></span>
                <span class="nb">176万</span>
              </div>
            </div>
            <p class="dec">
              <a
                title="致敬老男孩｜怎么会迷上你，我在问自己"
                href="/playlist?id=2607570464"
                class="tit f-thide s-fc0"
              >致敬老男孩｜怎么会迷上你，我在问自己</a>
            </p>
            <p>
              <span class="s-fc4">by</span>
              <a
                title="紫萱Daylily"
                href="/user/home?id=13979389"
                class="nm nm-icn f-thide s-fc3"
              >紫萱Daylily</a>
              <sup class="u-icn u-icn-84"></sup>
            </p>
          </li>
        </ul>
        <div id="m-pl-pager">
          <div class="u-page">
            <a href="javascript:void(0)" class="zbtn zprv js-disabled">上一页</a>
            <a href="javascript:void(0)" class="zpgi js-selected">1</a>
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=35"
              class="zpgi"
            >2</a>
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=70"
              class="zpgi"
            >3</a>
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=105"
              class="zpgi"
            >4</a>
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=140"
              class="zpgi"
            >5</a>
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=175"
              class="zpgi"
            >6</a>
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=210"
              class="zpgi"
            >7</a>
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=245"
              class="zpgi"
            >8</a>
            <span class="zdot">...</span>
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=1295"
              class="zpgi"
            >38</a>
            <a
              href="/discover/playlist/?order=hot&amp;cat=%E5%85%A8%E9%83%A8&amp;limit=35&amp;offset=35"
              class="zbtn znxt"
            >下一页</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
.showcaseComponent {
  width: 100%;
  height: auto;
}

.g-bd {
  background-color: rgb(255, 255, 255);
  border-bottom-color: rgb(211, 211, 211);
  border-bottom-style: solid;
  border-bottom-width: 0px;
  border-image-outset: 0px;
  border-image-repeat: stretch;
  border-image-slice: 100%;
  border-image-source: none;
  border-image-width: 1;
  border-left-color: rgb(211, 211, 211);
  border-left-style: solid;
  border-left-width: 1px;
  border-right-color: rgb(211, 211, 211);
  border-right-style: solid;
  border-right-width: 1px;
  border-top-color: rgb(211, 211, 211);
  border-top-style: solid;
  border-top-width: 0px;
  color: rgb(51, 51, 51);
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  height: 1744px;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  margin-top: 0px;
  min-height: 700px;
  overflow-wrap: break-word;
  text-size-adjust: 100%;
  width: 980px;
  word-break: break-word;
}
.g-wrap .p-pl .f-pr {
  color: rgb(51, 51, 51);
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  height: 1664px;
  overflow-wrap: break-word;
  padding-bottom: 40px;
  padding-left: 40px;
  padding-right: 40px;
  padding-top: 40px;
  position: relative;
  text-size-adjust: 100%;
  width: 900px;
  word-break: break-word;
  zoom: 1;
}
.u-title .f-cb {
  border-bottom-color: rgb(194, 12, 12);
  border-bottom-style: solid;
  border-bottom-width: 2px;
  color: rgb(51, 51, 51);
  display: block;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 12px;
  height: 40px;
  overflow-wrap: break-word;
  text-size-adjust: 100%;
  width: 900px;
  word-break: break-word;
}
.f-ff2 .d-flag{
  color: rgb(51, 51, 51);
  display: inline;
  font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 400;
  height: auto;
  overflow-wrap: break-word;
  text-size-adjust: 100%;
  width: auto;
  word-break: break-word;
}
#cateToggleLink{
   background-attachment:
scroll
;
background-clip:
border-box
;
background-color:
rgba(0, 0, 0, 0)
;
background-image:
url(https://s2.music.126.net/style/web2/img/button2.png?4953b5d…)
;
background-origin:
padding-box
;
background-position-x:
100%
;
background-position-y:
-100px
;
background-size:
auto
;
color:
rgb(51, 51, 51)
;
cursor:
pointer
;
display:
inline-block
;
font-family:
Arial, Helvetica, sans-serif
;
font-size:
12px
;
font-weight:
400
;
height:
31px
;
line-height:
31px
;
margin-bottom:
0px
;
margin-left:
12px
;
margin-right:
0px
;
margin-top:
2px
;
overflow-wrap:
break-word
;
overflow-x:
hidden
;
overflow-y:
hidden
;
padding-bottom:
0px
;
padding-left:
0px
;
padding-right:
5px
;
padding-top:
0px
;
text-align:
center
;
text-decoration-color:
rgb(51, 51, 51)
;
text-decoration-line:
none
;
text-decoration-style:
solid
;
text-size-adjust:
100%
;
vertical-align:
top
;
white-space:
nowrap
;
width:
86px
;
word-break:
break-word
;
}
.u-icn .u-icn-38{
    background-attachment:
scroll
;
background-clip:
border-box
;
background-color:
rgba(0, 0, 0, 0)
;
background-image:
url(https://s2.music.126.net/style/web2/img/icon.png?f40c7cd…)
;
background-origin:
padding-box
;
background-position-x:
-70px
;
background-position-y:
-543px
;
background-repeat-x:
;
background-repeat-y:
;
background-size:
auto
;
color:
rgb(12, 115, 194)
;
cursor:
pointer
;
display:
inline-block
;
font-family:
Arial, Helvetica, sans-serif
;
font-size:
12px
;
font-style:
normal
;
font-weight:
400
;
height:
5px
;
line-height:
31px
;
margin-left:
5px
;
overflow-wrap:
break-word
;
overflow-x:
hidden
;
overflow-y:
hidden
;
pointer-events:
none
;
text-align:
left
;
text-size-adjust:
100%
;
vertical-align:
middle
;
white-space:
nowrap
;
width:
8px
;
word-break:
break-word
;

}
.u-btn .f-fr .u-btn-hot .d-flag{
    background-attachment:
scroll
;
background-clip:
border-box
;
background-color:
rgba(0, 0, 0, 0)
;
background-image:
url(https://s2.music.126.net/style/web2/img/button.png?df79ff0…)
;
background-origin:
padding-box
;
background-position-x:
0px
;
background-position-y:
0px
;
background-repeat-x:
;
background-repeat-y:
;
background-size:
auto
;
color:
rgb(51, 51, 51)
;
display:
block
;
float:
right
;
font-family:
Arial, Helvetica, sans-serif
;
font-size:
12px
;
height:
29px
;
overflow-wrap:
break-word
;
text-size-adjust:
100%
;
width:
93px
;
word-break:
break-word
;
}

.a1{
color:
rgb(255, 255, 255)
;
cursor:
pointer
;
display:
block
;
float:
left
;
font-family:
Arial, Helvetica, sans-serif
;
font-size:
12px
;
height:
29px
;
line-height:
29px
;
overflow-wrap:
break-word
;
text-align:
center
;
text-decoration-color:
rgb(255, 255, 255)
;
text-decoration-line:
none
;
text-decoration-style:
solid
;
text-size-adjust:
100%
;
width:
46px
;
word-break:
break-word
;
}
.a2{
color:
rgb(51, 51, 51)
;
cursor:
pointer
;
display:
block
;
float:
left
;
font-family:
Arial, Helvetica, sans-serif
;
font-size:
12px
;
height:
29px
;
line-height:
29px
;
overflow-wrap:
break-word
;
text-align:
center
;
text-decoration-color:
rgb(51, 51, 51)
;
text-decoration-line:
none
;
text-decoration-style:
solid
;
text-size-adjust:
100%
;
width:
46px
;
word-break:
break-word
;
}

</style>