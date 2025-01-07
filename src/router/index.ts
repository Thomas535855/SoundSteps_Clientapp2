import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import CreateInstrument from '@/views/Create.vue'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  {
    path: '/create',
    name: 'CreateInstrument',
    component: CreateInstrument,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
