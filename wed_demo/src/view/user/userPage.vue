<template>
  <div class="userPage">
    <!-- <div class="">
      <ul class="">
        <li>
          <router-link to="/changeData"><a href="">基本资料</a></router-link>
        </li>
        <li>
          <router-link to="/changePwd"><a class="" aria-current="page" href="">修改密码</a></router-link>
        </li>
      </ul>
      右侧边栏，根据左侧边栏显示
      <div class="">
        <changeData></changeData>
        <changePwd></changePwd>
      </div>

    </div> -->
    <div style="margin-top:5px">
        <el-row class="container" :gutter="10">
            <el-col :xs="4" :sm="4" :md="4" :lg="4">
            <div>
                <el-menu default-active="1" class="el-menu-vertical-demo" style="min-height:900px" @select="handleSelect">
                <el-menu-item index="1"><i class="el-icon-message"></i>基本信息</el-menu-item>
                <el-menu-item index="2"><i class="el-icon-menu"></i>个人主页</el-menu-item>
                <el-menu-item index="3"><i class="el-icon-setting"></i>修改密码</el-menu-item>
                </el-menu>
            </div>
            </el-col>
            <el-col :xs="20" :sm="20" :md="20" :lg="20">
            <!-- 右边对应内容 -->
            <div style="margin-top:10px">
                <router-view></router-view>
            </div>
            </el-col>
        </el-row>
    </div>
  </div>
</template>
<script>
import changeData from "../user/sidebar/changeData";
import changePwd from "../user/sidebar/changePwd";

export default {
  data () {
    return {
    }
  },

  components: {
    changeData,
    changePwd
  },
  methods:{
      handleSelect(key, keyPath){
        switch(key){
          case '1':
            this.$router.push('/changeData');
            break;
          case '2':
            this.$router.push('/userZone')     
            break;
          case '3':
            this.$router.push('/changePwd')
            break;
        }
      },
  }
};
</script>
<style scoped>
.userPage{
  max-width:95em;
  margin:auto;
}
</style>