<template>
    <div class="w-full h-20 bg-white shadow-md">
        <div class="flex justify-between h-20 mx-16">
            <div class="flex items-center justify-center">
                <img
                    src="@/assets/logo-min.png"
                    alt="Logo Belajar Koding"
                    width="50"
                />
                <router-link
                    to="/app/dashboard"
                    class="ml-3 text-2xl font-bold text-blue-400"
                    exact-active-class="bg-transparent border-none"
                >
                    BelajarKoding
                </router-link>
            </div>
            <div class="flex items-center">
                <div>
                    <ul class="flex">
                        <router-link
                            to="/app/dashboard"
                            exact-active-class="text-blue-500 bg-transparent border-none"
                            class="flex flex-col items-center mx-2 text-xs font-semibold text-gray-500 duration-200 ease-out transform hover:text-blue-500 hover:scale-110"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-7 h-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                />
                            </svg>
                            Beranda
                        </router-link>
                        <router-link
                            to="/app/studyroom"
                            exact-active-class="text-blue-500 bg-transparent border-none"
                            class="flex flex-col items-center mx-2 text-xs font-semibold text-gray-500 duration-200 ease-out transform hover:text-blue-500 hover:scale-110"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                />
                            </svg>
                            Ruang Belajar
                        </router-link>
                        <router-link
                            to="/app/bookshelf"
                            exact-active-class="text-blue-500 bg-transparent border-none"
                            class="flex flex-col items-center mx-2 text-xs font-semibold text-gray-500 duration-200 ease-out transform hover:text-blue-500 hover:scale-110"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                />
                            </svg>
                            Rak Buku
                        </router-link>
                        <!-- <router-link
                            to="/app/note"
                            exact-active-class="text-blue-500 bg-transparent border-none"
                            class="flex flex-col items-center mx-2 text-xs font-semibold text-gray-500 duration-200 ease-out transform hover:text-blue-500 hover:scale-110"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="h-7 w-7"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                                />
                            </svg>
                            Catatan
                        </router-link> -->
                        <div v-if="user.roles.length > 0">
                            <router-link
                                to="/app/admin"
                                class="flex flex-col items-center mx-2 text-xs font-semibold text-gray-500 duration-200 ease-out transform hover:text-blue-500 hover:scale-110"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-7 h-7"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                                    />
                                </svg>
                                Admin Panel
                            </router-link>
                        </div>
                    </ul>
                </div>

                <div
                    @click="isOn = !isOn"
                    class="flex items-center justify-center w-10 h-10 ml-10 text-2xl font-bold bg-white border-2 border-gray-500 rounded-full cursor-pointer "
                >
                    <div class="">
                        <div v-if="picture.length == 1">{{ picture }}</div>
                        <img
                            :src="picture"
                            v-else
                            class="rounded-full"
                            width="60"
                            alt="profile"
                        />
                        <div
                            :class="isOn ? 'block' : 'hidden'"
                            class="absolute flex flex-col justify-around w-56 h-32 text-sm font-normal bg-white border-2 border-gray-200 rounded-lg shadow-lg right-16 top-16"
                        >
                            <router-link
                                to="/app/profile"
                                class="flex items-center p-2 transition duration-200 hover:bg-gray-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-5 h-5 mx-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                Profil
                            </router-link>
                            <div
                                class="flex items-center p-2 transition duration-200 hover:bg-gray-200"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-5 h-5 mx-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                                        clip-rule="evenodd"
                                    />
                                </svg>
                                Pengaturan
                            </div>
                            <div
                                class="flex items-center p-2 transition duration-200 hover:bg-gray-200" @click="open = true"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    class="w-6 h-6 mx-2"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                    />
                                </svg>
                                Logout
                            </div>
                        </div>
                    </div>
                </div>
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
import store from "@/store";
import Modal from '@/components/Modal'
import router from '@/router'
import { computed, ref, reactive } from "vue";
export default {
     components:{Modal},
    setup() {
         const open = ref(false)
        const authenticated = computed(
            () => store.getters["auth/authenticated"]
        )
        const loading = reactive({
            'load' : false,
            'text' : false
        })
        const isOn = ref(false);
        const user = computed(() => store.getters["auth/user"]);
          const logout = async () => {
            open.value = false
            loading.load = true
            loading.text = false
            await store.dispatch("auth/logout")
            loading.text = true
            setTimeout(() => {
                loading.load = false
                 router.push('/')
            }, 1000);
        }

        let picture = "";
        if (user.value.picture == null || user.value.picture == "") {
            let name = user.value.name;
            picture = name.substring(0, 1);
        } else {
            picture =  computed(() => store.getters["baseurl/urlStorage"]).value + user.value.picture;
        }
        return { authenticated, user, picture, isOn, logout,loading, open };
    },
};
</script>