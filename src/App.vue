<script setup>
 import Footer from './components/Footer/Footer.vue'
 import NavigationBar from './components/NavigationBar/NavigationBar.vue'
 import {useDark, useToggle} from '@vueuse/core'
 
 const isDark = useDark({disableTransition: false});
 const toggleDark = useToggle(isDark);


</script>

<template>
  <div class="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900 transition-colors duration-500">
    <!-- Nav Bar -->
    <NavigationBar :is-dark="isDark"/>

    <!-- Body -->
   <router-view/>

    <!-- Footer -->
    <Footer :is-dark="isDark" :toggle="toggleDark" />
    
  </div>
</template>
