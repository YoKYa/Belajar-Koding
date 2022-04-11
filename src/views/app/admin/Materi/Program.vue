<template>
	<div id="journal-scroll">
		<Header />

		<div class="flex h-screen pt-14">
			<div
				class="w-full h-full overflow-auto shadow"
				id="journal-scroll"
			>
				<div class="flex m-2">
					<div class="flex flex-col w-1/5 m-2 text-xs">
						<div
							class="flex items-center justify-center h-48 mb-2 rounded-lg "
						>
							<div v-if="data.loadData">
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

							<div
								class="flex items-center justify-center w-full h-full "
								v-else
							>
								<img
									:src="data.language.picture"
									class="h-28 rounded-2xl"
								/>
							</div>
						</div>
						<div
							class="relative bg-white border-2 border-gray-200 rounded-lg shadow-lg h-96"
						>
							<div class="w-full">
								<div
									class="flex p-1 mx-2 my-2 bg-white border border-gray-200 rounded "
								>
									<div
										class="flex flex-wrap flex-auto "
									></div>
									<input
										placeholder="Search"
										v-model="form.search"
										@change="search()"
										class="w-full p-1 px-2 mx-2 text-gray-800 outline-none appearance-none "
									/>
									<div
										class="flex items-center w-8 py-1 pl-2 pr-1 text-gray-300 border-l border-gray-200 "
									>
										<button
											@click="search"
											class="w-6 h-6 text-gray-600 outline-none cursor-pointer focus:outline-none">
											<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 feather feather-chevron-up">
												<polyline points="18 15 12 9 6 15"></polyline>
											</svg>
										</button>
									</div>
								</div>
							</div>
							<div
								class="absolute left-0 z-40 w-full h-64 overflow-y-auto bg-white rounded shadow top-100 max-h-select svelte-5uyqqj"
								id="journal-scroll"
							>
								<div class="flex flex-col w-full">
									<!-- Daftar Program -->
									<div
										class="w-full border-b border-gray-100 rounded-t cursor-pointer hover:bg-teal-100"
									>
										<div v-if="data.loadKelas">
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
										<div
											v-for="study in data.kelas"
											:key="study.id"
											v-else
											class="relative flex items-center w-full p-2 pl-2 border-l-2 border-transparent hover:bg-blue-100"
											@click="
												selectKelas(
													study.id
												)
											"
										>
											<div
												class="flex flex-col items-center w-6 "
											>
												<div
													class="relative flex items-center justify-center w-4 m-1 mt-1 mr-2 bg-orange-500 rounded-full "
												>
													<img
														class="rounded-full "
														alt="Pict"
														:src="
															base +
															study.picture
														"
													/>
												</div>
											</div>
											<div
												class="flex items-center w-full "
											>
												<div
													class="mx-2 -mt-1 "
												>
													{{
														study.name
													}}
													<div
														class="w-full -mt-1 text-xs font-normal text-gray-500 normal-case truncate "
													>
														{{
															study.description
														}}
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div class="absolute left-0 w-full bottom-1">
								<div
									class="flex flex-col w-full p-2 py-4 "
								>
									<button
										@click="add"
										class="flex justify-center w-full p-1 font-semibold text-white transition duration-200 ease-in-out bg-blue-400 border border-gray-300 rounded hover:text-blue-400 hover:bg-white"
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
												d="M12 4v16m8-8H4"
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>
					</div>
					<div class="flex flex-col w-4/5 m-2">
						<div
							class="flex items-center justify-between h-16 mb-2 text-2xl bg-white border-2 border-gray-200 rounded-lg shadow-lg "
						>
							<router-link
								to="/app/admin/materi"
								class="p-2 mx-4 text-gray-500 duration-200 ease-in-out rounded-full hover:bg-gray-300 hover:text-gray-700"
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
										d="M12.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0019 16V8a1 1 0 00-1.6-.8l-5.333 4zM4.066 11.2a1 1 0 000 1.6l5.334 4A1 1 0 0011 16V8a1 1 0 00-1.6-.8l-5.334 4z"
									/>
								</svg>
							</router-link>
							<div class="font-semibold uppercase">
								{{ data.language.name }}
							</div>
							<div
								class="p-2 mx-2 text-gray-500 duration-200 ease-in-out rounded-full hover:bg-gray-300 hover:text-gray-700"
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
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
									/>
								</svg>
							</div>
						</div>
						<div class="h-auto pt-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg">
                                   <div v-if="selected">
                                        <div v-if="data.loadDataKelas">
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
                                        <div v-else>
                                             <div class="flex mx-3 mb-4">
                                             <div class="flex flex-col w-4/12">
                                                  <div class="flex justify-center my-2">
                                                       <div class="flex flex-col w-48 border-2 h-52">
                                                            <div class="flex justify-center max-h-44"> <img :src="img" /></div>
                                                            <div class="flex">
                                                                 <label class="w-full bg-transparent bg-gray-600 bottom-4 ">
                                                                      <span class="mx-2 mt-2 text-base leading-normal text-white">
                                                                           Select a Image
                                                                      </span>
                                                                      <input type="file" accept="image/*" class="hidden" @change="uploadImage($event)">
                                                                 </label>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div class="flex justify-center w-full">
                                                       <div class="flex justify-center w-full">
                                                            <div class="mx-5">
                                                                 {{ data.dataKelas.name }}
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="flex flex-col w-8/12">
                                                  <label class="my-2 font-semibold">Deskripsi</label>
                                                  <textarea rows="5" class="flex w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border focus:border-blue-500" v-model="form.description"> </textarea>
                                                  <button class="p-1 my-2 text-sm text-white bg-blue-700 rounded-lg w-28 focus:outline-none hover:bg-blue-400" @click="editDesc">Simpan</button>
                                             </div>
                                        </div>
                                        <hr>
                                        <div class="flex flex-col pt-2">
                                             <div class="flex justify-end mx-4 my-2">
                                                  <button class="py-2 text-sm font-semibold text-blue-400 duration-200 transform bg-white border-2 border-white rounded-lg w-36 hover:border-blue-500 hover:text-blue-500 animate-fade-in" @click="toggle.bagian = true">Tambah bagian</button>
                                             </div>
                                             <div class="flex flex-col mx-4 my-2" v-if="toggle.bagian">
                                                  <label class="my-1 text-sm font-semibold">Tambah Bagian</label>
                                                  <input type="text" class="p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border focus:border-blue-500" v-model="formBagian.name">
                                                  <div>
                                                            <button class="p-1 my-2 text-sm text-white bg-blue-700 rounded-lg w-28 focus:outline-none hover:bg-blue-400" @click="createBagian">Tambah</button>
                                                            <button class="p-1 mx-2 my-2 text-sm text-white bg-red-700 rounded-lg w-28 focus:outline-none hover:bg-red-400" @click="toggle.bagian = false">Batal</button>
                                                  </div>
                                             </div>
                                             <div class="flex flex-col mx-4 my-2 border-2 border-gray-200 rounded-lg">
                                                  <div class="my-4 font-semibold text-center ">DAFTAR PELAJARAN</div>
                                                  <hr>
                                                  <div class="p-3 m-2 border-2 border-gray-200 rounded-lg" v-for="bagian in data.bagian" :key="bagian.id">
                                                       <div class="flex justify-between">
                                                            <div class="py-2 ml-4 font-semibold uppercase ">#{{ bagian.id }} {{ bagian.name }}</div>
                                                            <div class="p-1 my-1 ml-4 text-blue-500 bg-white border-2 border-blue-500 rounded-lg cursor-pointer hover:bg-blue-500 hover:text-white" @click="toggle.topic = bagian.id">
                                                                 <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                                      <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                                                 </svg>
                                                            </div>
                                                       </div>
                                                       <hr>
                                                       <div class="flex flex-col">
                                                            <div>
                                                                 <div class="py-2 mx-10 cursor-pointer hover:bg-gray-100" v-for="topics in bagian.topics" :key="topics.id"> <span class="mx-2 text-lg font-bold">  -</span>  {{ topics.name }}</div>
                                                            </div>
                                                            <hr class="m-1 bg-gray-200 rounded-lg ">
                                                            <div>
                                                                 <div class="flex flex-col mx-4 my-2" v-if="toggle.topic == bagian.id">
                                                                      <label class="my-1 text-sm font-semibold">Tambah Topik Pembahasan</label>
                                                                      <input type="text" class="p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border focus:border-blue-500" v-model="formTopic.name">
                                                                      <div>
                                                                                <button class="p-1 my-2 text-sm text-white bg-blue-700 rounded-lg w-28 focus:outline-none hover:bg-blue-400" @click="createTopic(bagian.id)">Tambah</button>
                                                                                <button class="p-1 mx-2 my-2 text-sm text-white bg-red-700 rounded-lg w-28 focus:outline-none hover:bg-red-400" @click="toggle.topic = false">Batal</button>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                            
                                                       </div>
                                                       <div class="flex justify-end">
                                                            <button class="p-1 my-2 text-sm text-white bg-red-700 rounded-lg w-28 focus:outline-none hover:bg-red-400" @click="delBagian(bagian.id)">Hapus Bagian</button>
                                                       </div>
                                                  </div>
                                                  </div>
                                             </div>
                                             <div class="flex justify-end mx-4 my-2">
                                                  <button class="py-2 text-sm font-semibold text-red-400 duration-200 transform bg-white border-2 border-white rounded-lg w-36 hover:border-red-500 hover:text-red-500 animate-fade-in" @click="toggle.delMateri = true">Hapus Materi</button>
                                             </div>
                                        </div>
                                   </div>
                                   <div v-else class="flex flex-col items-center justify-center m-5">
                                        <span><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                                  <path stroke-linecap="round" stroke-linejoin="round" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                  </svg>
                                        </span>Materi belum dipilih, silahkan dipilih terlebih dahulu
                                   </div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<Modal v-show="addView">
		<div>
			<div class="px-4 pt-5 pb-4 bg-white rounded-md sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
					<div
						class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-green-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6 text-green-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 4v16m8-8H4"
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
							Tambah Materi
						</h3>
						<div class="mt-2">
							<input
								type="text"
								class="px-2 py-2 border-2 rounded-md w-96 focus:outline-none focus:border-blue-300"
								v-model="form.name"
							/>
						</div>
						<div
							class="mt-2 text-xs text-red-500"
							v-for="error in errors.name"
							:key="error.id"
						>
							{{ error }}
						</div>
					</div>
				</div>
			</div>
			<div
				class="px-4 py-3 rounded-bS-md bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse"
			>
				<button
					@click="addKelas"
					type="button"
					class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
				>
					Tambah
				</button>
				<button
					@click="add"
					type="button"
					class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
				>
					Batal
				</button>
			</div>
		</div>
	</Modal>
     <Modal v-if="toggle.delMateri">
		<div>
			<div class="px-4 pt-5 pb-4 bg-white rounded-md sm:p-6 sm:pb-4">
				<div class="sm:flex sm:items-start">
					<div
						class="flex items-center justify-center flex-shrink-0 w-12 h-12 mx-auto bg-red-100 rounded-full sm:mx-0 sm:h-10 sm:w-10"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="w-6 h-6 text-red-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M12 4v16m8-8H4"
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
							Hapus materi ini?
						</h3>
						<div class="mt-2">
							{{ data.dataKelas.name }}
						</div>
					</div>
				</div>
			</div>
			<div
				class="px-4 py-3 rounded-bS-md bg-gray-50 sm:px-6 sm:flex sm:flex-row-reverse"
			>
				<button
                         @click="delKelas"
					type="button"
					class="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-red-600 border border-transparent rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
				>
					Hapus
				</button>
				<button
                         @click="toggle.delMateri = false"
					type="button"
					class="inline-flex justify-center w-full px-4 py-2 mt-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
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
import Header from "@/components/app/admin/Header"
import store from "@/store"
import Modal from "@/components/Modal"
import { useRoute } from "vue-router"
// import router from "@/router"
import { onMounted, reactive, computed, ref } from "@vue/runtime-core"
import axios from "axios"

export default {
	title: "Materi Pembelajaran  | Panel Belajar Koding",
	guardPermission: "change materi",
	components: {
		Header,
		Modal,
	},
	setup() {
          // First Load
          onMounted(() => {
			params.value = route.params.program
			languageGet()
		})

          // Route
		const route = useRoute()
		// View
          const addView = ref(false)
		// Loading
          const loading = reactive({
			load: false,
			text: false,
		})
          // Error
          const errors = reactive({
			name: [],
		})
          // Toggle
          const toggle = reactive({
               bagian: false,
               topic: false,
               delMateri: false,
          })
          // Tambah
		const add = () => {addView.value = !addView.value}
          // Parameter
		const params = ref()
		const form = reactive({
			name: "",
			programming_language_id: "",
			search: "",
               kelas_id:"",
               description:""
		})
		const data = reactive({
			language: "",
			kelas: "",
               dataKelas: "",
               bagian: "",
			loadData: "",
			loadKelas: "",
               loadDataKelas: false,
		})
		// Data Bahasa
          const languageGet = async () => {
			try {
				data.loadData = true
				await axios.get("sanctum/csrf-cookie")
				let response = await axios.post("api/materi/language", {
					slug: params.value,
				})
				data.language = response.data
				data.language.picture = base + data.language.picture
				data.loadData = false
				getKelas()
			} catch (error) {
				data.loadData = false
				console.log(error.response.data.errors)
			}
		}
          // Bahasa
		const base = computed(
			() => store.getters["baseurl/urlStorage"]
		).value
		
		const addKelas = async () => {
			form.programming_language_id = data.language.id
			try {
				loading.load = true
				loading.text = false
				add()
				await axios.get("sanctum/csrf-cookie")
				await axios.post("api/materi/studyclass/add", form)

				setTimeout(() => {
					loading.load = false
					form.name = ""
				}, 1000)
				loading.text = true
				getKelas()
			} catch (error) {
				errors.name = error.response.data.errors["name"]
			}
		}
		const getKelas = async () => {
			form.programming_language_id = data.language.id
			try {
				data.loadKelas = true
				await axios.get("sanctum/csrf-cookie")
				let response = await axios.post(
					"api/materi/studyclass",
					form
				)
				data.kelas = response.data
				data.loadKelas = false
			} catch (error) {
				console.log(error.response.data.errors)
			}
		}
          const delKelas  = async () => {
               try {
                    loading.load = true
				loading.text = false
                    await axios.get("sanctum/csrf-cookie")
                    await axios.post("api/materi/studyclass/delete",form)
                    setTimeout(() => {
					loading.load = false
				}, 1000)
				loading.text = true
                    selected.value = false
                    toggle.delMateri = false
                    getKelas()
               } catch (error) {
                    console.log(error);
               }
          }
          // Memilih Kelas
          const selected = ref(false)
		const selectKelas = async (id) => {
               form.kelas_id = id
               selected.value = true
               try {
				data.loadDataKelas = true
				await axios.get("sanctum/csrf-cookie")
				let response = await axios.post(
					"api/materi/studyclass/get",
					form
				)
				img.value = base + response.data.picture
                    data.dataKelas = response.data
                    form.description = data.dataKelas.description
                    getBagian()
				data.loadDataKelas = false
			} catch (error) {
				console.log(error.response.data.errors)
			}
		}
		function search() {
			getKelas()
		}
          // Image
          const formImage = new FormData()
          const reader = new FileReader()
          const img = ref("")
          const uploadImage = (event) => {
			formImage.picture = event.target.files[0]
			reader.readAsDataURL(formImage.picture)
			reader.onload = (ev) => {
				img.value = ev.target.result
			}
               saveImage()
		}
          const saveImage = async () => {
			try {
				loading.load = true
				loading.text = false
				await axios.get("sanctum/csrf-cookie")
				formImage.append("picture", formImage.picture)
                    formImage.append('id', form.kelas_id)
				const res = await axios.post("api/materi/studyclass/picture", formImage)
                    console.log(res)
				loading.text = true
				setTimeout(() => {
					loading.load = false
					
				}, 1000)
			} catch (error) {
				console.log(error.response.data.errors)
				errors.value = error.response.data.errors
				loading.load = false
			}
		}
          // Description
          const editDesc = async () => {
			try {
				loading.load = true
				loading.text = false
				await axios.get("sanctum/csrf-cookie")
				await axios.post("api/materi/studyclass/description", form)
				setTimeout(() => {
					loading.load = false
				}, 1000)
				loading.text = true
				selectKelas(form.kelas_id)
                    getKelas()
			} catch (error) {
				errors.name = error.response.data.errors["name"]
			}
		}
          // Bagian 
          const formBagian = reactive({
               id:"",
			name: "",
			studyClassId: "",
		})
          const createBagian = async () => {
			try {
				loading.load = true
				loading.text = false
                    formBagian.studyClassId = form.kelas_id
				await axios.get("sanctum/csrf-cookie")
				await axios.post("api/materi/studyclass/addBagian", formBagian)
				setTimeout(() => {
					loading.load = false
				}, 1000)
				loading.text = true
                    formBagian.name = ''
                    toggle.bagian = false
                    selectKelas(form.kelas_id)
			} catch (error) {
				errors.name = error.response.data.errors["name"]
			}
		}
          const getBagian = async () => {
               try {
                    formBagian.studyClassId = form.kelas_id
				await axios.get("sanctum/csrf-cookie")
				let response = await axios.post("api/materi/studyclass/getBagian", formBagian)
                    data.bagian = response.data
			} catch (error) {
				console.log(error);
			}
          }
          const delBagian = async (id) => {
               try {
                    loading.load = true
				loading.text = false
                    formBagian.id = id
				await axios.get("sanctum/csrf-cookie")
                    await axios.post("api/materi/studyclass/delBagian", formBagian)
                    setTimeout(() => {
					loading.load = false
				}, 1000)
				loading.text = true
                    selectKelas(form.kelas_id)
               } catch (error) {
                    console.log(error);
               }
          }
          // Topic
          const formTopic = reactive({
			name: "",
			partId: "",
		})
          const createTopic = async (id) => {
			try {
				loading.load = true
				loading.text = false
                    formTopic.partId = id
				await axios.get("sanctum/csrf-cookie")
				await axios.post("api/materi/studyclass/addTopic", formTopic)
				setTimeout(() => {
					loading.load = false
				}, 1000)
				loading.text = true
                    formTopic.name = ''
                    toggle.topic = false
                    selectKelas(form.kelas_id)
			} catch (error) {
                    console.log(error);
			}
		}
		return {
			data,
			base,
			form,
			addView,
			add,
			addKelas,
			selectKelas,
               delKelas,
               selected,
			errors,
			loading,
			search,
               uploadImage,
               img,
               editDesc,
               createBagian,
               createTopic,
               formBagian,
               delBagian,
               formTopic,
               toggle
		}
	},
}
</script>
<style>
</style>