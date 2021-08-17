<template >
    <div
        class="flex flex-col items-center justify-center w-full p-5 m-16 mt-8 bg-white border-2 border-blue-200 shadow-xl rounded-xl opacity-90"
    >
        <div class="flex">
            <div class="w-1/6">
                <img src="@/assets/logo.png" alt="Logo Belajar Koding" />
            </div>
            <div class="flex flex-col justify-center w-5/6">
                <div class="w-full text-4xl text-center">Belajar Koding</div>
                <hr class="h-1 mx-8 mt-4 bg-blue-400 rounded-lg" />
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
export default {};
</script>