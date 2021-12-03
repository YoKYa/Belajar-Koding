<template>
	<div id="journal-scroll">
		<Header />

		<div class="flex h-screen pt-14">
			<Sidebar />

			<div
				class="w-full h-full overflow-auto shadow"
				id="journal-scroll"
			>
				<div class="w-full px-4 mx-auto mt-8 mb-12 xl:mb-0">
					<div
						class="relative flex flex-col w-full min-w-0 mb-6 break-words bg-white rounded shadow-lg "
					>
						<div class="px-4 py-3 mb-0 border-0 rounded-t">
							<div class="flex flex-wrap items-center">
								<div
									class="relative flex-1 flex-grow w-full max-w-full px-4 bg-white "
								>
									<h3
										class="text-base font-semibold text-blueGray-700"
									>
										Table of Users
									</h3>
								</div>
							</div>
						</div>

						<div class="block w-full overflow-x-auto">
							<table
								class="items-center w-full bg-transparent border-collapse "
							>
								<thead>
									<tr>
										<th
											class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-md bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
										>
											#
										</th>
										<th
											class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-md bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
										>
											Name
										</th>
										<th
											class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-md bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
										>
											Username
										</th>
										<th
											class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-md bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
										>
											Email
										</th>
                                                  <th
											class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-md bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
										>
											Created At
										</th>
										<th
											class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-md bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
										>
											Act
										</th>
									</tr>
								</thead>

								<tbody>
									<tr v-for="user in users" :key="user.id">
										<th
											class="p-4 px-6 text-left border-t-0 border-l-0 border-r-0 text-md align-center whitespace-nowrap"
										>
											{{ user.id }}
										</th>
										<td
											class="p-4 px-6 border-t-0 border-l-0 border-r-0 text-md align-center whitespace-nowrap"
										>
											{{ user.name }}
										</td>
										<td
											class="p-4 px-6 border-t-0 border-l-0 border-r-0 text-md align-center whitespace-nowrap"
										>
											{{ user.username }}
										</td>
										<td
											class="p-4 px-6 border-t-0 border-l-0 border-r-0 text-md align-center whitespace-nowrap"
										>
											{{ user.email }}
										</td>
                                                  <td
											class="p-4 px-6 border-t-0 border-l-0 border-r-0 text-md align-center whitespace-nowrap"
										>
											{{ format_date(user.created_at) }}
										</td>
										<td
											class="p-4 px-6 border-t-0 border-l-0 border-r-0 text-md align-center whitespace-nowrap"
										>
											<router-link :to="`/app/admin/users/${user.username}`"
												class="px-4 py-1 mx-2 text-white bg-blue-400 rounded-full hover:bg-blue-500"
                                                            v-if="checkUser.editUser"
											>
												Edit
											</router-link>
											<button
                                                       v-if="checkUser.deleteUser"
                                                       @click="
													deleteUser(
														user.id, user.username
													)
												"
												class="px-4 py-1 mx-2 text-white bg-red-400 rounded-full hover:bg-red-500"
											>
												Delete
											</button>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
     <Modal v-show="deleteOpen">
		<div>
			<div class="px-4 pt-5 pb-4 bg-white rounded-md sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
					<div
						class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
					>
						<!-- Heroicon name: outline/exclamation -->
						<svg
							class="w-6 h-6 text-red-600"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
							aria-hidden="true"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
							/>
						</svg>
					</div>
					<div
						class="mt-3 text-center rounded-md sm:mt-0 sm:ml-4 sm:text-left"
					>
						<h3
							class="text-lg font-medium leading-6 text-gray-900 "
							id="modal-title"
						>
							Hapus User ?
						</h3>
						<div class="mt-2">
							<p class="text-sm text-gray-500">
								Apakah kamu yakin menghapus User ini
								<span class="font-bold">{{
									form.username
								}}</span>
							</p>
						</div>
					</div>
				</div>
			</div>
			<div
				class="px-4 py-3 rounded-b-md bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse"
			>
				<button
					type="button"
					class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
					@click="deleteUserStore"
				>
					Hapus
				</button>
				<button
					type="button"
					class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
					@click="deleteOpen = false"
				>
					Batal
				</button>
			</div>
		</div>
	</Modal>
	<Modal v-if="loading.load">
		<div
			v-if="loading.text"
			class="flex justify-center p-5 font-semibold text-blue-400"
		>
			<div class="flex flex-col items-center text-blue-300">
				<svg
					xmlns="http://www.w3.org/2000/svg"
					class="w-10 h-10"
					viewBox="0 0 20 20"
					fill="currentColor"
				>
					<path
						fill-rule="evenodd"
						d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
						clip-rule="evenodd"
					/>
				</svg>
				<div>Berhasil diproses</div>
			</div>
		</div>
		<div v-else>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				xmlns:xlink="http://www.w3.org/1999/xlink"
				style="
					margin: auto;
					background: none;
					display: block;
					shape-rendering: auto;
				"
				width="80px"
				height="80px"
				viewBox="0 0 100 100"
				preserveAspectRatio="xMidYMid"
			>
				<circle
					cx="50"
					cy="50"
					r="0"
					fill="none"
					stroke="#88e1f2"
					stroke-width="11"
				>
					<animate
						attributeName="r"
						repeatCount="indefinite"
						dur="1.7543859649122806s"
						values="0;24"
						keyTimes="0;1"
						keySplines="0 0.2 0.8 1"
						calcMode="spline"
						begin="0s"
					/>
					<animate
						attributeName="opacity"
						repeatCount="indefinite"
						dur="1.7543859649122806s"
						values="1;0"
						keyTimes="0;1"
						keySplines="0.2 0 0.8 1"
						calcMode="spline"
						begin="0s"
					/>
				</circle>
				<circle
					cx="50"
					cy="50"
					r="0"
					fill="none"
					stroke="#88e1f2"
					stroke-width="11"
				>
					<animate
						attributeName="r"
						repeatCount="indefinite"
						dur="1.7543859649122806s"
						values="0;24"
						keyTimes="0;1"
						keySplines="0 0.2 0.8 1"
						calcMode="spline"
						begin="-0.8771929824561403s"
					/>
					<animate
						attributeName="opacity"
						repeatCount="indefinite"
						dur="1.7543859649122806s"
						values="1;0"
						keyTimes="0;1"
						keySplines="0.2 0 0.8 1"
						calcMode="spline"
						begin="-0.8771929824561403s"
					/>
				</circle>
			</svg>
		</div>
	</Modal>
</template>
<script>
import Sidebar from "@/components/app/admin/Sidebar";
import Header from "@/components/app/admin/Header";
import Modal from "@/components/Modal";
import axios from 'axios';
import moment from "moment";
import { computed, reactive, ref } from "vue";
import store from "@/store";
import { onMounted } from '@vue/runtime-core';

export default {
	title: "Show Users  | Panel Belajar Koding",
	guardPermission: "show users",
	components: { Sidebar, Header, Modal },
	setup() {
          const user = computed(() => store.getters["auth/user"]);
          const users = ref([])
		const loading = reactive({
			load: false,
			text: false,
		});
          const deleteOpen = ref(false)
          const form = reactive({
               'id' : '',
               'username' : ''
          })
          const deleteUserStore = async () => {
			try {
				deleteOpen.value = false;
				loading.load = true;
				loading.text = false;
				await axios.get("sanctum/csrf-cookie");
				await axios.post("api/user/delete", { id: form.id });
				loading.text = true;
				setTimeout(() => {
					loading.load = false;
					loading.text = false;
					form.id = "";
					form.username = "";
                         load()
				}, 1000);
			} catch (error) {
				console.log(error);
			}
		};
          const deleteUser = (id, username) => {
               deleteOpen.value = true
               form.id = id
               form.username = username
          }
          const load = async () => {
               try {
                    await axios.get("sanctum/csrf-cookie")
                    let response = await axios.get("api/user")
                    users.value = response.data
               } catch (error) {
                    console.log(error.response.data)
               }
          }
          function format_date(value) {
			if (value) {
				return moment(String(value)).locale("id").format("LL");
			}
		}
          const checkUser = reactive({
               'editUser' : false,
               'deleteUser' : false
          })
          if (user.value.roles[0].name == "super admin") {
			checkUser.editUser = true
               checkUser.deleteUser = true
               } else {
                    user.value.roles.forEach((role) => {
                         role.permissions.forEach((permission) => {
                              if (permission.name == "edit user") {
                                   checkUser.editUser = true
                              }
                              if (permission.name == "delete user") {
                                   checkUser.deleteUser = true
                              }
                         });
                    });
               }
          onMounted (()=>{
               load()
          })
          return {users, format_date, loading, deleteOpen, deleteUser, form, deleteUserStore, checkUser}
     },
};
</script>
