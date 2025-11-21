<template>
  <main class="flex-1">
    <!-- Hero Section -->
    <section class="relative min-h-[600px] flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200'); background-size: cover; background-position: center;"></div>
      </div>
      
      <div class="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">
        <h1 class="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6 animate-fade-in">
          Welcome to <span class="text-amber-500">HexaPrime</span>
        </h1>
        <p class="text-xl md:text-2xl text-slate-700 dark:text-slate-300 mb-8 max-w-3xl mx-auto">
          Your trusted partner for innovative engineering and software solutions
        </p>
        <div class="flex flex-col sm:flex-row gap-4 justify-center">
          <router-link to="/services" class="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Our Services
          </router-link>
          <router-link to="/contact" class="px-8 py-3 bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-800 dark:text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Get in Touch
          </router-link>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-white dark:bg-slate-900">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-slate-800 dark:text-white mb-4">
          What We Offer
        </h2>
        <p class="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          HexaPrime delivers cutting-edge solutions to help your business thrive in today's competitive landscape
        </p>
        
        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="feature in features" :key="feature.title" 
               class="p-8 bg-slate-50 dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
            <!-- <div class="text-5xl mb-4">{{ feature.icon }}</div> -->
            <h3 class="text-2xl font-semibold text-slate-800 dark:text-white mb-3">
              {{ feature.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-30 bg-gradient-to-r from-amber-500 to-orange-500">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">
          Ready to Transform Your Business?
        </h2>
        <p class="text-xl text-white/90 mb-8">
          Let's discuss how HexaPrime can help you achieve your goals
        </p>
        <router-link to="/contact" class="inline-block px-10 py-4 bg-white text-amber-600 font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          Contact Us Today
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const features = ref([
  {
    title: 'Engineering Solutions',
    description: 'Comprehensive engineering services tailored to meet your industrial and technical needs.',
    icon: '⚙️'
  },
  {
    title: 'Software Development',
    description: 'Custom software solutions designed to streamline your business operations and drive growth.',
    icon: '💻'
  },
  {
    title: 'Expert Consultation',
    description: 'Professional guidance from experienced engineers and software specialists.',
    icon: '🎯'
  }
])
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in {
  animation: fade-in 1s ease-out;
}
</style>