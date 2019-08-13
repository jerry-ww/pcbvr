import Vue from 'vue'
import VueResource from 'vue-resource'
import Router from 'vue-router'

import homePageComponent from '../view/homePageComponent.vue'
import showcaseComponent from '../view/showcaseComponent.vue'
import communityComponent from '../view/communityComponent.vue'
import newsComponent from '../view/newsComponent.vue'
import aboutComponent from '../view/aboutComponent.vue'

import userPage from '../view/user/userPage.vue'
import changeData from '../view/user/sidebar/changeData.vue'
import changePwd from '../view/user/sidebar/changePwd.vue'
import userZone from '../view/user/sidebar/userZone.vue'

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
    },
    {
      path: '/userPage',
      name: 'userPage',
      component: userPage,
      children: [
        {
          path: '/',
          name: 'changeData',
          component: changeData,
        },
        {
          path: '/changeData',
          name: 'changeData',
          component: changeData,
        },
        {
          path: '/changePwd',
          name: 'changePwd',
          component: changePwd
        },
        {
          path: '/userZone',
          name: 'userZone',
          component: userZone
        }
      ]
    },
  ]
})

