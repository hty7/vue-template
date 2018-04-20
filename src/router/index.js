import Vue from 'vue'
import Router from 'vue-router'
import {routerMode} from '@/config/env'

Vue.use(Router)

const login = r => require.ensure([], () => (require('@/view/login/login')), 'login')
const main = r => require.ensure([], () => (require('@/view/main/')), 'main')
const home = r => require.ensure([], () => (require('@/view/home/')), 'home')
const location = r => require.ensure([], () => (require('@/view/location/')), 'location')
const announcement = r => require.ensure([], () => (require('@/view/announcement/')), 'announcement')

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
      path: '/location',
      component: location
    },
    {
      path: '/announcement',
      component: announcement
    }
  ]
}, {
  path: '/login',
  component: login
}]

const router = new Router({
  routes,
  mode: routerMode,
  strict: process.env.NODE_ENV !== 'production'
})

export default router
