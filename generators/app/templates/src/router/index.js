import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import(/* webpackChunkName: "home" */ '../pages/home')
const PageA = () => import(/* webpackChunkName: "pageA" */ '../pages/pageA')
const PageB = () => import(/* webpackChunkName: "pageB" */ '../pages/pageB')

export default new VueRouter({
<% if (useRouterHistory) { -%>
  mode: 'history',
<% } else { -%>
  mode: 'hash',
<% } -%>
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/pageA',
      component: PageA
    },
    {
      path: '/pageB',
      component: PageB
    },
  ]
})