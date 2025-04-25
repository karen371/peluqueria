<script setup>
    import { ref } from 'vue'
    import Navbar from './Navbar.vue';
    import { imagesGeneral } from '../assets/data/imgGeneral.js'
    import { servicios} from '../assets/data/services.js'

    const isOpen = ref(false)
</script>

<template>
    <header class="relative h-screen w-full overflow-hidden">
        <Navbar/>
        <!-- Hero Section -->
        <div class="gradient-overlay">
            <div class="content-container">
                <div class="text-container">
                    <h1 class="text-5xl font-bold mb-4 leading-tight text-white drop-shadow-[0_5px_3px_rgba(0,0,0,0.4)] hover:drop-shadow-[0_5px_5px_rgba(0,0,0,0.5)] transition-all duration-300">
                        Tu nuevo yo comienza aquí
                    </h1>
                    <p class="description">
                        ¡Transforma tu imagen y realza tu belleza natural! Nuestro equipo de expertos estilistas te ayudará a descubrir tu mejor versión con servicios personalizados de primera calidad.
                    </p>
                    <button class="cta-button">
                        Reserva tu cita
                    </button>
                </div>
            </div>
        </div>
        <!-- Background Image -->
        <div class="background-container">
            <img 
                :src="imagesGeneral[1].url" 
                :alt="imagesGeneral[1].name" 
                class="background-image"
            />
        </div>
        <!-- Servicios Destacados -->
        <div class="services-container">
            <div class="services-grid">
                <div v-for="ser in servicios" :key="ser.id" class="service-card">
                    <img :src="ser.url || ''"  :alt="ser.name" class="service-image">
                    <div class="service-overlay">
                        <h3>{{ser.title}}</h3>
                        <p>{{ser.description}}</p>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped>
/* Podemos eliminar o modificar estas clases ya que ahora usamos Tailwind */
.header-container {
    position: relative;
    width: 100%;
}

.gradient-overlay {
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, rgba(0,0,0,0.5), transparent);
    z-index: 10;
}

.content-container {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 64px;
    height: 100%;
    display: flex;
    align-items: center;
}

.text-container {
    color: white;
    max-width: 42rem;
}

.main-title {
    font-size: 3rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.2;
}

.description {
    font-size: 1.25rem;
    margin-bottom: 2rem;
    color: #e5e7eb;
    line-height: 1.6;
    letter-spacing: 0.5px;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
    max-width: 90%;
    padding-top: 10px
}

.description:hover {
    color: white;
    text-shadow: 2px 2px 6px rgba(0,0,0,0.4);
    transition: all 0.3s ease;
}

.cta-button {
    background-color: #ffc107;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 600;
    color: #1f2937;
    transition: all 0.3s ease;
}

.cta-button:hover {
    background-color: #ffb300;
    transform: scale(1.05);
}

.background-container {
    position: absolute;
    inset: 0;
    z-index: -1;
}

.background-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.services-container {
    position: absolute;
    bottom: 20px;
    left: 0;
    right: 0;
    z-index: 20;
    padding: 50px 0 10px 0; /* Aumentado el padding superior */
}

.services-grid {
    max-width: 1440px;
    margin: 0 auto;
    padding: 0 64px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px; /* Reducido el gap para mejor espaciado */
}

.service-card {
    position: relative;
    height: 180px; /* Reducida la altura para mejor proporción */
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
    background-color: white; /* Añadido fondo blanco */
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.service-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.service-overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0.2));
    padding: 15px;
    color: white;
    transform: translateY(100%); /* Cambiado a 100% para ocultar completamente */
    transition: transform 0.3s ease;
}

.service-card:hover .service-overlay {
    transform: translateY(0);
}

.service-overlay h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 5px;
}

.service-overlay p {
    font-size: 1rem;
    opacity: 0.9;
}

@media (max-width: 768px) {
    .services-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 480px) {
    .services-grid {
        grid-template-columns: 1fr;
    }
}
</style>