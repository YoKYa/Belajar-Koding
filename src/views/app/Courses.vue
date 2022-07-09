<template>
     <Header />
     <div v-if="!load">
          <div class="flex flex-col">
               <div class="h-28 bg-gray-50 w-full flex justify-center  pl-32 flex-col">
                    <button @click="$router.go(-1)" class="w-24 text-left text-blue-300 text-sm">Kembali</button>
                    <div class="text-xl font-semibold" v-if="!loading.materi">{{ data.materi.name }}</div>
                    <div class="text-xl font-semibold h-4 w-96 rounded-full animate-pulse bg-blue-400"
                         v-if="loading.materi"></div>
                    <div class="text-xl font-semibold h-4 w-36 my-2 rounded-full animate-pulse bg-blue-400"
                         v-if="loading.materi"></div>
               </div>
          </div>
          <div class="h-auto flex w-full bg-white px-32 py-16">
               <div class=" w-2/5">
                    <div class="font-semibold my-2">Progres Belajar</div>
                    <div class="h-1 border-t-2 ">Temukan Hal menarik disini</div>
                    <div v-if="!loading.materi"><img class="bg-transparent my-8" alt="Pict" :src="
                         base +
                         data.materi.picture
                    " /></div>
                    <div v-if="!loading.check">
                         <div class="bg-green-500 text-white rounded-lg p-2 hover:bg-green-600 cursor-pointer"
                              @click="addStudyRoom" v-if="!data.check">Tambahkan ke Ruang Belajar</div>
                         <div class="bg-red-500 text-white rounded-lg p-2 hover:bg-red-600 cursor-pointer"
                              @click="delStudyRoom" v-if="data.check">Hapus dari Ruang Belajar</div>
                    </div>

               </div>
               <div class="w-3/5">
                    <div v-if="loading.bagian">
                         <div v-for="index in 3" :key="index.id">
                              <div class="flex justify-between flex-col">
                                   <div class="font-semibold uppercase my-2 rounded-lg bg-blue-100 p-3 mx-4">
                                        <div class="h-3 w-72 bg-white animate-pulse rounded-full p-3"></div>
                                   </div>
                              </div>
                              <div class="flex flex-col">
                                   <div
                                        class="py-2 mx-10 cursor-pointer bg-blue-300 rounded-full my-2 p-2 animate-pulse">
                                   </div>
                                   <div
                                        class="py-2 mx-10 cursor-pointer bg-blue-300 rounded-full my-2 p-2 animate-pulse">
                                   </div>
                                   <div
                                        class="py-2 mx-10 cursor-pointer bg-blue-300 rounded-full my-2 p-2 animate-pulse">
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div v-if="!loading.bagian">
                         <div v-for="bagian in data.bagian" :key="bagian.id">
                              <div class="flex justify-between flex-col">
                                   <div class="font-semibold uppercase rounded-t-lg bg-blue-300 p-3 mx-4">
                                        #{{ bagian.name }}
                                   </div>
                              </div>
                              <div class="flex flex-col">
                                   <div>
                                        <router-link :to="'/app/topics/' + topics.code" v-for="topics in bagian.topics"
                                             :key="topics.id">
                                             <div class="mx-4 p-2 cursor-pointer hover:bg-blue-100 bg-blue-50">
                                                  <div class="w-full"><span class="mx-2 text-lg font-bold">
                                                            -</span> {{ topics.name }}
                                                  </div>
                                             </div>
                                        </router-link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
     <div>
          <Footer />
     </div>
     <loading v-if="load" />
</template>
<script>
import { onBeforeMount, onMounted, reactive, ref, computed } from "vue";
import Loading from "../../components/app/Loading.vue";
import Header from "../../components/app/Head.vue";
import Footer from "../../components/app/Foot.vue";
import axios from "axios"
import store from "@/store"
import { useRoute } from "vue-router"

export default {
     title: "Materi | Belajar Koding",
     components: {
          Loading,
          Header,
          Footer,
     },
     setup() {
          const load = ref(false);
          const reload = () => {
               if (localStorage.getItem("reloaded")) {
                    load.value = true;
                    localStorage.removeItem("reloaded");
               }
               getMateri()
          }
          const route = useRoute()
          onMounted(() => {
               setTimeout(() => {
                    load.value = false;
               }, 2500);
               slug.value = route.params.slug
               
          })
          onBeforeMount(() => {
               reload();
          })
          const base = computed(
               () => store.getters["baseurl/urlStorage"]
          ).value
          const user = computed(() => store.getters["auth/user"]).value;
          const slug = ref()
          const loading = reactive({
               materi: '',
               bagian: '',
               check: true
          })
          const data = reactive({
               materi: '',
               bagian: '',
               check: ''
          })
          const getMateri = async () => {
               try {
                    loading.materi = true
                    await axios.get("sanctum/csrf-cookie")
                    let response = await axios.post("api/study/getSlug", {
                         slug: slug.value,
                    })
                    data.materi = response.data
                    loading.materi = false
                    getBagian()
                    lastSeen()
               } catch (error) {
                    loading.materi = false
                    console.log(error.response.data.errors)
               }
          }
          const getBagian = async () => {
               try {
                    loading.bagian = true
                    await axios.get("sanctum/csrf-cookie")
                    let response = await axios.post("api/study/getBagian", {
                         studyClassId: data.materi.id,
                    })
                    loading.bagian = false
                    data.bagian = response.data
                    getUserStudy()
               } catch (error) {
                    loading.bagian = false
                    console.log(error);
               }
          }
          const getUserStudy = async () => {
               try {
                    loading.check = true
                    await axios.get("sanctum/csrf-cookie")
                    let response = await axios.post("api/studyroom/check", {
                         study_class_id: data.materi.id,
                         user_id: user.id
                    })
                    if (response.data.length != 0) {
                         data.check = true
                    } else {
                         data.check = false
                    }
                    loading.check = false
               } catch (error) {
                    loading.check = false
                    console.log(error);
               }
          }
          const addStudyRoom = async () => {
               try {
                    await axios.get("sanctum/csrf-cookie")
                    await axios.post("api/studyroom/create", {
                         study_class_id: data.materi.id,
                         user_id: user.id
                    })
                    getMateri()
               } catch (error) {
                    console.log(error);
               }
          }
          const delStudyRoom = async () => {
               try {
                    await axios.get("sanctum/csrf-cookie")
                    await axios.post("api/studyroom/delete", {
                         study_class_id: data.materi.id,
                         user_id: user.id
                    })
                    getMateri()
               } catch (error) {
                    console.log(error);
               }
          }
          const lastSeen = async () => {
               try {
                    await axios.get("sanctum/csrf-cookie")
                    await axios.post("api/addlastseen", {
                         study_class_id: data.materi.id,
                         user_id: user.id
                    })
               } catch (error) {
                    console.log(error.response.data);
               }
          }
          return { load, loading, data, base, addStudyRoom, delStudyRoom };
     },
};
</script>