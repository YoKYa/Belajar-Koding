<template>
	<Auth>
		<div class="shadow-md">
			<div
				class="flex items-center justify-center w-full mt-5 bg-blue-400 h-14 rounded-t-md"
			>
				<div class="text-xl font-semibold text-white">Register</div>
			</div>
			<div
				class="flex flex-col justify-center w-full h-auto p-10 mb-5 bg-white rounded-b-md"
			>
				<form @submit.prevent="register">
					<div
						class="flex items-center justify-center w-full mb-1 "
					>
						<div class="w-3/5">
							<input
								type="text"
								v-model="form.name"
								name="name"
								placeholder="Nama Lengkap"
								class="w-full h-10 p-5 mt-2 mb-1 border rounded-md focus:outline-none focus:ring"
								required
							/>
							<div
								class="flex w-3/5 mb-1 text-xs text-red-500 "
								v-if="errors['name']"
							>
								*{{ errors["name"][0] }}
							</div>
						</div>
					</div>
					<div
						class="flex items-center justify-center w-full mb-1 "
					>
						<div class="w-3/5">
							<input
								type="text"
								v-model="form.username"
								name="username"
								id="username"
								placeholder="Username"
								class="w-full h-10 p-5 mt-2 mb-1 border rounded-md focus:outline-none focus:ring"
								required
							/>
							<div
								class="flex w-3/5 mb-1 text-xs text-red-500 "
								v-if="errors['username']"
							>
								*{{ errors["username"][0] }}
							</div>
						</div>
					</div>
					<div
						class="flex items-center justify-center w-full mb-1 "
					>
						<div class="w-3/5">
							<input
								type="text"
								v-model="form.email"
								name="Email"
								id="Email"
								placeholder="Email"
								class="w-full h-10 p-5 mt-2 mb-1 border rounded-md focus:outline-none focus:ring"
								required
							/>
							<div
								class="flex w-3/5 mb-1 text-xs text-red-500 "
								v-if="errors['email']"
							>
								*{{ errors["email"][0] }}
							</div>
						</div>
					</div>
					<div
						class="flex items-center justify-center w-full mb-1 "
					>
						<div class="w-3/5">
							<input
								type="password"
								v-model="form.password"
								name="password"
								id="password"
								placeholder="Password"
								class="w-full h-10 p-5 mt-2 mb-1 border rounded-md focus:outline-none focus:ring"
								required
							/>
							<div
								class="flex w-3/5 mb-1 text-xs text-red-500 "
								v-if="errors['password']"
							>
								*{{ errors["password"][0] }}
							</div>
						</div>
					</div>
					<div
						class="flex items-center justify-center w-full mb-1 "
					>
						<div class="w-3/5">
							<input
								type="password"
								v-model="form.password_confirmation"
								name="password_confirmation"
								id="password_confirmation"
								placeholder="Konfirmasi Password"
								class="w-full h-10 p-5 mt-2 mb-1 border rounded-md focus:outline-none focus:ring"
								required
							/>
						</div>
					</div>
					<div
						class="flex items-center justify-center w-full mb-1 "
					>
						<div class="flex items-center w-3/5 text-sm">
							<input
								type="checkbox"
								v-model="check"
								class="m-2 border rounded-md focus:outline-none"
								id="check"
							/>
							<label for="check" class="cursor-pointer"
								>Telah membaca dan menyetujui
								<router-link
									to="/tentang/sk"
									class="text-blue-400"
									>Syarat Layanan</router-link
								>
								&
								<router-link
									to="/tentang/kebijakanprivasi"
									class="text-blue-400"
									>Kebijakan Privasi</router-link
								></label
							>
						</div>
					</div>
					<div
						class="flex items-center justify-center w-full mb-1 "
					>
						<button
							class="w-3/5 p-2 m-3 font-semibold text-white rounded-md focus:ring focus:ring-blue-300"
							v-bind:class="{
								'bg-gray-400 cursor-not-allowed hover:bg-gray-400':
									!check,
								'bg-blue-400 hover:bg-blue-500': check,
							}"
							:disabled="!check"
						>
							Register
						</button>
					</div>
					<div
						class="flex items-center justify-center w-full mb-1 "
					>
						<div class="flex justify-between w-3/5">
							<a
								class="text-blue-400 hover:text-blue-500"
							></a>
							<router-link
								to="login"
								class="text-blue-400 hover:text-blue-500"
								>Sudah punya akun?</router-link
							>
						</div>
					</div>
				</form>
			</div>
		</div>
	</Auth>
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
				<div>Berhasil Mendaftar</div>
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
import axios from "axios";
import { reactive, ref } from "@vue/reactivity";
import Auth from "@/components/auth/Auth";
import store from "@/store";
import router from "@/router";
import Modal from "@/components/Modal";
export default {
	title: "Register - Belajar Koding",
	components: { Auth, Modal },
	setup() {
		const errors = ref([]);
		const check = ref(false);
		const form = reactive({
			name: "",
			username: "",
			email: "",
			password: "",
			password_confirmation: "",
		});
		const loading = reactive({
			load: false,
			text: false,
		});
		const register = async () => {
			try {
				loading.load = true;
				loading.text = false;
				await axios.get("sanctum/csrf-cookie");
				await axios.post("register", form);
				await store.dispatch("auth/me");
				loading.text = true;
				setTimeout(() => {
					router.replace("/");
				}, 1000);
			} catch (error) {
				errors.value = error.response.data.errors;
				form.password = "";
				form.password_confirmation = "";
				loading.load = false;
			}
		};
		return {
			register,
			form,
			errors,
			check,
			loading,
		};
	},
};
</script>

<style>
</style>