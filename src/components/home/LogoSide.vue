<template>
    <div
            class="flex flex-col items-center justify-around w-1/2 h-screen py-24 "
        >
            <div class="">
                <img
                    src="@/assets/logo.png"
                    alt="Logo Belajar Koding"
                    width="400"
                />
            </div>
            <div class="flex flex-col mx-16">
                <div class="flex justify-around mt-5 bg-gray-500 bg-opacity-10">
                    <div class="flex items-center justify-center w-10 mx-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8 duration-100 ease-in-out cursor-pointer hover:w-10 hover:h-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            @click="decrement"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                    </div>
                    <div class="flex items-center justify-center text-lg font-semibold h-28 w-96" >
                        <div v-if="state.loading">
                            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="margin: auto; background: none; display: block; shape-rendering: auto;" width="84px" height="84px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                <circle cx="50" cy="50" r="0" fill="none" stroke="#88e1f2" stroke-width="11">
                                    <animate attributeName="r" repeatCount="indefinite" dur="1.7543859649122806s" values="0;24" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s"/>
                                    <animate attributeName="opacity" repeatCount="indefinite" dur="1.7543859649122806s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s"/>
                                    </circle><circle cx="50" cy="50" r="0" fill="none" stroke="#88e1f2" stroke-width="11">
                                    <animate attributeName="r" repeatCount="indefinite" dur="1.7543859649122806s" values="0;24" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.8771929824561403s"/>
                                    <animate attributeName="opacity" repeatCount="indefinite" dur="1.7543859649122806s" values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.8771929824561403s"/>
                                </circle>
                            </svg>
                        </div>
                        <div v-bind:title="state.quote.title">
                                        {{ state.quote.quote }}
                                    </div>
                        
                    </div>
                    <div class="flex items-center justify-center w-10 mx-2" >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="w-8 h-8 duration-100 ease-in-out cursor-pointer hover:w-10 hover:h-10"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            @click="increment"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M9 5l7 7-7 7"
                            />
                        </svg>
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center w-full mt-12">
                <hr class="w-full h-1 mx-16 bg-blue-400" />
            </div>
        </div>
</template>
<script>
import axios from 'axios'
import { onMounted, reactive} from '@vue/runtime-core'
export default {
    setup(){
        const state = reactive({
            quotes : '',
            quote : '',
            index : 0,
            length : 0,
            loading : false
        })
        const increment  = () => {
            if (state.index == state.length-1) {
                state.index = 0
            }else{
                state.index++
            }
            state.quote = state.quotes.data[state.index]
        }
        const decrement  = () => {
            if (state.index == 0) {
                state.index = state.length-1
            }else{
                state.index--
            }
            state.quote = state.quotes.data[state.index]
        }
        setInterval(() => {
            increment()
        }, 3000)
        const getQuotes = async () => {
            state.loading = true
            try {
                state.quotes = await axios.get('api/quotes')
                state.length = state.quotes.data.length
                state.index = Math.floor(Math.random() * 10) % state.length
                state.quote = state.quotes.data[state.index]    
                state.loading = false
            } catch (error) {
                state.loading = true
            }

        }
        onMounted( () => {
            getQuotes()
        })
        return {state, increment, decrement}
    }
    
}
</script>
<style lang="">
    
</style>