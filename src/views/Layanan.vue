<template>
    <div
        class="flex flex-col items-center justify-around w-full h-screen lg:flex-row"
    >
        <logo-side />
        <div class="flex justify-center w-1/2 min-h-screen">
            <home-list>
                <div class="flex w-full h-full mt-4" :class="[isActive ? 'animate-fade-out' : 'animate-fade-in']">
                    <div class="flex flex-col items-center w-full my-2 h-96">
                        <img
                            src="@/assets/logo.png"
                            alt="Logo Belajar Koding"
                            width="200"
                        />
                        <div class="text-xl font-semibold">Layanan</div>
                        <div class="my-4 w-96">
                            <ul class="list-disc">
                                <li class="font-medium">
                                    Memberikan materi belajar bahasa pemrograman yang menarik
                                </li>
                                <li class="font-medium">
                                    Berbagai bahasa pemrograman yang bisa dipelajari
                                </li>
                                <li class="font-medium">
                                    Soal untuk mengasah kemampuan dalam membuat sebuah program
                                </li>
                                <li class="font-medium">
                                    Menyediakan tempat untuk membuat kode pemrograman secara online
                                </li>
                            </ul>
                        </div>
                        <div @click="goTo('/')" class="flex font-semibold text-blue-400 cursor-pointer">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-6 h-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
                                />
                            </svg>
                            Kembali
                        </div>
                    </div>
                </div>
            </home-list>
        </div>
        <Footer />
    </div>
</template>

<script>
import HomeList from "@/components/home/HomeList";
import LogoSide from "@/components/home/LogoSide";
import Footer from "@/components/Footer";

export default {
    title: "Layanan - Belajar Koding",
    components: { LogoSide, HomeList, Footer },
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
    }
};
</script>

<style>
</style>