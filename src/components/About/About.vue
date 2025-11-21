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
          About <span class="text-amber-500">HexaPrime</span>
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
            <div class="flex mb-4">
                <div class="mr-2" >
                  <svg width="45px" height="45px" viewBox="0 -0.5 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M19.5 19H9.5C7.29086 19 5.5 17.2091 5.5 15V5" stroke="#74E8AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M15.619 7.25C15.2048 7.25 14.869 7.58579 14.869 8C14.869 8.41421 15.2048 8.75 15.619 8.75V7.25ZM19.5 8.75C19.9142 8.75 20.25 8.41421 20.25 8C20.25 7.58579 19.9142 7.25 19.5 7.25V8.75ZM20.25 8C20.25 7.58579 19.9142 7.25 19.5 7.25C19.0858 7.25 18.75 7.58579 18.75 8H20.25ZM18.75 11.607C18.75 12.0212 19.0858 12.357 19.5 12.357C19.9142 12.357 20.25 12.0212 20.25 11.607H18.75ZM20.0765 8.47973C20.3414 8.16133 20.2981 7.68844 19.9797 7.42349C19.6613 7.15855 19.1884 7.20188 18.9235 7.52027L20.0765 8.47973ZM15.5 12.807L16.0038 13.3626C16.0298 13.339 16.054 13.3137 16.0765 13.2867L15.5 12.807ZM13.931 12.868L13.4663 13.4567L13.4718 13.461L13.931 12.868ZM12.882 12.04L13.3467 11.4513L13.3429 11.4483L12.882 12.04ZM11.2 12.223L10.6226 11.7443C10.6152 11.7532 10.608 11.7623 10.601 11.7716L11.2 12.223ZM11.072 12.375L11.6074 12.9002C11.6112 12.8963 11.615 12.8923 11.6187 12.8884L11.072 12.375ZM7.83052 14.6088C7.54048 14.9046 7.54508 15.3794 7.8408 15.6694C8.13652 15.9595 8.61138 15.9549 8.90141 15.6592L7.83052 14.6088ZM15.619 8.75H19.5V7.25H15.619V8.75ZM18.75 8V11.607H20.25V8H18.75ZM18.9235 7.52027L14.9235 12.3273L16.0765 13.2867L20.0765 8.47973L18.9235 7.52027ZM14.9962 12.2514C14.8266 12.4052 14.5711 12.4151 14.3901 12.275L13.4718 13.461C14.228 14.0465 15.2953 14.005 16.0038 13.3626L14.9962 12.2514ZM14.3956 12.2793L13.3466 11.4513L12.4173 12.6287L13.4663 13.4567L14.3956 12.2793ZM13.3429 11.4483C12.5051 10.7957 11.3004 10.9268 10.6226 11.7443L11.7773 12.7017C11.9377 12.5082 12.2228 12.4772 12.4211 12.6317L13.3429 11.4483ZM10.601 11.7716C10.5774 11.8029 10.5521 11.833 10.5252 11.8616L11.6187 12.8884C11.6826 12.8203 11.7427 12.7489 11.7989 12.6744L10.601 11.7716ZM10.5365 11.8498L7.83052 14.6088L8.90141 15.6592L11.6074 12.9002L10.5365 11.8498Z" fill="#74E8AE"></path> </g></svg>
                </div>
                <h3 class="text-3xl font-bold text-slate-800 dark:text-white">
                  Our Mission
                </h3>
            </div>
            
            <p class="text-lg text-slate-600 dark:text-slate-400">
              To empower businesses with innovative engineering and software solutions that drive efficiency, growth, and success in an ever-evolving technological landscape.
            </p>
          </div>
          <div class="bg-white dark:bg-slate-900 p-8 rounded-xl shadow-lg">
            <div class="flex mb-4">
              <div class="mr-4">
                <svg width="45px" height="45px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="matrix(-1, 0, 0, 1, 0, 0)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20.5764 8.00122C21.4326 7.51527 21.8608 7.2723 21.9732 6.85985C22.0856 6.44741 21.8384 6.02657 21.3441 5.18488L20.2954 3.39939C19.8011 2.55771 19.5539 2.13687 19.1343 2.02635C18.7147 1.91584 18.2866 2.15881 17.4304 2.64476L13.7467 4.73538C12.9155 5.20709 12.4999 5.44294 12.3916 5.84725C12.2833 6.25157 12.5253 6.6636 13.0093 7.48766L14.1293 9.39465C14.6004 10.1966 14.8359 10.5976 15.2318 10.7037C15.6277 10.8098 16.0322 10.5802 16.841 10.1212M12.2429 6.18353L8.55917 8.27415C7.72801 8.74586 7.31243 8.98172 7.20411 9.38603C7.09579 9.79034 7.33779 10.2024 7.82179 11.0264L8.41749 12.0407C8.88853 12.8427 9.12405 13.2437 9.51996 13.3497C9.91586 13.4558 10.3203 13.2263 11.1292 12.7672L14.8646 10.6472M7.05634 9.72257L3.4236 11.7843C2.56736 12.2702 2.13923 12.5132 2.02681 12.9256C1.91438 13.3381 2.16156 13.7589 2.65591 14.6006C3.15026 15.4423 3.39744 15.8631 3.81702 15.9736C4.2366 16.0842 4.66472 15.8412 5.52096 15.3552L9.1537 13.2935" stroke="#74E8AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 12.5L16 22" stroke="#74E8AE" stroke-width="1.5" stroke-linecap="round"></path> <path d="M12 12.5L8 22" stroke="#74E8AE" stroke-width="1.5" stroke-linecap="round"></path> </g></svg>
              </div>
              <h3 class="text-3xl font-bold text-slate-800 dark:text-white">
                Our Vision
              </h3>
            </div>
            
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
          <!-- Innovation -->
          <div class="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-xl transition-all duration-300">
            <div class="flex justify-center mb-4">
              <svg width="55px" height="55px" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" stroke-width="3" stroke="#74E8AE" fill="none"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"><line x1="50.4" y1="24.38" x2="58.3" y2="23.14"></line><line x1="47.93" y1="17.11" x2="52.87" y2="14.2"></line><line x1="42.89" y1="11.73" x2="46.21" y2="4.51"></line><line x1="33.45" y1="10.69" x2="33.41" y2="4.96"></line><line x1="24.29" y1="12.09" x2="21.62" y2="4.51"></line><line x1="17.99" y1="17.03" x2="12.96" y2="14.29"></line><line x1="15.78" y1="23.97" x2="8.03" y2="22.66"></line><path d="M26.22,45.47c0-5.16-3.19-9.49-4.91-12.69A12.24,12.24,0,0,1,19.85,27c0-6.79,6.21-12.3,13-12.3"></path><path d="M39.48,45.47c0-5.16,3.19-9.49,4.91-12.69A12.24,12.24,0,0,0,45.85,27c0-6.79-6.21-12.3-13-12.3"></path><rect x="23.63" y="45.19" width="18.93" height="4.25" rx="2.12"></rect><rect x="24.79" y="49.43" width="16.61" height="4.25" rx="2.12"></rect><path d="M36.32,53.68v.84a3.23,3.23,0,1,1-6.44,0v-.84"></path><path d="M24.57,26.25a7.5,7.5,0,0,1,7.88-7.11"></path></g></svg>            </div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-3">
              Innovation
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              We embrace cutting-edge technologies and creative solutions to solve complex challenges.
            </p>
          </div>

          <!-- Quality -->
          <div class="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-xl transition-all duration-300">
            <div class="flex justify-center mb-4">
              <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M9.15316 5.40838C10.4198 3.13613 11.0531 2 12 2C12.9469 2 13.5802 3.13612 14.8468 5.40837L15.1745 5.99623C15.5345 6.64193 15.7144 6.96479 15.9951 7.17781C16.2757 7.39083 16.6251 7.4699 17.3241 7.62805L17.9605 7.77203C20.4201 8.32856 21.65 8.60682 21.9426 9.54773C22.2352 10.4886 21.3968 11.4691 19.7199 13.4299L19.2861 13.9372C18.8096 14.4944 18.5713 14.773 18.4641 15.1177C18.357 15.4624 18.393 15.8341 18.465 16.5776L18.5306 17.2544C18.7841 19.8706 18.9109 21.1787 18.1449 21.7602C17.3788 22.3417 16.2273 21.8115 13.9243 20.7512L13.3285 20.4768C12.6741 20.1755 12.3469 20.0248 12 20.0248C11.6531 20.0248 11.3259 20.1755 10.6715 20.4768L10.0757 20.7512C7.77268 21.8115 6.62118 22.3417 5.85515 21.7602C5.08912 21.1787 5.21588 19.8706 5.4694 17.2544L5.53498 16.5776C5.60703 15.8341 5.64305 15.4624 5.53586 15.1177C5.42868 14.773 5.19043 14.4944 4.71392 13.9372L4.2801 13.4299C2.60325 11.4691 1.76482 10.4886 2.05742 9.54773C2.35002 8.60682 3.57986 8.32856 6.03954 7.77203L6.67589 7.62805C7.37485 7.4699 7.72433 7.39083 8.00494 7.17781C8.28555 6.96479 8.46553 6.64194 8.82547 5.99623L9.15316 5.40838Z" fill="#74E8AE"></path> </g></svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-3">
              Quality
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              Excellence is our standard. We deliver solutions that exceed expectations.
            </p>
          </div>

          <!-- Reliability -->
          <div class="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-xl transition-all duration-300">
            <div class="flex justify-center mb-4">
              <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path opacity="0.5" d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#74E8AE" stroke-width="1.5"></path> <path d="M8.5 12.5L10.5 14.5L15.5 9.5" stroke="#74E8AE" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-3">
              Reliability
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              Our clients trust us to deliver on time, every time, with consistent results.
            </p>
          </div>

          <!-- Partnership -->
          <div class="text-center p-6 bg-slate-50 dark:bg-slate-800 rounded-xl hover:shadow-xl transition-all duration-300">
            <div class="flex justify-center mb-4">
              <svg height="50px" width="50px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 489.901 489.901" xml:space="preserve" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path style="fill:#74E8AE;" d="M0.987,250.774c1.2,2.4,3.2,4.2,5.7,5l62.6,21.5c1.1,0.4,2.1,0.5,3.2,0.5c4.1,0,8-2.6,9.4-6.7 l49.1-143.3l2.5,0.9c12.7,4.5,26.9,3.7,39-2.2l6.1-3c7.3-3.5,15.8-4.1,23.4-1.4l114.2,39.4c-1.2,4.4-3.5,9.5-7.5,12.3 c-4.6,3.2-11.7,3.2-21,0l-51.2-17.5c-2.6-0.9-5.5-0.6-7.9,0.7s-4.2,3.6-4.9,6.2c-0.1,0.3-7.3,26.7-29.5,38.6 c-14,7.5-31.5,7.7-52,0.7c-5.2-1.8-10.8,1-12.6,6.2c-1.8,5.2,1,10.8,6.2,12.6c12,4.1,23.4,6.2,34,6.2c12.3,0,23.6-2.8,33.9-8.3 c20-10.8,30.6-29.4,35.5-40.9l42,14.4c15.6,5.3,28.6,4.5,38.7-2.5c15.9-11,17-32.5,17.1-34.9c0.1-4.3-2.6-8.2-6.7-9.7l-122-42.1 c-12.6-4.3-26.6-3.5-38.6,2.4l-6.1,3c-7.4,3.6-16,4.1-23.7,1.4l-10.1-3.6c-0.6-0.4-1.2-0.7-1.9-0.9l-62.3-21.7 c-5.2-1.8-10.8,1-12.6,6.2l-52.5,153C-0.313,245.674-0.113,248.374,0.987,250.774z M68.587,105.974l43.8,15l-46,134.3l-43.8-15 L68.587,105.974z"></path> <path style="fill:#74E8AE;" d="M104.087,341.474c4.9,10,14.7,15.8,25.1,16.2c0,4.3,1,8.7,2.9,12.7c3.4,7,9.3,12.2,16.7,14.7 c3.1,1.1,6.3,1.6,9.4,1.6c4.4,0,8.7-1,12.7-3l5.2-2.6c0.4,3,1.3,6.1,2.7,9c3.4,7,9.3,12.2,16.7,14.7c3.1,1.1,6.3,1.6,9.4,1.6 c4.4,0,8.7-1,12.7-3l113.7-55.7c25.4-12.4,48.8-28.4,69.6-47.5l25.4-23.3l58.1-28.4c4.9-2.4,6.9-8.3,4.5-13.2l-70.8-145.3 c-1.2-2.4-3.2-4.2-5.7-5c-2.5-0.9-5.2-0.7-7.6,0.5l-59.4,29.1c-4.9,2.4-6.9,8.3-4.5,13.2l67.8,138.6l-21,19.3 c-19.4,17.8-41.3,32.7-64.9,44.3l-113.7,55.7c-2.2,1.1-4.7,1.2-7.1,0.4c-2.3-0.8-4.2-2.5-5.3-4.7s-1.2-4.7-0.4-7.1 c0.8-2.3,2.5-4.2,4.7-5.3l63.6-31.1c4.9-2.4,6.9-8.3,4.5-13.2c-2.4-4.9-8.3-6.9-13.2-4.5l-63.6,31.1l0,0l-30,14.7 c-2.2,1.1-4.7,1.2-7.1,0.4c-2.3-0.8-4.2-2.5-5.3-4.7s-1.2-4.7-0.4-7.1c0.8-2.3,2.5-4.2,4.7-5.3l91.2-44.6 c4.9-2.4,6.9-8.3,4.5-13.2c-2.4-4.9-8.3-6.9-13.2-4.5l-102.5,50.1c-4.6,2.2-10.1,0.3-12.4-4.2c-1.1-2.2-1.2-4.7-0.4-7.1 c0.8-2.3,2.5-4.2,4.7-5.3l40.4-19.8l0,0l52.5-25.7c4.9-2.4,6.9-8.3,4.5-13.2c-2.4-4.9-8.3-6.9-13.2-4.5l-81.7,40 c-4.6,2.2-10.1,0.3-12.4-4.2c-2.2-4.6-0.3-10.1,4.2-12.4l43.4-21.2c4.9-2.4,6.9-8.3,4.5-13.2s-8.3-6.9-13.2-4.5l-43.4,21.2 c-14.4,7-20.4,24.5-13.3,38.9c2,4.1,4.8,7.4,8.2,10.1C100.587,320.074,99.187,331.574,104.087,341.474z M362.987,127.974 l41.6-20.4l62.4,127.5l-41.6,20.4L362.987,127.974z"></path> </g> </g> </g></svg>
            </div>
            <h3 class="text-xl font-semibold text-slate-800 dark:text-white mb-3">
              Partnership
            </h3>
            <p class="text-slate-600 dark:text-slate-400">
              We build lasting relationships by understanding and supporting your business goals.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!--
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
    </section> -->
  </main>
</template>

<script setup>
import { ref } from 'vue'

// Values are now hardcoded in template with SVG icons
</script>