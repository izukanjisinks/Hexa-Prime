<template>
  <main class="flex-1">
    <!-- Hero Section -->
    <section class="relative min-h-[500px] flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 dark:from-slate-800 dark:to-slate-900 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200'); background-size: cover; background-position: center;"></div>
      </div>
      
      <div class="relative z-10 max-w-6xl mx-auto px-6">
        <h1 class="text-5xl font-bold text-center text-slate-800 dark:text-white mb-6">
          About HexaPrime
        </h1>
        <p class="text-xl text-center text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          Leading the way in engineering and software solutions across Zambia
        </p>
      </div>
    </section>

    <!-- Company Overview -->
    <section class="relative py-20 overflow-hidden min-h-[600px] flex items-center">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1600" 
          alt="Team collaboration" 
          class="w-full h-full object-cover"
        />
      </div>
      
      <!-- Gradient Overlay - More opacity on left, less on right -->
      <div class="absolute inset-0 z-10 bg-gradient-to-r from-white/95 via-white/85 to-white/40 dark:from-slate-900/95 dark:via-slate-900/85 dark:to-slate-900/40"></div>
      
      <!-- Content -->
      <div class="relative z-20 max-w-6xl mx-auto px-6 w-full">
        <div class="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="text-4xl font-bold text-slate-800 dark:text-white mb-6">
              Who We Are
            </h2>
            <div class="space-y-4 text-slate-700 dark:text-slate-300">
              <p class="text-lg font-medium">
                HexaPrime is a premier provider of engineering and software solutions, dedicated to helping businesses transform their operations through innovative technology and expert engineering services.
              </p>
              <p class="text-lg">
                With a team of experienced professionals, we specialize in delivering tailored solutions that address the unique challenges faced by modern businesses. From complex engineering projects to custom software development, we bring expertise and dedication to every engagement.
              </p>
              <p class="text-lg">
                Our commitment to excellence and client satisfaction has made us a trusted partner for organizations seeking reliable, high-quality solutions.
              </p>
            </div>
          </div>
          <div class="hidden md:block">
            <!-- Empty space to maintain layout -->
          </div>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="py-20 bg-slate-50 dark:bg-slate-800">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12">
          <div class="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg">
            <div class="text-5xl mb-4">🎯</div>
            <h3 class="text-3xl font-bold text-slate-800 dark:text-white mb-4">
              Our Mission
            </h3>
            <p class="text-lg text-slate-600 dark:text-slate-400">
              To empower businesses with innovative engineering and software solutions that drive efficiency, growth, and success in an ever-evolving technological landscape.
            </p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg">
            <div class="text-5xl mb-4">🔭</div>
            <h3 class="text-3xl font-bold text-slate-800 dark:text-white mb-4">
              Our Vision
            </h3>
            <p class="text-lg text-slate-600 dark:text-slate-400">
              To be the leading provider of engineering and software solutions in Zambia, recognized for our innovation, quality, and unwavering commitment to client success.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="py-20 bg-white dark:bg-slate-900">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-slate-800 dark:text-white mb-4">
          Our Core Values
        </h2>
        <p class="text-center text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
          The principles that guide everything we do
        </p>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div v-for="value in values" :key="value.title" 
               class="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-xl transition-all duration-300">
            <div class="text-5xl mb-4">{{ value.icon }}</div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-3">
              {{ value.title }}
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              {{ value.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us -->
    <section class="py-20 bg-gradient-to-r from-amber-500 to-orange-500">
      <div class="max-w-6xl mx-auto px-6">
        <h2 class="text-4xl font-bold text-center text-white mb-12">
          Why Choose HexaPrime?
        </h2>
        <div class="grid md:grid-cols-3 gap-8">
          <div class="text-center text-white">
            <div class="text-5xl mb-4">🏆</div>
            <h3 class="text-2xl font-semibold mb-3">Proven Expertise</h3>
            <p class="text-white/90">Years of experience delivering successful projects across various industries</p>
          </div>
          <div class="text-center text-white">
            <div class="text-5xl mb-4">⚡</div>
            <h3 class="text-2xl font-semibold mb-3">Fast Delivery</h3>
            <p class="text-white/90">Efficient processes that ensure timely project completion without compromising quality</p>
          </div>
          <div class="text-center text-white">
            <div class="text-5xl mb-4">💬</div>
            <h3 class="text-2xl font-semibold mb-3">Dedicated Support</h3>
            <p class="text-white/90">Ongoing support and consultation to ensure your continued success</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const values = ref([
  {
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex challenges.',
    icon: '💡'
  },
  {
    title: 'Quality',
    description: 'Excellence is our standard. We deliver solutions that exceed expectations.',
    icon: '⭐'
  },
  {
    title: 'Reliability',
    description: 'Our clients trust us to deliver on time, every time, with consistent results.',
    icon: '🛡️'
  },
  {
    title: 'Partnership',
    description: 'We build lasting relationships by understanding and supporting your business goals.',
    icon: '🤝'
  }
])
</script>