import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ProductDetail from '../views/ProductDetail.vue'
import SampleList from '../views/SampleList.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'productDetail',
    component: ProductDetail,
    props: true
  },
  {
    path: '/samples',
    name: 'samples',
    component: SampleList
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
