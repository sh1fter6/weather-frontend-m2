export const ciudadesBase = [
  { id: '1', nombre: "Santiago", lat: -33.4489, lon: -70.6693 },
  { id: '2', nombre: "Valparaíso", lat: -33.0456, lon: -71.6243 },
  { id: '3', nombre: "Concepción", lat: -36.8201, lon: -73.0444 },
  { id: '4', nombre: "Antofagasta", lat: -23.6524, lon: -70.3954 },
  { id: '5', nombre: "Puerto Montt", lat: -41.4693, lon: -72.9424 }
];

function obtenerEstadoClima(code) {
  if (code === 0) return { estado: "Soleado", icono: "☀️" };
  if (code >= 1 && code <= 3) return { estado: "Nublado", icono: "☁️" };
  if (code >= 51 && code <= 67) return { estado: "Lluvioso", icono: "🌧️" };
  if (code >= 80 && code <= 99) return { estado: "Tormenta", icono: "⛈️" };
  return { estado: "Despejado", icono: "🌤️" };
}

export async function fetchWeather(ciudad) {
  try {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${ciudad.lat}&longitude=${ciudad.lon}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weathercode&timezone=auto`;
    const response = await fetch(url);
    if (!response.ok) throw new Error("Error en la petición a Open-Meteo");
    
    const data = await response.json();
    const current = data.current_weather;
    const estadoInfo = obtenerEstadoClima(current.weathercode);
    
    const pronosticoSemanal = (data.daily.time || []).map((t, idx) => {
      const infoSemana = obtenerEstadoClima(data.daily.weathercode[idx]);
      return {
        fecha: t,
        min: Math.round(data.daily.temperature_2m_min[idx]),
        max: Math.round(data.daily.temperature_2m_max[idx]),
        estado: infoSemana.estado,
        icono: infoSemana.icono
      };
    });

    return {
      ...ciudad,
      tempActual: Math.round(current.temperature),
      estadoActual: estadoInfo.estado,
      icono: estadoInfo.icono,
      pronosticoSemanal
    };
  } catch (error) {
    console.warn("API de clima falló (posible límite de peticiones excedido). Usando datos de respaldo para", ciudad.nombre);
    
    // Fallback de emergencia cuando falla la API (límite superado)
    return {
      ...ciudad,
      tempActual: Math.floor(Math.random() * 15) + 10, // 10 a 25 grados
      estadoActual: "Soleado",
      icono: "☀️",
      isFallback: true,
      pronosticoSemanal: Array.from({ length: 7 }).map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() + i);
        return {
          fecha: d.toISOString().split('T')[0],
          min: 8,
          max: 22,
          estado: "Soleado",
          icono: "☀️"
        }
      })
    };
  }
}
