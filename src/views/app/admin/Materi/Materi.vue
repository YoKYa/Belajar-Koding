<template>
	<div id="journal-scroll">
		<Header />

		<div class="flex h-screen pt-14">
			<Sidebar />

			<div
				class="w-full h-full overflow-auto shadow"
				id="journal-scroll"
			>
				<div class="mx-8">
					<div
						class="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 xl:grid-cols-2"
					>
						<div
							class="flex flex-col"
							v-for="language in data.language"
							:key="language.id"
						>
							<div
								class="p-4 bg-white border-2 shadow-lg rounded-3xl"
							>
								<div class="flex-none lg:flex">
									<div
										class="w-full h-full mb-3 lg:h-36 lg:w-36 lg:mb-0"
									>
										<img
											:src="
												base +
												language.picture
											"
											alt="Just a flower"
											class="object-scale-down w-full lg:object-cover lg:h-36 rounded-2xl"
										/>
									</div>
									<div
										class="flex-auto py-2 ml-3 justify-evenly"
									>
										<div class="flex flex-wrap">
											<h2
												class="flex-auto text-2xl font-medium text-center "
											>
												{{ language.name }}
											</h2>
										</div>
										<p class="mt-3"></p>

										<div
											class="flex p-4 pb-2 border-t border-gray-200 "
										></div>
										<div
											class="flex space-x-3 text-sm font-medium "
										>
											<router-link :to="`/app/admin/materi/${language.slug}`"
												class="w-full px-5 py-2 mt-4 mb-2 tracking-wider text-center text-white bg-gray-900 rounded-full shadow-sm md:mb-0 hover:bg-gray-800"
												type="button"
											>
												Buka Materi
											</router-link>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import Sidebar from "@/components/app/admin/Sidebar";
import Header from "@/components/app/admin/Header";
import store from "@/store";

import { onMounted, reactive, computed } from "@vue/runtime-core";
import axios from "axios";

export default {
	title: "Materi Pembelajaran  | Panel Belajar Koding",
	guardPermission: "change materi",
	components: {
		Sidebar,
		Header,
	},
	setup() {
		const data = reactive({
			language: "",
		});
		const languageGet = async () => {
			try {
				await axios.get("sanctum/csrf-cookie");
				let response = await axios.get("api/programminglanguage");
				data.language = response.data
			} catch (error) {
				console.log(error.response.data.errors);
			}
		};
		const base = computed(
			() => store.getters["baseurl/urlStorage"]
		).value;
		onMounted(() => {
			languageGet();
		});

		return {
			data,
			base,
		};
	},
};
</script>