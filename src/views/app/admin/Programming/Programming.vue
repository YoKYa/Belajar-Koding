<template>
	<div id="journal-scroll">
		<Header />

		<div class="flex h-screen pt-14">
			<Sidebar />

			<div
				class="container w-full h-full overflow-auto shadow"
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
										Add Language Program
									</h3>
								</div>
							</div>
						</div>

						<div class="block w-full overflow-x-auto">
							<div class="flex">
								<input
									type="text"
									class="w-1/3 px-2 py-2 mx-6 mt-4 border-2 rounded-md focus:outline-none focus:border-blue-300"
									placeholder="Name"
									required
									maxlength="100"
									v-model="form.name"
									v-bind:class="{
										'border-red-500':
											errorsCreate,
									}"
								/>
							</div>
							<div class="flex m-6 mb-0">
								<div class="m-8 mb-0">
									<label
										class="flex flex-col items-center w-64 px-4 py-6 tracking-wide text-blue-500 uppercase bg-white border border-blue-200 rounded-lg shadow-lg cursor-pointer hover:bg-blue-400 hover:text-white"
									>
										<svg
											class="w-8 h-8"
											fill="currentColor"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 20 20"
										>
											<path
												d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z"
											/>
										</svg>
										<span
											class="mt-2 text-base leading-normal "
											>Select a file</span
										>
										<input
											type="file"
											class="hidden"
											accept="image/*"
											@change="
												uploadImage($event)
											"
										/>
									</label>
								</div>
								<div class="w-44 h-44 ml-44">
									<img :src="img" />
								</div>
							</div>

							<div class="flex">
								<textarea
									type="text"
									class="w-full px-2 py-2 m-6 border-2 rounded-md focus:outline-none focus:border-blue-300"
									required
									placeholder="Deskripsi"
									v-model="form.description"
									v-bind:class="{
										'border-red-500':
											errorsCreate,
									}"
								>
								</textarea>
							</div>

							<div class="flex justify-between">
								<button
									v-if="!edit"
									class="w-1/5 p-2 m-6 mt-0 font-semibold text-white bg-blue-400 rounded-md focus:ring focus:ring-blue-300 hover:bg-blue-500"
									@click="create"
								>
									Create
								</button>
								<div
									class="flex w-1/2 p-2 m-5 mt-0"
									v-else
								>
									<button
										@click="updateLanguage"
										class="w-1/5 p-2 ml-0 mr-2 font-semibold text-white bg-blue-400 rounded-md pr- focus:ring focus:ring-blue-300 hover:bg-blue-500"
									>
										Update
									</button>
									<button
										@click="cancel"
										class="w-1/5 p-2 mx-2 font-semibold text-white bg-red-400 rounded-md focus:ring focus:ring-red-300 hover:bg-red-500"
									>
										Cancel
									</button>
								</div>

								<button
									class="m-6 text-red-500"
									v-if="edit"
									@click="deleteLanguage(form.id)"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="w-6 h-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
										/>
									</svg>
								</button>
							</div>
						</div>
					</div>
				</div>
				<!-- Belum -->
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
										Table of Programming Language
									</h3>
								</div>
							</div>
						</div>

						<div class="block w-full overflow-x-auto">
							<div
								class="px-4 py-4 -mx-4 overflow-x-auto sm:-mx-8 sm:px-8"
							>
								<div
									class="inline-block min-w-full overflow-hidden rounded-lg shadow "
								>
									<table
										class="min-w-full leading-normal "
									>
										<thead>
											<tr>
												<th
													class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200 "
												>
													Language
												</th>
												<th
													class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200 "
												>
													Slug
												</th>
												<th
													class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200 "
												>
													Created at
												</th>
												<th
													class="px-5 py-3 text-xs font-semibold tracking-wider text-left text-gray-600 uppercase bg-gray-100 border-b-2 border-gray-200 "
												>
													Action
												</th>
											</tr>
										</thead>
										<tbody>
											<tr
												v-for="language in data.language"
												:key="language.id"
											>
												<td
													class="px-5 py-5 text-sm bg-white border-b border-gray-200 "
												>
													<div
														class="flex items-center "
													>
														<div
															class="flex-shrink-0 w-10 h-10 "
														>
															<img
																class="w-full h-full rounded-full "
																:src="
																	base +
																	language.picture
																"
															/>
														</div>
														<div
															class="ml-3 "
														>
															<p
																class="text-gray-900 whitespace-no-wrap "
															>
																{{
																	language.name
																}}
															</p>
														</div>
													</div>
												</td>
												<td
													class="px-5 py-5 text-sm bg-white border-b border-gray-200 "
												>
													<p
														class="text-gray-900 whitespace-no-wrap "
													>
														{{
															language.slug
														}}
													</p>
												</td>
												<td
													class="px-5 py-5 text-sm bg-white border-b border-gray-200 "
												>
													<p
														class="text-gray-900 whitespace-no-wrap "
													>
														{{
															format_date(
																language.created_at
															)
														}}
													</p>
												</td>
												<td
													class="px-5 py-5 text-sm bg-white border-b border-gray-200 "
												>
													<button
														class="relative inline-block px-3 py-1 mx-2 font-semibold leading-tight text-yellow-900 "
													>
														<span
															aria-hidden
															class="absolute inset-0 bg-yellow-200 rounded-full opacity-50 "
														></span>
														<span
															@click="
																editLanguage(
																	language.id
																)
															"
															class="relative "
															>Edit</span
														>
													</button>
													<button
														class="relative inline-block px-3 py-1 mx-2 font-semibold leading-tight text-red-900 "
													>
														<span
															aria-hidden
															class="absolute inset-0 bg-red-200 rounded-full opacity-50 "
														></span>
														<span
															class="relative "
															@click="
																deleteLanguage(
																	language.id
																)
															"
															>Delete</span
														>
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
							Hapus ?
						</h3>
						<div class="mt-2">
							<p class="text-sm text-gray-500">
								Apakah kamu yakin menghapus 
								<span class="font-bold">{{
									form.name
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
					@click="deleteLanguageStore"
				>
					Hapus
				</button>
				<button
					type="button"
					class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
					@click="cancelDelete"
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
import Modal from "@/components/Modal";
import store from "@/store";
import Header from "@/components/app/admin/Header";
import moment from "moment";
import { onMounted, ref, reactive, computed } from "@vue/runtime-core";
import axios from "axios";
export default {
	title: "Programming Language  | Panel Belajar Koding",
	guardPermission: "change programmingLanguage",
	components: { Sidebar, Header, Modal },
	setup() {
		const errors = ref([]);
		const loading = reactive({
			load: false,
			text: false,
		});
		const errorsCreate = ref(false);
		const data = reactive({
			language: "",
		});
		const base = computed(
			() => store.getters["baseurl/urlStorage"]
		).value;
		const form = reactive({
			id: "",
			name: "",
			picture: "",
			description: "",
		});
		const formSend = new FormData();
		const edit = ref(false);
		const deleteOpen = ref(false);

		// Image
		const img = ref("");
		const reader = new FileReader();
		const uploadImage = (event) => {
			form.picture = event.target.files[0];
			reader.readAsDataURL(form.picture);
			reader.onload = (ev) => {
				img.value = ev.target.result;
			};
		};
		// Create
		const create = async () => {
			if (form.name == "" && form.picture == "") {
				errorsCreate.value = true;
			} else {
				errorsCreate.value = false;
				try {
					loading.load = true;
					loading.text = false;

					formSend.append("name", form.name);
					formSend.append("description", form.description);
					formSend.append("picture", form.picture);
					await axios.get("sanctum/csrf-cookie");
					await axios.post(
						"api/programminglanguage/create",
						formSend
					);
					loading.text = true;
					setTimeout(() => {
						loading.load = false;
						formSend.append("name", "");
						formSend.append("description", "");
						formSend.append("picture", "");
						form.name = "";
						form.description = "";
						form.picture = "";
						img.value = "";
					}, 1000);
					languageGet();
				} catch (error) {
					console.log(error.response);
				}
			}
		};
		const languageGet = async () => {
			try {
				await axios.get("sanctum/csrf-cookie");
				let response = await axios.get("api/programminglanguage");
				data.language = response.data;
			} catch (error) {
				console.log(error.response.data.errors);
				errors.value = error.response.data.errors;
			}
		};
		function format_date(value) {
			if (value) {
				return moment(String(value)).locale("id").format("LLLL");
			}
		}

		const editLanguage = async (id) => {
			data.language.forEach((language) => {
				if (language.id == id) {
					form.name = language.name;
					form.id = language.id;
					form.description = language.description;
					img.value = base + language.picture;
					edit.value = true;
				}
			});
		};

		const deleteLanguage = (id) => {
			editLanguage(id);
			deleteOpen.value = true;
			edit.value = true;
		};
		const deleteLanguageStore = async () => {
			try {
				deleteOpen.value = false;
				loading.load = true;
				loading.text = false;
				await axios.get("sanctum/csrf-cookie");
				await axios.post("api/programminglanguage/delete", {
					id: form.id,
				});
				loading.text = true;
				setTimeout(() => {
					loading.load = false;
					loading.text = false;
					form.id = "";

					form.name = "";
					form.description = "";
					form.picture = "";
					img.value = "";
					edit.value = false;
				}, 1000);
				languageGet();
			} catch (error) {
				console.log(error);
			}
		};

		const updateLanguage = async () => {
			if (form.name == "") {
				errorsCreate.value = true;
			} else {
				errorsCreate.value = false;
				try {
					loading.load = true;
					loading.text = false;
					formSend.append("id", form.id);
					formSend.append("name", form.name);
					formSend.append("description", form.description);
					formSend.append("picture", form.picture);
					await axios.get("sanctum/csrf-cookie");
					await axios.post(
						"api/programminglanguage/store",
						formSend
					);
					loading.text = true;
					setTimeout(() => {
						loading.load = false;
						formSend.append("id", "");
						formSend.append("name", "");
						formSend.append("description", "");
						formSend.append("picture", "");
						form.name = "";
						form.description = "";
						form.picture = "";
						img.value = "";
					}, 1000);
					languageGet();
				} catch (error) {
					console.log(error.response.data.errors);
					errors.value = error.response.data.errors;
				}
			}
		};
		const cancelDelete = () => {
			deleteOpen.value = false;
			form.id = "";
			form.name = "";
			form.description = "";
               form.picture = "";
						img.value = "";
			edit.value = false;
		};
		const cancel = () => {
			form.name = "";
			form.description = "";
               form.picture = "";
			img.value = "";
			form.id = "";
			edit.value = false;
		};
		onMounted(() => {
			languageGet();
		});
		return {
			data,
			form,
			create,
			errors,
			errorsCreate,
			loading,
			editLanguage,
			edit,
			cancel,
			cancelDelete,
			updateLanguage,
			deleteLanguage,
			deleteOpen,
			deleteLanguageStore,
			uploadImage,
			img,
			base,
			format_date,
		};
	},
};
</script>

<style>
</style>