<template>
	<div>
		<Header />
	</div>
	<div v-if="!load" class="flex flex-col items-center my-8">
		<div
			class="flex items-center justify-center w-5/6 overflow-hidden shadow-md bg-gray-50 h-28 rounded-t-xl"
		>
			<img src="@/assets/img/profile/banner.png" alt="" srcset="" />
		</div>
		<div
			class="flex flex-col w-5/6 pt-8 pl-8 bg-white border-t-2 border-blue-400 shadow-md h-96 rounded-b-xl"
		>
			<div
				class="absolute flex items-center justify-center w-32 h-32 ml-10 transform -translate-y-24 border-2 border-blue-400 rounded-full cursor-pointer bg-blue-50"
			>
				<div v-if="picture.length == 1" class="text-6xl">
					<router-link
						to="/app/profile/picture"
						class="flex items-center justify-center w-32 h-32 transition duration-200 ease-in-out rounded-full hover:bg-gray-500"
						exact-active-class="p-2"
					>
						{{ picture }}
					</router-link>
				</div>
				<router-link v-else to="/app/profile/picture">
					<img
						:src="picture"
						class="rounded-full"
						alt="profile"
					/>
				</router-link>
			</div>
			<div class="flex">
				<Menu />
				<div
					class="flex flex-col w-full mx-16 mt-12 text-lg font-semibold transform "
				>
					<div class="flex my-2">
						<label for="" class="w-3/12">Nama </label>
						<div class="w-1/12">:</div>
						<div class="w-8/12" v-if="!edit">
							{{ user.name }}
						</div>
						<input
							type="text"
							class="w-8/12 px-2 border-2 rounded-md"
							v-if="edit"
							v-model="form.name"
						/>
						<div
							class="fixed mt-8 text-xs text-red-500"
							v-if="errors['name']"
						>
							*{{ errors["name"][0] }}
						</div>
					</div>

					<div class="flex my-4">
						<label for="" class="w-3/12">Email </label>
						<div class="w-1/12">:</div>
						<div class="w-8/12" v-if="!edit">
							{{ user.email }}
							<!-- <div
                                v-if="user.email_verified_at == null"
                                class="text-xs text-red-500"
                            >
                                Belum Terverifikasi
                            </div> -->
						</div>
						<input
							type="text"
							class="w-8/12 px-2 border-2 rounded-md"
							v-if="edit"
							v-model="form.email"
						/>
						<div
							class="fixed w-3/5 my-8 mb-1 text-xs text-red-500 "
							v-if="errors['email']"
						>
							*{{ errors["email"][0] }}
						</div>
					</div>

					<div class="flex my-2">
						<label for="" class="w-3/12">Username </label>
						<div class="w-1/12">:</div>
						<div class="w-8/12" v-if="!edit">
							{{ user.username }}
						</div>
						<input
							type="text"
							class="w-8/12 px-2 border-2 rounded-md"
							v-if="edit"
							v-model="form.username"
						/>
						<div
							class="fixed mt-8 text-xs text-red-500"
							v-if="errors['username']"
						>
							*{{ errors["username"][0] }}
						</div>
					</div>

					<div class="flex my-2" v-if="!edit">
						<label for="" class="w-3/12">Dibuat pada </label>
						<div class="w-1/12">:</div>
						<div class="w-8/12">
							{{ format_date(user.created_at) }}
						</div>
					</div>
					<div class="flex items-end justify-end">
						<button
							@click="buttonEdit"
							class="py-2 mx-2 my-4 text-white transition duration-200 ease-in-out bg-yellow-600 rounded-full w-28 focus:outline-none hover:bg-yellow-700"
							v-if="!edit"
						>
							Ubah
						</button>
						<button
							@click="buttonCancel"
							class="py-2 mx-2 my-4 text-white transition duration-200 bg-red-600 rounded-full w-28 focus:outline-none hover:bg-red-700"
							v-if="edit"
						>
							Batal
						</button>
						<button
							@click="buttonSaveEdit"
							class="py-2 mx-2 my-4 text-white transition duration-200 bg-green-600 rounded-full w-28 focus:outline-none hover:bg-green-700"
							v-if="edit"
						>
							Simpan
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div>
		<Footer />
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
				<div>Berhasil Mengubah Profile</div>
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
	<loading v-if="load" />
</template>
<script>
import { onBeforeMount, onMounted, ref, computed, reactive } from "vue";
import axios from "axios";
import store from "@/store";
import Loading from "@/components/app/Loading.vue";
import Header from "@/components/app/Head.vue";
import Footer from "@/components/app/Foot.vue";
import router from "@/router";
import Modal from "@/components/Modal";
import moment from "moment";
import Menu from "@/components/app/profile/Menu.vue";

export default {
	title: "Profile | Belajar Koding",
	components: {
		Loading,
		Header,
		Footer,
		Modal,
		Menu,
	},
	setup() {
		const errors = ref([]);
		const user = computed(() => store.getters["auth/user"]);
		const form = reactive({
			name: user.value.name,
			username: user.value.username,
			email: user.value.email,
		});
		const load = ref(false);
		const edit = ref(false);
		let picture = "";
		const buttonEdit = () => {
			form.name = user.value.name;
			form.username = user.value.username;
			form.email = user.value.email;
			edit.value = true;
		};
		const buttonSaveEdit = async () => {
			try {
				loading.load = true;
				loading.text = false;
				form.username = form.username.replace(/\s/g, "");
				await axios.get("sanctum/csrf-cookie");
				await axios.post("api/profile/edit", form);
				await store.dispatch("auth/me");
				loading.text = true;
				setTimeout(() => {
					loading.load = false;
					edit.value = false;
					router.replace("/app/profile");
				}, 1000);
			} catch (error) {
                    if (error.response.status == 401) {
                         router.replace("/login");
                    }
				errors.value = error.response.data.errors;
				loading.load = false;
			}
		};
		const buttonCancel = () => {
			edit.value = false;
			errors.value = "";
		};
		const loading = reactive({
			load: false,
			text: false,
		});
		const reload = () => {
			if (localStorage.getItem("reloaded")) {
				load.value = true;
				localStorage.removeItem("reloaded");
			}
		};
		function format_date(value) {
			if (value) {
				return moment(String(value)).locale("id").format("LLLL");
			}
		}

		if (user.value.picture == null || user.value.picture == "") {
			let name = user.value.name;
			picture = name.substring(0, 1);
		} else {
			picture =
				computed(() => store.getters["baseurl/urlStorage"]).value +
				user.value.picture;
		}
		onMounted(() => {
			setTimeout(() => {
				load.value = false;
			}, 2500);
		}),
			onBeforeMount(() => {
				reload();
			});
		return {
			load,
			user,
			format_date,
			picture,
			buttonEdit,
			buttonSaveEdit,
			edit,
			form,
			loading,
			errors,
			buttonCancel,
		};
	},
};
</script>