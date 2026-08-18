<template>
  <div class="home">
    <header class="home-header">
      <h1>Clima en Chile</h1>
      <p>Pronóstico del tiempo para las principales ciudades</p>
      
      <div class="search-box">
        <input 
          type="text" 
          v-model="busqueda" 
          placeholder="🔍 Buscar ciudad..." 
          class="search-input"
        >
      </div>
    </header>

    <div v-if="loading" class="loading">
      Obteniendo datos del clima...
    </div>

    <div v-else-if="ciudadesFiltradas.length === 0" class="no-results">
      No se encontraron ciudades con "{{ busqueda }}"
    </div>

    <div v-else class="cities-grid">
      <CityCard 
        v-for="city in ciudadesFiltradas" 
        :key="city.id" 
        :city="city" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import CityCard from '../components/CityCard.vue'
import { ciudadesBase, fetchWeather } from '../services/weatherService'

const ciudades = ref([])
const busqueda = ref('')
const loading = ref(true)

const ciudadesFiltradas = computed(() => {
  if (!busqueda.value) return ciudades.value
  const term = busqueda.value.toLowerCase()
  return ciudades.value.filter(c => c.nombre.toLowerCase().includes(term))
})

onMounted(async () => {
  // Inicializar con skeleton basico o esperar a todo
  loading.value = true
  const promesas = ciudadesBase.map(c => fetchWeather(c))
  const resultados = await Promise.all(promesas)
  // Filtrar los nulos en caso de error
  ciudades.value = resultados.filter(Boolean)
  loading.value = false
})
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
}
.home-header {
  text-align: center;
  margin-bottom: 4rem;
  color: white;
}
.home-header h1 {
  font-size: 3.5rem;
  margin-bottom: 0.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 0 2px 4px rgba(0,0,0,0.3);
}
.home-header p {
  color: #cbd5e1;
  font-size: 1.2rem;
  margin-bottom: 3rem;
}
.search-box {
  max-width: 500px;
  margin: 0 auto;
  position: relative;
}
.search-input {
  width: 100%;
  padding: 1.2rem 1.5rem 1.2rem 3rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  color: white;
  font-size: 1.1rem;
  box-shadow: 0 4px 20px rgba(0,0,0,0.2);
  outline: none;
  transition: all 0.3s;
}
.search-input:focus {
  border-color: #6366f1;
  box-shadow: 0 0 0 4px rgba(99, 102, 241, 0.2);
  background: rgba(255, 255, 255, 0.1);
}
.search-input::placeholder {
  color: #94a3b8;
}
.loading, .no-results {
  text-align: center;
  color: #cbd5e1;
  font-size: 1.25rem;
  padding: 4rem 0;
}
.cities-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2.5rem;
}
.cities-grid > * {
  flex: 1 1 300px;
  max-width: 380px;
}
</style>
