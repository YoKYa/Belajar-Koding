<template>
	<div>
		<Header />
	</div>
	<div v-if="!load" class="flex flex-col items-center my-8">
		<div
			class="flex items-center justify-center w-5/6 overflow-hidden shadow-md  bg-gray-50 h-28 rounded-t-xl"
		>
			<img src="@/assets/img/profile/banner.png" alt="" srcset="" />
		</div>
		<div
			class="flex flex-col w-5/6 pt-8 pl-8 bg-white border-t-2 border-blue-400 shadow-md  h-96 rounded-b-xl"
		>
			<div
				class="absolute flex items-center justify-center w-32 h-32 ml-10 transform -translate-y-24 border-2 border-blue-400 rounded-full cursor-pointer  bg-blue-50"
			>
				<div v-if="picture.length == 1" class="text-6xl">
					<router-link
						to="/app/profile/picture"
						class="flex items-center justify-center w-32 h-32 transition duration-200 ease-in-out rounded-full  hover:bg-gray-500"
						exact-active-class="border-2 border-blue-400"
					>
						{{ picture }}
					</router-link>
				</div>
				<img
					:src="picture"
					v-else
					class="rounded-full"
					alt="profile"
				/>
			</div>
			<div class="flex">
				<Menu />
				<div
					class="flex flex-col mx-2 mt-12 ml-16 text-lg font-semibold transform  w-92"
				>
					<label
						class="flex flex-col items-center w-64 px-4 py-6 tracking-wide text-blue-500 uppercase bg-white border border-blue-200 rounded-lg shadow-lg cursor-pointer  hover:bg-blue-400 hover:text-white"
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
						<span class="mt-2 text-base leading-normal"
							>Select a file</span
						>
						<input
							type="file"
							accept="image/*"
							@change="uploadImage($event)"
							class="hidden"
						/>
					</label>
					<button
						@click="saveImage"
						class="px-2 py-1 my-12 text-white bg-blue-400 rounded-full  text-md w-28 hover:bg-blue-500 hover:shadow-md"
					>
						Simpan
					</button>
				</div>
				<div class="ml-36 w-96">
					<img :src="img" alt="" srcset="" />
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
import router from "@/router";
import Loading from "@/components/app/Loading.vue";
import Header from "@/components/app/Head.vue";
import Footer from "@/components/app/Foot.vue";
import Modal from "@/components/Modal";
import Menu from "@/components/app/profile/Menu.vue";

export default {
	title: "Foto Profile | Belajar Koding",
	components: {
		Loading,
		Header,
		Footer,
		Modal,
		Menu,
	},
	setup() {
		const formImage = new FormData();
		const img = ref("");
		const reader = new FileReader();
		const uploadImage = (event) => {
			formImage.picture = event.target.files[0];
			reader.readAsDataURL(formImage.picture);
			reader.onload = (ev) => {
				img.value = ev.target.result;
			};
		};
		const saveImage = async () => {
			try {
				loading.load = true;
				loading.text = false;
				await axios.get("sanctum/csrf-cookie");
				formImage.append("picture", formImage.picture);
				let uwu = await axios.post("api/profile/picture", formImage);
                    console.log(uwu);
				await store.dispatch("auth/me");
				loading.text = true;
				setTimeout(() => {
					loading.load = false;
					edit.value = false;
					router.replace("/app/profile");
				}, 1000);
			} catch (error) {
				console.log(error.response.data.errors);
				errors.value = error.response.data.errors;
				loading.load = false;
			}
		};

		const errors = ref([]);
		const user = computed(() => store.getters["auth/user"]);
		const load = ref(false);
		const edit = ref(false);
		let picture = "";
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
			picture,
			edit,
			loading,
			errors,
			uploadImage,
			saveImage,
			img,
		};
	},
};
</script>