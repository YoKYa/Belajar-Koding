<template>
    <div class="flex flex-col items-center justify-around w-full h-screen lg:flex-row">
        <logo-side/>
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
                        <div class="flex flex-col h-full">
                            <div
                                class="py-2 my-1 font-semibold text-center text-white bg-blue-600 rounded-lg text-md"
                            >
                                Login
                            </div>
                            <div class="text-sm text-center">- Atau -</div>
                            <div
                                class="py-2 my-1 font-semibold text-center text-white bg-green-600 rounded-lg text-md"
                            >
                                Daftar
                            </div>
                        </div>
                    </div>
                </div>
            </home-list>
        </div>
        <Footer/>
    </div>
</template>

<script>
import HomeList from "@/components/home/HomeList"
import LogoSide from "@/components/home/LogoSide"
import Footer from '@/components/Footer'

export default {
    title : "Belajar Koding - Home",
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