import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import BelajarKoding from '../views/TentangBelajarKoding.vue'
import BahasaPemrograman from '../views/BahasaPemrograman.vue'
import Layanan from '../views/Layanan.vue'
import Sosmed from '../views/SosialMedia.vue'
import TimBelajarKoding from '../views/TimBelajarKoding.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import LupaKataSandi from '../views/auth/ForgotPassword.vue'
import SK from '../views/tentang/SK.vue'
import KebijakanPrivasi from '../views/tentang/KebijakanPrivasi.vue'
import FAQ from '../views/tentang/FAQ.vue'
import TentangLayanan from '../views/tentang/LayananPengguna.vue'
import Dashboard from '../views/app/Dashboard.vue'
import Profile from '../views/app/profile/Profile.vue'
import Picture from '../views/app/profile/Picture.vue'
import Admin from '../views/app/admin/Dashboard.vue'
import Roles from '../views/app/admin/RolePermission/Roles.vue'
import Permission from '../views/app/admin/RolePermission/Permission.vue'
import Assign from '../views/app/admin/RolePermission/Assign.vue'
import AssignUser from '../views/app/admin/RolePermission/AssignUser.vue'
import CreateUser from '../views/app/admin/User/Create.vue'
import ShowUser from '../views/app/admin/User/Show.vue'
import EditUser from '../views/app/admin/User/Edit.vue'
import Quotes from '../views/app/admin/Quotes/Quotes.vue'
import ProgrammingAdmin from '../views/app/admin/Programming/Programming.vue'
import store from '@/store'


const routes = [{
        path: '/',
        name: 'Home',
        component: Home,
    }, {
        path: '/tentang-belajar-koding',
        name: 'TentangBelajarKoding',
        component: BelajarKoding
    }, {
        path: '/bahasa-pemrograman',
        name: 'BahasaPemrograman',
        component: BahasaPemrograman
    }, {
        path: '/layanan',
        name: 'Layanan',
        component: Layanan
    }, {
        path: '/sosmed',
        name: 'Sosmed',
        component: Sosmed
    }, {
        path: '/tim-belajar-koding',
        name: 'TimBelajarKoding',
        component: TimBelajarKoding
    }, {
        path: '/login',
        name: 'Login',
        component: Login,
        meta: { guest: true }
    }, {
        path: '/register',
        name: 'Register',
        component: Register,
        meta: { guest: true }
    }, {
        path: '/lupakatasandi',
        name: 'LupaKataSandi',
        component: LupaKataSandi,
        meta: { guest: true }
    }, {
        path: '/tentang/sk',
        name: 'SyaratdanKetentuan',
        component: SK,
    }, {
        path: '/tentang/kebijakanprivasi',
        name: 'KebijakanPrivasi',
        component: KebijakanPrivasi,
    }, {
        path: '/tentang/faq',
        name: 'FAQ',
        component: FAQ,
    }, {
        path: '/tentang/layanan',
        name: 'LayananPengguna',
        component: TentangLayanan,
    }, {
        path: '/app/dashboard',
        name: 'Dashboard',
        component: Dashboard,
        meta: { auth: true }
    }, {
        path: '/app/profile',
        name: 'Profile',
        component: Profile,
        meta: { auth: true }
    }, {
        path: '/app/profile/picture',
        name: 'Picture',
        component: Picture,
        meta: { auth: true }
    }, {
        path: '/app/admin',
        name: 'Admin',
        component: Admin,
        meta: { auth: true }
    }, {
        path: '/app/admin/roles',
        name: 'Roles',
        component: Roles,
        meta: { auth: true }
    }, {
        path: '/app/admin/permissions',
        name: 'Permission',
        component: Permission,
        meta: { auth: true }
    }, {
        path: '/app/admin/assign',
        name: 'Assign',
        component: Assign,
        meta: { auth: true }
    }, {
        path: '/app/admin/assignuser',
        name: 'AssignUser',
        component: AssignUser,
        meta: { auth: true }
    }, {
        path: '/app/admin/users/create',
        name: 'CreateUser',
        component: CreateUser,
        meta: { auth: true }
    }, {
        path: '/app/admin/users',
        name: 'ShowUser',
        component: ShowUser,
        meta: { auth: true }
    }, {
        path: '/app/admin/users/:username',
        name: 'EditUser',
        component: EditUser,
        meta: { auth: true }
    }, {
        path: '/app/admin/quotes',
        name: 'Quotes',
        component: Quotes,
        meta: { auth: true }
    }, {
        path: '/app/admin/programming',
        name: 'ProgrammingLanguage',
        component: ProgrammingAdmin,
        meta: { auth: true }
    },
    { path: '/app/', redirect: { name: 'Dashboard' } },
    { path: '/app/:catchAll(.*)', redirect: { name: 'Dashboard' } },
    { path: "/:catchAll(.*)", redirect: { name: 'Home' } }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
router.beforeEach((to, from, next) => {
    if (to.meta.auth && !store.getters['auth/authenticated']) router.push('/login')
    if (to.meta.guest && store.getters['auth/authenticated']) router.push('/')
    if (from.path == '/') {
        localStorage.setItem('reloaded', '1');
    }
    next()
    router.onReady()
})


export default router