import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/tentang-belajar-koding',
        name: 'TentangBelajarKoding',
        component: () => import(/* webpackChunkName: "tentang-belajar-koding" */ '../views/TentangBelajarKoding.vue')
    },
    {
      path: '/bahasa-pemrograman',
      name: 'BahasaPemrograman',
      component: () => import(/* webpackChunkName: "bahasa-pemrograman" */ '../views/BahasaPemrograman.vue')
    }
    ,
    {
      path: '/layanan',
      name: 'Layanan',
      component: () => import(/* webpackChunkName: "layanan" */ '../views/Layanan.vue')
    },
    
    {
      path: '/sosmed',
      name: 'Sosmed',
      component: () => import(/* webpackChunkName: "sosmed" */ '../views/SosialMedia.vue')
    },
    {
        path: '/tim-belajar-koding',
        name: 'TimBelajarKoding',
        component: () => import(/* webpackChunkName: "tim-belajar-koding" */ '../views/TimBelajarKoding.vue')
      },
    
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
