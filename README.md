# ClimaApp - Módulo 5 (POO, ES6+ y Consumo de API)

Aplicación de clima responsiva reestructurada bajo el paradigma de **Programación Orientada a Objetos (POO)** y funcionalidades modernas de **JavaScript ES6+**, integrando el consumo asíncrono en tiempo real de una **API de Clima externa** (Open-Meteo).

## Arquitectura POO (Estructura de Clases)
El código de JavaScript fue modularizado en clases independientes bajo principios de separación de responsabilidades:

1. **`WeatherAPI` (`js/WeatherAPI.js`):**
   - Encapsula la comunicación asíncrona mediante `fetch` y `async`/`await`.
   - Consulta el endpoint público de la API Open-Meteo (`https://api.open-meteo.com/v1/forecast`).
   - Mapea códigos meteorológicos WMO a estados e iconos legibles.
   - Implementa control de errores con bloque `try...catch` y fallback offline para mantener la app 100% funcional.

2. **`WeatherApp` (`js/WeatherApp.js`):**
   - Clase principal que orquesta la aplicación.
   - Administra el estado de carga (`spinner`) y la actualización del DOM (Home y Detalle).
   - Calcula estadísticas semanales (mínima, máxima, promedio y conteo por clima).
   - Genera la sección de **Alertas Climáticas**.

3. **`app.js` (`js/app.js`):**
   - Punto de entrada de la aplicación que instancia `WeatherApp` al cargar el documento (`$(document).ready`).

## Consumo de API Externa
- **API Utilizada:** Open-Meteo API (Open-Source Weather API).
- **URL Base:** `https://api.open-meteo.com/v1/forecast`
- **Parámetros:** Coordenadas latitud/longitud, `current_weather=true`, `daily=temperature_2m_max,temperature_2m_min,weathercode`.

## Cálculo de Estadísticas y Alertas Climáticas
- **Estadísticas:** Recorren el pronóstico semanal para determinar mínimas/máximas absolutas, promedio térmico y días soleados/nublados/lluviosos.
- **Alertas Climáticas (Reglas de Negocio):**
  - **Alerta de Altas Temperaturas:** Se gatilla si la máxima semanal o actual es $\ge 25^\circ\text{C}$.
  - **Alerta de Lluvias Frecuentes:** Se activa si se registran $\ge 2$ días con precipitaciones.
  - **Alerta de Bajas Temperaturas:** Notifica si la mínima cae a $\le 10^\circ\text{C}$.

## Enlaces del Proyecto
- **Repositorio Público GitHub:** https://github.com/sh1fter6/weather-frontend-m2
- **GitHub Pages:** https://sh1fter6.github.io/weather-frontend-m2/