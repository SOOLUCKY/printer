import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import GoodsDetail from '@/components/GoodsDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/goodsDetail',
      name: 'GoodsDetail',
      component: GoodsDetail
    }
  ]
})
