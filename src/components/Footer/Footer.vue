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
                :src="props.isDark ? '/Hexa-Prime/logo/HexaPrime-DarkMode.png' : '/Hexa-Prime/logo/HexaPrime-LightMode.png'"
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
              <span class="text-sm text-slate-600 dark:text-slate-400">Theme</span>
            </div>
          </div>

          <!-- Quick Links -->
          <div>
            <h3 class="text-lg font-semibold text-slate-800 dark:text-white mb-4">Quick Links</h3>
            <ul class="space-y-4">
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
            <ul class="space-y-4 text-slate-600 dark:text-slate-400">
              <li class="flex items-start">
                <span class="mr-2">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="style=bulk"> <g id="email"> <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M2.86466 4.1379C3.92465 3.15363 5.38503 2.75 7 2.75H17C18.615 2.75 20.0754 3.15363 21.1353 4.1379C22.2054 5.13152 22.75 6.60705 22.75 8.5V15.5C22.75 17.393 22.2054 18.8685 21.1353 19.8621C20.0754 20.8464 18.615 21.25 17 21.25H7C5.38503 21.25 3.92465 20.8464 2.86466 19.8621C1.79462 18.8685 1.25 17.393 1.25 15.5V8.5C1.25 6.60705 1.79462 5.13152 2.86466 4.1379Z" fill="#f59e0b"></path> <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M19.3633 7.31026C19.6166 7.63802 19.5562 8.10904 19.2285 8.3623L13.6814 12.6486C12.691 13.4138 11.3089 13.4138 10.3185 12.6486L4.77144 8.3623C4.44367 8.10904 4.38328 7.63802 4.63655 7.31026C4.88982 6.98249 5.36083 6.9221 5.6886 7.17537L11.2356 11.4616C11.6858 11.8095 12.3141 11.8095 12.7642 11.4616L18.3113 7.17537C18.6391 6.9221 19.1101 6.98249 19.3633 7.31026Z" fill="#000000"></path> </g> </g> </g></svg>
                </span>
                <a href="mailto: info@hexaprime.co.zm" class="hover:text-amber-500 transition">
                   info@hexaprime.co.zm
                </a>
              </li>
              <li class="flex items-start">
                <span class="mr-2">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Iconly/Curved/Call"> <g id="Call"> <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M8.20049 15.799C1.3025 8.90022 2.28338 5.74115 3.01055 4.72316C3.10396 4.55862 5.40647 1.11188 7.87459 3.13407C14.0008 8.17945 6.2451 7.46611 11.3894 12.6113C16.5348 17.7554 15.8214 9.99995 20.8659 16.1249C22.8882 18.594 19.4413 20.8964 19.2778 20.9888C18.2598 21.717 15.0995 22.6978 8.20049 15.799Z" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g> </g></svg>
                </span>
                <a href="tel:+260966468386" class="hover:text-amber-500 transition">
                  +260 966 468 386
                </a>
              </li>
              <li class="flex items-start">
                <span class="mr-2">
                  <svg width="20px" height="20px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#f59e0b" stroke-width="3"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><circle cx="32" cy="32" r="24"></circle><polyline points="40 44 32 32 32 16"></polyline></g></svg>
                </span>
                <span>Mon-Fri: 8AM - 5PM</span>
              </li>
              <li class="flex items-start">
                <span class="mr-2">
                    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Iconly/Curved/Location"> <g id="Location"> <path id="Stroke 1" fill-rule="evenodd" clip-rule="evenodd" d="M14.5103 10.7105C14.5103 9.3292 13.391 8.20996 12.0097 8.20996C10.6295 8.20996 9.51025 9.3292 9.51025 10.7105C9.51025 12.0907 10.6295 13.21 12.0097 13.21C13.391 13.21 14.5103 12.0907 14.5103 10.7105Z" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path id="Stroke 3" fill-rule="evenodd" clip-rule="evenodd" d="M11.9995 21C9.10148 21 4.5 15.9587 4.5 10.5986C4.5 6.40246 7.8571 3 11.9995 3C16.1419 3 19.5 6.40246 19.5 10.5986C19.5 15.9587 14.8985 21 11.9995 21Z" stroke="#f59e0b" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g> </g> </g></svg>
                </span>
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