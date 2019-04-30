import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'
/*
import findMusicComponent from '../view/findMusicPage/findMusicComponent.vue'

import recommend from '../view/findMusicPage/navController/recommend.vue'
import rank from '../view/findMusicPage/navController/rank.vue'
import list from '../view/findMusicPage/navController/list.vue'
import radio from '../view/findMusicPage/navController/radio.vue'
import singer from '../view/findMusicPage/navController/singer.vue'
import newdisc from '../view/findMusicPage/navController/newdisc.vue'

import hyComponent from '../view/findMusicPage/navController/recommend/musicTypeController/hyMusic.vue'
import gtComponent from '../view/findMusicPage/navController/recommend/musicTypeController/gtMusic.vue'
import rhComponent from '../view/findMusicPage/navController/recommend/musicTypeController/rhMusic.vue'
import omComponent from '../view/findMusicPage/navController/recommend/musicTypeController/omMusic.vue'
*/
import homePageComponent from '../view/homePageComponent.vue'
import showcaseComponent from '../view/showcaseComponent.vue'
import communityComponent from '../view/communityComponent.vue'
import newsComponent from '../view/newsComponent.vue'
import aboutComponent from '../view/aboutComponent.vue'
Vue.use(Router)
Vue.use(VueResource)
export default new Router({
  routes: [
    {
      path: '/homePageComponent',
      name: 'homePageComponent',
      component: homePageComponent
    },
    {
      path: '/showcaseComponent',
      name: 'showcaseComponent',
      component: showcaseComponent
    },
    {
      path: '/communityComponent',
      name: 'communityComponent',
      component: communityComponent
    },
    {
      path: '/newsComponent',
      name: 'newsComponent',
      component: newsComponent
    },
    {
      path: '/aboutComponent',
      name: 'aboutComponent',
      component: aboutComponent
    }
  ]
})

