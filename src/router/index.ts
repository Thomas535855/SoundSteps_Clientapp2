import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import CreateInstrument from '@/views/Create.vue'
import HomePage from '@/views/Home.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
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
