import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home/home'
import Index from '@/components/index/index'
import IndexDetail from '@/components/index/index_detail'
import Dynamic from '@/components/dynamic/dynamic'
import User from '@/components/user/user'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/',
          component: Index
        },
        {
          path: '/dynamic',
          component: Dynamic
        },
        {
          path: '/user',
          component: User
        }
      ]
    },
    {
      path: '/indexDetail',
      name: 'indexDetail',
      component: IndexDetail
    }
  ]
})
