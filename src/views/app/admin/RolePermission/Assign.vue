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
									class="relative flex-1 flex-grow w-full max-w-full px-4 "
								>
									<h3
										class="text-base font-semibold text-blueGray-700"
									>
										Assign Permission
									</h3>
								</div>
							</div>
						</div>

						<div class="block w-full overflow-x-auto">
							<div class="flex flex-col">
								<div class="flex flex-col">
									<label class="mt-4 ml-6 text-sm"
										>Role Name</label
									>

									<select
										v-model="form.role"
										@change="sync(form.role)"
										class="px-2 py-2 m-6 mt-2 border-2 rounded-md focus:outline-none focus:border-blue-300"
										v-bind:class="{
											'border-red-500':
												errorsCreate,
										}"
									>
										<option
											v-for="role in data.roles"
											:key="role.id"
										>
											{{ role.name }}
										</option>
									</select>
								</div>

								<div class="flex flex-col">
									<label class="mt-4 ml-6 text-sm"
										>Permission Name</label
									>
									<select
										v-model="form.permissions"
										class="px-2 py-2 m-6 mt-2 border-2 rounded-md focus:outline-none focus:border-blue-300"
										multiple
									>
										<option
											v-for="permission in data.permissions"
											:key="permission.id"
										>
											{{ permission.name }}
										</option>
									</select>
								</div>
								<button
									class="p-2 mx-6 mb-6 text-white bg-blue-400 rounded-lg "
									@click="assign"
								>
									Assign
								</button>
							</div>
						</div>
					</div>
				</div>

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
										Table Assign Permission
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
											Guard Name
										</th>
										<th
											class="px-6 py-3 text-sm font-semibold text-left uppercase align-middle border border-l-0 border-r-0 border-solid text-md bg-blueGray-50 text-blueGray-500 border-blueGray-100 whitespace-nowrap"
										>
											Permission
										</th>
									</tr>
								</thead>

								<tbody>
									<tr
										v-for="role in data.roles"
										:key="role.id"
									>
										<th
											class="p-4 px-6 text-left border-t-0 border-l-0 border-r-0 text-md align-center whitespace-nowrap"
										>
											{{ role.id }}
										</th>
										<td
											class="p-4 px-6 border-t-0 border-l-0 border-r-0 text-md align-center whitespace-nowrap"
										>
											{{ role.name }}
										</td>
										<td
											class="p-4 px-6 border-t-0 border-l-0 border-r-0 text-md align-center whitespace-nowrap"
										>
											{{ role.guard_name }}
										</td>
										<td
											class="flex p-4 px-6 border-t-0 border-l-0 border-r-0 text-md align-center whitespace-nowrap"
										>
                                                       <div v-for="permission in role.permissions" :key="permission.id">
                                                            | {{ permission.name }}  |
                                                       </div>
											
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
import axios from "axios";
import { reactive, ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
import Modal from "@/components/Modal";

export default {
	title: "Assign Permission | Panel Belajar Koding",
     guardPermission: 'change assignPermissions',
	components: { Sidebar, Header, Modal },
	setup() {
		const errors = ref([]);
		const errorsCreate = ref(false);
		const loading = reactive({
			load: false,
			text: false,
		});
		const roleSelect = reactive({});
		const form = reactive({
			role: "",
			permissions: [],
		});
		const data = reactive({
			roles: "",
			permissions: "",
		});
		const assign = async () => {
			if (form.role == "") {
				errorsCreate.value = true;
			} else {
				errorsCreate.value = false;
				try {
					loading.load = true;
					loading.text = false;
					await axios.get("sanctum/csrf-cookie");
					await axios.post("api/assign/store", form);
					loading.text = true;
					setTimeout(() => {
						loading.load = false;
						loading.text = false;
					}, 1000);
                         rolesGet()
				} catch (error) {
					console.log(error.response.data);
					errors.value = error.response.data.errors;
				}
			}
		};
		const sync = async (name) => {
			try {
				await axios.get("sanctum/csrf-cookie");
				let response = await axios.post("api/assign/sync", {
					role: name,
				});
				form.permissions = response.data;
			} catch (error) {
				console.log(error);
			}
		};
		const rolesGet = async () => {
			try {
				form.role = 1;
				await axios.get("sanctum/csrf-cookie");
				let response = await axios.get("api/roles");
				data.roles = response.data;
			} catch (error) {
				console.log(error.response.data.errors);
				errors.value = error.response.data.errors;
			}
		};
		const permissionsGet = async () => {
			try {
				await axios.get("sanctum/csrf-cookie");
				let response = await axios.get("api/permissions");
				data.permissions = response.data;
			} catch (error) {
				console.log(error.response.data.errors);
				errors.value = error.response.data.errors;
			}
		};
		onMounted(() => {
			rolesGet();
			permissionsGet();
		});
		return {
			roleSelect,
			errorsCreate,
			data,
			assign,
			form,
			loading,
			sync,
		};
	},
};
</script>
<style scoped>
</style>


