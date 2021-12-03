<template>
	<div id="journal-scroll">
		<Header />

		<div class="flex h-screen pt-14">
			<Sidebar />

			<div
				class="w-full h-full overflow-auto shadow"
				id="journal-scroll"
			>
               </div>
		</div>
	</div>
</template>
<script>
import Sidebar from "@/components/app/admin/Sidebar"
import Header from "@/components/app/admin/Header";

export default {
	title: "Admin Panel | Belajar Koding",
	components: { Sidebar, Header },
     setup(){
          
     }
};
</script>
<style>
#journal-scroll::-webkit-scrollbar {
	width: 8px;
	cursor: pointer;
	/*background-color: rgba(229, 231, 235, var(--bg-opacity));*/
}
#journal-scroll::-webkit-scrollbar-track {
	background-color: rgba(229, 231, 235, var(--bg-opacity));
	cursor: pointer;
	/*background: red;*/
}
#journal-scroll::-webkit-scrollbar-thumb {
	cursor: pointer;
	background-color: #a0aec0;
	/*outline: 1px solid slategrey;*/
}
</style>
