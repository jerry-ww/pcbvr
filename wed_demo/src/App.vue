<template>
  <div id="app">
    <headerComponent></headerComponent>
    <router-view></router-view>
    <footerComponent></footerComponent>
  </div>
</template>

<script>
import headerComponent from './components/headerComponent'
import footerComponent from './components/footerComponent'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    headerComponent,
    footerComponent
  },


  mounted: function() {
    // 指定初始路由
    this.$router.push('/homePageComponent');
    // this.initUser();
  }
}
</script>
<style>
body,html {
  width: 100%;
  height: 100%;
  /* overflow: hidden; */
  border: 0;
  font-size: 12px;
  color: rgb(51, 51, 51);
}
body, html, h1, h2, h3, h4, h5, h6, ul, ol, li, dl, dt, dd, header, menu, section, p, input, td, th, ins {
  padding: 0;
  margin: 0;
}


#app {
  width: 100%;
  min-width: 1120px;
  height: auto;
}
</style>
