<template>
    <div class="bottom-0 w-full h-12 bg-gray-500 lg:fixed bg-opacity-10"></div>
    <div class="bottom-0 flex items-center w-full h-12 text-black lg:fixed">
        <div class="flex justify-around w-full">
            <router-link to="/tentang/sk" class="px-4 py-2 rounded cursor-pointer hover:bg-white">Syarat & Ketentuan</router-link>
            <router-link to="/tentang/kebijakanprivasi" class="px-4 py-2 rounded cursor-pointer hover:bg-white">Kebijakan Privasi</router-link>
            <router-link to="/tentang/faq" class="px-4 py-2 rounded cursor-pointer hover:bg-white">FAQ</router-link>
            <router-link to="/tentang/layanan" class="px-4 py-2 rounded cursor-pointer hover:bg-white">Layanan Pengguna</router-link>
        </div>
    </div>
    <div
        class="bottom-0 right-0 flex items-center justify-center w-16 h-16 m-5 duration-200 ease-in-out bg-blue-400 rounded-full cursor-pointer lg:fixed hover:bg-blue-500"
    >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-8 h-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
            <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
        </svg>
    </div>
</template>
<script>
export default {};
</script>