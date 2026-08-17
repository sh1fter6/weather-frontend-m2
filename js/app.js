const lugares = [
  {
    id: 1,
    nombre: "Santiago",
    tempActual: 18,
    estadoActual: "Soleado",
    icono: "fa-solid fa-sun text-warning",
    humedad: "45%",
    viento: "12 km/h",
    pronosticoSemanal: [
      { dia: "Lunes", min: 10, max: 24, estado: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Martes", min: 12, max: 26, estado: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Miércoles", min: 9, max: 20, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Jueves", min: 8, max: 18, estado: "Lluvioso", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Viernes", min: 7, max: 19, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Sábado", min: 11, max: 22, estado: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Domingo", min: 13, max: 25, estado: "Soleado", icono: "fa-solid fa-sun text-warning" }
    ]
  },
  {
    id: 2,
    nombre: "Pelotillehue",
    tempActual: 22,
    estadoActual: "Nublado",
    icono: "fa-solid fa-cloud text-secondary",
    humedad: "80%",
    viento: "18 km/h",
    pronosticoSemanal: [
      { dia: "Lunes", min: 15, max: 22, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Martes", min: 18, max: 25, estado: "Lluvioso", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Miércoles", min: 17, max: 23, estado: "Lluvioso", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Jueves", min: 16, max: 24, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Viernes", min: 19, max: 26, estado: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Sábado", min: 20, max: 28, estado: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Domingo", min: 22, max: 30, estado: "Soleado", icono: "fa-solid fa-sun text-warning" }
    ]
  },
  {
    id: 3,
    nombre: "Concepción",
    tempActual: 14,
    estadoActual: "Lluvioso",
    icono: "fa-solid fa-cloud-showers-heavy text-info",
    humedad: "90%",
    viento: "8 km/h",
    pronosticoSemanal: [
      { dia: "Lunes", min: 10, max: 14, estado: "Lluvioso", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Martes", min: 9, max: 13, estado: "Lluvioso", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Miércoles", min: 8, max: 15, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Jueves", min: 7, max: 14, estado: "Lluvioso", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Viernes", min: 6, max: 12, estado: "Lluvioso", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Sábado", min: 8, max: 16, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Domingo", min: 9, max: 18, estado: "Soleado", icono: "fa-solid fa-sun text-warning" }
    ]
  },
  {
    id: 4,
    nombre: "Ciudad de México",
    tempActual: 25,
    estadoActual: "Soleado",
    icono: "fa-solid fa-sun text-warning",
    humedad: "40%",
    viento: "10 km/h",
    pronosticoSemanal: [
      { dia: "Lunes", min: 14, max: 26, estado: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Martes", min: 15, max: 27, estado: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Miércoles", min: 16, max: 28, estado: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Jueves", min: 15, max: 25, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Viernes", min: 14, max: 24, estado: "Lluvioso", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Sábado", min: 13, max: 25, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Domingo", min: 12, max: 26, estado: "Soleado", icono: "fa-solid fa-sun text-warning" }
    ]
  },
  {
    id: 5,
    nombre: "Lima",
    tempActual: 19,
    estadoActual: "Nublado",
    icono: "fa-solid fa-cloud text-secondary",
    humedad: "85%",
    viento: "15 km/h",
    pronosticoSemanal: [
      { dia: "Lunes", min: 16, max: 20, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Martes", min: 16, max: 21, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Miércoles", min: 17, max: 22, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Jueves", min: 15, max: 20, estado: "Lluvioso", icono: "fa-solid fa-cloud-showers-heavy text-info" },
      { dia: "Viernes", min: 16, max: 21, estado: "Nublado", icono: "fa-solid fa-cloud text-secondary" },
      { dia: "Sábado", min: 17, max: 23, estado: "Soleado", icono: "fa-solid fa-sun text-warning" },
      { dia: "Domingo", min: 16, max: 22, estado: "Soleado", icono: "fa-solid fa-sun text-warning" }
    ]
  }
];

function obtenerLugar(id) {
  for (let i = 0; i < lugares.length; i++) {
    if (lugares[i].id == id) {
      return lugares[i];
    }
  }
  return null;
}

function calcularEstadisticas(pronostico) {
  let minTotal = pronostico[0].min;
  let maxTotal = pronostico[0].max;
  let sumaPromedios = 0;
  
  let conteos = {
    "Soleado": 0,
    "Nublado": 0,
    "Lluvioso": 0
  };

  for (let i = 0; i < pronostico.length; i++) {
    let dia = pronostico[i];
    if (dia.min < minTotal) minTotal = dia.min;
    if (dia.max > maxTotal) maxTotal = dia.max;
    sumaPromedios += (dia.min + dia.max) / 2;
    
    if (conteos[dia.estado] !== undefined) {
      conteos[dia.estado]++;
    }
  }

  let promedioTotal = sumaPromedios / pronostico.length;

  let resumen = "";
  if (conteos["Soleado"] > conteos["Nublado"] && conteos["Soleado"] > conteos["Lluvioso"]) {
    resumen = "Semana mayormente soleada.";
  } else if (conteos["Lluvioso"] > conteos["Soleado"] && conteos["Lluvioso"] > conteos["Nublado"]) {
    resumen = "Semana fría con varias lluvias.";
  } else if (conteos["Nublado"] > conteos["Soleado"]) {
    resumen = "Semana predominantemente nublada.";
  } else {
    resumen = "Clima muy variado esta semana.";
  }

  return {
    min: minTotal,
    max: maxTotal,
    promedio: promedioTotal.toFixed(1),
    soleados: conteos["Soleado"],
    nublados: conteos["Nublado"],
    lluviosos: conteos["Lluvioso"],
    resumen: resumen
  };
}

$(document).ready(function() {
  let savedId = localStorage.getItem("selectedCityId");
  if (savedId) {
    $("#nav-detail-link").attr("href", "detail.html");
  }

  if ($("#cities-grid").length > 0) {
    for (let i = 0; i < lugares.length; i++) {
      let city = lugares[i];
      let estadoMod = city.estadoActual.toLowerCase() === 'soleado' ? 'sunny' : (city.estadoActual.toLowerCase() === 'nublado' ? 'cloudy' : 'rainy');
      let cardHtml = `
        <div class="col-12 col-md-6 col-lg-4">
          <article class="card place-card place-card--${estadoMod} h-100 p-4 text-center">
            <div class="card-body place-card__body d-flex flex-column justify-content-between">
              <div>
                <h2 class="place-card__name text-dark fw-bold mb-3">${city.nombre}</h2>
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
      $("#cities-grid").append(cardHtml);
    }
  }

  $(".city-btn").click(function() {
    let idSeleccionado = $(this).data("id");
    localStorage.setItem("selectedCityId", idSeleccionado);
    window.location.href = "detail.html";
  });

  if ($("#city-detail-container").length > 0) {
    let idDetalle = localStorage.getItem("selectedCityId");
    if (idDetalle) {
      let city = obtenerLugar(idDetalle);

      if (city) {
        let stats = calcularEstadisticas(city.pronosticoSemanal);

        let detailHtml = `
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
        $("#city-detail-container").html(detailHtml);

        for (let j = 0; j < city.pronosticoSemanal.length; j++) {
          let day = city.pronosticoSemanal[j];
          let forecastHtml = `
            <div class="col">
              <div class="card forecast-card p-2 h-100 text-center">
                <p class="text-muted fw-bold mb-1 small">${day.dia}</p>
                <div class="fs-3 my-1"><i class="${day.icono}"></i></div>
                <p class="fw-bold text-dark mb-1 small">${day.min}° - ${day.max}°</p>
                <small class="text-secondary d-block" style="font-size: 0.7rem; line-height: 1.1;">${day.estado}</small>
              </div>
            </div>
          `;
          $("#forecast-grid").append(forecastHtml);
        }
      }
    }
  }
});
