<template>
  <main class="flex-1">
    <!-- Hero Section -->
    <section class="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200'); background-size: cover; background-position: center;"></div>
      </div>
      
      <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <h1 class="text-5xl font-bold text-slate-800 dark:text-white mb-6">
          Our Services
        </h1>
        <p class="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          Comprehensive engineering and software solutions tailored to your business needs
        </p>
      </div>
    </section>

    <!-- Engineering Solutions -->
    <section class="py-20 bg-white dark:bg-slate-900">
      <div class="max-w-8xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Engineering Solutions
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Professional engineering services across multiple disciplines to support your technical projects
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="service in engineeringServices" :key="service.title"
               class="bg-slate-50 dark:bg-slate-800 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
            <!-- <div class="text-5xl mb-4">{{ service.icon }}</div> -->
            <h3 class="text-2xl font-semibold text-slate-800 dark:text-white mb-3">
              {{ service.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              {{ service.description }}
            </p>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature"
                  class="flex items-center text-slate-600 dark:text-slate-400">
                <span class="text-amber-500 mr-2">✓</span>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Software Solutions -->
    <section class="py-20 bg-slate-50 dark:bg-slate-800">
      <div class="max-w-8xl mx-auto px-6">
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold text-slate-800 dark:text-white mb-4">
            Software Solutions
          </h2>
          <p class="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Custom software development and IT services to digitalize and optimize your business
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8">
          <div v-for="service in softwareServices" :key="service.title"
               class="bg-white dark:bg-slate-900 rounded-xl p-8 hover:shadow-xl transition-all duration-300">
            <!-- <div class="text-5xl mb-4">{{ service.icon }}</div> -->
            <h3 class="text-2xl font-semibold text-slate-800 dark:text-white mb-3">
              {{ service.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              {{ service.description }}
            </p>
            <ul class="space-y-2">
              <li v-for="feature in service.features" :key="feature"
                  class="flex items-center text-slate-600 dark:text-slate-400">
                <span class="text-amber-500 mr-2">✓</span>
                {{ feature }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Section -->
    <section class="py-20 bg-white dark:bg-slate-900">
      <div class="max-w-7xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-slate-800 dark:text-white mb-12">
          Our Process
        </h2>
        <div class="grid md:grid-cols-4 gap-8">
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-2">Consultation</h3>
            <p class="text-slate-600 dark:text-slate-400">We discuss your needs and requirements</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-2">Planning</h3>
            <p class="text-slate-600 dark:text-slate-400">We create a detailed project plan</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-2">Implementation</h3>
            <p class="text-slate-600 dark:text-slate-400">We execute the solution efficiently</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-amber-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-2">Support</h3>
            <p class="text-slate-600 dark:text-slate-400">We provide ongoing maintenance</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Get Started Section -->
    <section class="py-30 bg-gradient-to-r from-amber-500 to-orange-500">
      <div class="max-w-4xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-white mb-6">
          Ready to Get Started?
        </h2>
        <p class="text-xl text-white/90 mb-8">
          Contact us today to discuss how we can help transform your business
        </p>
        <router-link to="/contact" class="inline-block px-10 py-4 bg-white text-amber-600 font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
          Contact Us
        </router-link>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const engineeringServices = ref([
  {
    title: 'Mechanical Engineering',
    description: 'Design, analysis, and implementation of mechanical systems and equipment for various applications.',
    icon: '⚙️',
    features: ['Equipment design', 'System maintenance', 'Technical consulting', 'Performance analysis']
  },
  {
    title: 'Electrical Engineering',
    description: 'Comprehensive electrical system design, installation, and maintenance services.',
    icon: '⚡',
    features: ['Power systems', 'Control systems', 'Electrical installations', 'Safety compliance']
  },
  {
    title: 'Civil Engineering',
    description: 'Infrastructure development and construction project management services.',
    icon: '🏗️',
    features: ['Structural design', 'Project management', 'Site supervision', 'Quality assurance']
  }
])

const softwareServices = ref([
  {
    title: 'Custom Software Development',
    description: 'Tailored software solutions designed specifically for your business needs and workflows.',
    icon: '💻',
    features: ['Web applications', 'Desktop software', 'API development', 'Database design']
  },
  {
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    icon: '📱',
    features: ['iOS apps', 'Android apps', 'Cross-platform solutions', 'App maintenance']
  },
  {
    title: 'IT Consulting',
    description: 'Expert guidance on technology strategy, implementation, and digital transformation.',
    icon: '🎯',
    features: ['Technology assessment', 'Digital strategy', 'System integration', 'Training & support']
  }
])
</script>