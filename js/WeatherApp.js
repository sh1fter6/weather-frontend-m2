class WeatherApp {
  constructor() {
    this.apiClient = new WeatherAPI();
    this.lugares = [];
  }

  async iniciar() {
    this.configurarNavegacion();

    if ($("#cities-grid").length > 0) {
      await this.cargarYRenderizarHome();
    }

    if ($("#city-detail-container").length > 0) {
      await this.cargarYRenderizarDetalle();
    }
  }

  configurarNavegacion() {
    const savedId = localStorage.getItem("selectedCityId");
    if (savedId) {
      $("#nav-detail-link").attr("href", "detail.html");
    }
  }

  async cargarYRenderizarHome() {
    const $grid = $("#cities-grid");
    $grid.html(`
      <div class="col-12 text-center py-5">
        <div class="spinner-border text-light" role="status" style="width: 3rem; height: 3rem;"></div>
        <p class="text-white mt-3 fw-bold fs-5">Cargando datos del clima desde la API...</p>
      </div>
    `);

    this.lugares = await this.apiClient.obtenerTodasLasCiudades();
    $grid.empty();

    this.lugares.forEach(city => {
      const estadoMod = city.estadoActual.toLowerCase() === 'soleado' ? 'sunny' : (city.estadoActual.toLowerCase() === 'nublado' ? 'cloudy' : 'rainy');
      const cardHtml = `
        <div class="col-12 col-md-6 col-lg-4">
          <article class="card place-card place-card--${estadoMod} h-100 p-4 text-center">
            <div class="card-body place-card__body d-flex flex-column justify-content-between">
              <div>
                <div class="d-flex justify-content-between align-items-center mb-2">
                  <h2 class="place-card__name text-dark fw-bold m-0">${city.nombre}</h2>
                  ${city.isLive ? '<span class="badge bg-success text-white">API En Vivo</span>' : '<span class="badge bg-secondary text-white">Offline</span>'}
                </div>
                <div class="place-card__icon mb-3 text-center"><i class="${city.icono}"></i></div>
                <p class="place-card__temp text-primary mb-2">${city.tempActual}°C</p>
                <span class="place-card__badge badge bg-info text-dark px-3 py-2 rounded-pill">${city.estadoActual}</span>
              </div>
              <div class="mt-4">
                <button class="btn btn-primary btn-sm w-100 rounded-pill city-btn place-card__button" data-id="${city.id}">Ver Detalle</button>
              </div>
            </div>
          </article>
        </div>
      `;
      $grid.append(cardHtml);
    });

    $(".city-btn").click((e) => {
      const idSeleccionado = $(e.currentTarget).data("id");
      localStorage.setItem("selectedCityId", idSeleccionado);
      window.location.href = "detail.html";
    });
  }

  async cargarYRenderizarDetalle() {
    const $container = $("#city-detail-container");
    const idDetalle = localStorage.getItem("selectedCityId");

    if (!idDetalle) {
      window.location.href = "index.html";
      return;
    }

    $container.html(`
      <div class="text-center py-5">
        <div class="spinner-border text-light" role="status" style="width: 3rem; height: 3rem;"></div>
        <p class="text-white mt-3 fw-bold fs-5">Obteniendo detalles de la API...</p>
      </div>
    `);

    const ciudadCoords = this.apiClient.ciudadesCoords.find(c => c.id == idDetalle) || this.apiClient.ciudadesCoords[0];
    const city = await this.apiClient.obtenerClimaActual(ciudadCoords);
    const stats = this.calcularEstadisticas(city.pronosticoSemanal);
    const alertas = this.generarAlertasClimaticas(stats, city.tempActual);

    const alertasHtml = alertas.map(a => `
      <div class="alert alert-${a.tipo} d-flex align-items-center mb-3 shadow-sm" role="alert">
        <i class="${a.icono} fs-4 me-3"></i>
        <div>
          <strong class="d-block">${a.titulo}</strong>
          <span>${a.mensaje}</span>
        </div>
      </div>
    `).join("");

    const detailHtml = `
      <div class="row g-4">
        <div class="col-12 col-lg-4">
          <article class="card detail-card p-4 text-center h-100 d-flex flex-column justify-content-center">
            <h1 class="display-4 fw-bold text-dark mb-2">${city.nombre}</h1>
            <div class="display-1 my-3"><i class="${city.icono}"></i></div>
            <p class="display-3 fw-bold text-primary mb-2">${city.tempActual}°C</p>
            <p class="fs-4 text-secondary mb-4">${city.estadoActual}</p>
            <div class="row g-2 mt-2">
              <div class="col-6">
                <div class="p-3 bg-weather-info text-start">
                  <small class="text-muted d-block uppercase text-xs">Humedad</small>
                  <span class="fs-5 fw-bold text-dark">${city.humedad}</span>
                </div>
              </div>
              <div class="col-6">
                <div class="p-3 bg-weather-info text-start">
                  <small class="text-muted d-block uppercase text-xs">Viento</small>
                  <span class="fs-5 fw-bold text-dark">${city.viento}</span>
                </div>
              </div>
            </div>
          </article>
        </div>

        <div class="col-12 col-lg-8">
          <section class="card detail-card p-4 mb-4">
            <h2 class="h4 fw-bold text-dark mb-3"><i class="fa-solid fa-triangle-exclamation text-warning me-2"></i>Alertas de Clima</h2>
            ${alertasHtml}
          </section>

          <section class="card detail-card p-4 d-flex flex-column justify-content-between mb-4">
            <h2 class="h3 fw-bold text-dark mb-4">Pronóstico de la Semana</h2>
            <div class="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-7 g-3" id="forecast-grid">
            </div>
          </section>

          <section class="card detail-card p-4">
            <h2 class="h3 fw-bold text-dark mb-4">Estadísticas de la semana</h2>
            <div class="row g-3">
              <div class="col-md-4">
                <div class="p-3 bg-light rounded text-center h-100 d-flex flex-column justify-content-center">
                  <h4 class="h5 text-muted mb-2">Min / Max</h4>
                  <p class="fs-4 fw-bold text-primary mb-0">${stats.min}°C / ${stats.max}°C</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="p-3 bg-light rounded text-center h-100 d-flex flex-column justify-content-center">
                  <h4 class="h5 text-muted mb-2">Promedio</h4>
                  <p class="fs-4 fw-bold text-primary mb-0">${stats.promedio}°C</p>
                </div>
              </div>
              <div class="col-md-4">
                <div class="p-3 bg-light rounded text-center h-100 d-flex flex-column justify-content-center">
                  <h4 class="h5 text-muted mb-2">Días</h4>
                  <small class="d-block fw-bold text-dark">${stats.soleados} Soleados</small>
                  <small class="d-block fw-bold text-dark">${stats.nublados} Nublados</small>
                  <small class="d-block fw-bold text-dark">${stats.lluviosos} Lluviosos</small>
                </div>
              </div>
            </div>
            <div class="mt-4 p-3 bg-info bg-opacity-10 rounded text-center">
              <p class="fs-5 fw-bold text-dark mb-0">${stats.resumen}</p>
            </div>
            <div class="mt-4 text-end">
              <a href="index.html" class="btn btn-outline-secondary rounded-pill px-4">Volver al Inicio</a>
            </div>
          </section>
        </div>
      </div>
    `;

    $container.html(detailHtml);

    const $forecastGrid = $("#forecast-grid");
    city.pronosticoSemanal.forEach(day => {
      const forecastHtml = `
        <div class="col">
          <div class="card forecast-item p-2 h-100 text-center">
            <p class="text-muted fw-bold mb-1 small">${day.dia}</p>
            <div class="fs-3 my-1"><i class="${day.icono}"></i></div>
            <p class="fw-bold text-dark mb-1 small">${day.min}° - ${day.max}°</p>
            <small class="text-secondary d-block" style="font-size: 0.7rem; line-height: 1.1;">${day.estado}</small>
          </div>
        </div>
      `;
      $forecastGrid.append(forecastHtml);
    });
  }

  calcularEstadisticas(pronostico) {
    let minTotal = pronostico[0].min;
    let maxTotal = pronostico[0].max;
    let sumaPromedios = 0;
    const conteos = { "Soleado": 0, "Nublado": 0, "Lluvioso": 0 };

    pronostico.forEach(dia => {
      if (dia.min < minTotal) minTotal = dia.min;
      if (dia.max > maxTotal) maxTotal = dia.max;
      sumaPromedios += (dia.min + dia.max) / 2;
      if (conteos[dia.estado] !== undefined) conteos[dia.estado]++;
    });

    const promedioTotal = (sumaPromedios / pronostico.length).toFixed(1);
    let resumen = "Clima muy variado esta semana.";
    if (conteos["Soleado"] > conteos["Nublado"] && conteos["Soleado"] > conteos["Lluvioso"]) {
      resumen = "Semana mayormente soleada y templada.";
    } else if (conteos["Lluvioso"] > conteos["Soleado"]) {
      resumen = "Semana con precipitaciones frecuentes.";
    } else if (conteos["Nublado"] > conteos["Soleado"]) {
      resumen = "Semana predominantemente cubierta y nublada.";
    }

    return {
      min: minTotal,
      max: maxTotal,
      promedio: promedioTotal,
      soleados: conteos["Soleado"],
      nublados: conteos["Nublado"],
      lluviosos: conteos["Lluvioso"],
      resumen: resumen
    };
  }

  generarAlertasClimaticas(stats, tempActual) {
    const alertas = [];

    if (stats.max >= 25 || tempActual >= 25) {
      alertas.push({
        tipo: "danger",
        icono: "fa-solid fa-fire text-danger",
        titulo: "Alerta de Altas Temperaturas",
        mensaje: `Se registran temperaturas de hasta ${stats.max}°C. Se recomienda hidratación constante.`
      });
    }

    if (stats.lluviosos >= 2) {
      alertas.push({
        tipo: "warning",
        icono: "fa-solid fa-cloud-showers-heavy text-warning",
        titulo: "Alerta de Lluvias Frecuentes",
        mensaje: `Se pronostican ${stats.lluviosos} días con precipitaciones. Lleva tu paraguas.`
      });
    }

    if (stats.min <= 10) {
      alertas.push({
        tipo: "info",
        icono: "fa-solid fa-snowflake text-info",
        titulo: "Alerta de Bajas Temperaturas Matinales",
        mensaje: `Mínimas de ${stats.min}°C registradas en la semana. Abrígate bien temprano.`
      });
    }

    if (alertas.length === 0) {
      alertas.push({
        tipo: "success",
        icono: "fa-solid fa-circle-check text-success",
        titulo: "Condiciones Favorables",
        mensaje: "El tiempo se mantiene moderado sin alertas meteorológicas severas."
      });
    }

    return alertas;
  }
}
