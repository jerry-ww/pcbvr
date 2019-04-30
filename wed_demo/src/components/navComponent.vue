<template>
  <div class="navComponent">
        <div class="nav-tab">
            <ul class="nav">
                <router-link to="/findMusicComponent">          <li v-bind:class="{ active: layout.changeColor[0] }" @click="changeBgcEvent(0)"><span><a href="">推荐</a></span></li></router-link>
                <router-link to="/findMusicComponent/rank"  >   <li v-bind:class="{ active: layout.changeColor[1] }" @click="changeBgcEvent(1)"><span><a href="">排行榜</a></span></li></router-link>
                <router-link to="/findMusicComponent/list"   >  <li v-bind:class="{ active: layout.changeColor[2] }" @click="changeBgcEvent(2)"><span><a href="">歌单</a></span></li></router-link>
                <router-link to="/findMusicComponent/radio">    <li v-bind:class="{ active: layout.changeColor[3] }" @click="changeBgcEvent(3)"><span><a href="">主播电台</a></span></li></router-link>
                <router-link to="/findMusicComponent/singer" >  <li v-bind:class="{ active: layout.changeColor[4] }" @click="changeBgcEvent(4)"><span><a href="">歌手</a></span></li></router-link>   
                <router-link to="/findMusicComponent/newdisc" > <li v-bind:class="{ active: layout.changeColor[5] }" @click="changeBgcEvent(5)"><span><a href="">新碟上架</a></span></li></router-link>   
            </ul>
        </div>
  </div>
</template>
<script>

    export default {
        name: 'navComponent',
        data () {
            return {
                layout:{
                    changeColor: [true, false, false, false, false,false],
                }
            }
        },
        methods: {
            changeBgcEvent(e) {
                let arr = [];
                for( let elem in this.layout.changeColor ) { 
                    parseInt(elem)
                    if ( e == elem ) {
                        arr.push(true);
                    }else {
                        arr.push(false)
                    }
                }
                this.layout.changeColor = arr;
            }
        }
    }
</script>
<style scoped>
a {
    text-decoration:none;
}
.navComponent{
    width: 100%;
    height: 35px;
    box-sizing: border-box;
    background-color: #C20C0C;
    border-bottom: 1px solid #a40011;
}
.nav-tab{
    width: 1100px;
    height: 34px;
    margin: 0 auto;
}
.nav{
    float: left;
    padding-left: 180px;
    font-size: 12px;
}
.nav ul{
    list-style-type: none;
    float: left;
    width: 100%;
}
.nav li{
    list-style-type: none;
    padding: 0;
    padding-right: 60px;
    text-align: center;
    float: left;
    cursor: pointer;
    line-height: 34px;
    
}
.nav li:hover{
   background:#000;
}
.nav li.active{
   background:#000;
}
.nav span{
    display: inline-block;
    width: 100%;
}
.nav a{
    margin: 8px 0;
    font-size: 0.9rem;
    font-size: 12px;
    color: #fff;
}
</style>

