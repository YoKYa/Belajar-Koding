import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import './index.css'
import titleMixin from '@/mixins/titleMixin'

const app = createApp(App)
app.mixin(titleMixin)


axios.interceptors.request.use((config) => {
    config.baseURL = 'http://localhost:8080'
    config.withCredentials = true
    return config
})

app.use(store).use(router).mount('#app')
