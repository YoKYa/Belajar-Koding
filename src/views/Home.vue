<template>
    <div class="flex flex-col items-center justify-around w-full h-screen lg:flex-row">
        <LogoSide/>
        <div class="flex justify-center w-1/2 min-h-screen">
            <home-list>
                <div class="flex w-full h-full mt-4" :class="[isActive ? 'animate-fade-out' : 'animate-fade-in']">
                    <div class="flex flex-col w-full my-2">
                        <div class="p-2 text-xl duration-300 ease-in-out border-b-2 border-white cursor-pointer hover:border-blue-400" @click="goTo('/tentang-belajar-koding')">Apa itu Belajar Koding?</div>
                        
                        <div
                            class="p-2 text-xl duration-300 ease-in-out border-b-2 border-white cursor-pointer hover:border-blue-400" @click="goTo('/bahasa-pemrograman')">
                            Apa saja bahasa Pemrograman yang tersedia?
                        </div>
                        <div
                            class="p-2 text-xl duration-300 ease-in-out border-b-2 border-white cursor-pointer hover:border-blue-400" @click="goTo('/layanan')"
                        >
                            Layanan apa yang disediakan?
                        </div>
                        <div
                            class="p-2 text-xl duration-300 ease-in-out border-b-2 border-white cursor-pointer hover:border-blue-400" @click="goTo('/sosmed')"
                        >
                            Kunjungi Sosial Media Belajar Koding
                        </div>
                        <div
                            class="p-2 text-xl border-b-2 border-white cursor-pointer hover:border-blue-400" @click="goTo('/tim-belajar-koding')"
                        >
                            Gabung bersama Tim Belajar Koding
                        </div>
                        <hr class="h-1 my-4 bg-gray-300 rounded-lg" />
                        <div class="flex flex-col items-center mt-3" v-if="authenticated">
                            <div>Hai, <b>{{ user.name }}</b></div>
                            <button class="w-full p-3 mt-5 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-700 focus:outline-none">
                                <router-link to='/app/dashboard' class="flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    <div>
                                        Masuk ke Aplikasi Belajar Koding
                                    </div>
                                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                </router-link>
                            </button>
                            <button @click="open = true" class="m-3 mt-5 font-semibold text-red-500 underline text-md focus:outline-none hover:text-red-400" >Keluar dari Akun</button>
                        </div>
                        <div class="flex flex-col h-full" v-else>
                            <router-link to="login"
                                class="py-2 my-1 font-semibold text-center text-white duration-200 ease-in-out bg-blue-600 rounded-lg cursor-pointer text-md hover:bg-blue-800"
                            >
                                Login
                            </router-link>
                            <div class="text-sm text-center">- Atau -</div>
                            <router-link to="register"
                                class="py-2 my-1 font-semibold text-center text-white duration-200 ease-in-out bg-green-600 rounded-lg cursor-pointer text-md hover:bg-green-800"
                            >
                                Daftar
                            </router-link>
                        </div>
                        
                    </div>
                </div>
            </home-list>
        </div>
        <Footer/>
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
import HomeList from "@/components/home/HomeList"
import LogoSide from "@/components/home/LogoSide"
import Footer from '@/components/Footer'
import Modal from '@/components/Modal'
import store from '@/store'
import { computed } from '@vue/runtime-core'
import { ref, reactive } from '@vue/reactivity'

export default {
    title : "Home - Belajar Koding",
    components: { LogoSide, HomeList, Footer, Modal },
    guardRole: 'false',
    data() {
        return {
            isActive : false,
        }
    },
    methods : {
        goTo(link){
            this.isActive = true
            setTimeout(() => this.$router.push(link), 400)
        }
    },
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
};
</script>

<style>
</style>