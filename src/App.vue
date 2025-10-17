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
    <router-view v-slot="slotProps">
      <transition name="fade" mode="out-in">
        <component :is="slotProps.Component"/>
      </transition>
    </router-view>

    <!-- Footer -->
    <Footer :is-dark="isDark" :toggle="toggleDark" />
    
  </div>
</template>

<style scoped>
  /* fade transition when routing between pages */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.4s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  .fade-enter-to, .fade-leave-from {
    opacity: 1;
  }
</style>
