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

store.dispatch('baseurl/baseStorageUrl', 'http://localhost:8000/storage/')

axios.interceptors.request.use((config) => {
    config.baseURL = 'http://localhost:8000'
    config.withCredentials = true
    return config
})
store.dispatch('auth/me').then(() => {
    app.use(store).use(router).mount('#app')
})