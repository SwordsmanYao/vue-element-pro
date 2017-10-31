import Vue from 'vue'
import Router from 'vue-router'

// 异步加载组件
const Layout = r => require.ensure([], () => r(require('@/views/layout/Layout')), 'Layout')
const Form = r => require.ensure([], () => r(require('@/views/demo/form')), 'Form')
const List = r => require.ensure([], () => r(require('@/views/demo/list')), 'List')

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
