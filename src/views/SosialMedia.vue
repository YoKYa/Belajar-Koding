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
                        <div class="text-xl font-semibold">Sosial Media</div>
                        <div class="grid h-24 grid-cols-3 gap-4 overflow-y-auto">
                            <div class="flex items-center justify-center w-20 h-20 m-2 text-xl rounded-full">
                                <img src="@/assets/img/sosmed/Twitter.png" alt="Twitter" width="100" />
                            </div>
                            <div class="flex items-center justify-center w-20 h-20 m-2 text-xl rounded-full">
                                <img src="@/assets/img/sosmed/Facebook.png" alt="Facebook" width="100" />
                            </div>
                            <div class="flex items-center justify-center w-20 h-20 m-2 text-xl rounded-full">
                                <img src="@/assets/img/sosmed/Github.png" alt="Github" width="100" />
                            </div>
                        </div>  
                        <div @click="goTo('/')" class="flex mt-8 font-semibold text-blue-400 cursor-pointer">
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
    title: "Sosial Media - Belajar Koding",
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