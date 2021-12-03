<template>
  <div class="flex justify-center min-h-screen bg-black bg-opacity-5">
      <div class="w-4/6 mt-12">
        <div class="flex items-center">
            <router-link to="/" class="w-20 mx-2">
                <img src="@/assets/logo.png" alt="Logo Belajar Koding" />
            </router-link>
            <div class="py-2 mx-2">
                <router-link to="/login" class="text-3xl text-blue-400" exact-active-class="bg-transparent border-none">Account</router-link>
            </div>    
        </div>
        <slot>
        </slot>
        
        <div class="flex justify-center my-5 text-sm text-gray-400 ">
            <router-link to="/tentang/sk" class="hover:text-blue-400">Syarat & Ketentuan</router-link>
            <div class="mx-4">||</div>
            <router-link to="/tentang/kebijakanprivasi"  class="hover:text-blue-400">Kebijakan Privasi</router-link>
            <div class="mx-4">||</div>
            <router-link to="/tentang/faq"  class="hover:text-blue-400">FAQ</router-link>
            <div class="mx-4">||</div>
            <router-link to="/tentang/layanan"  class="hover:text-blue-400">Layanan Pengguna</router-link>
        </div>
        <div class="flex justify-center my-3 text-sm text-gray-400">
            &copy; 2021 YoKYa
        </div>
      </div>
  </div>
</template>
<script>
export default {
    
}
</script>