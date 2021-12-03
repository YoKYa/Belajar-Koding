<template>
    <div class="min-h-screen bg-black bg-opacity-5">
        <div class="flex justify-between w-full h-16 bg-blue-400">
            <div class="flex items-center">
                <router-link to="/app/dashboard"><img src="@/assets/logo.png" alt="Logo Belajar Koding" width="60" class="m-2 ml-5"/></router-link>
                <router-link to="/app/dashboard" ><div class="text-xl font-semibold text-white">Belajar Koding</div></router-link>
            </div>
            <div class="flex items-center mr-5 text-white" v-if="authenticated">
                <router-link to="/" class="m-3 text-lg font-semibold" >{{ user.name }}</router-link>
                <button @click="open = true" class="m-3 text-lg font-semibold focus:outline-none" >Keluar</button>
            </div>
            <div class="flex items-center mr-5 text-white" v-else>
                <router-link to="/login" class="m-3 text-lg font-semibold">Login Akun</router-link>
                <router-link to="/register" class="m-3 text-lg font-semibold">Daftar</router-link>
            </div>
            
        </div>
        <div class="flex justify-center">
            <div class="flex justify-center w-full">
                <div class="w-2/6 p-5 mx-10 my-5 bg-white rounded-lg shadow-md h-72">
                    <div class="m-4 text-lg text-gray-400">
                        Tentang Kami
                    </div>
                    <hr class="h-1 m-4 bg-gray-400 rounded-full">
                    <div class="flex flex-col m-4">
                        <router-link class="px-2 py-2 hover:bg-gray-200" to="/tentang/sk">Syarat dan Ketentuan</router-link>
                        <router-link class="px-2 py-2 hover:bg-gray-200" to="/tentang/kebijakanprivasi">Kebijakan Privasi</router-link>
                        <router-link class="px-2 py-2 hover:bg-gray-200" to="/tentang/faq">FAQ</router-link>
                        <router-link class="px-2 py-2 hover:bg-gray-200" to="/tentang/layanan">Layanan Pengguna</router-link>
                    </div>
                </div>
                <div class="w-4/6 h-auto p-5 mx-10 my-5 bg-white rounded-lg shadow-md">         <slot></slot></div>
            </div>
            
        </div>

    </div>
    <Modal v-show="open">
        <div>
            <div class="px-4 pt-5 pb-4 bg-white rounded-md sm:p-6 sm:pb-4">
                <div class="sm:flex sm:items-start">
                    <div class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                        <!-- Heroicon name: outline/exclamation -->
                        <svg class="w-6 h-6 text-red-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                    <div class="mt-3 text-center rounded-md sm:mt-0 sm:ml-4 sm:text-left">
                        <h3 class="text-lg font-medium leading-6 text-gray-900" id="modal-title">
                            Keluar dari Akun
                        </h3>
                        <div class="mt-2">
                        <p class="text-sm text-gray-500">
                            Apakah kamu yakin mau keluar dari akun ini?
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="px-4 py-3 rounded-b-md bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                <button type="button" class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm" @click="logout">
                    Keluar
                </button>
                <button type="button" class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm" @click="open = false">
                    Batal
                </button>
            </div>
        </div>
    </Modal>
    <Modal v-if="loading.load">
        <div v-if="loading.text" class="flex justify-center p-5 font-semibold text-blue-400">
                    <div class="flex flex-col items-center text-blue-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
                            <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                        </svg>
                        <div>Berhasil Keluar</div>
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
import store from '@/store'
import Modal from '@/components/Modal'
import { computed } from '@vue/runtime-core'
import { ref, reactive } from '@vue/reactivity'
export default {
    components: { Modal },
    setup(){
        const open = ref(false)
        const loading = reactive({
            'load' : false,
            'text' : false
        })
        const authenticated = computed(() => store.getters['auth/authenticated'])
        const user = computed(() => store.getters['auth/user'])
        const logout = async () => {
            open.value = false
            loading.load = true
            loading.text = false
            await store.dispatch("auth/logout")
            loading.text = true
            setTimeout(() => {
                loading.load = false
            }, 1000);  
        }
        return { authenticated, user, logout, open, loading }
    }
}
</script>
<style>
    .router-link-active{
        border-left : 2px solid rgb(96, 178, 255) ;
        background-color: rgb(228, 244, 255);
    }
</style>