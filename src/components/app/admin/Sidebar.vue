<template>
	<div class="flex flex-col overflow-x-hidden w-72" id="journal-scroll">
		<div class="flex flex-col px-2 py-1 mt-4 mb-2 ">
			<router-link
				class="p-2 px-4 font-semibold transition duration-500 ease-in-out transform bg-white rounded-md cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg"
				to="/app/admin"
				>Dashboard</router-link
			>
		</div>
          <hr class="mx-4" v-if="checkMateri.check" />
		<div class="flex flex-col px-4 py-1 my-2 ">
			<label class="text-sm text-gray-400" v-if="checkMateri.check">Materi Pembelajaran</label>
			<router-link
				class="p-2 px-4 my-1 font-semibold transition duration-500 ease-in-out transform bg-white rounded-md cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg"
				to="/app/admin/materi"
                    v-if="checkMateri.materi"
				>Materi</router-link
			>
		</div>
          <hr class="mx-4" v-if="checkProgramming.check" />
		<div class="flex flex-col px-4 py-1 my-2 ">
			<label class="text-sm text-gray-400" v-if="checkProgramming.check">Programming Language</label>
			<router-link
				class="p-2 px-4 my-1 font-semibold transition duration-500 ease-in-out transform bg-white rounded-md cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg"
				to="/app/admin/programming"
                    v-if="checkProgramming.language"
				>Language</router-link
			>
		</div>
		<hr class="mx-4" v-if="checkUser.check"/>
		<div class="flex flex-col px-4 py-1 my-2 ">
			<label for="" class="text-sm text-gray-400" v-if="checkUser.check">Users</label>
			<router-link
				class="p-2 px-4 my-1 font-semibold transition duration-500 ease-in-out transform bg-white rounded-md cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg"
				to="/app/admin/users/create"
                    v-if="checkUser.createUser"
				>Create a User</router-link
			>
			<router-link
				class="p-2 px-4 my-1 font-semibold transition duration-500 ease-in-out transform bg-white rounded-md cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg"
				to="/app/admin/users"
                    v-if="checkUser.createUser"
				>Data Table User</router-link
			>
		</div>
		<hr class="mx-4" v-if="checkPermission.check" />
		<div class="flex flex-col px-4 py-1 my-2 ">
			<label for="" class="text-sm text-gray-400" v-if="checkPermission.check"
				>Role & Permission</label
			>
			<router-link
				class="p-2 px-4 my-1 font-semibold transition duration-500 ease-in-out transform bg-white rounded-md cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg"
				to="/app/admin/roles"
				v-if="checkPermission.roles"
				>Roles</router-link
			>
			<router-link
				class="p-2 px-4 my-1 font-semibold transition duration-500 ease-in-out transform bg-white rounded-md cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg"
				to="/app/admin/permissions"
				v-if="checkPermission.permissions"
				>Permission</router-link
			>
			<router-link
				class="p-2 px-4 my-1 font-semibold transition duration-500 ease-in-out transform bg-white rounded-md cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg"
				to="/app/admin/assign"
				v-if="checkPermission.assignPermission"
				>Assign Permission</router-link
			>
			<router-link
				class="p-2 px-4 my-1 font-semibold transition duration-500 ease-in-out transform bg-white rounded-md cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg"
				to="/app/admin/assignuser"
				v-if="checkPermission.permissionToUser"
				>Permission to User</router-link
			>
		</div>
          <hr class="mx-4" v-if="checkQuotes.check"/>
		<div class="flex flex-col px-4 py-1 my-2 ">
			<label class="text-sm text-gray-400" v-if="checkQuotes.check">Quotes</label>
			<router-link
				class="p-2 px-4 my-1 font-semibold transition duration-500 ease-in-out transform bg-white rounded-md cursor-pointer select-none hover:-translate-y-1 hover:shadow-lg"
				to="/app/admin/quotes"
                    v-if="checkQuotes.quotes"
				>Quotes</router-link
			>
		</div>
	</div>
</template>

<script>
import store from "@/store";
import { computed, reactive } from "vue";
import router from '@/router'
export default {
	setup() {
		const user = computed(() => store.getters["auth/user"]);
		const checkPermission = reactive({
			check: false,
			roles: false,
			permissions: false,
			assignPermission: false,
			permissionToUser: false,
		});
          const checkUser = reactive({
               check: false,
               createUser: false,
               showUser:false
          })
          const checkQuotes = reactive({
               check: false,
               quotes: false,
          })
          const checkProgramming = reactive({
               'check' : false,
               'language': false
          })
          const checkMateri = reactive({
               'check' : false,
               'materi': false
          })

          if (user.value.roles.length != 0) {
               if (user.value.roles[0].name == "super admin") {
			checkPermission.roles = true;
			checkPermission.permissions = true;
			checkPermission.assignPermission = true;
			checkPermission.permissionToUser = true;
			checkPermission.check = true;

			checkUser.createUser = true;
               checkUser.showUser = true;
               checkUser.check = true;
               
               checkQuotes.check = true
               checkQuotes.quotes = true
               checkProgramming.check = true
               checkProgramming.language = true
               checkMateri.check = true
               checkMateri.materi = true
               } else {
                    user.value.roles.forEach((role) => {
                         role.permissions.forEach((permission) => {
                              if (permission.name == "change roles") {
                                   checkPermission.roles = true;
                                   checkPermission.check = true;
                              }
                              if (permission.name == "change permissions") {
                                   checkPermission.permissions = true;
                                   checkPermission.check = true;
                              }
                              if (permission.name == "change assignPermissions") {
                                   checkPermission.assignPermission = true;
                                   checkPermission.check = true;
                              }
                              if (permission.name == "change permissionToUser") {
                                   checkPermission.permissionToUser = true;
                                   checkPermission.check = true;
                              }
                              if (permission.name == 'change quotes') {
                                   checkQuotes.check = true
                                   checkQuotes.quotes = true
                              }
                              if (permission.name == 'create user' || permission.name == 'show users' ) {
                                   checkUser.createUser = true;
                                   checkUser.showUser = true;
                                   checkUser.check = true;
                              }
                              if (permission.name == 'change programingLanguage' ) {
                                   checkProgramming.check = true
                                   checkProgramming.language = true
                              }
                              if (permission.name == 'change materi') {
                                   checkMateri.check = true
                                   checkMateri.materi = true
                              }
                         });
                    });
               }
          }else{
               router.push('app/dashboard')
          }
		
		return { checkPermission, checkUser, checkQuotes, checkProgramming, checkMateri };
	},
};
</script>

<style>
</style>