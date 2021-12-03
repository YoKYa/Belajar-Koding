<template>
    <Header />
    <div v-if="!load">
        <div class="flex">
            <last-se />
            <profile />
        </div>
        <study-room />
        <book-shelf />
    </div>
    <div>
        <Footer />
    </div>
    <loading v-if="load" />
</template>
<script>
import { onBeforeMount, onMounted, ref } from "vue";
import Loading from "../../components/app/Loading.vue";
import Header from "../../components/app/Head.vue";
import Profile from "../../components/app/dashboard/Profile.vue";
import StudyRoom from "../../components/app/dashboard/StudyRoom.vue";
import BookShelf from "../../components/app/dashboard/BookShelf.vue";
import LastSe from "../../components/app/dashboard/LastSe.vue";
import Footer from "../../components/app/Foot.vue";
export default {
    title: "Dashboard | Belajar Koding",
    components: {
        Loading,
        Header,
        Profile,
        StudyRoom,
        BookShelf,
        LastSe,
        Footer,
    },
    setup() {
        const load = ref(false);
        const reload = () => {
            if (localStorage.getItem("reloaded")) {
                load.value = true;
                localStorage.removeItem("reloaded");
            }
        };
        onMounted(() => {
            setTimeout(() => {
                load.value = false;
            }, 2500);
        }),
            onBeforeMount(() => {
                reload();
            });
        return { load };
    },
};
</script>