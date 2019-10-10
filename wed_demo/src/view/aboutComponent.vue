<template>
  <div id="about us">
    <div class="cantainer" style="backgroun:rgb(255,255,255);">
      <div class="one_lay" style="display: flex; align-items:center;justify-content:center;">
        <div class="One_font1">PcbVR</div>
        <div class="One_font2">来一场别样的实景漫游</div>
      </div>

      <div class="Two_t1">
        <p class="Two_font1">我们为你提供什么？</p>
        <p class="Two_font2">云景3D无缝实景漫游系统集互联网＋、场景体验、智能服务于一体，用户在线即可远程移动浏览由点云数据构建起来的高度实景还原的场景。</p>
        <p class="Two_font2">网页上的实景漫游，身临其境感受远程的风景</p>
      </div>

      <div class="Two_lay" style="display: flex;align-items: center;justify-content: center;">
        <div class="Two_block_1" v-for="(item,index) in features" :key="index">
          <div>
            <img :src="item.img_src" class="Two_img_1" />
          </div>
          <div class="Two_title">{{item.title}}</div>
          <div class="Two_desc">{{item.desc}}</div>
          <div class="Two_scenes">
            <img :src="item.scene_src" class="Two_img2" />{{item.scene_text}}
          </div>
        </div>
      </div>

      <div class="Three_lay_qTFZuQ">
        <div class="Three_title_3eSia1">
          <p class="Three_font1_13U80h">如何进行一次实景建模？</p>
          <p class="Three_font2_3Fu7iw">通过专业的三维激光扫描设备采集实地三维信息，对获取的实景点云数据进行处理、转化，然后通过Potree视图器构建场景并进行展示</p>
        </div>
        <div class="Three_wrapper_1ZqD8O">
          <div class="Three_scroll_2-BL6y"  v-for="(item,index) in steps" :key="index">
            <div class="Three_block_1IUcxj">
              <img :src="item.img_src" />
              <p class="Three_t_3rzYMv">{{item.name}}</p>
              <p class="Three_d_2qMEPG">{{item.desc}}</p>
            </div>
            <div
                class="Three_arrow_2pzh_j"
                style="display: flex; align-items: center; justify-content: center;"
              >
                <img src="https://i.loli.net/2019/07/22/5d3543f7add7b49370.png" />
            </div>
          </div>
        </div>

        <!-- <div class="Four_lay_1FUEly">
          <div class="Four_title_cRdH-N">我们的服务流程是什么？</div>
          <div class="Four_tab_3nT3Bg">
            <div class="Four_nav_3Dxep0">
              <div style="position: relative; overflow: hidden; width: 100%; height: 100%;">
                <div
                  style="position: absolute; top: 0px; left: 0px; right: 0px; bottom: 0px; overflow: scroll; margin-right: -17px; margin-bottom: -17px;"
                >
                  <div class="Four_nav2_29Bl8K">
                    <a
                      class="Four_link_3307hF Four_selected_11jkmO"
                      aria-current="page"
                      href
                    >#@@！￥%#@%￥……%#@￥</a>
                    <a class="Four_link_3307hF" href>@￥%#@#￥%￥#@#￥%……%￥#@</a>
                    <a class="Four_link_3307hF" href>%$#@!@#$%$#@!@#$#@!@#$</a>
                  </div>
                </div>
                <div
                  style="position: absolute; height: 6px; right: 2px; bottom: 2px; left: 2px; border-radius: 3px;"
                >
                  <div
                    style="position: relative; display: block; height: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); width: 0px;"
                  ></div>
                </div>
                <div
                  style="position: absolute; width: 6px; right: 2px; bottom: 2px; top: 2px; border-radius: 3px;"
                >
                  <div
                    style="position: relative; display: block; width: 100%; cursor: pointer; border-radius: inherit; background-color: rgba(0, 0, 0, 0.2); height: 0px;"
                  ></div>
                </div>
              </div>
            </div>
            <div class="Four_ban_hp3WEo">
              <img src="https://i.loli.net/2019/07/22/5d3580965e3e734678.jpg" />
            </div>
            <div class="Four_tabLay_crmAzx">
              <div class="Four_block_3dJtXE" v-for="(item,index) in characteristics" :key="index">
                <div class="Four_stepImg_3VNefV">
                  <img :src="item.img_src" />
                </div>
                <div class="Four_btitle_3qvDVW">{{item.title}}</div>
                <div class="Four_bdesc_1LPrDt">
                  {{item.desc}}
                   <br />010-84762786 
                </div>
              </div>
            </div>
          </div>
        </div> -->

        <div class="Five_lay_2n4VYR">
          <div class="Five_title_3ORC7_">我们的产品特色有哪些？</div>
          <div class="Five_pc_1vnZXJ">
            <img
              src="https://i.loli.net/2019/07/22/5d3580c57231264358.png"
              class="Five_pcimg_49iqV4"
            />
            <div
              class="Five_cell_1pRw6Y"
              style="width: 343px; text-align: right; margin-top: -40px; margin-left: -500px;"
            >
              <div class="Five_name_dP4PTh">实景还原</div>
              <div class="Five_desc_3VgJ0d">采用激光扫描真实场景实现实景复制，实景信息中所包含的空间位置及其对应的色彩信息均能快速精准获取</div>
            </div>
            <div
              class="Five_cell_1pRw6Y"
              style="width: 353px; text-align: center; margin-top: -220px; margin-left: -172px;"
            >
              <div class="Five_name_dP4PTh">无缝浏览</div>
              <div class="Five_desc_3VgJ0d">解决全景图画面跳转问题，支持用户无缝实景浏览</div>
            </div>
            <div
              class="Five_cell_1pRw6Y"
              style="width: 332px; text-align: left; margin-top: -40px; margin-left: 160px;"
            >
              <div class="Five_name_dP4PTh">在线体验</div>
              <div class="Five_desc_3VgJ0d">基于浏览器端，用户无需下载第三方插件，可以直接通过网页进行三维点云浏览</div>
            </div>
            <div
              class="Five_cell_1pRw6Y"
              style="width: 332px; text-align: left; margin-top: 140px; margin-left: 75px;"
            >
              <div class="Five_name_dP4PTh">VR浏览</div>
              <div class="Five_desc_3VgJ0d">支持VR设备浏览，头戴VR设备，通过手柄控制，在虚拟实景中漫步</div>
            </div>
            <div
              class="Five_cell_1pRw6Y"
              style="width: 353px; text-align: right; margin-top: 140px; margin-left: -423px;"
            >
              <div class="Five_name_dP4PTh">交互体验</div>
              <div class="Five_desc_3VgJ0d">与场景互动，浏览过程提供简单的留言交互体验，使用户使用时产生参与感和代入感</div>
            </div>
          </div>
        </div>

        <div class="Six_lay_1boVDi">
          <div class="Six_title_3NEQBD">我们做过哪些案例？</div>
          <div class="Six_lay2_YO7VAb">
            <div class="Six_list_3RWbL2" v-for="(item,index) in cases" :key="index">
              <div class="Six_item_qwok9N">
                <img
                  :src="item.img_src"
                  class="Six_img_svAk3f"
                />
                <a href="item.src" target="_blank" class="Six_play_2v9bFK"></a>
                <p class="Six_t1_1lIxT8">
                  <a href="item.src">{{item.title}}</a>
                </p>
                <p class="Six_t2_3ngxfL">
                  <a href="item.src">{{item.desc}}</a>
                </p>
              </div>
            </div>
          </div>

          <div
            class="Seven_lay_17_sYa"
            style="display: flex; align-items: center; justify-content: center;"
          >
            <div class="Seven_img_3Hpq_c">
              <img src="https://i.loli.net/2019/07/22/5d3580f9c1a4d13600.jpg" />
            </div>
            <div>
              <p class="Seven_font1_1AWrTj">联系我们</p>
              <p class="Seven_font2_2bk7XK">你有任何疑问，或想了解定制服务的详情及价格...</p>
              <p class="Seven_font1_1AWrTj">
                +
                <a href="tel://010-84762786">1234567890</a>
              </p>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      features:[
        {
          img_src:"https://i.loli.net/2019/07/22/5d3534717e08536132.png",
          title:"在线实景浏览",
          desc:"无需下载相关插件，在线远程浏览由点云数据构建起来的高度还原的实景",
          scene_src:"https://i.loli.net/2019/07/22/5d353426f307248577.png",
          scene_text:"适用场景：想要浏览点云三维场景，但是又不想下载额外的插件"

        },
        {
          img_src:"https://i.loli.net/2019/07/22/5d3534a3cf96c88992.png",
          title:"VR身临其境",
          desc:"提供VR浏览模式，享受进一步的身临其境之感",
          scene_src:"https://i.loli.net/2019/07/22/5d353426f307248577.png",
          scene_text:"适用场景：有去某地旅游的需求，提前体验场景；想去旅游但没有时间没有条件"

        },
        {
          img_src:"https://i.loli.net/2019/07/22/5d3534bd92ce191724.png",
          title:"个性定制服务",
          desc:"替你定格下幸福的瞬间，为你留下立体的独家回忆",
          scene_src:"https://i.loli.net/2019/07/22/5d353426f307248577.png",
          scene_text:"适用场景：想要用别样的方式记录重要时刻；旅游景区开发“虚拟场景”；企业商业宣传"

        }
      ],
      steps:[
        {
          img_src:"https://i.loli.net/2019/07/22/5d35445c1310e71717.png",
          name:"专业三维激光扫描设备",
          desc:"进行实地三维信息的采集"
        },
        {
          img_src:"https://i.loli.net/2019/07/22/5d35448866cc580293.png",
          name:"点云数据处理软件",
          desc:"对获取的实景点云数据进行处理"
        },
        {
          img_src:"https://i.loli.net/2019/07/22/5d3544a0dbc3b79904.png",
          name:"大型点云视图器Potree",
          desc:"构建场景并进行展示"
        },
        {
          img_src:"https://i.loli.net/2019/07/22/5d3544bcb328437300.png",
          name:"网站平台",
          desc:"发布内容供用户访问浏览"
        },
        {
          img_src:"https://i.loli.net/2019/07/22/5d3544d12bd6188905.png",
          name:"用户终端观看",
          desc:"支持PC/Android/VR一体机查看"
        }
      ],
      characteristics:[
        {
          img_src:"https://i.loli.net/2019/07/22/5d357fe85082814734.png",
          title:"$#@#$#@!@#$#@#$#@!",
          desc:"@#$#@!@#$#@#$#@#$#@#$@#"
        },
        {
          img_src:"https://i.loli.net/2019/07/22/5d357ff615d5511129.png",
          title:"$#@!@#$#@!@#$#@!",
          desc:"%$#@!@#$%^%$#@!@#$%$#@!@#$"
        },
        {
          img_src:"https://i.loli.net/2019/07/22/5d357ffe07f3b96059.png",
          title:"$#@!@#$#@#$#@!#$#@!@#$",
          desc:"!@#$%$#@!@#$%^%$#@!@#$%$#@!@#$#@!@#"
        },
        {
          img_src:"https://i.loli.net/2019/07/22/5d35800a6600730528.png",
          title:"#@#$@$#$#%",
          desc:"$@#@$@$%%^#@%#!@#@@@!%#$"
        },
        {
          img_src:"https://i.loli.net/2019/07/22/5d35800a79bc065516.png",
          title:"#@$#$@#@#%@#$",
          desc:"$#@$#@%$%#$^%#W$@$%^#$^%#$^#@^$@#%@^#$@"
        },
        {
          img_src:"https://i.loli.net/2019/07/22/5d358013e943718400.png",
          title:"#$@#$@#@$#@$#@#",
          desc:"#@!!#$@#@#@#$#$#%#@%#@#@@#@$@$#@@3"
        }
      ],
      cases:[
        {
          src:" ",
          img_src:"http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
          title:"武汉理工大学南湖图书馆",
          desc:"校园.宣传展示"

        },
        {
          src:" ",
          img_src:"http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
          title:"武汉理工大学南湖图书馆",
          desc:"校园.宣传展示"

        },
        {
          src:" ",
          img_src:"http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
          title:"武汉理工大学南湖图书馆",
          desc:"校园.宣传展示"

        },
        {
          src:" ",
          img_src:"http://101.132.40.201:8080/Myhouse1/picture/%E5%9B%BE%E4%B9%A6%E9%A6%86%E4%BE%A7%E9%9D%A2.jpg",
          title:"武汉理工大学南湖图书馆",
          desc:"校园.宣传展示"

        }
      ]

    };
  }
};
</script>
<style scoped>
.one_lay {
  height: 600px;
  background-image: url(https://i.loli.net/2019/07/22/5d35249197f7a42308.jpg);
  background-color: #333;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: auto 600px;
  flex-flow: column nowrap;
  position: relative;
  color: #fff;
}
.One_font1 {
  font-size: 60px;
  padding-bottom: 10px;
}
.One—font2 {
  font-size: 20px;
  padding-bottom: 30px;
}
.Two_t1 {
  text-align: center;
}
.Two_font1 {
  font-size: 50px;
  font-weight: 600;
  padding-bottom: 10px;
  padding-top: 60px;
}
.Two_font2 {
  font-size: 16px;
  padding-bottom: 10px;
  color: #5f5f5f;
}
p {
  margin: 0;
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.Two_img_1 {
  width: 154px;
}
img {
  border: 0;
}
.Two_desc {
  line-height: 180%;
}
.Two_scenes {
  background-color: #f8f8f8;
  padding: 20px;
  margin-top: 20px;
  color: #5f5f5f;
  line-height: 24px;
  position: relative;
  width: 100%;
}
.Two_title {
  font-size: 18px;
  font-weight: 600;
  color: #000;
  padding-top: 30px;
  padding-bottom: 10px;
}
.Two_block_1 {
  color: #5f5f5f;
  text-align: center;
  margin: 0 65px;
  width: 340px;
}
.Two_lay {
  padding-top: 60px;
  padding-bottom: 100px;
  position: relative;
}
.Three_font1_13U80h {
  font-size: 50px;
  font-weight: 600;
  padding-bottom: 20px;
}
.Three_font2_3Fu7iw {
  font-size: 16px;
  padding-bottom: 60px;
  color: #5f5f5f;
}
.Three_scroll_2-BL6y {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  width: 100%;
  overflow-x: auto;
  overflow-y: hidden;
  -webkit-overflow-scrolling: touch;
}
.Three_block_1IUcxj > img {
  width: 96px;
  height: 96px;
}
.Three_block_1IUcxj {
  min-width: 212px;
  text-align: center;
}
.Three_t_3rzYMv {
  padding-top: 30px;
  font-size: 18px;
  font-weight: 600;
}
.Three_d_2qMEPG {
  color: #5f5f5f;
  padding-top: 10px;
}
.Three_arrow_2pzh_j > img {
  width: 11px;
}
.Three_arrow_2pzh_j {
    
    height: 96px;
}
.Three_title_3eSia1 {
  text-align: center;
}
.Four_title_cRdH-N {
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  padding-bottom: 60px;
  padding-top: 100px;
}
.Four_ban_hp3WEo,
.Four_ban_hp3WEo > img {
  width: 1180px;
  margin: 0 auto;
}
.Four_selected_11jkmO {
  font-weight: 700;
  color: #333;
  border-color: #333;
}
.Four_link_3307hF {
  font-size: 16px;
  font-weight: 600;
  color: #7a7a7a;
  padding-top: 20px;
  padding-bottom: 8px;
  border-bottom: 2px solid #fff;
  min-width: 145px;
}
.Four_tabLay_crmAzx {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
}
.Four_bdesc_1LPrDt {
  color: #5f5f5f;
  padding-top: 10px;
}
.Four_stepImg_3VNefV,
.Four_stepImg_3VNefV > img {
  height: 130px;
}
.Four_btitle_3qvDVW {
  font-size: 18px;
  font-weight: 600;
}
.Four_block_3dJtXE {
  margin: 0 auto;
  text-align: center;
  padding-top: 20px;
  margin-right: 80px;
  width: 340px;
  height: 252px;
  line-height: 180%;
  margin-top: 60px;
}
.Four_nav_3Dxep0 {
  left: 200px;
  top: 382px;
  width: 780px;
  height: 83px;
  background-color: #fff;
  background-image: url(data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAoHBwkHBgoJCAkLCwoM…AAAAAAAKD/2gAIAQIBAT8AKr//xAAUEQEAAAAAAAAAAAAAAAAAAACg/9oACAEDAQE/ACq//9k=);
  background-position: bottom;
  background-size: 100%;
  background-repeat: no-repeat;
  text-align: center;
  margin: 0 auto;
}
.Four_nav2_29Bl8K {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  width: 100%;
  margin: 0 auto;
}
.Five_title_3ORC7_ {
  text-align: center;
  font-size: 50px;
  font-weight: 600;
  padding-bottom: 60px;
  padding-top: 100px;
}
.Five_name_dP4PTh {
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 5px;
}
style Attribute {
  width: 353px;
  text-align: center;
  margin-top: -220px;
  margin-left: -172px;
}
.Five_desc_3VgJ0d {
  color: #5f5f5f;
  line-height: 180%;
}
.Five_cell_1pRw6Y,
.Five_pcimg_49iqV4 {
  position: absolute;
  left: 50%;
  top: 50%;
}
.Five_pcimg_49iqV4 {
  width: 255px;
  margin-left: -127px;
  margin-top: -127px;
}
.Five_pc_1vnZXJ {
  margin: 0 auto;
  width: 1180px;
  height: 454px;
  position: relative;
}
.Six_title_3NEQBD {
  font-size: 50px;
  font-weight: 600;
  text-align: center;
  padding-bottom: 60px;
}
.Six_list_3RWbL2 {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap;
}
.Six_t1_1lIxT8 a,
.Six_t2_3ngxfL a {
  display: block;
  width: 100%;
  white-space: nowrap;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  overflow: hidden;
}
a {
  color: inherit;
  text-decoration: none;
}
a {
  background-color: transparent;
}
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
.Six_play_2v9bFK {
  position: absolute;
  left: 0;
  top: 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIwAAACMCAMAAACZHrEMAAACZFBMV…tw1NcEpbMukltxlHiFH20C1gT90gVKP2211E9bujXNdWT/AfiE5lPAlEv7AAAAAElFTkSuQmCC);
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: 40px 40px;
}
.Six_lay_1boVDi {
  padding-top: 100px;
  padding-bottom: 100px;
  margin: 0 auto;
}
.Six_img_svAk3f,
.Six_play_2v9bFK {
  width: 280px;
  height: 160px;
  display: block;
}
.Six_item_qwok9N {
  width: 280px;
  position: relative;
  text-align: center;
  margin-right: 20px;
  margin-bottom: 20px;
  margin: 0 auto;
}
.Six_t1_1lIxT8 {
  font-weight: 600;
  padding-top: 20px;
}
.Seven_lay_17_sYa {
  padding-top: 100px;
    background-color: #f8f8f8;
}
.Seven_img_3Hpq_c>img {
    width: 139px;
}
.Seven_font1_1AWrTj {
    font-size: 50px;
    font-weight: 600;
}
.Seven_font2_2bk7XK {
    font-size: 40px;
    color: #5f5f5f;
}

.Seven_img_3Hpq_c {
    padding-bottom: 65px;
    padding-right: 146px;
}

</style>
