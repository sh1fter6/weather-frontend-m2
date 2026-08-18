<template>
  <div class="city-card">
    <div class="card-header">
      <h2 class="city-name">{{ city.nombre }}</h2>
    </div>
    
    <div class="card-body">
      <div class="weather-icon">{{ city.icono }}</div>
      <div class="temperature">{{ city.tempActual }}°</div>
      <div class="weather-state">{{ city.estadoActual }}</div>
    </div>
    
    <div class="card-footer">
      <router-link :to="`/lugar/${city.id}`" class="btn-detail">Ver Pronóstico</router-link>
    </div>
  </div>
</template>

<script setup>
defineProps({
  city: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.city-card {
  background: rgba(0,0,0,0.20);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);
  border: 1px solid rgba(255,255,255,0.16);
  border-radius: 20px;
  padding: 2rem;
  color: white;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.30);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  position: relative;
  overflow: hidden;
}
.city-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 1px;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent);
  pointer-events: none;
}
.city-card:hover {
  box-shadow: 0 12px 32px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.40);
}
.card-header {
  text-align: center;
  position: relative;
}
.city-name {
  margin: 0;
  font-size: 1.6rem;
  letter-spacing: 0.5px;
  color: #fff;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}

.card-body {
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  position: relative;
}
.weather-icon {
  font-size: 4rem;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
  margin-bottom: 0.5rem;
}
.temperature {
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
}
.weather-state {
  font-size: 1.1rem;
  color: #c7d2fe;
  font-weight: 500;
  letter-spacing: 1px;
}

.card-footer {
  margin-top: auto;
  position: relative;
}
.btn-detail {
  display: block;
  box-sizing: border-box;
  text-align: center;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: white;
  padding: 0.8rem;
  border-radius: 12px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}
.btn-detail:hover {
  background: white;
  color: #1e1b4b;
}
</style>
