// Datos de las ciudades, al hacerlo con js directo en vez de html, el html es muchisimo mas ligero.
const CITIES_DATA = [
  {
    id: 1,
    nombre: "Santiago",
    temperatura: 18,
    condicion: "Soleado",
    icono: "fa-solid fa-sun text-warning",
    humedad: "45%",
    viento: "12 km/h",
    pronostico: [
      { dia: "Lunes", temperatura: 18, condicion: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Martes", temperatura: 20, condicion: "Despejado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Miércoles", temperatura: 17, condicion: "Parcialmente Nublado", icono: "fa-solid fa-cloud-sun text-warning" },
      { dia: "Jueves", temperatura: 15, condicion: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Viernes", temperatura: 14, condicion: "Lluvia Ligera", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Sábado", temperatura: 16, condicion: "Parcialmente Nublado", icono: "fa-solid fa-cloud-sun text-warning" },
      { dia: "Domingo", temperatura: 19, condicion: "Soleado", icono: "fa-solid fa-sun text-warning" }
    ]
  },
  {
    id: 2,
    nombre: "Pelotillehue",
    temperatura: 22,
    condicion: "Húmedo y Nublado",
    icono: "fa-solid fa-cloud text-secondary",
    humedad: "80%",
    viento: "18 km/h",
    pronostico: [
      { dia: "Lunes", temperatura: 22, condicion: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Martes", temperatura: 24, condicion: "Tormenta", icono: "fa-solid fa-cloud-bolt text-primary" },
      { dia: "Miércoles", temperatura: 19, condicion: "Lluvia", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Jueves", temperatura: 20, condicion: "Despejado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Viernes", temperatura: 21, condicion: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Sábado", temperatura: 23, condicion: "Parcialmente Nublado", icono: "fa-solid fa-cloud-sun text-warning" },
      { dia: "Domingo", temperatura: 25, condicion: "Caluroso", icono: "fa-solid fa-sun text-warning" }
    ]
  },
  {
    id: 3,
    nombre: "Concepcion",
    temperatura: 14,
    condicion: "Lluvia constante",
    icono: "fa-solid fa-cloud-showers-heavy text-info",
    humedad: "90%",
    viento: "8 km/h",
    pronostico: [
      { dia: "Lunes", temperatura: 14, condicion: "Lluvia", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Martes", temperatura: "--", condicion: "Quien sabe", icono: "fa-solid fa-cloud-question text-secondary" },
      { dia: "Miércoles", temperatura: 13, condicion: "Tormenta", icono: "fa-solid fa-cloud-bolt text-primary" },
      { dia: "Jueves", temperatura: 14, condicion: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Viernes", temperatura: 15, condicion: "Parcialmente Nublado", icono: "fa-solid fa-cloud-sun text-warning" },
      { dia: "Sábado", temperatura: 16, condicion: "Despejado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Domingo", temperatura: 15, condicion: "Lluvia", icono: "fa-solid fa-cloud-showers-heavy text-info" }
    ]
  },
  {
    id: 4,
    nombre: "Ciudad de México",
    temperatura: 25,
    condicion: "Despejado",
    icono: "fa-solid fa-sun text-warning",
    humedad: "40%",
    viento: "10 km/h",
    pronostico: [
      { dia: "Lunes", temperatura: 25, condicion: "Despejado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Martes", temperatura: 26, condicion: "Caluroso", icono: "fa-solid fa-sun text-warning" },
      { dia: "Miércoles", temperatura: 24, condicion: "Tarde de Tormenta", icono: "fa-solid fa-cloud-bolt text-primary" },
      { dia: "Jueves", temperatura: 23, condicion: "Lluvia", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Viernes", temperatura: 24, condicion: "Parcialmente Nublado", icono: "fa-solid fa-cloud-sun text-warning" },
      { dia: "Sábado", temperatura: 25, condicion: "Despejado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Domingo", temperatura: 26, condicion: "Soleado", icono: "fa-solid fa-sun text-warning" }
    ]
  },
  {
    id: 5,
    nombre: "Lima",
    temperatura: 19,
    condicion: "Neblina",
    icono: "fa-solid fa-smog text-secondary",
    humedad: "85%",
    viento: "15 km/h",
    pronostico: [
      { dia: "Lunes", temperatura: 19, condicion: "Neblina", icono: "fa-solid fa-smog text-secondary" },
      { dia: "Martes", temperatura: 18, condicion: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Miércoles", temperatura: 18, condicion: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Jueves", temperatura: 19, condicion: "Parcialmente Nublado", icono: "fa-solid fa-cloud-sun text-warning" },
      { dia: "Viernes", temperatura: 20, condicion: "Templado", icono: "fa-solid fa-cloud-sun text-warning" },
      { dia: "Sábado", temperatura: 20, condicion: "Despejado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Domingo", temperatura: 19, condicion: "Nublado", icono: "fa-solid fa-cloud text-secondary" }
    ]
  },
  {
    id: 6,
    nombre: "Madrid",
    temperatura: 30,
    condicion: "Muy Caluroso",
    icono: "fa-solid fa-sun text-warning",
    humedad: "20%",
    viento: "9 km/h",
    pronostico: [
      { dia: "Lunes", temperatura: 30, condicion: "Caluroso", icono: "fa-solid fa-sun text-warning" },
      { dia: "Martes", temperatura: 32, condicion: "Caluroso", icono: "fa-solid fa-sun text-warning" },
      { dia: "Miércoles", temperatura: 34, condicion: "Extremo Calor", icono: "fa-solid fa-sun text-warning" },
      { dia: "Jueves", temperatura: 31, condicion: "Despejado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Viernes", temperatura: 29, condicion: "Viento", icono: "fa-solid fa-wind text-secondary" },
      { dia: "Sábado", temperatura: 28, condicion: "Despejado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Domingo", temperatura: 30, condicion: "Soleado", icono: "fa-solid fa-sun text-warning" }
    ]
  },
  {
    id: 7,
    nombre: "Londres",
    temperatura: 16,
    condicion: "Parcialmente Nublado",
    icono: "fa-solid fa-cloud-sun text-warning",
    humedad: "70%",
    viento: "22 km/h",
    pronostico: [
      { dia: "Lunes", temperatura: 16, condicion: "Parcialmente Nublado", icono: "fa-solid fa-cloud-sun text-warning" },
      { dia: "Martes", temperatura: 15, condicion: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Miércoles", temperatura: 14, condicion: "Lluvia", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Jueves", temperatura: 15, condicion: "Llovizna", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Viernes", temperatura: 17, condicion: "Parcialmente Nublado", icono: "fa-solid fa-cloud-sun text-warning" },
      { dia: "Sábado", temperatura: 18, condicion: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Domingo", temperatura: 17, condicion: "Despejado", icono: "fa-solid fa-sun text-warning" }
    ]
  },
  {
    id: 8,
    nombre: "Nueva York",
    temperatura: 21,
    condicion: "Tormentas Dispersas",
    icono: "fa-solid fa-cloud-bolt text-primary",
    humedad: "75%",
    viento: "16 km/h",
    pronostico: [
      { dia: "Lunes", temperatura: 21, condicion: "Tormenta", icono: "fa-solid fa-cloud-bolt text-primary" },
      { dia: "Martes", temperatura: 23, condicion: "Parcialmente Nublado", icono: "fa-solid fa-cloud-sun text-warning" },
      { dia: "Miércoles", temperatura: 24, condicion: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Jueves", temperatura: 22, condicion: "Viento", icono: "fa-solid fa-wind text-secondary" },
      { dia: "Viernes", temperatura: 20, condicion: "Lluvia", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Sábado", temperatura: 22, condicion: "Despejado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Domingo", temperatura: 24, condicion: "Soleado", icono: "fa-solid fa-sun text-warning" }
    ]
  },
  {
    id: 9,
    nombre: "Tokio",
    temperatura: 26,
    condicion: "Lluvia Aislada",
    icono: "fa-solid fa-cloud-sun-rain text-info",
    humedad: "82%",
    viento: "14 km/h",
    pronostico: [
      { dia: "Lunes", temperatura: 26, condicion: "Lluvia Aislada", icono: "fa-solid fa-cloud-sun-rain text-info" },
      { dia: "Martes", temperatura: 27, condicion: "Húmedo", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Miércoles", temperatura: 28, condicion: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Jueves", temperatura: 25, condicion: "Lluvia Fuerte", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Viernes", temperatura: 24, condicion: "Lluvia", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Sábado", temperatura: 26, condicion: "Parcialmente Nublado", icono: "fa-solid fa-cloud-sun text-warning" },
      { dia: "Domingo", temperatura: 28, condicion: "Despejado", icono: "fa-solid fa-sun text-warning" }
    ]
  },
  {
    id: 10,
    nombre: "Sídney",
    temperatura: 17,
    condicion: "Ventoso",
    icono: "fa-solid fa-wind text-secondary",
    humedad: "50%",
    viento: "28 km/h",
    pronostico: [
      { dia: "Lunes", temperatura: 17, condicion: "Ventoso", icono: "fa-solid fa-wind text-secondary" },
      { dia: "Martes", temperatura: 16, condicion: "Parcialmente Nublado", icono: "fa-solid fa-cloud-sun text-warning" },
      { dia: "Miércoles", temperatura: 18, condicion: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Jueves", temperatura: 19, condicion: "Despejado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Viernes", temperatura: 18, condicion: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Sábado", temperatura: 17, condicion: "Lluvia", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Domingo", temperatura: 16, condicion: "Ventoso", icono: "fa-solid fa-wind text-secondary" }
    ]
  }

document.addEventListener("DOMContentLoaded", () => {
  renderCitiesGrid();
});

function renderCitiesGrid() {
  const citiesGrid = document.getElementById("cities-grid");
  if (!citiesGrid) return;
  citiesGrid.innerHTML = CITIES_DATA.map(city => `
    <div class="col-12 col-md-6 col-lg-4">
      <div class="card weather-card h-100 p-4 text-center">
        <div class="card-body">
          <h2 class="card-title h4">${city.nombre}</h2>
          <p class="display-5 text-primary">${city.temperatura}°C</p>
          <span>${city.condicion}</span>
          <a href="detail.html?id=${city.id}" class="btn btn-primary btn-sm w-100 mt-3 city-btn" data-id="${city.id}">Ver Detalle</a>
        </div>
      </div>
    </div>
  `).join("");

  citiesGrid.addEventListener("click", (e) => {
    const btn = e.target.closest(".city-btn");
    if (btn) {
      localStorage.setItem("selectedCityId", btn.dataset.id);
    }
  });
}
