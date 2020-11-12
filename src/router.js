import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Denglu from './views/Denglu.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    
    {
      path: '/',
      name: 'Denglu',
      component: () => import(/* webpackChunkName: "about" */ './views/Denglu.vue')
    },{
      path: '/Menu',
      component: () => import(/* webpackChunkName: "about" */ './components/Menu.vue'),
      children:[{
        path: '/Menu/xitongshouye',
      component: () => import(/* webpackChunkName: "about" */ './components/xitongshouye.vue')
      },
      {
        path: '/Menu/gerenziliao',
      component: () => import(/* webpackChunkName: "about" */ './components/gerenziliao.vue')
      },
      {
        path: '/Menu/message',
      component: () => import(/* webpackChunkName: "about" */ './components/message.vue')
      },
      {
        path: '/Menu/rizhi',
      component: () => import(/* webpackChunkName: "about" */ './components/rizhi.vue')
      },
      {
        path: '/Menu/zonglantongji',
      component: () => import(/* webpackChunkName: "about" */ './components/zonglantongji.vue')
      }

      ]}
  ]
})
