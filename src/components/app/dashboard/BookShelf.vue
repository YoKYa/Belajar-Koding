<template lang="">
    <div class="flex flex-col items-center justify-center w-full my-5">
            <div
                class="px-5 py-1 text-lg text-center text-white bg-blue-400 rounded-t-3xl"
            >
                Rak Buku
            </div>
            <div class="w-full h-auto">
               <div
                              class="flex flex-col mx-10 bg-white shadow-xl border-t-4 border-b-4 border-blue-400 rounded-t-md rounded-b-md bg-opacity-60">
                              <div class="flex items-center justify-center w-full">
                                   <div v-if="loading.language">
                                        <div
                                             class=" animate-pulse flex items-center justify-center w-20 h-20 m-2 my-4 text-2xl transition duration-300 ease-in-out transform bg-white rounded-full hover:shadow-md hover:-translate-y-1 border-2 cursor-pointer">
                                             <div class="w-8 h-2 bg-blue-400 rounded-full"></div>
                                        </div>
                                   </div>
                                   <div v-if="loading.language == false" class="flex">
                                        <div v-for="language in data.language" :key="language.id"
                                             @click="getMateri(language.id)"
                                             class="flex items-center justify-center w-20 h-20 m-2 my-4 text-lg transition duration-300 ease-in-out transform bg-white rounded-full hover:shadow-md hover:-translate-y-1 border-2 cursor-pointer">
                                             {{ language.name }}
                                        </div>
                                   </div>
                              </div>
                              <div class="grid grid-flow-row grid-cols-3 grid-rows-2 gap-5 m-2 " v-if="loading.materi">
                                   <li class="flex flex-row mb-2 border-gray-400" v-for="index in 6" :key="index.id">
                                        <div
                                             class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                                             <div class="animate-pulse flex space-x-4">
                                                  <div class="rounded-full bg-blue-400 h-10 w-10"></div>
                                                  <div class="flex-1 space-y-6 py-1">
                                                       <div class="h-2 bg-blue-400 rounded"></div>
                                                       <div class="space-y-3">
                                                            <div class="grid grid-cols-3 gap-4">
                                                                 <div class="h-2 bg-blue-400 rounded col-span-2"></div>
                                                                 <div class="h-2 bg-blue-400 rounded col-span-1"></div>
                                                            </div>
                                                            <div class="h-2 bg-blue-400 rounded"></div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </li>
                              </div>
                              <div class="grid grid-flow-row grid-cols-3 grid-rows-2 gap-5 m-2 "
                                   v-if="loading.materi == false">
                                   <router-link  class="flex flex-row mb-2 border-gray-400"
                                        v-for="(materi,index) in data.materi" :key="materi.id" :to="{name: 'Courses', params: {slug:materi.slug}}" >
                                        <div v-if="data.materi && data.materi.length > 0 && index <= 6"
                                             class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg cursor-pointer">
                                             <div class="flex space-x-4">
                                                  <div class="rounded-full h-10 w-10">
                                                       <img class="rounded-full " alt="Pict" :src="
                                                            base +
                                                            materi.picture
                                                       " />
                                                  </div>
                                                  <div class="flex-1 space-y-3 py-1 h-16 w-24">
                                                       <div class="font-semibold">{{ materi.name }}</div>
                                                       <div class="truncate">{{ materi.description }}</div>
                                                  </div>
                                             </div>
                                        </div>
                                   </router-link>
                              </div>
                         </div>
            </div>
        </div>
</template>
<script>
import { onMounted, reactive, computed } from "vue";
import axios from "axios"
import store from "@/store"

export default {
     setup() {
          onMounted(() => {
               getLanguage()
               getMateri(1)
          })
          const base = computed(
               () => store.getters["baseurl/urlStorage"]
          ).value
          const loading = reactive({
               language: '',
               materi: ''
          })
          const data = reactive({
               language: '',
               materi: ''
          })
          const getLanguage = async () => {
               try {
                    loading.language = true
                    let response = await axios.get("api/study/programingLanguage");
                    data.language = response.data;
                    loading.language = false
               } catch (error) {
                    loading.language = false
                    console.log(error.response.data.errors)
               }
          }
          const getMateri = async (id) => {
               try {
                    loading.materi = true
                    await axios.get("sanctum/csrf-cookie")
                    let response = await axios.post("api/study/studyClass", {
                         programming_language_id: id,
                    })
                    data.materi = response.data
                    loading.materi = false
               } catch (error) {
                    loading.materi = false
                    console.log(error.response.data.errors)
               }
          }
          return { loading, data, base, getLanguage, getMateri };
     }
}
</script>