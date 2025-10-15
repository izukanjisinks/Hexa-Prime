<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  isDark: {
    type: Boolean,
    required: true
  }
})
</script>



<template>
    <nav class="py-6 mx-6">
        <div class="flex flex-row justify-center bg-white h-12 w-full max-w-2xl shadow-lg rounded-xl items-center mx-auto dark:text-white dark:bg-slate-800">
        <!-- Logo / Company Name -->
        <div class="text-2xl font-bold text-amber-400 mr-6">
         <img 
         :src="props.isDark ? '/logo/HexaPrime-DarkMode.png' : '/logo/HexaPrime-LightMode.png'"
         class="h-[50px]">
        </div>

        <!-- Menu Items -->
        <ul class="flex space-x-6 text-md">
          <li><a href="#" class="hover:text-amber-400 transition">Home</a></li>
          <li><a href="#" class="hover:text-amber-400 transition">About</a></li>
          <li><a href="#" class="hover:text-amber-400 transition">Services</a></li>
          <li><a href="#" class="hover:text-amber-400 transition">Portfolio</a></li>
          <li><a href="#" class="hover:text-amber-400 transition">Contact</a></li>
        </ul>
      </div>
    </nav>
</template>