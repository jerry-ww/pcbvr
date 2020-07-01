<template>
  <div id="about us">
    <div class="cantainer" style="backgroun:rgb(255,255,255);">
      <div class="banner" style="display: flex; align-items:center;justify-content:center;">
        <div class="title">PcbVR，让世界降临在你的掌心</div>
        <div class="title-desc">无缝实景漫游系统</div>
      </div>

      <div class="column-1">
        <div class="title-container">
          <p class="title">我们为你提供什么？</p>
          <p class="title-desc">云景3D无缝实景漫游系统集互联网＋、场景体验、智能服务于一体，用户在线即可远程移动浏览由点云数据构建起来的高度实景还原的场景。</p>
          <p class="title-desc">网页上的实景漫游，身临其境感受远程的风景</p>
        </div>

        <div class="wrapper" style="display: flex;align-items: center;justify-content: center;">
          <div class="content" v-for="(item,index) in features" :key="index">
            <div>
              <img :src="item.img_src" class="Two_img_1" />
            </div>
            <div class="title">{{item.title}}</div>
            <div class="desc">{{item.desc}}</div>
            <div class="scenes">
              <img :src="item.scene_src" />
              {{item.scene_text}}
            </div>
          </div>
        </div>
      </div>

      <div class="column-2">
        <div class="title-container">
          <p class="title">如何进行一次实景建模？</p>
          <p class="title-desc">通过专业的三维激光扫描设备采集实地三维信息，对获取的实景点云数据进行处理、转化，然后通过Potree视图器构建场景并进行展示</p>
        </div>
        <div class="wrapper">
          <div class="scroll">
            <div class="block">
              <img src="https://i.loli.net/2019/07/22/5d35445c1310e71717.png" />
              <p class="title">专业三维激光扫描设备</p>
              <p class="desc">进行实地三维信息的采集</p>
            </div>
            <div class="arrow" style="display: flex; align-items: center; justify-content: center;">
              <img src="https://i.loli.net/2019/07/22/5d3543f7add7b49370.png" />
            </div>
            <div class="block">
              <img src="https://i.loli.net/2019/07/22/5d35448866cc580293.png" />
              <p class="title">点云数据处理软件</p>
              <p class="desc">对获取的实景点云数据进行处理</p>
            </div>
            <div class="arrow" style="display: flex; align-items: center; justify-content: center;">
              <img src="https://i.loli.net/2019/07/22/5d3543f7add7b49370.png" />
            </div>
            <div class="block">
              <img src="https://i.loli.net/2019/07/22/5d3544a0dbc3b79904.png" />
              <p class="title">大型点云视图器Potree</p>
              <p class="desc">构建场景并进行展示</p>
            </div>
            <div class="arrow" style="display: flex; align-items: center; justify-content: center;">
              <img src="https://i.loli.net/2019/07/22/5d3543f7add7b49370.png" />
            </div>
            <div class="block">
              <img src="https://i.loli.net/2019/07/22/5d3544bcb328437300.png" />
              <p class="title">网站平台</p>
              <p class="desc">发布内容供用户访问浏览</p>
            </div>
            <div class="arrow" style="display: flex; align-items: center; justify-content: center;">
              <img src="https://i.loli.net/2019/07/22/5d3543f7add7b49370.png" />
            </div>
            <div class="block">
              <img src="https://i.loli.net/2019/07/22/5d3544d12bd6188905.png" />
              <p class="title">用户终端观看</p>
              <p class="desc">支持PC/Android/VR一体机查看</p>
            </div>
          </div>
        </div>

        <div class="column-3">
          <div class="title">我们的产品优势</div>
          <div class="content">
            <img src="https://i.loli.net/2019/07/22/5d3580c57231264358.png" class="pcimg" />
            <div
              class="cell"
              style="width: 343px; text-align: right; margin-top: -40px; margin-left: -500px;"
            >
              <div class="name">实景还原</div>
              <div class="desc">采用激光扫描真实场景实现实景复制，实景信息中所包含的空间位置及其对应的色彩信息均能快速精准获取</div>
            </div>
            <div
              class="cell"
              style="width: 353px; text-align: center; margin-top: -220px; margin-left: -172px;"
            >
              <div class="name">无缝浏览</div>
              <div class="desc">解决全景图画面跳转问题，支持用户无缝实景浏览</div>
            </div>
            <div
              class="cell"
              style="width: 332px; text-align: left; margin-top: -40px; margin-left: 160px;"
            >
              <div class="name">在线体验</div>
              <div class="desc">基于浏览器端，用户无需下载第三方插件，可以直接通过网页进行三维点云浏览</div>
            </div>
            <div
              class="cell"
              style="width: 332px; text-align: left; margin-top: 140px; margin-left: 75px;"
            >
              <div class="name">VR浏览</div>
              <div class="desc">支持VR设备浏览，头戴VR设备，通过手柄控制，在虚拟实景中漫步</div>
            </div>
            <div
              class="cell"
              style="width: 353px; text-align: right; margin-top: 140px; margin-left: -423px;"
            >
              <div class="name">案例丰富</div>
              <div class="desc">提供包括景区、商圈、博物馆等多种类场景，供你选择</div>
            </div>
          </div>
        </div>

        <div class="column-4">
          <div class="fanku">
            <div class="page-header">
              <h3>PcbVr在线反馈 (您的反馈对我们很重要！)</h3>
            </div>
            <div id="tj">
              <h4>您的联系方式（留个QQ吧，让我们更快的处理问题）</h4>
              <input type="text" id="eml" class="form-control" placeholder="QQ,Email，或您的电话" />
              <h4>请输入您要反馈的问题</h4>
              <textarea id="con" class="form-control" rows="6"></textarea>
              <button type="button" class="btn btn-primary btn-lg btn-block top20" @click="fk()">提交</button>
            </div>
            <!-- <div id="tjjg" class="fbjg">
              <h3>提交中。。。</h3>
            </div>
            <div id="tjwc" class="fbjg">
              <h3>已提交成功，感谢您的反馈！</h3>
            </div> -->
          </div>
          <!-- <div class="title">我们做过哪些案例？</div>
          <div class="content-1">
            <div class="list">
              <div class="item" v-for="(item,index) in cases" :key="index">
                <img :src="item.img_src" class="item-img" />
                <a href="item.src" target="_blank" class="play"></a>
                <p class="name">
                  <a href="item.src">{{item.title}}</a>
                </p>
                <p class="desc">
                  <a href="item.src">{{item.desc}}</a>
                </p>
              </div>
            </div>
          </div>-->

          <!-- <div class="content-2" style="display: flex; align-items: center; justify-content: center;">
            <div class="img-container">
              <img src="https://i.loli.net/2019/07/22/5d3580f9c1a4d13600.jpg" />
            </div>
            <div>
              <p class="title-1">联系我们</p>
              <p class="title-2">你有任何疑问，或想了解定制服务的详情及价格...</p>
              <p class="title-1">
                +
                <a href="tel://010-84762786">1234567890</a>
              </p>
            </div>
          </div>-->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      features: [
        {
          img_src: "https://i.loli.net/2019/07/22/5d3534717e08536132.png",
          title: "优质多样的在线漫游产品",
          desc: "无需下载相关插件，在线远程浏览数以千计的由点云数据还原的实景",
          scene_src: "https://i.loli.net/2019/07/22/5d353426f307248577.png",
          scene_text:
            "适用场景：出行前、无聊时、收集资料时、任何一个想参观世界的时候，都可以来云景触碰世界"
        },
        {
          img_src: "https://i.loli.net/2019/07/22/5d3534a3cf96c88992.png",
          title: "贴心的产品定制服务",
          desc: "为大型企业，景区，公共设施等提供点云扫描和产品定制服务",
          scene_src: "https://i.loli.net/2019/07/22/5d353426f307248577.png",
          scene_text:
            "适用场景：景区、学校、商圈、大型企事业单位，云景为你开启新的宣传方式"
        },
        {
          img_src: "https://i.loli.net/2019/07/22/5d3534bd92ce191724.png",
          title: "难忘瞬间的定格画像",
          desc: "替你定格下幸福的瞬间，为你留下立体的独家回忆",
          scene_src: "https://i.loli.net/2019/07/22/5d353426f307248577.png",
          scene_text:
            "适用场景：婚礼、毕业、乔迁、开业，任何一个您想永远铭记的瞬间，云景替您永久保存"
        }
      ],
      characteristics: [
        {
          img_src: "https://i.loli.net/2019/07/22/5d357fe85082814734.png",
          title: "$#@#$#@!@#$#@#$#@!",
          desc: "@#$#@!@#$#@#$#@#$#@#$@#"
        },
        {
          img_src: "https://i.loli.net/2019/07/22/5d357ff615d5511129.png",
          title: "$#@!@#$#@!@#$#@!",
          desc: "%$#@!@#$%^%$#@!@#$%$#@!@#$"
        },
        {
          img_src: "https://i.loli.net/2019/07/22/5d357ffe07f3b96059.png",
          title: "$#@!@#$#@#$#@!#$#@!@#$",
          desc: "!@#$%$#@!@#$%^%$#@!@#$%$#@!@#$#@!@#"
        },
        {
          img_src: "https://i.loli.net/2019/07/22/5d35800a6600730528.png",
          title: "#@#$@$#$#%",
          desc: "$@#@$@$%%^#@%#!@#@@@!%#$"
        },
        {
          img_src: "https://i.loli.net/2019/07/22/5d35800a79bc065516.png",
          title: "#@$#$@#@#%@#$",
          desc: "$#@$#@%$%#$^%#W$@$%^#$^%#$^#@^$@#%@^#$@"
        },
        {
          img_src: "https://i.loli.net/2019/07/22/5d358013e943718400.png",
          title: "#$@#$@#@$#@$#@#",
          desc: "#@!!#$@#@#@#$#$#%#@%#@#@@#@$@$#@@3"
        }
      ],
      cases: [
        {
          src: " ",
          img_src: require("../../static/library.jpg"),
          title: "武汉理工大学南湖图书馆",
          desc: "校园.宣传展示"
        },
        {
          src: " ",
          img_src: require("../../static/library.jpg"),
          title: "武汉理工大学南湖图书馆",
          desc: "校园.宣传展示"
        },
        {
          src: " ",
          img_src: require("../../static/library.jpg"),
          title: "武汉理工大学南湖图书馆",
          desc: "校园.宣传展示"
        },
        {
          src: " ",
          img_src: require("../../static/library.jpg"),
          title: "武汉理工大学南湖图书馆",
          desc: "校园.宣传展示"
        }
      ]
    };
  },
  methods: {
    fk(){
      alert("我们已经收到了，谢谢您的意见")
    }
  }
  
};
</script>
<style lang="scss" scoped>
@import "../scss/about.scss";
.fanku {
    width: 800px;
    margin-left: auto;
    margin-right: auto;
    background-color: #FFFFFF;
    padding: 20px;
    box-shadow: 0 1px 3px rgba(0,0,0,0.07);
}
.page-header {
    padding-bottom: 9px;
    margin: 40px 0 20px;
    border-bottom: 1px solid #eee;
}
.h3, h3 {
    font-size: 24px;
}
.h1, .h2, .h3, .h4, .h5, .h6, h1, h2, h3, h4, h5, h6 {
    font-family: inherit;
    font-weight: 500;
    line-height: 1.1;
    color: inherit;
}
h4 {
    padding-top: 30px;
    padding-bottom: 10px;
}
.form-control {
    display: block;
    width: 100%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
textarea.form-control {
    height: auto;
}
.form-control {
    display: block;
    width: 95%;
    height: 34px;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42857143;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    box-shadow: inset 0 1px 1px rgba(0,0,0,.075);
    -webkit-transition: border-color ease-in-out .15s,-webkit-box-shadow ease-in-out .15s;
    -o-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
    transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
}
button, input, select, textarea {
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}
textarea {
    overflow: auto;
}
.top20 {
    margin-top: 20px;
}
.btn-block {
    display: block;
    width: 30%;
}
.btn-group-lg>.btn, .btn-lg {
    padding: 10px 16px;
    font-size: 18px;
    line-height: 1.3333333;
    border-radius: 6px;
}
.btn-primary {
    color: #fff;
    background-color: #337ab7;
    border-color: #2e6da4;
}
.btn {
    display: inline-block;
    padding: 6px 12px;
    margin-bottom: 0;
    margin-left:35%;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.42857143;
    text-align: center;
    white-space: nowrap;
    vertical-align: middle;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    background-image: none;
    border: 1px solid transparent;
    border-radius: 4px;
}
</style>
