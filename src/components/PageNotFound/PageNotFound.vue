<script setup>
    import { DotLottieVue } from '@lottiefiles/dotlottie-vue';
</script>

<template>
        <div class="min-h-screen flex flex-col justify-center items-center">
            <DotLottieVue style="height: 250px; width: 250px" autoplay loop src="https://lottie.host/efed863b-a74b-4296-8f44-5b79263d2e2b/8YqdTvXUNk.lottie" />
            <h1 class="font-medium text-2xl text-black dark:text-white mb-2">Opps, page not found!</h1>
            <router-link to="/">
                <p class="text-slate-500 dark:text-slate-400 cursor-pointer">click here to vist our home page</p>
            </router-link>
        </div>
</template>