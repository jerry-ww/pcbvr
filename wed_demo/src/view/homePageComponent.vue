<template>
  <div class="home">
    <div class="block">
      <el-carousel height="450px" ref="carousel" @click.native="linkTo">
        <el-carousel-item v-for="item in slides" :key="item.img_src">
          <img class="carousel_img" :src="item.img_src">
          <!-- <img src="../../static/library.jpg"> -->
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="container">
      <div class="container-main">
        <div class="main-list">
          <div class="rcmd">
            <div class="rcmd-header">
              <a href class="tit">热门推荐</a>
              <div class="tabs">
                <a href class="tabs_tit">校园</a>
                <span class="line">|</span>
                <a href class="tabs_tit">景区</a>
                <span class="line">|</span>
                <a href class="tabs_tit">车站</a>
                <span class="line">|</span>
                <a href class="tabs_tit">商场</a>
              </div>
              <span class="more">
                <a href class="tabs_tit">更多</a>
              </span>
            </div>
            <ul class="m-cvrlst f-cd">
              <li v-for="(item,index) in commands" :key="index">
                <div class="u-cover u-cover-1">
                  <a :href="item.src" class="msk">
                    <img :src="item.img_src" />
                  </a>
                </div>
                <p class="dec">
                  <a class="tit" :href="item.src">{{item.title}}</a>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ElementUI from "element-ui";
export default {
  data() {
    return {
      invTime: 3000,
      Library: require("../../static/library.jpg"),
      Build_one: require("../../static/build_one.jpg"),
      House: require("../../static/house.jpg"),
      Siyuan: require("../../static/siyuan.jpg"),
      slides: [
        {
          img_src:require("../../static/library.jpg"),
          title: "南湖图书馆",
          url: "http://101.132.40.201:8080/Myhouse1/pageName.html"
          // bgColor: '#6797a5'
        },
        {
          img_src:require("../../static/build_one.jpg"),
          title: "新一教学楼"
          // bgColor: '#6797a5'
        },
        {
          img_src: require("../../static/house.jpg"),
          title: "飞马广场"
          // bgColor: '#6797a5'
        },
        {
          img_src: require("../../static/siyuan.jpg"),
          title: "思源广场"
          // bgColor: '#6797a5'
        }
      ],

      commands: [
        {
          src: "http://49.234.154.17/potree-org/examples/Outer.html",
          img_src: require("../../static/library.jpg"),
          title: "图书馆外围"
        },
        {
          src: "http://49.234.154.17/potree-org/examples/1f.html",
          img_src: require("../../static/library.jpg"),
          title: "图书馆一楼"
        },
        {
          src: "http://49.234.154.17/potree-org/examples/2f.html",
          img_src: require("../../static/library.jpg"),
          title: "图书馆二楼"
        },
        {
          src: "http://49.234.154.17/potree-org/examples/3f.html",
          img_src:require("../../static/library.jpg"),
          title: "图书馆三楼"
        },
        {
          src: "http://49.234.154.17/potree-org/examples/4f.html",
          img_src: require("../../static/library.jpg"),
          title: "图书馆四楼"
        },
        {
          src: "http://49.234.154.17/potree-org/examples/5f.html",
          img_src: require("../../static/library.jpg"),
          title: "图书馆五楼"
        }
      ],
      latests: [
        {
          src: "http://101.132.40.201:8080/Myhouse1/pageName.html",
          img_src: require("../../static/build_one.jpg"),
          title: "新一教学楼"
        }
      ]
    };
  },

  components: {

  },

  computed: {},

  methods: {
    linkTo(){
      let activeIndex = this.$refs.carousel.activeIndex
      this.$router.push(this.slides[activeIndex].url)
    }
  },
  created: function() {},
  mounted: function() {}
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
   background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
   background-color: #d3dce6;
}

.carousel_img{
  margin: 0 auto;
  width:1100px;
	height:100%;
  display:flex;
	align-items:center; 
	justify-content:center;
}

a {
  cursor: pointer;
  color: rgb(51, 51, 51);
  text-decoration: none;
}
.home {
  width: 100%;
  height: auto;
}
.container {
  width: 1100px;
  min-height: 1425px;
  background-color: rgb(255, 255, 255);
  margin: 0px auto;
  border-image: initial;
  border-width: 0px 1px;
}
.container-main {
  float: left;
  width: 100%;
  margin-right: -250px;
}
.main-list {
  padding: 20px 0px 40px;
}
.rcmd-header {
  height: 33px;
  padding: 0px 40px 0px 35px;
  background-position: -225px -156px;
}
.tit {
  float: left;
  font-size: 20px;
  font-weight: normal;
  line-height: 28px;
}
.tabs {
  float: left;
  font-size: 12px;
  margin: 7px 0px 0px 20px;
}
.tabs a:hover {
  text-decoration: underline;
}
.tabs_tit {
  color: #666;
}
.line {
  margin: 0 8px 0 10px;
  color: #c2c2c2;
}
.more {
  float: right;
  margin-top: 7px;
  font-size:13px;
}
.more a:hover {
  text-decoration: underline;
}
.m-cvrlst {
  margin: 20px 0px 0px 0px;
  display: block;
  overflow: hidden; /*添加高度，解决float浮动引起的高度坍陷*/
  zoom: 1;
}
li {
  list-style: none;
  display: block;
}
.m-cvrlst li {
  display: inline-block;
  width: 230px;
  height: 200px;
  line-height: 1.4;
  overflow: hidden;
  padding: 0px 0px 30px 50px;
  padding-left: 34px;
}
.u-cover-1 {
  width: 230px;
  height: 180px;
}
.u-cover {
  position: relative;
  display: block;
}
.u-cover img {
  display: block;
  width: 100%;
  height: 100%;
}
.msk {
  background-position: 0px 0px;
}
.msk img{
  transition: all 0.6s;
}
.msk:hover img{
    transform: scale(1.1);
}
.bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 27px;
  background-position: 0 -537px;
  color: #ccc;
}
.icon-play {
  position: absolute;
  bottom: 0px;
  left: 0px;
  width: 100%;
  height: 27px;
  color: rgb(204, 204, 204);
  background-position: 0px -537px;
  float: right;
}
.icon-headset {
  float: left;
  width: 14px;
  height: 11px;
  background-position: 0px -24px;
  margin: 9px 5px 9px 10px;
}
.nb {
  float: left;
  margin: 7px 0px 0px;
}
.dec {
  font-size: 14px;
  margin: 8px 0px 3px;
  overflow: hidden; /*添加高度，解决float浮动引起的高度坍陷*/
  zoom: 1;
}
.dec a:hover {
  text-decoration: underline;
}
.m-cvrlst li .tit {
  display: inline-block;
  max-width: 100%;
  vertical-align: middle;
  color: #000;
  font-size: 14px;
  line-height: 19px;
}
</style>