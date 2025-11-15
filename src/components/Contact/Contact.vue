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
          Contact Us
        </h1>
        <p class="text-xl text-slate-700 dark:text-slate-300 max-w-3xl mx-auto">
          Get in touch with our team - we're here to help with your engineering and software needs
        </p>
      </div>
    </section>

    <!-- Contact Information & Form -->
    <section class="py-20 bg-white dark:bg-slate-900">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid md:grid-cols-2 gap-12">
          <!-- Contact Information -->
          <div>
            <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-8">
              Get In Touch
            </h2>
            
            <!-- Contact Details -->
            <div class="space-y-6 mb-8">
              <div class="flex items-start">
                <div class="text-3xl mr-4">📧</div>
                <div>
                  <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-1">Email</h3>
                  <a href="mailto: info@hexaprime.co.zm" class="text-amber-500 hover:text-amber-600 transition">
                    izukanji@hexaprime.co.zm
                  </a>
                  <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Secretary Contact</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="text-3xl mr-4">📞</div>
                <div>
                  <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-1">Phone</h3>
                  <a href="tel:+260966468386" class="text-amber-500 hover:text-amber-600 transition">
                    +260 966 468 386
                  </a>
                  <p class="text-sm text-slate-600 dark:text-slate-400 mt-1">Call us during business hours</p>
                </div>
              </div>

              <div class="flex items-start">
                <div class="text-3xl mr-4">📍</div>
                <div>
                  <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-1">Location</h3>
                  <p class="text-slate-600 dark:text-slate-400">
                    Zambia
                  </p>
                </div>
              </div>
            </div>

            <!-- Business Hours -->
            <div class="bg-slate-50 dark:bg-slate-800 rounded-xl p-6">
              <h3 class="text-2xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                <span class="text-3xl mr-3">🕐</span>
                Business Hours
              </h3>
              <div class="space-y-3">
                <div class="flex justify-between items-center">
                  <span class="text-slate-700 dark:text-slate-300 font-medium">Monday - Friday</span>
                  <span class="text-amber-500 font-semibold">8:00 AM - 5:00 PM</span>
                </div>
                <div class="border-t border-slate-200 dark:border-slate-700 pt-3">
                  <div class="flex justify-between items-center">
                    <span class="text-slate-700 dark:text-slate-300 font-medium">Saturday - Sunday</span>
                    <span class="text-slate-500 dark:text-slate-400">Closed</span>
                  </div>
                </div>
              </div>
              <p class="text-sm text-slate-600 dark:text-slate-400 mt-4">
                We're closed on weekends and public holidays
              </p>
            </div>
          </div>

          <!-- Contact Form -->
          <div>
            <div class="bg-slate-50 dark:bg-slate-800 rounded-xl p-8">
              <h2 class="text-3xl font-bold text-slate-800 dark:text-white mb-6">
                Send Us a Message
              </h2>
              <form @submit.prevent="submitForm" class="space-y-4">
                <div>
                  <label class="block text-slate-700 dark:text-slate-300 font-medium mb-2">
                    Full Name *
                  </label>
                  <input 
                    v-model="formData.name"
                    type="text" 
                    required
                    class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label class="block text-slate-700 dark:text-slate-300 font-medium mb-2">
                    Email Address *
                  </label>
                  <input 
                    v-model="formData.email"
                    type="email" 
                    required
                    class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label class="block text-slate-700 dark:text-slate-300 font-medium mb-2">
                    Phone Number
                  </label>
                  <input 
                    v-model="formData.phone"
                    type="tel"
                    class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    placeholder="+260 XXX XXX XXX"
                  />
                </div>

                <div>
                  <label class="block text-slate-700 dark:text-slate-300 font-medium mb-2">
                    Subject *
                  </label>
                  <input 
                    v-model="formData.subject"
                    type="text" 
                    required
                    class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition"
                    placeholder="How can we help you?"
                  />
                </div>

                <div>
                  <label class="block text-slate-700 dark:text-slate-300 font-medium mb-2">
                    Message *
                  </label>
                  <textarea 
                    v-model="formData.message"
                    required
                    rows="5"
                    class="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-900 text-slate-800 dark:text-white focus:ring-2 focus:ring-amber-500 focus:border-transparent transition resize-none"
                    placeholder="Tell us about your project or inquiry..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  class="w-full px-8 py-4 bg-amber-500 hover:bg-amber-600 text-white font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Map or Additional Info Section -->
    <section class="py-20 bg-slate-50 dark:bg-slate-800">
      <div class="max-w-6xl mx-auto px-6 text-center">
        <h2 class="text-4xl font-bold text-slate-800 dark:text-white mb-6">
          Why Choose HexaPrime?
        </h2>
        <div class="grid md:grid-cols-3 gap-8 mt-12">
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl">
            <div class="text-4xl mb-4">⚡</div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-2">Quick Response</h3>
            <p class="text-slate-600 dark:text-slate-400">We respond to all inquiries within 24 hours during business days</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl">
            <div class="text-4xl mb-4">🎯</div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-2">Expert Team</h3>
            <p class="text-slate-600 dark:text-slate-400">Experienced professionals ready to tackle your challenges</p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-6 rounded-xl">
            <div class="text-4xl mb-4">🤝</div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-2">Client-Focused</h3>
            <p class="text-slate-600 dark:text-slate-400">Your success is our priority - we're here to support you</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup>
import { ref } from 'vue'

const formData = ref({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: ''
})

const submitForm = () => {
  // Form submission logic would go here
  alert('Thank you for your message! We will get back to you soon.')
  // Reset form
  formData.value = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  }
}
</script>