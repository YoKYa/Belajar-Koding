<template>
    <Auth>
        <div class="shadow-md">
            <div class="flex items-center justify-center w-full mt-5 bg-blue-400 h-14 rounded-t-md">
                <div class="text-xl font-semibold text-white">Lupa Password</div>
            </div>
            <div class="flex flex-col justify-center w-full h-auto p-10 mb-5 bg-white rounded-b-md">
                <form @submit.prevent="LupaPassword">
                    <div class="flex items-center justify-center w-full mb-1">
                    <div class="w-3/5">
                        <input type="text" v-model="form.email" name="email" id="email" placeholder="Username/Email" class="w-full h-10 p-5 border rounded-md focus:outline-none focus:ring" required>
                        <div class="flex w-3/5 m-1 text-sm text-red-500">Masih Error</div>
                    </div>
                    </div>
                    <div class="flex items-center justify-center w-full 1">
                        <button class="w-3/5 p-2 m-3 font-semibold text-white bg-blue-400 rounded-md focus:ring focus:ring-blue-300 hover:bg-blue-500">Lupa Password</button>    
                    </div>
                    <div class="flex items-center justify-center w-full 1">
                        <div class="flex justify-between w-3/5">
                            <a class="text-blue-400 hover:text-blue-500"></a>
                            <router-link to="login" class="text-blue-400 hover:text-blue-500">Kembali ke Login</router-link>
                        </div>
                    </div>
                </form>       
            </div>
        </div>
    </Auth>
</template>

<script>
import { reactive } from '@vue/reactivity'
import Auth from "@/components/auth/Auth"
export default {
    title : "Lupa Password - Belajar Koding",
    components : {Auth},
    setup() {
        const form = reactive({
            'email' : '',
        })
        return {
            form
        }
    }
}
</script>