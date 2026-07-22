# ClimaApp

Aplicación de clima responsiva desarrollada con HTML5, Bootstrap 5 y JavaScript. La temática se centra en mostrar pronósticos del tiempo para diferentes ciudades del mundo con un diseño estilizado y dinámico.

## Modelado de Datos
Los datos están centralizados en un archivo JavaScript mediante un **arreglo de objetos** llamado `lugares`. Cada objeto representa una ciudad y contiene:
- `id`, `nombre`, `tempActual`, `estadoActual`.
- `pronosticoSemanal`: un arreglo de objetos que detalla día a día la temperatura mínima (`min`), máxima (`max`) y el estado del tiempo (`estado`).

Toda la información se provee localmente desde el código, sin usar una API externa.

## Estadísticas Calculadas
A partir del arreglo del pronóstico semanal de cada ciudad, la aplicación calcula dinámicamente mediante ciclos y condicionales:
- **Temperatura mínima y máxima** de toda la semana.
- **Temperatura promedio** semanal.
- **Conteo de días** por tipo de clima (Soleado, Nublado, Lluvioso).
- **Resumen textual** descriptivo basado en la predominancia del tipo de clima durante la semana (ej. "Semana mayormente soleada").

## Enlace al repositorio público:
https://github.com/sh1fter6/weather-frontend-m2

## Enlace a su GHPages:
https://sh1fter6.github.io/weather-frontend-m2/