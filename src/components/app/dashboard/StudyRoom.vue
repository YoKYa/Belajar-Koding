<template lang="">
    <div class="w-full h-auto min-h-0 p-8 my-2 bg-gray-500">
          <div class="flex items-center justify-between">
               <div class="text-xl text-white capitalize">Ruang Belajar</div>
               <router-link to="/app/studyroom" class="text-sm text-white">Lihat Selengkapnya</router-link>
          </div>
          <div class="flex justify-between w-full my-4">
               <div class="flex flex-col w-full py-2 ml-2 bg-gray-200 rounded-lg" v-if="!loading.materi">
                    <router-link class="my-1 p-2 mx-4 border-2 border-gray-500 rounded-lg hover:shadow-lg" v-for="studyroom in data.studyroom" :key="studyroom.id" :to="{name: 'Courses', params: {slug:studyroom.study_class.slug}}">
                         <div class="flex items-center justify-between mx-2" >
                              <div class="flex">
                                   <div class="w-12">
                                        <div
                                        class="w-8 h-8 bg-blue-400 rounded-full"
                                        >
                                        <img class="rounded-full " alt="Pict" :src="
                                                            base +
                                                            studyroom.study_class.picture
                                                       " />
                                        </div>
                                   </div>
                                   <div
                                        class="flex items-center  leading-relaxed "
                                   >
                                        <h4 class="mx-2 font-bold text-md">
                                        {{  studyroom.study_class.name }}
                                        </h4>
                                   </div>
                              </div>
                         </div>
                    </router-link>
               </div>
               <div class="flex flex-col w-full py-2 ml-2 bg-gray-200 rounded-lg" v-if="loading.materi">
                    <div class="my-1 p-2 mx-4 border-2 border-gray-500 rounded-lg hover:shadow-lg" >
                         <div class="flex items-center justify-between mx-2" >
                              <div class="flex">
                                   <div class="w-12">
                                        <div
                                        class="w-8 h-8 bg-blue-400 rounded-full animate-pulse"
                                        >
                                        </div>
                                   </div>
                                   <div
                                        class="flex items-center  leading-relaxed "
                                   >
                                        
                                                                      <div class="h-3 bg-blue-400 animate-pulse w-32 rounded-full">
                                   </div>

                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="my-1 p-2 mx-4 border-2 border-gray-500 rounded-lg hover:shadow-lg" >
                         <div class="flex items-center justify-between mx-2" >
                              <div class="flex">
                                   <div class="w-12">
                                        <div
                                        class="w-8 h-8 bg-blue-400 rounded-full animate-pulse"
                                        >
                                        </div>
                                   </div>
                                   <div
                                        class="flex items-center  leading-relaxed "
                                   >
                                        
                                   <div class="h-3 bg-blue-400 animate-pulse w-32 rounded-full">
                                   </div>
                                   </div>
                              </div>
                         </div>
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
               getMateri(user.id)
          })
          const user = computed(() => store.getters["auth/user"]).value;
          const data = reactive({
               studyroom: ''
          })
          const loading = reactive({
               materi: ''
          })
          const getMateri = async (id) => {
               try {
                    loading.materi = true
                    await axios.get("sanctum/csrf-cookie")
                    let response = await axios.post("api/studyroom", {
                         user_id: id,
                    })
                    data.studyroom = response.data
                    loading.materi = false
               } catch (error) {
                    loading.materi = false
                    console.log(error.response.data.errors)
               }
          }
          const base = computed(
               () => store.getters["baseurl/urlStorage"]
          ).value
          return { loading, data, base };
     }
};
</script>