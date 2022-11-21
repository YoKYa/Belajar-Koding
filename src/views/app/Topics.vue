<template>
     <div id="journal-scroll">
          <div class="h-20 bg-blue-700 shadow-md absolute top-0 w-full">
               <div class="flex justify-between h-20 mx-16">
                    <div class="flex items-center justify-center">
                         <img src="@/assets/logo-min.png" alt="Logo Belajar Koding" width="50" />
                         <router-link to="/app/dashboard" class="ml-3 text-2xl font-bold text-white"
                              exact-active-class="bg-transparent border-none">
                              BelajarKoding
                         </router-link>
                    </div>
                    <div class="flex flex-col justify-center" v-if="!loading.topic">
                         <div class="text-white text-sm text-center">{{ data.subclass.name }}</div>
                         <div class="text-white text-lg font-bold text-center">{{ data.topic.name }}</div>
                    </div>
                    <div class="flex justify-center" v-if="loading.topic">
                         <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="
					margin: auto;
					background: none;
					display: block;
					shape-rendering: auto;
				" width="80px" height="80px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                              <circle cx="50" cy="50" r="0" fill="none" stroke="#88e1f2" stroke-width="11">
                                   <animate attributeName="r" repeatCount="indefinite" dur="1.7543859649122806s"
                                        values="0;24" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"
                                        begin="0s" />
                                   <animate attributeName="opacity" repeatCount="indefinite" dur="1.7543859649122806s"
                                        values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"
                                        begin="0s" />
                              </circle>
                              <circle cx="50" cy="50" r="0" fill="none" stroke="#88e1f2" stroke-width="11">
                                   <animate attributeName="r" repeatCount="indefinite" dur="1.7543859649122806s"
                                        values="0;24" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"
                                        begin="-0.8771929824561403s" />
                                   <animate attributeName="opacity" repeatCount="indefinite" dur="1.7543859649122806s"
                                        values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"
                                        begin="-0.8771929824561403s" />
                              </circle>
                         </svg>
                    </div>
                    <div class="flex items-center">
                         <div>
                              <ul class="flex">
                                   <router-link to="/app/dashboard"
                                        exact-active-class="text-blue-500 bg-transparent border-none"
                                        class="flex flex-col items-center mx-2 text-xs font-semibold text-gray-100 duration-200 ease-out transform hover:text-white hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                        </svg>
                                        Beranda
                                   </router-link>

                                   <router-link to="/app/bookshelf"
                                        exact-active-class="text-blue-500 bg-transparent border-none"
                                        class="flex flex-col items-center mx-2 text-xs font-semibold text-gray-100 duration-200 ease-out transform hover:text-white hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                        Rak Buku
                                   </router-link>
                                   <div exact-active-class="text-blue-500 bg-transparent border-none" @click="cd = !cd"
                                        class="flex flex-col items-center mx-2 text-xs font-semibold text-gray-100 duration-200 ease-out transform hover:text-white hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                             <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                                        </svg>
                                        Code
                                   </div>
                              </ul>
                         </div>
                    </div>
               </div>
          </div>
          <div v-if="!load" class="flex h-screen pt-20 w-full">
               <div class="w-full overflow-auto shadow flex bg-white" id="journal-scroll">
                    <div class="h-auto bg-white shadow-inner" :class="{ 'w-20': !w, 'w-2/12': w }">
                         <div class="flex flex-col" v-if="!loading.pages">
                              <div v-if="w" class="m-2 p-2 rounded-lg hover:bg-blue-300 cursor-pointer"
                                   @click="$router.go(-1)">Kembali ke Daftar Topic</div>
                              <div v-for="(page, index) in data.pages" :key="page.id"
                                   class="flex items-center m-1 cursor-pointer" @click="getPage(index)">
                                   <div v-if="page.type == 'intro'" class="mx-3 p-3"> <svg
                                             xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                             <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
                                        </svg>
                                   </div>
                                   <div v-if="page.type == 'materi'" class="mx-3 p-3"><svg
                                             xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                             <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                        </svg>
                                   </div>
                                   <div v-if="page.type == 'soal'" class="mx-3 p-3"><svg
                                             xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                             <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                   </div>
                                   <div class="mx-5 text-sm font-semibold">{{ page.title }}</div>
                              </div>
                              <div v-if="w"
                                   class="hover:bg-blue-300 flex justify-center p-2 rounded-xl mx-2 transition-all duration-150 ease-in-out cursor-pointer"
                                   @click="w = !w"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                             d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                                   </svg>
                              </div>
                              <div v-else
                                   class="hover:bg-blue-300 flex justify-center p-2 rounded-xl mx-2 transition-all duration-150 ease-in-out cursor-pointer"
                                   @click="w = !w">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                             d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                   </svg>

                              </div>
                         </div>
                         <div class="flex justify-center" v-if="loading.pages">
                              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="
					margin: auto;
					background: none;
					display: block;
					shape-rendering: auto;
				" width="80px" height="80px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                                   <circle cx="50" cy="50" r="0" fill="none" stroke="#88e1f2" stroke-width="11">
                                        <animate attributeName="r" repeatCount="indefinite" dur="1.7543859649122806s"
                                             values="0;24" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"
                                             begin="0s" />
                                        <animate attributeName="opacity" repeatCount="indefinite"
                                             dur="1.7543859649122806s" values="1;0" keyTimes="0;1"
                                             keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s" />
                                   </circle>
                                   <circle cx="50" cy="50" r="0" fill="none" stroke="#88e1f2" stroke-width="11">
                                        <animate attributeName="r" repeatCount="indefinite" dur="1.7543859649122806s"
                                             values="0;24" keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline"
                                             begin="-0.8771929824561403s" />
                                        <animate attributeName="opacity" repeatCount="indefinite"
                                             dur="1.7543859649122806s" values="1;0" keyTimes="0;1"
                                             keySplines="0.2 0 0.8 1" calcMode="spline" begin="-0.8771929824561403s" />
                                   </circle>
                              </svg>
                         </div>
                    </div>
                    <div class=" h-auto bg-white" :class="{ 'w-full': !w, 'w-10/12': w }">
                         <div v-if="!selected.page">
                              <div
                                   class="flex justify-center items-center h-24 text-green-500 font-semibold transform rotate-90">
                                   <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 animate-bounce" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                             d="M15 13l-3 3m0 0l-3-3m3 3V8m0 13a9 9 0 110-18 9 9 0 010 18z" />
                                   </svg>
                              </div>
                              <div class="flex justify-center items-start h-96 ml-8 text-green-500 font-semibold">
                                   Pilih Menu Pilihan Pada Sidebar</div>
                         </div>
                         <div v-else>
                              <div v-if="data.page.type == 'intro'">
                                   <div class="my-8 mx-20 text-2xl font-bold text-blue-900 font-sans uppercase">
                                        Pengenalan
                                   </div>
                                   <hr>
                                   <iframe :srcdoc="data.page.content" frameborder="0"
                                        class="w-full overflow-scroll h-screen"></iframe>
                              </div>
                              <div v-if="data.page.type == 'materi'">
                                   <div class="my-8 mx-20 text-2xl font-bold text-blue-900 font-sans uppercase">
                                        Materi
                                   </div>
                                   <hr>
                                   <iframe :srcdoc="data.page.content" frameborder="0"
                                        class="w-full overflow-scroll h-screen" id="journal-scroll"></iframe>
                              </div>
                              <div v-if="data.page.type == 'soal'">
                                   <div class="my-8 mx-20 text-2xl font-bold text-blue-900 font-sans uppercase">
                                        Soal {{ soal.no + 1 }} / {{ soal.total }}
                                   </div>
                                   <hr>
                                   <iframe :srcdoc="data.question.question" frameborder="0"
                                        class="w-full overflow-scroll " id="journal-scroll"></iframe>
                                   <div class="mx-4">Pilihan Ganda :</div>
                                   <div class="grid grid-flow-row grid-cols-2 grid-rows-2 gap-1 m-2">
                                        <label class="border-2 m-1 p-2" for="A">
                                             <input type="radio" name="PG" id="A"
                                                  class="mx-4 w-4 h-4  bg-gray-100 border-gray-300 focus:outline-none dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                                  v-model="soal.answer" value="A">
                                             <label for="A">{{ data.question.a }}</label>
                                        </label>
                                        <label class="border-2 m-1 p-2" for="B">
                                             <input type="radio" name="PG" id="B"
                                                  class="mx-4 w-4 h-4  bg-gray-100 border-gray-300 focus:outline-none dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                                  v-model="soal.answer" value="B">
                                             <label for="B">{{ data.question.b }}</label>
                                        </label>
                                        <label class="border-2 m-1 p-2" for="C">
                                             <input type="radio" name="PG" id="C"
                                                  class="mx-4 w-4 h-4  bg-gray-100 border-gray-300 focus:outline-none dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                                  v-model="soal.answer" value="C">
                                             <label for="C">{{ data.question.c }}</label>
                                        </label>
                                        <label class="border-2 m-1 p-2" for="D">
                                             <input type="radio" name="PG" id="D"
                                                  class="mx-4 w-4 h-4  bg-gray-100 border-gray-300 focus:outline-none dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                                  v-model="soal.answer" value="D">
                                             <label for="D">{{ data.question.d }}</label>
                                        </label>
                                        <label class="border-2 m-1 p-2" for="E">
                                             <input type="radio" name="PG" id="E"
                                                  class="mx-4 w-4 h-4  bg-gray-100 border-gray-300 focus:outline-none dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                                  v-model="soal.answer" value="E">
                                             <label for="E">{{ data.question.e }}</label>
                                        </label>
                                        <label class="border-2 m-1 p-2" for="F">
                                             <input type="radio" name="PG" id="F"
                                                  class="mx-4 w-4 h-4  bg-gray-100 border-gray-300 focus:outline-none dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600 "
                                                  v-model="soal.answer" value="F">
                                             <label for="F">{{ data.question.f }}</label>
                                        </label>
                                   </div>
                                   <div class="bg-blue-400 hover:bg-blue-400 my-8 p-2 text-white font-semibold mx-2 rounded-lg cursor-pointer"
                                        @click="submit">Simpan dan Lanjutkan</div>
                                   <hr>
                              </div>
                              <div v-if="data.page.type == 'nilai'">
                                   <div
                                        class="my-8 mx-20 text-2xl font-bold text-blue-900 font-sans uppercase text-center">
                                        Nilai {{ soal.nilai }}
                                   </div>
                                   <hr>
                                   <div class="flex justify-center">
                                        <button class="bg-blue-500 m-2 px-4 py-2 rounded-lg text-white"
                                             @click="reanswer">Kerjakan Lagi</button>
                                        <button @click="$router.go(-1)"
                                             class="bg-green-500 m-2 px-4 py-2 rounded-lg text-white">Kembali ke Daftar
                                             Topik</button>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="h-auto bg-black w-1/2" :class="{'hidden': cd}">
                    <iframe src="https://codex.belajarkoding.id/" frameborder="0" class="h-screen w-full" ></iframe>
                    </div>
               </div>
          </div>
     </div>
     <loading v-if="load" />
</template>
<script>
import { onBeforeMount, onMounted, reactive, ref } from "vue";
import Loading from "../../components/app/Loading.vue";
import axios from "axios"
import { useRoute } from "vue-router"

export default {
     components: {
          Loading,
     },
     setup() {
          const load = ref(false);
          const reload = () => {
               if (localStorage.getItem("reloaded")) {
                    load.value = true;
                    localStorage.removeItem("reloaded");
               }
          };
          const w = ref(false)
          const cd = ref(false)
          const route = useRoute()
          const code = ref()
          onMounted(() => {
               setTimeout(() => {
                    load.value = false;
               }, 2500);
               code.value = route.params.code
               getTopic()
          }),
               onBeforeMount(() => {
                    reload();
               });
          const loading = reactive({
               topic: '',
               pages: ''
          });
          const selected = reactive({
               page: false
          })
          const data = reactive({
               topic: '',
               subclass: '',
               pages: '',
               page: '',
               questions: '',
               question: ''
          })
          const soal = reactive({
               no: 0,
               total: '',
               answer: '',
               correct: 0,
               nilai: 0
          })
          const getTopic = async () => {
               try {
                    loading.topic = true
                    await axios.get("sanctum/csrf-cookie")
                    let response = await axios.post("api/topics", {
                         code: code.value,
                    })
                    data.topic = response.data
                    data.subclass = data.topic.sub_class
                    loading.topic = false
                    document.title = data.topic.name + ' - Belajar Koding'
                    getPages(data.topic.id)
               } catch (error) {
                    loading.topic = false
                    console.log(error.response.data.errors)
               }
          }
          const getPages = async (id) => {
               try {
                    loading.pages = true
                    await axios.get("sanctum/csrf-cookie")
                    let response = await axios.post("api/topics/getPages", {
                         topic_id: id,
                    })
                    // getQuestions()
                    loading.pages = false
                    data.pages = response.data
               } catch (error) {
                    loading.pages = false
                    console.log(error.response.data.errors)
               }
          }
          const getPage = async (id) => {
               selected.page = true
               if (data.pages[id].type == 'intro' || data.pages[id].type == 'materi') {
                    data.page = data.pages[id]
               } else {
                    data.page = data.pages[id]
                    getQuestions(data.page.id)
               }
          }
          const getQuestions = async (id) => {
               try {
                    await axios.get("sanctum/csrf-cookie")
                    let response = await axios.post("api/topics/getQuestions", {
                         page_id: id,
                    })
                    data.questions = response.data
                    soal.total = data.questions.length
                    getQuestion(soal.no)
               } catch (error) {
                    console.log(error.response.data.errors)
               }
          }
          const getQuestion = async (id) => {
               data.question = data.questions[id]
          }
          const submit = async () => {
               if (soal.answer == data.question.answer) {
                    soal.correct = soal.correct + 1
               }
               soal.answer = ''
               if (soal.no < soal.total - 1) {
                    soal.no = soal.no + 1
                    data.question = data.questions[soal.no]
               } else {
                    data.page.type = 'nilai'
                    soal.nilai = soal.correct / soal.total * 100
                    soal.nilai = parseFloat(soal.nilai).toFixed(2)
               }
          }
          const reanswer = () => {
               data.page.type = 'soal'
               soal.no = 0
               soal.answer = ''
               soal.correct = 0
                    soal.nilai = 0
                    getQuestion(soal.no)
          }
          return { load, loading, data, w, selected, getPage, soal, submit, reanswer,cd };
     },
};
</script>