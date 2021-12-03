<template>
	<div class="absolute top-0 w-full bg-white shadow-lg h-14">
		<div class="flex items-center justify-between mx-5 h-14">
			<router-link
				to="/app/admin"
				class="flex items-center text-lg font-bold uppercase"
				exact-active-class="bg-transparent border-0"
			>
				<img
					src="@/assets/logo-min.png"
					alt="Logo Belajar Koding"
					width="50"
					class="mx-2"
				/>
				Admin Panel
			</router-link>
			<div class="flex items-center">
				<div class="flex mx-2">
                         <div v-for="role in user.roles" :key="role.id" class="mx-1 uppercase"> {{ role.name }} | </div>
                    </div>
				<router-link to="/app" class="mx-2 text-sm text-blue-500">Kembali ke Apilikasi >></router-link>
			</div>
		</div>
	</div>
</template>

<script>
import store from "@/store";
import {computed} from 'vue';
export default {
     setup(){
          const user = computed(() => store.getters["auth/user"]);

          return{user}
     }
};
</script>

<style>
</style>