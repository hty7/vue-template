import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '@/config/env'

Vue.use(Router)

const login = r => require.ensure([], () => (require('@/view/login/login')), 'login')
const main = r => require.ensure([], () => (require('@/view/main/')), 'main')
const home = r => require.ensure([], () => (require('@/view/home/')), 'home')
const user = r => require.ensure([], () => (require('@/view/user/')), 'user')
const business = r => require.ensure([], () => (require('@/view/business/')), 'business')
const setting = r => require.ensure([], () => (require('@/view/setting/')), 'setting')

let routes = [{
  path: '/',
  component: main,
  redirect: '/home',
  children: [
    {
      path: '/home',
      component: home
    },
    {
      path: '/user',
      component: user
    },
    {
      path: '/business',
      component: business
    }
  ]
}, {
  path: '/login',
  component: login
}, {
  path: '/setting',
  component: setting
}]

const router = new Router({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production'
})

export default router
