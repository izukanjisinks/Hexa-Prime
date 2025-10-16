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
    <div class="mx-2">
        <nav class="fixed top-4 left-1/2 -translate-x-1/2 flex flex-row justify-center items-center h-12 px-6 w-full max-w-2xl shadow-lg rounded-xl dark:text-white backdrop-blur-md bg-white/60 dark:bg-gray-800/60 z-50">
        <!-- Logo  -->
        <!-- flex-shrink-0 prevents logo from being shrinking or bring compressed on small screens  -->
        <div class="flex-shrink-0 text-2xl font-bold text-amber-400 mr-4">
            <router-link to="/" class="flex items-center">
                <img 
                :src="props.isDark ? '/logo/HexaPrime-DarkMode.png' : '/logo/HexaPrime-LightMode.png'"
                class="h-[30px]"/>
            </router-link>
        </div>

        <!-- Nav Items -->
        <ul class="flex space-x-6 text-md">
          <li><router-link to="/" class="hover:text-amber-400 transition">Home</router-link></li>
          <li><router-link to="/services" class="hover:text-amber-400 transition">Services</router-link></li>
          <li><router-link to="/about" class="hover:text-amber-400 transition">About</router-link></li>
          <li><router-link to="/contact" class="hover:text-amber-400 transition">Contact</router-link></li>
        </ul>
      </nav>
    </div>
</template>