class WeatherAPI {
  constructor() {
    this.baseUrl = "https://api.open-meteo.com/v1/forecast";
    this.ciudadesCoords = [
      { id: 1, nombre: "Santiago", lat: -33.4489, lon: -70.6693 },
      { id: 2, nombre: "Pelotillehue", lat: -33.0245, lon: -71.5518 },
      { id: 3, nombre: "Concepción", lat: -36.8201, lon: -73.0444 },
      { id: 4, nombre: "Ciudad de México", lat: 19.4326, lon: -99.1332 },
      { id: 5, nombre: "Lima", lat: -12.0464, lon: -77.0428 }
    ];
  }

  obtenerEstadoClima(code) {
    if (code === 0) return { estado: "Soleado", icono: "fa-solid fa-sun text-warning" };
    if (code >= 1 && code <= 3) return { estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" };
    if (code >= 51 && code <= 67) return { estado: "Lluvioso", icono: "fa-solid fa-cloud-rain text-info" };
    if (code >= 80 && code <= 99) return { estado: "Lluvioso", icono: "fa-solid fa-cloud-showers-heavy text-info" };
    return { estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" };
  }

  async obtenerClimaActual(ciudad) {
    try {
      const url = `${this.baseUrl}?latitude=${ciudad.lat}&longitude=${ciudad.lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
      }

      const data = await response.json();
      const current = data.current_weather;
      const estadoInfo = this.obtenerEstadoClima(current.weathercode);

      const diasNombres = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];
      const pronosticoSemanal = (data.daily.time || []).map((t, idx) => {
        const fecha = new Date(t + "T00:00:00");
        const diaNombre = diasNombres[fecha.getDay()];
        const codeSemana = data.daily.weathercode[idx];
        const infoSemana = this.obtenerEstadoClima(codeSemana);
        return {
          dia: diaNombre,
          min: Math.round(data.daily.temperature_2m_min[idx]),
          max: Math.round(data.daily.temperature_2m_max[idx]),
          estado: infoSemana.estado,
          icono: infoSemana.icono
        };
      });

      return {
        id: ciudad.id,
        nombre: ciudad.nombre,
        tempActual: Math.round(current.temperature),
        estadoActual: estadoInfo.estado,
        icono: estadoInfo.icono,
        humedad: `${Math.floor(Math.random() * 30) + 40}%`,
        viento: `${current.windspeed} km/h`,
        pronosticoSemanal: pronosticoSemanal,
        isLive: true
      };
    } catch (error) {
      console.warn(`Error API ${ciudad.nombre}:`, error);
      return this.obtenerFallback(ciudad);
    }
  }

  async obtenerTodasLasCiudades() {
    const promesas = this.ciudadesCoords.map(c => this.obtenerClimaActual(c));
    return await Promise.all(promesas);
  }

  obtenerFallback(ciudad) {
    return {
      id: ciudad.id,
      nombre: ciudad.nombre,
      tempActual: 18,
      estadoActual: "Soleado",
      icono: "fa-solid fa-sun text-warning",
      humedad: "50%",
      viento: "12 km/h",
      pronosticoSemanal: [
        { dia: "Lunes", min: 10, max: 22, estado: "Soleado", icono: "fa-solid fa-sun text-warning" },
        { dia: "Martes", min: 11, max: 24, estado: "Soleado", icono: "fa-solid fa-sun text-warning" },
        { dia: "Miércoles", min: 9, max: 19, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
        { dia: "Jueves", min: 8, max: 17, estado: "Lluvioso", icono: "fa-solid fa-cloud-showers-heavy text-info" },
        { dia: "Viernes", min: 10, max: 20, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
        { dia: "Sábado", min: 12, max: 23, estado: "Soleado", icono: "fa-solid fa-sun text-warning" },
        { dia: "Domingo", min: 13, max: 25, estado: "Soleado", icono: "fa-solid fa-sun text-warning" }
      ],
      isLive: false
    };
  }
}
