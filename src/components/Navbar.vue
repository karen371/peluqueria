<template>
    <!-- Top Bar -->
    <div class="top-bar bg-transparent fixed w-full z-50 h-[45px] flex items-center">
        <div class="max-w-[1440px] mx-auto px-16 flex justify-between items-center w-full">
            <!-- Social Media Icons -->
            <div class="flex gap-4">
                <a href="#" class="text-gray-300 hover:text-[#ffc107] transition-colors">
                    <i class="fab fa-facebook text-xl"></i>
                </a>
                <a href="#" class="text-gray-300 hover:text-[#ffc107] transition-colors">
                    <i class="fab fa-instagram text-xl"></i>
                </a>
                <a href="#" class="text-gray-300 hover:text-[#ffc107] transition-colors">
                    <i class="fab fa-whatsapp text-xl"></i>
                </a>
            </div>
            <!-- Login Button -->
            <div>
                <a href="#" class="flex items-center gap-2 text-gray-300 hover:text-[#ffc107] transition-colors">
                    <i class="fas fa-user text-xl"></i>
                    <span class="text-sm font-medium">Iniciar Sesión</span>
                </a>
            </div>
        </div>
    </div>

    <!-- Main Navbar -->
    <nav class="bg-transparent shadow-sm h-[110px] fixed w-full top-8 z-40">
      <div class="max-w-[1440px] w-full mx-auto px-16 flex justify-between items-center h-full">
        <!-- Logo -->
        <a href="#" class="flex items-center gap-3">
          <img :src="imagesGeneral[0].url" class="h-50 transition-transform hover:scale-105" :alt="imagesGeneral[0].name" />
        </a>
        <!-- Menú -->
        <div class="flex items-center gap-12">
            <ul class="md:flex md:gap-12 md:items-center hidden">
              <li>
                <a href="#" class="font-medium text-gray-300 hover:text-[#ffc107] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#ffc107] after:transition-all after:duration-300">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#" class="font-medium text-gray-300 hover:text-[#ffc107] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#ffc107] after:transition-all after:duration-300">
                  Servicios
                </a>
              </li>
              <li><a href="#" class="font-medium text-gray-300 hover:text-[#ffc107] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#ffc107] after:transition-all after:duration-300">Nosotros</a></li>
              <li><a href="#" class="font-medium text-gray-300 hover:text-[#ffc107] transition-colors duration-300 relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 hover:after:w-full after:bg-[#ffc107] after:transition-all after:duration-300">Contacto</a></li>
            </ul>
            <div>
                <button class="text-gray-300 hover:text-[#ffc107] transition-colors duration-300">
                    <i class="fas fa-search text-xl"></i>
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
    backdrop-filter: none;
    padding: 0 2.5rem;
}

/* Resto de estilos */
.button{
    padding: 0 10px;
    background-color: #ffc107;
}

.button:hover{
    background-color: #ffb300;
}

.li-desple{
    padding: 5px 1rem;
}

img{
  padding-top: 5px;
}
</style>

  