<script setup>
  import Header from '../components/Header.vue';
  import { imagesGeneral } from '../assets/data/imgGeneral.js';
  import { ofertasEspeciales } from '../assets/data/carouselofertas.js';
</script>

<template>
  <Header/>
  <!--Seccion Nuestra Historia-->
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
  <!--Seccion de descuentos-->
  <section class="py-12  promociones">
    <div class="max-w-7xl mx-auto px-4 contenedor">
      <h2 class="text-4xl font-bold text-center mb-10 text-yellow-500">Promociones Especiales</h2>
  
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 tarjetas-container">
        
        <!-- Tarjeta 1 -->
        <div class=" tarjeta bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
          <img class="w-full h-48 object-cover" :src="ofertasEspeciales[1].url" alt="Promoción 1">
          <div class="p-6 tarjeta-cuerpo">
            <h3 class="text-2xl font-semibold mb-2">20% en Cortes</h3>
            <p class="text-gray-600 mb-4">Esta semana aprovecha nuestro descuento especial en cortes de cabello.</p>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">Reserva ahora</button>
          </div>
        </div>
  
        <!-- Tarjeta 2 -->
        <div class="tarjeta bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
          <img class="w-full h-48 object-cover" :src="ofertasEspeciales[0].url" alt="Promoción 2">
          <div class="p-6 tarjeta-cuerpo">
            <h3 class="text-2xl font-semibold mb-2">Hidratación Capilar</h3>
            <p class="text-gray-600 mb-4">Nuestro tratamiento de hidratación capilar con keratina está diseñado para restaurar, fortalecer y dar brillo a tu cabello.</p>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">Reserva ahora</button>
          </div>
        </div>
  
        <!-- Tarjeta 3 -->
        <div class="tarjeta bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 transition-transform">
          <img class="w-full h-48 object-cover" :src="ofertasEspeciales[2].url" alt="Promoción 3">
          <div class="p-6 tarjeta-cuerpo">
            <h3 class="text-2xl font-semibold mb-2">Alisado 15% OFF</h3>
            <p class="text-gray-600 mb-4">Logra un cabello increíblemente liso con nuestro tratamiento especial.</p>
            <button class="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 transition-colors">Reserva ahora</button>
          </div>
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

  .promociones {
    padding-top: 3rem;   /* espacio arriba */
    padding-bottom: 3rem; /* espacio abajo */
    padding-left: 1rem;   /* espacio a la izquierda */
    padding-right: 1rem;  /* espacio a la derecha */
    margin-top: 2rem;    /* separación arriba de la sección */
    margin-bottom: 2rem; /* separación abajo de la sección */
    background-color: #f8f8f8; /* fondo gris clarito (opcional) */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .tarjetas-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
    padding-top: 2rem;
  }

  .tarjeta-cuerpo{
    padding-top: 10px;
    margin: 10px;
  }
  .tarjeta-cuerpo p{
    padding: 10px 0;
  }
  .tarjeta-cuerpo button{
    padding: 5px 5px;
    color: #1f2937;
  }

</style>
