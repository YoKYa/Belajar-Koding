<template>
    <Auth>
        <div class="shadow-md">
            <div class="flex items-center justify-center w-full mt-5 bg-blue-400 h-14 rounded-t-md">
                <div class="text-xl font-semibold text-white">Login</div>
            </div>
            <div class="flex flex-col justify-center w-full h-auto p-10 mb-5 bg-white rounded-b-md">
                <form @submit.prevent="login">
                    <div class="flex items-center justify-center w-full mb-1">
                    <div class="w-3/5">
                        <input type="text" v-model="credentials.email" name="email" id="email" placeholder="Username/Email" class="w-full h-10 p-5 mt-2 mb-1 border rounded-md focus:outline-none focus:ring" required>
                        <div class="flex w-3/5 mb-1 text-xs text-red-500" v-if="errors['email']">*{{ errors['email'][0] }}</div>
                    </div>
                    </div>
                    <div class="flex items-center justify-center w-full 1">
                        <div class="w-3/5">
                            <input type="password" v-model="credentials.password" name="password" id="password" placeholder="Password" class="w-full h-10 p-5 mt-2 mb-1 border rounded-md focus:outline-none focus:ring" required>
                            <div class="flex w-3/5 mb-1 text-xs text-red-500" v-if="errors['password']">*{{ errors['password'][0] }}</div>
                        </div>
                    </div>
                    <div class="flex items-center justify-center w-full 1">
                        <button class="w-3/5 p-2 m-3 font-semibold text-white bg-blue-400 rounded-md focus:ring focus:ring-blue-300 hover:bg-blue-500">Login</button>    
                    </div>
                    <div class="flex items-center justify-center w-full 1">
                        <div class="flex justify-between w-3/5">
                            <router-link to="lupakatasandi" class="text-blue-400 hover:text-blue-500">Lupa Kata Sandi</router-link>
                            <router-link to="register" class="text-blue-400 hover:text-blue-500">Daftar Sekarang</router-link>
                        </div>
                    </div>
                </form>       
            </div>
        </div>
    </Auth>
    <Modal v-if="loading.load">
        <div v-if="loading.text" class="flex justify-center p-5 font-semibold text-blue-400">
                    <div class="flex flex-col items-center text-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <div>Berhasil Masuk</div>
                    </div>
                </div>
                <div v-else>
                    <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="80px" height="80px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                        <circle cx="50" cy="50" r="0" fill="none" stroke="#88e1f2" stroke-width="11">
                            <animate attributeName="r" repeatCount="indefinite" dur="1.7543859649122806s" values="0;24" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/>
                            <animate attributeName="opacity" repeatCount="indefinite" dur="1.7543859649122806s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/>
                            </circle><circle cx="50" cy="50" r="0" fill="none" stroke="#88e1f2" stroke-width="11">
                            <animate attributeName="r" repeatCount="indefinite" dur="1.7543859649122806s" values="0;24" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.8771929824561403s"/>
                            <animate attributeName="opacity" repeatCount="indefinite" dur="1.7543859649122806s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.8771929824561403s"/>
                        </circle>
                    </svg>
                </div>
    </Modal>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
import router from '@/router'
import Auth from "@/components/auth/Auth"
import store from '@/store'
import Modal from '@/components/Modal'
export default {
    title : "Login - Belajar Koding",
    components : {Auth, Modal},
    setup() {
        const errors = ref([])
        const credentials = reactive({
            'email' : '',
            'password' : '',
        })
        const loading = reactive({
            'load' : false,
            'text' : false
        })
        const login = async () => {
            try {
                loading.load = true
                loading.text = false
                await store.dispatch('auth/login', credentials)
                await store.dispatch('auth/me')
                loading.text = true
                setTimeout(() => {
                    router.replace('/')
                }, 1000);
            } catch (error) {
                errors.value = error.response.data.errors
                credentials.email = ''
                credentials.password = ''
                loading.load = false
            }
        }

        return {
            login, credentials, errors, loading
        }
    }
}
</script>