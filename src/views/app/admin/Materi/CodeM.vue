<template>
     <div id="journal-scroll">
          <Header />
          <div class="flex h-screen pt-14">
               <div class="w-full overflow-auto shadow" id="journal-scroll">
                    <div class="flex m-2">
                         <div class="flex flex-col w-1/5 m-2 text-xs">
                              <div class="relative bg-white rounded-lg rounded-b-none">
                                   <div class="absolute left-0 z-40 w-full overflow-y-auto bg-white rounded shadow top-100 max-h-select svelte-5uyqqj"
                                        id="journal-scroll">
                                        <div class="flex flex-col w-full">
                                             <!-- Daftar Program -->
                                             <div
                                                  class="w-full border-b border-gray-100 rounded-t cursor-pointer hover:bg-teal-100">
                                                  <div v-for="page in data.topic.pages" :key="page.id"
                                                       @click="pageGet(page.id)"
                                                       class="relative flex items-center w-full p-2 pl-2 border-l-2 border-transparent hover:bg-blue-100">
                                                       <div class="flex flex-col items-center w-6 ">
                                                            <div
                                                                 class="relative flex items-center justify-center w-4 m-1 mt-1 mr-2 bg-orange-500 rounded-full ">
                                                                 <svg v-if="page.type == 'intro'"
                                                                      xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"
                                                                      fill="none" viewBox="0 0 24 24"
                                                                      stroke="currentColor" stroke-width="2">
                                                                      <path stroke-linecap="round"
                                                                           stroke-linejoin="round"
                                                                           d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                                                                 </svg>
                                                                 <svg v-else-if="page.type == 'materi'"
                                                                      xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"
                                                                      fill="none" viewBox="0 0 24 24"
                                                                      stroke="currentColor" stroke-width="2">
                                                                      <path stroke-linecap="round"
                                                                           stroke-linejoin="round"
                                                                           d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                                                                 </svg>
                                                                 <svg v-else-if="page.type == 'soal'"
                                                                      xmlns="http://www.w3.org/2000/svg" class="w-6 h-6"
                                                                      fill="none" viewBox="0 0 24 24"
                                                                      stroke="currentColor" stroke-width="2">
                                                                      <path stroke-linecap="round"
                                                                           stroke-linejoin="round"
                                                                           d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                       <div class="flex items-center w-full ">
                                                            <div class="mx-2 -mt-1 ">
                                                                 {{ page.title }}
                                                            </div>
                                                       </div>
                                                  </div>

                                             </div>
                                             <div
                                                  class="w-full border-b border-gray-100 rounded-t cursor-pointer hover:bg-teal-100">
                                                  <button @click="createPage"
                                                       class="w-full py-1 text-xl font-bold transition-all duration-200 rounded-md hover:bg-blue-500 hover:text-white">+</button>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="flex flex-col w-4/5 m-2">
                              <div
                                   class="flex items-center justify-between h-16 mb-2 text-2xl bg-white border-2 border-gray-200 rounded-lg shadow-lg ">
                                   <button @click="$router.go(-1)"
                                        class="p-2 mx-4 text-gray-500 duration-200 ease-in-out rounded-full hover:bg-gray-300 hover:text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor">
                                             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                  d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z" />
                                        </svg>
                                   </button>
                                   <div class="font-semibold uppercase">
                                        {{ data.topic.name }}
                                   </div>
                                   <button @click="toggle.topic = true"
                                        class="p-2 mx-2 text-red-500 duration-200 ease-in-out rounded-full hover:bg-gray-300 hover:text-gray-700">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                             viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                             <path stroke-linecap="round" stroke-linejoin="round"
                                                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                   </button>
                              </div>
                              <div class="h-auto pt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg">

                                   <div class="items-center justify-center m-5" v-if="data.page.id">
                                        <div class="flex justify-center items-center">
                                             <div class="w-2/3">
                                                  <input type="text"
                                                       class="w-full border-2 border-blue-200 p-1 px-4 rounded-md focus:outline-none focus:ring"
                                                       placeholder="title" v-model="data.page.title">
                                             </div>
                                             <div class="w-1/3">
                                                  <div class="w-full flex justify-start mx-5">
                                                       <input class="mx-2" type="radio" name="type" id="intro"
                                                            v-model="data.page.type" value="intro">
                                                       <label for="intro">Pengenalan</label>
                                                       <input class="mx-2" type="radio" name="type" id="materi"
                                                            v-model="data.page.type" value="materi">
                                                       <label for="materi">Materi</label>
                                                       <input class="mx-2" type="radio" name="type" id="soal"
                                                            v-model="data.page.type" value="soal">
                                                       <label for="soal" >Soal</label>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="w-full">
                                             <button
                                                  class="bg-blue-500 hover:bg-blue-700 w-36 rounded-xl my-2 p-1 font-semibold text-white transition-all duration-150"
                                                  @click="editPage">Simpan</button>
                                        </div>
                                   </div>
                                   <div class="flex flex-col items-center justify-center m-5" v-else>
                                        <span><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none"
                                                  viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                  <path stroke-linecap="round" stroke-linejoin="round"
                                                       d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                             </svg>
                                        </span>Materi belum dipilih, silahkan dipilih terlebih dahulu
                                   </div>
                              </div>
                              <div class="h-auto pt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg"
                                   v-if="data.page.id">
                                   <div class="items-center justify-center m-5" v-if="data.page.type == 'soal'">
                                        <div class="text-xl font-bold text-center my-5">Soal</div>
                                        <ol class="list-decimal">
                                             <li class="ml-6 text-lg font-semibold my-2" v-for="question in data.questions" :key="question.id">
                                                  <div class="text-lg font-semibold" v-html="question.question"></div>
                                                  <div class="">A. {{ question.a }}</div>
                                                  <div class="">B. {{ question.b }}</div>
                                                  <div class="">C. {{ question.c }}</div>
                                                  <div class="">D. {{ question.d }}</div>
                                                  <div class="">E. {{ question.e }}</div>
                                                  <div class="">F. {{ question.f }}</div>
                                                  <div>Jawaban : {{question.answer}}</div>
                                                  <button class="bg-red-500 px-4 rounded-lg text-white" @click="delQuestion(question.id)">Hapus Soal</button>
                                             </li>
                                        </ol>
                                        <div class="bg-gray-300 h-1 w-full rounded-xl my-2"></div>
                                        <div class="my-4" v-if="toggle.question">
                                             <div class="text-lg font-bold text-center my-2">Buat Soal</div>
                                             <editor v-model="form.question.question"
                                                  api-key='ieo3ngna81f07ugt1ozsx03uwsrifyf2zsvbi6xxzbxnwxc2' :init="{
                                                       height: 300,
                                                       plugins: 'lists link image table code help wordcount',
                                                  }" />
                                             <div class="flex flex-col">
                                                  <div class="text-lg font-semibold ml-12 mt-6">Pilihan Ganda</div>
                                                  <div class="flex p-2 mt-2">
                                                       <div class="font-semibold flex items-center w-full">
                                                            <div class="p-2">A.</div> 
                                                            <input type="text" class=" w-full p-2 border-2 rounded-lg" v-model="form.question.a">
                                                       </div>
                                                  </div>
                                                  <div class="flex p-2 mt-2">
                                                       <div class="font-semibold flex items-center w-full">
                                                            <div class="p-2">B.</div> 
                                                            <input type="text" class=" w-full p-2 border-2 rounded-lg" v-model="form.question.b">
                                                       </div>
                                                  </div>
                                                  <div class="flex p-2 mt-2">
                                                       <div class="font-semibold flex items-center w-full">
                                                            <div class="p-2">C.</div> 
                                                            <input type="text" class=" w-full p-2 border-2 rounded-lg" v-model="form.question.c">
                                                       </div>
                                                  </div>
                                                  <div class="flex p-2 mt-2">
                                                       <div class="font-semibold flex items-center w-full">
                                                            <div class="p-2">D.</div> 
                                                            <input type="text" class=" w-full p-2 border-2 rounded-lg" v-model="form.question.d">
                                                       </div>
                                                  </div>
                                                  <div class="flex p-2 mt-2">
                                                       <div class="font-semibold flex items-center w-full">
                                                            <div class="p-2">E.</div> 
                                                            <input type="text" class=" w-full p-2 border-2 rounded-lg" v-model="form.question.e">
                                                       </div>
                                                  </div>
                                                  <div class="flex p-2 mt-2">
                                                       <div class="font-semibold flex items-center w-full">
                                                            <div class="p-2">F.</div> 
                                                            <input type="text" class=" w-full p-2 border-2 rounded-lg" v-model="form.question.f">
                                                       </div>
                                                  </div>
                                                  <div class="font-semibold mt-2 ml-2">Jawaban</div>
                                                  <div class="flex p-2 mt-2">
                                                       <div class="font-semibold flex items-center w-full">
                                                            <input type="text" class=" w-20 p-2 border-2 rounded-lg" placeholder="A.." v-model="form.question.answer">
                                                       </div>
                                                  </div>
                                             </div>
                                             <button class="bg-blue-600 text-white px-4 py-1 mx-2 my-2 rounded-lg focus:border-none" @click="createQuestion">Simpan</button>
                                             <button class="bg-red-600 text-white px-4 py-1 mx-2 my-2 rounded-lg focus:border-none" @click="toggle.question = false">Batal</button>
                                        </div>
                                        <button @click="toggle.question = true" v-if="toggle.question != true"
                                             class="bg-green-600 text-white px-4 py-1 rounded-lg hover:bg-green-700 duration-150 transition-all">Tambah
                                             Soal</button>
                                        <button
                                             class="bg-red-500 hover:bg-red-700 w-full rounded-xl my-2 mb-12 p-1 font-semibold text-white transition-all duration-150"
                                             @click="deletePage">Hapus Materi</button>
                                   </div>
                                   <div class="items-center justify-center m-5" v-else>
                                        <div class="text-xl font-bold text-center my-5">Content</div>
                                        <div>
                                             <editor v-model="data.page.content"
                                                  api-key='ieo3ngna81f07ugt1ozsx03uwsrifyf2zsvbi6xxzbxnwxc2' :init="{
                                                       height: 500,
                                                       plugins: 'lists link image table code help wordcount',
                                                  }" />
                                        </div>
                                        <button
                                             class="bg-blue-500 hover:bg-blue-700 w-full rounded-xl my-2 mb-2 p-1 font-semibold text-white transition-all duration-150"
                                             @click="editPage">Simpan</button>
                                        <button
                                             class="bg-red-500 hover:bg-red-700 w-full rounded-xl my-2 mb-12 p-1 font-semibold text-white transition-all duration-150"
                                             @click="deletePage">Hapus Materi</button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
     <Modal v-if="false">
          <div>
               <div class="px-4 pt-5 pb-4 bg-white rounded-md sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                         <div
                              class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" fill="none"
                                   viewBox="0 0 24 24" stroke="currentColor">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4v16m8-8H4" />
                              </svg>
                         </div>
                         <div class="mt-3 text-center rounded-md sm:mt-0 sm:ml-4 sm:text-left">
                              <h3 class="text-lg font-medium leading-6 text-gray-900 " id="modal-title">
                                   Hapus materi ini?
                              </h3>
                              <div class="mt-2">
                                   Nama
                              </div>
                         </div>
                    </div>
               </div>
               <div class="px-4 py-3 rounded-bS-md bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button type="button"
                         class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                         Hapus
                    </button>
                    <button type="button"
                         class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                         Batal
                    </button>
               </div>
          </div>
     </Modal>
     <Modal v-if="loading.load">
          <div v-if="loading.text" class="flex justify-center p-5 font-semibold text-blue-400">
               <div class="flex flex-col items-center text-blue-300">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10" viewBox="0 0 20 20" fill="currentColor">
                         <path fill-rule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clip-rule="evenodd" />
                    </svg>
                    <div>Berhasil diproses</div>
               </div>
          </div>
          <div v-else>
               <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="
					margin: auto;
					background: none;
					display: block;
					shape-rendering: auto;
				" width="80px" height="80px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
                    <circle cx="50" cy="50" r="0" fill="none" stroke="#88e1f2" stroke-width="11">
                         <animate attributeName="r" repeatCount="indefinite" dur="1.7543859649122806s" values="0;24"
                              keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="0s" />
                         <animate attributeName="opacity" repeatCount="indefinite" dur="1.7543859649122806s"
                              values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline" begin="0s" />
                    </circle>
                    <circle cx="50" cy="50" r="0" fill="none" stroke="#88e1f2" stroke-width="11">
                         <animate attributeName="r" repeatCount="indefinite" dur="1.7543859649122806s" values="0;24"
                              keyTimes="0;1" keySplines="0 0.2 0.8 1" calcMode="spline" begin="-0.8771929824561403s" />
                         <animate attributeName="opacity" repeatCount="indefinite" dur="1.7543859649122806s"
                              values="1;0" keyTimes="0;1" keySplines="0.2 0 0.8 1" calcMode="spline"
                              begin="-0.8771929824561403s" />
                    </circle>
               </svg>
          </div>
     </Modal>
     <Modal v-if="toggle.topic">
          <div>
               <div class="px-4 pt-5 pb-4 bg-white rounded-md sm:p-6 sm:pb-4">
                    <div class="sm:flex sm:items-start">
                         <div
                              class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10">
                              <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 text-red-600" fill="none"
                                   viewBox="0 0 24 24" stroke="currentColor">
                                   <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 4v16m8-8H4" />
                              </svg>
                         </div>
                         <div class="mt-3 text-center rounded-md sm:mt-0 sm:ml-4 sm:text-left">
                              <h3 class="text-lg font-medium leading-6 text-gray-900 " id="modal-title">
                                   Hapus Topic ini?
                              </h3>
                              <div class="mt-2">
                                   {{ data.topic.name }}
                              </div>
                         </div>
                    </div>
               </div>
               <div class="px-4 py-3 rounded-bS-md bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse">
                    <button @click="delTopic" type="button"
                         class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm">
                         Hapus
                    </button>
                    <button @click="toggle.topic = false" type="button"
                         class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm">
                         Batal
                    </button>
               </div>
          </div>
     </Modal>
</template>
<script>
import Header from "@/components/app/admin/Header"
import Modal from "@/components/Modal"
import { useRoute } from "vue-router"
import { onMounted, reactive, ref } from "@vue/runtime-core"
import axios from "axios"
import router from "@/router"
import Editor from '@tinymce/tinymce-vue'

export default {
     title: "Materi Pembelajaran  | Panel Belajar Koding",
     guardPermission: "change materi",
     components: {
          Header,
          Modal,
          "editor": Editor
     },
     setup() {
          onMounted(() => {
               code.value = route.params.code
               topicGet()
               
          })
          const form = reactive({
               page: {
                    type: 'intro',
                    content: ' ',
                    title: 'Materi Default'
               },
               question:{
                    question: '',
                    a:'',
                    b:'',
                    c:'',
                    d:'',
                    e:'',
                    f:'',
                    answer:'',
               }
          })
          const route = useRoute()
          const loading = reactive({
               load: false,
               text: false,
          })
          const content = reactive({
               id: '',
               data: ''
          })
          const data = reactive({
               topic: '',
               page: '',
               questions:'',
          })
          // Toggle
          const toggle = reactive({
               topic: false,
               question: false
          })
          const code = ref()
          const delTopic = async () => {
               try {
                    toggle.topic = false
                    loading.load = true
                    loading.text = false
                    await axios.get("sanctum/csrf-cookie")
                    await axios.post("api/materi/studyclass/delTopic", { code: code })
                    setTimeout(() => {
                         loading.load = false
                    }, 1000)
                    loading.text = true
                    setTimeout(() => {
                         router.back()
                    }, 1000)
               } catch (error) {
                    console.log(error);
               }
          }
          const createPage = async () => {
               try {
                    loading.load = true
                    loading.text = false
                    await axios.get("sanctum/csrf-cookie")
                    await axios.post("api/materi/studyclass/addPage", {
                         id: data.topic.id,
                         title: form.page.title,
                         type: form.page.type,
                         content: form.page.content
                    })
                    setTimeout(() => {
                         loading.load = false
                    }, 1000)
                    loading.text = true
                    toggle.bagian = false
                    topicGet()
               } catch (error) {
                    console.log(error);
               }
          }
          const topicGet = async () => {
               try {
                    data.loadData = true
                    await axios.get("sanctum/csrf-cookie")
                    let response = await axios.post("api/materi/studyclass/getPages", {
                         code: code.value,
                    })
                    data.topic = response.data
                    data.loadData = false
               } catch (error) {
                    data.loadData = false
                    console.log(error.response.data.errors)
               }
          }
          const pageGet = async (id) => {
               try {
                    data.loadData = true
                    await axios.get("sanctum/csrf-cookie")
                    let response = await axios.post("api/materi/studyclass/page", {
                         id: id,
                    })
                    getQuestions()
                    data.page = response.data
                    data.loadData = false
               } catch (error) {
                    data.loadData = false
                    console.log(error.response.data.errors)
               }
          }
          const editPage = async () => {
               try {
                    loading.load = true
                    loading.text = false
                    await axios.get("sanctum/csrf-cookie")
                    await axios.post("api/materi/studyclass/editPage", {
                         id: data.page.id,
                         title: data.page.title,
                         type: data.page.type,
                         content: data.page.content
                    })
                    setTimeout(() => {
                         loading.load = false
                    }, 1000)
                    loading.text = true
                    toggle.bagian = false
                    topicGet()
               } catch (error) {
                    console.log(error);
               }
          }
          const deletePage = async () => {
               try {
                    loading.load = true
                    loading.text = false
                    await axios.get("sanctum/csrf-cookie")
                    await axios.post("api/materi/studyclass/deletePage", {
                         id: data.page.id,
                    })
                    setTimeout(() => {
                         loading.load = false
                    }, 1000)
                    loading.text = true
                    toggle.bagian = false
                    topicGet()
               } catch (error) {
                    console.log(error);
               }
          }
          const createQuestion = async () => {
               try {
                    loading.load = true
                    loading.text = false
                    await axios.get("sanctum/csrf-cookie")
                    await axios.post("api/materi/studyclass/addQuestion", {
                         id: data.page.id,
                         question: form.question.question,
                         a: form.question.a,
                         b: form.question.b,
                         c: form.question.c,
                         d: form.question.d,
                         e: form.question.e,
                         f: form.question.f,
                         answer: form.question.answer,
                    })
                    getQuestions()
                    setTimeout(() => {
                         loading.load = false
                    }, 1000)
                    loading.text = true
                    toggle.bagian = false
                    topicGet()
               } catch (error) {
                    console.log(error);
               }
          }
          const getQuestions = async () => {
               try {
                    loading.load = true
                    loading.text = false
                    await axios.get("sanctum/csrf-cookie")
                    let response = await axios.post("api/materi/studyclass/getQuestions", {
                         page_id: data.page.id,
                    })
                    data.questions = response.data
                    setTimeout(() => {
                         loading.load = false
                    }, 1000)
                    loading.text = true
                    toggle.bagian = false
               } catch (error) {
                    console.log(error);
               }
          }
          const delQuestion = async (id) => {
               try {
                    loading.load = true
                    loading.text = false
                    await axios.get("sanctum/csrf-cookie")
                    await axios.post("api/materi/studyclass/delQuestion", {
                         id: id,
                    })
                    setTimeout(() => {
                         loading.load = false
                    }, 1000)
                    loading.text = true
                    toggle.bagian = false
                    getQuestions()
               } catch (error) {
                    console.log(error);
               }
          }
          return {
               form,
               createPage,
               getQuestions,
               createQuestion,
               editPage,
               deletePage,
               data,
               delTopic,
               loading,
               toggle,
               pageGet,
               content,
               delQuestion
          }
     },
}
</script>