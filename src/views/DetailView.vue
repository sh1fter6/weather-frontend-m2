<template>
  <div class="detail-view">
    <div v-if="loading" class="loading">
      Cargando detalle del clima...
    </div>

    <div v-else-if="!city" class="no-results">
      No se pudo cargar la información para esta ciudad.
      <br><br>
      <router-link to="/" class="btn-back">Volver al inicio</router-link>
    </div>

    <div v-else class="detail-container">
      <router-link to="/" class="btn-back">⬅ Volver al inicio</router-link>
      
      <div class="detail-header">
        <h1>{{ city.nombre }}</h1>
        <div class="current-weather">
          <div class="icon-large">{{ city.icono }}</div>
          <div>
            <div class="temp-large">{{ city.tempActual }}°C</div>
            <div class="state-large">{{ city.estadoActual }}</div>
          </div>
        </div>
      </div>

      <div class="stats-card" v-if="stats">
        <h3>Estadísticas de la semana</h3>
        <div class="stats-grid">
          <div class="stat-item">
            <span class="stat-label">Min</span>
            <span class="stat-value text-blue">{{ stats.minAbs }}°C</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Max</span>
            <span class="stat-value text-red">{{ stats.maxAbs }}°C</span>
          </div>
          <div class="stat-item">
            <span class="stat-label">Promedio</span>
            <span class="stat-value">{{ stats.promedio }}°C</span>
          </div>
        </div>
      </div>

      <div class="forecast-section">
        <h3>Pronóstico 7 Días</h3>
        <div class="forecast-list">
          <div v-for="(dia, index) in city.pronosticoSemanal" :key="index" class="forecast-item">
            <div class="f-date">{{ formatearFecha(dia.fecha) }}</div>
            <div class="f-icon">{{ dia.icono }}</div>
            <div class="f-state">{{ dia.estado }}</div>
            <div class="f-temps">
              <span class="f-min">{{ dia.min }}°</span> / 
              <span class="f-max">{{ dia.max }}°</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ciudadesBase, fetchWeather } from '../services/weatherService'

const route = useRoute()
const city = ref(null)
const loading = ref(true)

const stats = computed(() => {
  if (!city.value || !city.value.pronosticoSemanal) return null
  const pronostico = city.value.pronosticoSemanal
  
  let minAbs = 999
  let maxAbs = -999
  let suma = 0

  pronostico.forEach(dia => {
    if (dia.min < minAbs) minAbs = dia.min
    if (dia.max > maxAbs) maxAbs = dia.max
    suma += (dia.min + dia.max) / 2
  })

  return {
    minAbs,
    maxAbs,
    promedio: (suma / pronostico.length).toFixed(1)
  }
})

function formatearFecha(fechaIso) {
  const f = new Date(fechaIso + 'T12:00:00')
  return f.toLocaleDateString('es-CL', { weekday: 'short', day: 'numeric', month: 'short' })
}

onMounted(async () => {
  loading.value = true
  const cityId = route.params.id
  const ciudadBase = ciudadesBase.find(c => c.id === cityId)
  
  if (ciudadBase) {
    city.value = await fetchWeather(ciudadBase)
  }
  
  loading.value = false
})
</script>

<style scoped>
.detail-view {
  max-width: 900px;
  margin: 0 auto;
  padding: 3rem 2rem;
  color: white;
}
.btn-back {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #a5b4fc;
  text-decoration: none;
  font-weight: 600;
  margin-bottom: 2rem;
  transition: all 0.3s;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.5rem 1rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
}
.btn-back:hover {
  color: #fff;
  background: rgba(255, 255, 255, 0.15);
  transform: translateX(-4px);
}
.loading, .no-results {
  text-align: center;
  font-size: 1.2rem;
  color: #cbd5e1;
  padding: 4rem 0;
}
.detail-header {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 24px;
  padding: 3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.3);
}
.detail-header h1 {
  margin: 0;
  font-size: 3.5rem;
  font-weight: 700;
  letter-spacing: 1px;
}
.current-weather {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.icon-large {
  font-size: 5rem;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.3));
}
.temp-large {
  font-size: 4rem;
  font-weight: 700;
  color: white;
  line-height: 1;
}
.state-large {
  color: #c7d2fe;
  font-size: 1.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-top: 0.5rem;
}

.stats-card {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  padding: 2rem;
  margin-bottom: 2rem;
}
.stats-card h3 {
  margin-top: 0;
  margin-bottom: 1.5rem;
  color: #e5e7eb;
  font-size: 1.5rem;
  font-weight: 600;
}
.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  text-align: center;
}
.stat-item {
  background: rgba(255, 255, 255, 0.05);
  padding: 1.5rem;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.05);
}
.stat-label {
  color: #94a3b8;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 1px;
}
.stat-value {
  font-size: 2rem;
  font-weight: 700;
}
.text-blue { color: #818cf8; }
.text-red { color: #fb7185; }

.forecast-section h3 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  font-weight: 600;
}
.forecast-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
.forecast-item {
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 12px;
  padding: 1.2rem 2rem;
  display: grid;
  grid-template-columns: 2fr 1fr 2fr 1fr;
  align-items: center;
}
.f-date {
  font-weight: 600;
  text-transform: capitalize;
  font-size: 1.1rem;
}
.f-icon {
  font-size: 2rem;
  text-align: center;
}
.f-state {
  color: #94a3b8;
  font-size: 1.1rem;
}
.f-temps {
  text-align: right;
  font-weight: bold;
  font-size: 1.2rem;
}
.f-min { color: #818cf8; }
.f-max { color: #fb7185; }

@media (max-width: 600px) {
  .detail-header {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
    padding: 2rem;
  }
  .forecast-item {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
    text-align: center;
  }
  .f-temps {
    text-align: center;
  }
}
</style>
