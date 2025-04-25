<template>
    <!-- Top Bar -->
    <div class="top-bar bg-transparent backdrop-blur-sm fixed w-full z-50 h-[40px] flex items-center">
        <div class="max-w-[1440px] mx-auto px-16 flex justify-between items-center w-full">
            <!-- Social Media Icons -->
            <div class="flex gap-4">
                <a href="#" class="text-gray-600 hover:text-[#ffc107] transition-colors">
                    <i class="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" class="text-gray-600 hover:text-[#ffc107] transition-colors">
                    <i class="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" class="text-gray-600 hover:text-[#ffc107] transition-colors">
                    <i class="fab fa-whatsapp text-xl"></i>
                </a>
            </div>
            <!-- Login Button -->
            <div>
                <a href="#" class="flex items-center gap-2 text-gray-600 hover:text-[#ffc107] transition-colors">
                    <i class="fas fa-user text-xl"></i>
                    <span class="text-sm font-medium">Iniciar Sesión</span>
                </a>
            </div>
        </div>
    </div>

    <!-- Main Navbar -->
    <nav class="bg-transparent backdrop-blur-sm shadow-sm h-[90px] fixed w-full top-8 z-40">
      <div class="max-w-[1440px] w-full mx-auto px-16 flex justify-between items-center h-full">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3">
          <img :src="imagesGeneral[0].url" class="h-50 transition-transform hover:scale-105" :alt="imagesGeneral[0].name" />
        </a>
        <!-- Menú -->
        <div class="flex items-center gap-12">
            <ul class="md:flex md:gap-12 md:items-center hidden">
              <li>
                <a href="#" class="font-medium text-gray-700 hover:text-[#ffc107] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#ffc107] after:transition-all after:duration-300">
                  Inicio
                </a>
              </li>
              <li class="relative group" @mouseenter="dropdownOpen = true" @mouseleave="dropdownOpen = false">
                <button class="font-medium text-gray-700 hover:text-[#ffc107] transition-colors duration-300 flex items-center gap-1">
                  Servicios
                  <svg class="w-4 h-4 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                  </svg>
                </button>
                <!-- Dropdown -->
                <ul v-show="dropdownOpen" class="absolute left-0 mt-2 bg-white/80 backdrop-blur-md rounded-lg shadow-xl w-48 py-2 transition-all duration-300">
                  <li><a href="#" class="li-desple block px-4 py-3 text-gray-700 hover:text-[#ffc107] hover:bg-[#fff8e1] transition-colors duration-200 border-b border-gray-100">Cortes</a></li>
                  <li><a href="#" class="li-desple block px-4 py-3 text-gray-700 hover:text-[#ffc107] hover:bg-[#fff8e1] transition-colors duration-200 border-b border-gray-100">Peinados</a></li>
                  <li><a href="#" class="li-desple block px-4 py-3 text-gray-700 hover:text-[#ffc107] hover:bg-[#fff8e1] transition-colors duration-200">Coloración</a></li>
                </ul>
              </li>
              <li><a href="#" class="font-medium text-gray-700 hover:text-[#ffc107] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#ffc107] after:transition-all after:duration-300">Nosotros</a></li>
              <li><a href="#" class="font-medium text-gray-700 hover:text-[#ffc107] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#ffc107] after:transition-all after:duration-300">Contacto</a></li>
            </ul>
            <div>
                <button class="text-gray-700 hover:text-[#ffc107] transition-colors duration-300">
                    <i class="fas fa-search text-xl"></i>
                </button>
            </div>
            <div class=" ">
                <button class="button h-[50px] text-gray-700  text-xl font-semibold rounded-[10%] transition-colors duration-300 shadow-md  ">
                    Reservar
                </button>
            </div>
        </div>
      </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue'
import { imagesGeneral } from '../assets/data/imgGeneral.js'

const isOpen = ref(false)
const dropdownOpen = ref(false)
</script>

<style scoped>
nav, .top-bar {
  backdrop-filter: blur(4px);
  padding: 0 2.5rem;
}
.button{
    padding: 0 10px;
    background-color: #ffc107;  /* Un dorado más brillante y llamativo */
}

.button:hover{
    background-color: #ffb300;  /* Una versión ligeramente más oscura para el hover */
}

.li-desple{
    padding: 5px 1rem;
}
</style>

  