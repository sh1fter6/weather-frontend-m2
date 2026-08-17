# ClimaApp - Módulo 3 (Interfaz, Estilos & SASS)

Aplicación de clima responsiva desarrollada con HTML5, Bootstrap 5, SASS y JavaScript. La temática se centra en mostrar pronósticos del tiempo para diferentes ciudades (Santiago, Pelotillehue, Concepción, Ciudad de México, Lima) con un diseño estilizado, dinámico y moderno.

## Metodología de Estilos (BEM)
Se implementó de forma consistente la metodología **BEM** (*Block, Element, Modifier*) para garantizar un código CSS modular, mantenible y legible:
- **Bloques principal:** `.weather-app`, `.place-card`, `.detail-card`, `.forecast-item`, `.weather-header`, `.weather-footer`.
- **Elementos:** `.place-card__name`, `.place-card__temp`, `.place-card__badge`, `.place-card__button`, `.weather-nav__link`.
- **Modificadores:** `.place-card--sunny`, `.place-card--cloudy`, `.place-card--rainy`, `.bg-cloud--1`, `.bg-cloud--2`.

## Arquitectura SASS (Modularización)
El código CSS fue refactorizado y modularizado utilizando el preprocesador **SASS** (`/scss`), estructurado de la siguiente manera:

```text
scss/
├── base/
│   └── _variables.scss      # Paleta de colores, tipografías, espaciados y breakpoints.
├── layout/
│   └── _layout.scss         # Header, navbar, contenedor principal, footer y decoraciones de fondo.
├── components/
│   └── _place-card.scss     # Componentes BEM, mixins de elevación y modificadores de clima.
└── main.scss                # Archivo principal de importación (@use).
```

### Características de SASS Utilizadas:
- **Variables (`$variables`):** Gestión centralizada de colores primarios (`$primary-blue`), estados (`$accent-sunny`, `$accent-rainy`), fuentes (`Lily Script One`, `Outfit`) y breakpoints.
- **Anidamiento (Nesting):** Agrupamiento de reglas bajo sintaxis BEM (`&__name`, `&__temp`, `&--sunny`).
- **Mixins (`@mixin`):** Mixin `@mixin card-elevation($hover)` para reutilizar y aplicar sombras dinámicas y transiciones en hover.
- **Media Queries:** Adaptación responsiva explícita para dispositivos móviles ($\le 420\text{px}$) y escritorios ($\ge 1024\text{px}$).

## Modelado de Datos y Funcionalidad
Los datos están centralizados en un arreglo de objetos JavaScript (`lugares`), con pronósticos semanales y estadísticas calculadas dinámicamente (mínima/máxima semanal, promedio y resumen climático).

## Enlaces del Proyecto
- **Repositorio Público GitHub:** https://github.com/sh1fter6/weather-frontend-m2
- **GitHub Pages:** https://sh1fter6.github.io/weather-frontend-m2/