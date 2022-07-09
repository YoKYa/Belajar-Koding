<template lang="">
     <div class="w-full m-5 mr-3">
          <div class="flex justify-between text-lg font-semibold">
               <div class="py-1 pl-6 pr-10 text-white bg-blue-400 rounded-tr-full ">
                    Terakhir Dilihat
               </div>
          </div>
          <div class="p-3 bg-blue-400">
               <div class="flex flex-col p-2 px-1 my-2 bg-white rounded-lg bg-blue">
                    <div class=" grid grid-flow-row grid-cols-2 grid-rows-2 gap-1 m-2 "  v-if="loading.materi">
                         <div v-for="index in 4" :key="index" class="mx-2 p-2 transition duration-300 ease-in-out transform border-2 border-blue-300 rounded-lg hover:shadow-lg hover:scale-105 cursor-pointer">
                              <div class="flex items-center h-full mx-2">
                                   <div class="w-1/6">
                                        <div class="w-16 h-16 bg-blue-400 rounded-full">
                                        </div>
                                   </div>
                                   <div class="flex flex-col w-full leading-relaxed ">
                                        <h4 class="h-16 mx-4 text-lg font-bold">
                                             <div class="h-5 w-64 bg-blue-400 my-2 rounded-full animate-pulse"></div>
                                        </h4>
                                        <div class="flex items-center justify-end ">
                                             <div class="text-xs">
                                                  <div class="h-2 w-32 bg-blue-400 my-2 rounded-full animate-pulse"></div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class=" grid grid-flow-row grid-cols-2 grid-rows-2 gap-1 m-2 " v-else>
                         <router-link  v-for="ls in data.lastseen" :key="ls.id" :to="{name: 'Courses', params: {slug:ls.study_class.slug}}"
                              class="mx-2 p-2 transition duration-300 ease-in-out transform border-2 border-blue-300 rounded-lg hover:shadow-lg hover:scale-105">
                              <div class="flex items-center h-full mx-2">
                                   <div class="w-1/6">
                                        <div class="w-16 h-16 bg-blue-400 rounded-full">
                                        <img class="rounded-full " alt="Pict" :src="
                                                            base +
                                                            ls.study_class.picture
                                                       " />
                                        </div>
                                   </div>
                                   <div class="flex flex-col w-full leading-relaxed ">
                                        <h4 class="h-16 mx-4 text-lg font-bold">
                                             {{ls.study_class.name}}
                                        </h4>
                                        <div class="flex items-center justify-between ">
                                             <div>
                                                  
                                             </div>
                                             <div class="text-xs">
                                                  {{format_date(ls.lastseen)}}
                                             </div>
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
import store from "@/store";
import { computed, onMounted, reactive } from "vue";
import axios from "axios"
import moment from "moment";
export default {
     setup() {
          onMounted(() => {
               load()
          })
          const user = computed(() => store.getters["auth/user"]).value;
          const data = reactive({
               lastseen: ''
          })
          const loading = reactive({
               materi: ''
          })
          const load = async () => {
               try {
                    loading.materi = true
                    await axios.get("sanctum/csrf-cookie")
                    let response = await axios.post("api/lastseen", {
                         user_id: user.id
                    })
                    data.lastseen = response.data
                    loading.materi = false
               } catch (error) {
                    console.log(error);
               }
          }
          const base = computed(
               () => store.getters["baseurl/urlStorage"]
          ).value
          function format_date(value) {
               if (value) {
                    return moment(String(value)).locale("id").format("LLLL");
               }
          }
          return { user, format_date, data, base, loading };
     },
};
</script>