<template lang="">
    <div class="fixed top-0 z-50 grid content-center w-full min-h-screen pb-20 transform bg-black bg-opacity-80 justify-items-center animate-modalf-in">
        <div class="flex justify-center w-auto h-auto bg-white rounded-md shadow-md animate-modal-in">
            <div class="flex items-center justify-center">
                <slot>
                </slot>
            </div>
        </div>
    </div>    
</template>