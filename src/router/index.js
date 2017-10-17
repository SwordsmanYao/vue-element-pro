import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'
import Form from '@/views/demo/form'
import List from '@/views/demo/list'

Vue.use(Router)

export default new Router({
  // 设置被点击路由的class，如果不设置也可以用提供的 router-link-exact-active
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '',
          name: 'Form',
          component: Form
        },
        {
          path: 'list',
          name: 'List',
          component: List
        }
      ]
    }
  ]
})
