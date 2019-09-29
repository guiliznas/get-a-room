import Vue from 'vue'
import Router from 'vue-router'
import ShowRoom from './views/ShowRoom.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: ShowRoom
    },
  ]
})
