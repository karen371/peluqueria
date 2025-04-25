<script setup>
    import { ref } from 'vue'
    import Navbar from './Navbar.vue';
    import { imagesGeneral } from '../assets/data/imgGeneral.js'
</script>

<template>
    <header class="header-container">
        <Navbar/>
        <!-- Hero Section -->
        <div class="gradient-overlay">
            <div class="content-container">
                <div class="text-container">
                    <h1 class="main-title">
                        Tu nuevo yo comienza aquí
                    </h1>
                    <p class="description">
                        Descubre una nueva versión de ti mismo con nuestros servicios de belleza profesional
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
    </header>
</template>

<style scoped>
.header-container {
    position: relative;
    height: 600px;
    width: 100%;
    overflow: hidden;
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
    font-size: 1.125rem;
    margin-bottom: 2rem;
    color: #e5e7eb;
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
</style>