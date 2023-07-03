import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'

import './index.css'
import titleMixin from '@/mixins/titleMixin'
import checkPermissionMixin from '@/mixins/checkPermissionMixin'

const app = createApp(App)
app.mixin(titleMixin)
app.mixin(checkPermissionMixin)

store.dispatch('baseurl/baseStorageUrl', 'http://apibk.yokya.id/storage/')

axios.interceptors.request.use((config) => {
    config.baseURL = 'http://apibk.yokya.id/'
    config.withCredentials = true
    return config
})
store.dispatch('auth/me').then(() => {
    app.use(store).use(router).mount('#app')
})