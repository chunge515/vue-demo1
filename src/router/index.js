import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import { resolve } from 'path';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/HelloWord"
    },
    {
      path: '/HelloWord',
      component: resolve => require(["../components/HelloWorld.vue"], resolve)
    },
    {
      path: "/pro47",

      component: resolve => require(["../components/pro47/index.vue"], resolve)
    },
    {
      path: "/param47",
      name: "hejie",
      component: resolve => require(["@/components/pro47/param47.vue"], resolve),
    },
    {
      path: "/father",
      component: resolve => require(["@/components/pro47/father.vue"], resolve)
    },
    {
      path: "/child",
      component: resolve => require(["@/components/pro47/child.vue"],   resolve)
    },
    {
      path: "/brother",
      component: resolve => require(["@/components/pro47/brother.vue"],   resolve)
    }
  ]
})
