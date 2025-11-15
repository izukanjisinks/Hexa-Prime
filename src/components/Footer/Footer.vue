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
    <footer class="bg-slate-200 dark:bg-slate-800 mt-auto">
      <div class="max-w-6xl mx-auto px-6 py-12">
        <div class="grid md:grid-cols-4 gap-8 mb-8">
          <!-- Company Info -->
          <div class="col-span-2">
            <router-link to="/" class="flex items-center mb-4">
              <img 
                :src="props.isDark ? '/logo/HexaPrime-DarkMode.png' : '/logo/HexaPrime-LightMode.png'"
                class="h-[40px] fit-cover"/>
            </router-link>
            <p class="text-slate-600 dark:text-slate-400 mb-4">
              Leading provider of engineering and software solutions in Zambia. Transforming businesses through innovation and expertise.
            </p>
            <div class="flex items-center space-x-4">
              <label class="relative inline-flex items-center cursor-pointer">
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
              <span class="text-sm text-slate-600 dark:text-slate-400">Toggle Theme</span>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold text-slate-800 dark:text-white mb-4">Quick Links</h3>
            <ul class="space-y-2">
              <li>
                <router-link to="/" class="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition">
                  Home
                </router-link>
              </li>
              <li>
                <router-link to="/about" class="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition">
                  About Us
                </router-link>
              </li>
              <li>
                <router-link to="/services" class="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition">
                  Services
                </router-link>
              </li>
              <li>
                <router-link to="/contact" class="text-slate-600 dark:text-slate-400 hover:text-amber-500 transition">
                  Contact
                </router-link>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div>
            <h3 class="text-lg font-semibold text-slate-800 dark:text-white mb-4">Contact Us</h3>
            <ul class="space-y-2 text-slate-600 dark:text-slate-400">
              <li class="flex items-start">
                <span class="mr-2">📧</span>
                <a href="mailto: info@hexaprime.co.zm" class="hover:text-amber-500 transition">
                   info@hexaprime.co.zm
                </a>
              </li>
              <li class="flex items-start">
                <span class="mr-2">📞</span>
                <a href="tel:+260966468386" class="hover:text-amber-500 transition">
                  +260 966 468 386
                </a>
              </li>
              <li class="flex items-start">
                <span class="mr-2">🕐</span>
                <span>Mon-Fri: 8AM - 5PM</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2">📍</span>
                <span>Zambia</span>
              </li>
            </ul>
          </div>
        </div>

        <!-- Bottom Bar -->
        <div class="border-t border-slate-300 dark:border-slate-700 pt-6 text-center">
          <p class="text-slate-600 dark:text-slate-400">
            &copy; 2025 HexaPrime. All rights reserved. | Engineering & Software Solutions
          </p>
        </div>
      </div>
    </footer>
</template>