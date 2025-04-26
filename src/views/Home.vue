<script setup>
  import Header from '../components/Header.vue';
  import { imagesGeneral } from '../assets/data/imgGeneral.js';
</script>

<template>
  <Header/>
  <section class="h-screen py-20 px-4 md:px-8 lg:px-16 section-historia">
    <div class=" relative max-w-7xl mx-auto">
      <!-- Contenedor de historia -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
              <!-- Título de la sección -->
      <div class=" container-title absolute inset-x-0 text-center mb-12">
        <h2 class="text-6xl md:text-7xl font-extrabold text-gray-800 leading-tight drop-shadow-md">
          <span class="text-[#ffc107]">NUESTRA </span> 
          <span class="text-[#ffb300]"> HISTORIA</span>
        </h2>
      </div>
        <!-- Imagen -->
          <img 
            :src="imagesGeneral[2].url" 
            :alt="imagesGeneral[2].name"
            class="w-full h-[650px] object-cover object-center shadow-lg rounded-xl"
          >
        <!-- Texto -->
        <div class="container-description space-y-6 text-gray-500 leading-relaxed">
          <p class="text-lg leading-relaxed">
            Salón de Belleza Rosa nació de una idea simple: que cada persona necesita un espacio donde pueda sentirse bien, verse bien y salir con una sonrisa. Todo comenzó con una pequeña silla, un espejo antiguo y muchas ganas de crear algo bonito. Poco a poco, ese rincón se fue llenando de clientas felices, charlas, risas y el aroma inconfundible del café recién hecho.
          </p>
          <p class="text-lg leading-relaxed">
            No nos tomamos demasiado en serio, pero sí nos tomamos en serio lo que hacemos. Amamos cuidar cada detalle, escuchar lo que buscas y ayudarte a encontrar ese estilo que te haga sentir tú. Ya sea un cambio radical, un peinado para una ocasión especial o simplemente un rato para desconectarte del mundo, en Rosa siempre vas a encontrar un espacio cálido, sin apuros ni presiones.
          </p>
          <p class="text-lg leading-relaxed">
            Y aunque empezamos con lo básico, hoy somos un equipo creativo, apasionado y con muchas ganas de seguir creciendo. Si alguna vez soñaste con un lugar donde puedas relajarte, reír y salir sintiéndote increíble… ese lugar es Rosa.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>
<style scoped>
  .section-historia {
    width: 100%;
    height: 100vh !important; /* Fuerza la altura al 100% del viewport */
    padding: 0 100px;
    display: flex;
    align-items: center;
    min-height: 100vh;
    margin-top: 0;
    margin-bottom: 0;
  }
  
  .container-title{
    width: 100%;
    height: auto;
    padding: 20px 100px;
  }

  .container-description{
    width: 100%;
    height: auto;
    padding: 106px 30px;
  }
</style>
