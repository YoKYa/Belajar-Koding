<template lang="">
    <div class="w-4/12 m-5 ml-3">
                <div class="flex justify-end text-lg font-semibold">
                    <div
                        class="py-1 pl-6 pr-4 text-white bg-green-400 rounded-tl-full "
                    >
                        Profil
                    </div>
                </div>
                <div
                    class="flex flex-col items-center bg-green-400 border-gray-400 shadow-md "
                >
                    <div class="w-24 h-24 my-4 bg-gray-100 rounded-full flex justify-center items-center">
                    <div v-if="toggle" class="text-4xl ">{{ picture }}</div>
                    <img
                            :src="picture"
                            v-else
                            class="rounded-full"
                            width="60"
                            alt="profile"
                        />
                    
                                        </div>
                    <div class="text-white uppercase">{{ user.name }}</div>
                    <div class="w-full">
                        
                        <router-link :to="{name: 'Profile'}" class="flex justify-end m-2 text-sm text-white">
                            Lihat Selengkapnya
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                class="w-5 h-5"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                />
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                                    clip-rule="evenodd"
                                />
                            </svg>
                        </router-link>
                    </div>
                </div>
            </div>
</template>
<script>
import store from "@/store";
import { computed, onMounted, ref } from "vue";
export default {
     setup() {
          onMounted(() => {
               check()
          })
          const user = computed(() => store.getters["auth/user"]).value;
          const base = computed(
               () => store.getters["baseurl/urlStorage"]
          ).value
          const picture = ref('');
          const toggle = ref()
          const check = async () => {
               if (user.picture == null || user.picture == "") {
                    let name = user.name;
                    picture.value = name.substring(0, 1);
               } else {
                    picture.value = computed(() => store.getters["baseurl/urlStorage"]).value + user.picture;
               }
               if (picture.value.length == 1) {
                    toggle.value = true
               }else{
                    toggle.value = false
               }
          }

          return { user, base, picture, toggle }

     }
};
</script>