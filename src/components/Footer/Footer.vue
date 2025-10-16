<script setup>
import { defineProps } from 'vue'

    const props = defineProps({
        isDark: {
            type: Boolean,
            required: true
        },
        toggle: {
            type: Function,
            required: true
        }
    })
</script>

<template>
    <footer class="bg-slate-200 dark:bg-slate-800 h-35 mt-auto flex items-center justify-center">
    <router-link to="/" class="flex items-center">
      <img 
       :src="props.isDark ? '/logo/HexaPrime-DarkMode.png' : '/logo/HexaPrime-LightMode.png'"
       class="h-[50px] fit-cover"/>
    </router-link>
       <p :class="props.isDark ? 'text-white' : 'text-black'">© 2025 HexaPrime. All rights reserved.</p>
      
      <!-- From Uiverse.io by SmookyDev --> 
    <label class="ml-6 relative inline-flex items-center cursor-pointer">
    <input class="sr-only peer" 
    value="" 
    type="checkbox"
    :checked="props.isDark"
    @change="props.toggle()"
    />
    <div
        class="w-12 h-6 rounded-full ring-0 peer duration-500 outline-none dark:bg-gray-200 bg-gray-400 overflow-hidden before:flex before:items-center before:justify-center after:flex after:items-center after:justify-center before:content-['☀️'] before:absolute before:h-6 before:w-6 before:top-1/2 before:bg-white before:rounded-full before:left-1 before:-translate-y-1/2 before:transition-all before:duration-700 peer-checked:before:opacity-0 peer-checked:before:rotate-90 peer-checked:before:-translate-y-full peer-checked:bg-[#383838] after:content-['🌑'] after:absolute after:bg-[#1d1d1d] after:rounded-full after:top-[1px] after:right-1 after:translate-y-full after:w-6 after:h-6 after:opacity-0 after:transition-all after:duration-700 peer-checked:after:opacity-100 peer-checked:after:rotate-180 peer-checked:after:translate-y-0"
    ></div>
    </label>

    </footer>
</template>