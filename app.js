/**
 * SmartTourism AI — interactive executive prototype
 * Datos simulados coherentes con el trabajo SmartTourism / Canarias.
 */

const ISLANDS = [
  { id: 'tenerife', name: 'Tenerife', shareVisitors: 0.34, hotelCapacityIdx: 100, pressure: 'alta' },
  { id: 'grancanaria', name: 'Gran Canaria', shareVisitors: 0.31, hotelCapacityIdx: 95, pressure: 'alta' },
  { id: 'lanzarote', name: 'Lanzarote', shareVisitors: 0.14, hotelCapacityIdx: 72, pressure: 'media' },
  { id: 'fuerteventura', name: 'Fuerteventura', shareVisitors: 0.12, hotelCapacityIdx: 68, pressure: 'media' },
  { id: 'lapalma', name: 'La Palma', shareVisitors: 0.04, hotelCapacityIdx: 35, pressure: 'baja' },
  { id: 'lagomera', name: 'La Gomera', shareVisitors: 0.03, hotelCapacityIdx: 28, pressure: 'baja' },
  { id: 'elhierro', name: 'El Hierro', shareVisitors: 0.02, hotelCapacityIdx: 22, pressure: 'baja' },
];

const MARKETS = [
  { id: 'DE', name: 'Alemania', share: 0.38, momentum: +0.06 },
  { id: 'UK', name: 'Reino Unido', share: 0.20, momentum: -0.03 },
  { id: 'ES', name: 'España peninsular', share: 0.14, momentum: +0.01 },
  { id: 'FR', name: 'Francia', share: 0.09, momentum: +0.02 },
  { id: 'OTHER', name: 'Otros', share: 0.19, momentum: +0.01 },
];

const ZONES_SAMPLE = {
  tenerife: [
    { name: 'Sur Tenerife', occ: 96 },
    { name: 'Puerto de la Cruz', occ: 81 },
    { name: 'Santa Cruz', occ: 76 },
    { name: 'Norte costa', occ: 72 },
  ],
  grancanaria: [
    { name: 'Sur GC', occ: 94 },
    { name: 'Las Palmas ciudad', occ: 78 },
    { name: 'Norte', occ: 70 },
    { name: 'Interior', occ: 52 },
  ],
  lanzarote: [
    { name: 'Costa Teguise', occ: 88 },
    { name: 'Playa Blanca', occ: 84 },
    { name: 'Timanfaya / interior', occ: 45 },
    { name: 'Arrecife', occ: 62 },
  ],
  fuerteventura: [
    { name: 'Corralejo', occ: 86 },
    { name: 'Jandía', occ: 82 },
    { name: 'Puerto del Rosario', occ: 58 },
    { name: 'Interior', occ: 38 },
  ],
  lapalma: [
    { name: 'Los Cancajos', occ: 74 },
    { name: 'Santa Cruz LP', occ: 61 },
    { name: 'Ruta de los Volcanes', occ: 48 },
    { name: 'Garfía / norte', occ: 35 },
  ],
  lagomera: [
    { name: 'Valle Gran Rey', occ: 79 },
    { name: 'San Sebastián', occ: 55 },
    { name: 'Bosque garajonay', occ: 41 },
    { name: 'Playa Santiago', occ: 62 },
  ],
  elhierro: [
    { name: 'El Pinar', occ: 68 },
    { name: 'Valverde', occ: 49 },
    { name: 'Frontera / Sabinosa', occ: 42 },
    { name: 'La Restinga', occ: 58 },
  ],
};

/** Global KPIs (aligned with document narrative) */
const GLOBAL = {
  annualVisitorsM: 15.5,
  occupiedHotelPct: 84,
  forecastNextMonthIdx: 1.04,
  avgSpendEUR: 1180,
  spendTrend: +0.012,
  revparEUR: 94,
  revparTrend: +0.028,
  gopparEUR: 42,
  gopparTrend: +0.019,
  otaDependencyPct: 80,
  otaTrend: -0.005,
  socialStressIdx: 68,
  socialTrend: -0.02,
};

const ALERTS_SEED = [
  {
    type: 'danger',
    title: 'Saturación operativa',
    body: 'Sur de Tenerife: ocupación modelada >95% durante 10 días continuos en ventana próxima. Recomendar redistribución promocional y pricing diferenciado por zona.',
  },
  {
    type: 'warn',
    title: 'Mercado emisor · Reino Unido',
    body: 'Señales mixtas en intención de búsqueda y booking lag -3% vs. mismo periodo (simulado). Activar playbook de protección de tarifa y canal directo.',
  },
  {
    type: 'warn',
    title: 'Intermediación',
    body: 'Dependencia de OTA/turoperador en cofre destino ~80%. Campaña de captación directa segmentada propuesta a cohortes de mayor gasto en destino.',
  },
  {
    type: 'info',
    title: 'Oportunidad Alemania',
    body: 'Momentum +6% en cohorte DE para ventana estival (modelo). Ajustar disponibilidad y upsell experiencial en TF/GC sin incrementar plazas totales.',
  },
];

const GOVERNANCE = {
  humanReview: [
    'Redistribución de flujos con impacto urbano o ambiental',
    'Campañas públicas masivas (PROMOTUR / cabildos)',
    'Intervenciones sobre zonas con sensibilidad social alta',
    'Cualquier recomendación que limite acceso o capacidad regulada',
  ],
  traceability: [
    'Registro: fuentes → versión de modelo → explicación → decisión humana → resultado',
    'Retención según política RGPD y minimización por finalidad',
    'Informe trimestral de uso y desempeño al Comité Estratégico',
  ],
  audit: [
    'Backtesting mensual de predicción de demanda y ocupación',
    'Evaluación de deriva (drift) ante shocks de conectividad o precios',
    'Revisión de fairness territorial: no sesgar beneficios solo a grandes operadores',
  ],
  compliance: [
    'RGPD: bases legales, DPIA, pseudonimización de señales de movilidad cuando aplique',
    'EU AI Act: documentación, supervisión humana en decisiones críticas, transparencia',
    'Normativa turística canaria: trazabilidad de recomendaciones que afecten a licencias / suelo',
  ],
};

const ROADMAP = [
  { phase: 'Diseño y preparación', months: '0–6', detail: 'Gobernanza, DPIA inicial, arquitectura de datos, casos de uso prioritarios y datos mínimos viables.' },
  { phase: 'Piloto inicial', months: '6–12', detail: 'TF/GC: modelos de demanda, mapa de saturación, optimización de campañas; ventana intensiva de validación 6–12 semanas.' },
  { phase: 'Despliegue operativo', months: '12–24', detail: 'Integración en rutinas de pricing, promoción y planificación; ampliación de usuarios institucionales y privados.' },
  { phase: 'Escalado territorial', months: '24–36', detail: 'Extensión al archipiélago con parámetros e indicadores por isla (valor, sostenibilidad, capacidad).' },
  { phase: 'Mejora continua', months: '36+', detail: 'Reentrenamiento de modelos, nuevas fuentes, auditoría, ciberseguridad y evolución de casos de uso según ROI.' },
];

const NAV_ITEMS = [
  { id: 'dashboard', label: 'Dashboard ejecutivo', icon: '▣' },
  { id: 'forecast', label: 'Predicción de demanda', icon: '≈' },
  { id: 'saturation', label: 'Mapa de saturación', icon: '▤' },
  { id: 'pricing', label: 'Optimización de pricing', icon: '€' },
  { id: 'marketing', label: 'Optimización de marketing', icon: '◎' },
  { id: 'flows', label: 'Redistribución de flujos', icon: '⟲' },
  { id: 'scenarios', label: 'Simulación de escenarios', icon: '⚙' },
  { id: 'alerts', label: 'Sistema de alertas', icon: '⚑' },
  { id: 'governance', label: 'Gobernanza de la IA', icon: '⚖' },
  { id: 'roadmap', label: 'Roadmap de implantación', icon: '→' },
];

let charts = [];

function destroyCharts() {
  charts.forEach((c) => {
    try {
      c.destroy();
    } catch (_) {}
  });
  charts = [];
}

const fmtPct = (x) => `${(x * 100).toFixed(1)}%`;
const fmt = (n, d = 0) => n.toFixed(d);

function occClass(o) {
  if (o >= 90) return 'hm-high';
  if (o >= 75) return 'hm-mid';
  return 'hm-low';
}

function tagClass(o) {
  if (o >= 95) return 'bad';
  if (o >= 90) return 'mid';
  return 'ok';
}

function islandAvgOcc(islandId) {
  const z = ZONES_SAMPLE[islandId];
  if (!z) return 0;
  return z.reduce((a, b) => a + b.occ, 0) / z.length;
}

function renderNav(active) {
  const nav = document.getElementById('nav');
  nav.innerHTML = NAV_ITEMS.map(
    (item) =>
      `<button type="button" data-route="${item.id}" class="${item.id === active ? 'active' : ''}"><span class="nav-ic">${item.icon}</span><span>${item.label}</span></button>`,
  ).join('');
  nav.querySelectorAll('button').forEach((btn) => {
    btn.addEventListener('click', () => navigate(btn.dataset.route));
  });
}

function setTitle(title) {
  document.getElementById('pageTitle').textContent = title;
}

function navigate(route) {
  window.location.hash = route;
}

function handleRoute() {
  const raw = (window.location.hash || '#dashboard').slice(1);
  const route = NAV_ITEMS.some((n) => n.id === raw) ? raw : 'dashboard';
  const item = NAV_ITEMS.find((n) => n.id === route);
  setTitle(item.label);
  renderNav(route);
  destroyCharts();
  const app = document.getElementById('app');
  switch (route) {
    case 'dashboard':
      app.innerHTML = viewDashboard();
      mountDashboardCharts();
      break;
    case 'forecast':
      app.innerHTML = viewForecast();
      mountForecastChart();
      break;
    case 'saturation':
      app.innerHTML = viewSaturation();
      mountSaturationInteract();
      break;
    case 'pricing':
      app.innerHTML = viewPricing();
      mountPricingChart();
      break;
    case 'marketing':
      app.innerHTML = viewMarketing();
      mountMarketingChart();
      break;
    case 'flows':
      app.innerHTML = viewFlows();
      mountFlowsChart();
      break;
    case 'scenarios':
      app.innerHTML = viewScenarios();
      wireScenarios();
      break;
    case 'alerts':
      app.innerHTML = viewAlerts();
      break;
    case 'governance':
      app.innerHTML = viewGovernance();
      break;
    case 'roadmap':
      app.innerHTML = viewRoadmap();
      mountRoadmapChart();
      break;
    default:
      app.innerHTML = viewDashboard();
      mountDashboardCharts();
  }
}

function viewDashboard() {
  const rows = ISLANDS.map((isl) => {
    const avg = islandAvgOcc(isl.id);
    const forecast = Math.min(99, Math.round(avg * GLOBAL.forecastNextMonthIdx));
    return `<tr class="${avg >= 90 ? 'row-warn' : ''}">
      <td><strong>${isl.name}</strong></td>
      <td>${fmtPct(isl.shareVisitors)}</td>
      <td>${fmt(avg, 1)}%</td>
      <td>${forecast}%</td>
      <td><span class="tag ${isl.pressure === 'alta' ? 'mid' : isl.pressure === 'media' ? 'mid' : 'ok'}">${isl.pressure}</span></td>
    </tr>`;
  }).join('');

  return `
    <div class="grid kpis">
      ${kpiCard('Ocupación hotelera (índice)', `${GLOBAL.occupiedHotelPct}%`, '+1.2 pts vs LY (sim.)', 'up')}
      ${kpiCard('Demanda prevista (30d)', `+${fmt((GLOBAL.forecastNextMonthIdx - 1) * 100, 1)}%`, 'vs observación actual', 'up')}
      ${kpiCard('Gasto medio / visita', `${GLOBAL.avgSpendEUR} €`, `${GLOBAL.spendTrend >= 0 ? '+' : ''}${fmt(GLOBAL.spendTrend * 100, 1)}% tendencia`, GLOBAL.spendTrend >= 0 ? 'up' : 'down')}
      ${kpiCard('RevPAR estimado', `${GLOBAL.revparEUR} €`, `${GLOBAL.revparTrend >= 0 ? '+' : ''}${fmt(GLOBAL.revparTrend * 100, 1)}%`, 'up')}
      ${kpiCard('GOPPAR (orientativo)', `${GLOBAL.gopparEUR} €`, 'Eficiencia operativa proxy', 'up')}
      ${kciOta()}
      ${kpiCard(
        'Percepción social (índice tensión)',
        `${GLOBAL.socialStressIdx}%`,
        GLOBAL.socialTrend < 0 ? `Tendencia ${fmt(GLOBAL.socialTrend * 100, 1)} pts (objetivo: reducir)` : 'Seguimiento',
        GLOBAL.socialTrend < 0 ? 'up' : 'down',
      )}
    </div>
    <div class="grid two" style="margin-top:1.25rem">
      <div class="card">
        <h2>Demanda observada vs. modelo (índice archipiélago)</h2>
        <p class="hint">Serie mensual simulada. El modelo anticipa inflexiones por mercado emisor; no sustituye estadística oficial (ISTAC).</p>
        <div class="chart-box"><canvas id="ch-dash-demand"></canvas></div>
      </div>
      <div class="card">
        <h2>Ocupación media por isla</h2>
        <p class="hint">Comparativa basada en subzonas modelo. TF/GC concentran presión; islas menores con holgura relativa.</p>
        <div class="chart-box"><canvas id="ch-dash-islands"></canvas></div>
      </div>
    </div>
    <div class="card" style="margin-top:1.25rem">
      <h2>Comparativa por isla</h2>
      <p class="hint">Peso de visitantes coherente con concentración en Tenerife y Gran Canaria (~⅔ del total).</p>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Isla</th><th>Peso visitantes</th><th>Ocupación media zonas modelo</th><th>Ocupación prevista 30d</th><th>Presión territorial</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
  `;
}

function kpiCard(label, val, delta, dir) {
  const cls = dir === 'up' ? 'up' : dir === 'down' ? 'down' : '';
  return `<div class="card">
    <div class="kpi-label">${label}</div>
    <div class="kpi-val">${val}</div>
    <div class="kpi-delta ${cls}">${delta}</div>
  </div>`;
}

function kciOta() {
  const improving = GLOBAL.otaTrend <= 0;
  return `<div class="card">
    <div class="kpi-label">Dependencia intermediarios (OTA / turoperador)</div>
    <div class="kpi-val">${GLOBAL.otaDependencyPct}%</div>
    <div class="kpi-delta ${improving ? 'up' : 'down'}">${improving ? 'Trayectoria favorable con venta directa' : 'Subiendo: revisar mix canal'}</div>
  </div>`;
}

function mountDashboardCharts() {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  const observed = months.map((_, i) => 92 + Math.sin(i / 2) * 4 + i * 0.15);
  const model = observed.map((v, i) => v * (1 + (i > 7 ? 0.012 : 0) + (i > 9 ? 0.02 : 0)));

  const c1 = document.getElementById('ch-dash-demand');
  if (c1) {
    charts.push(
      new Chart(c1, {
        type: 'line',
        data: {
          labels: months,
          datasets: [
            { label: 'Demanda observada (índice)', data: observed, borderColor: '#0a2540', tension: 0.25 },
            { label: 'Modelo predictivo', data: model, borderColor: '#26890d', borderDash: [6, 4], tension: 0.25},
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { position: 'bottom' } },
          scales: { y: { suggestedMin: 85, suggestedMax: 105 } },
        },
      }),
    );
  }

  const c2 = document.getElementById('ch-dash-islands');
  if (c2) {
    charts.push(
      new Chart(c2, {
        type: 'bar',
        data: {
          labels: ISLANDS.map((i) => i.name),
          datasets: [
            {
              label: 'Ocupación media zonas (%)',
              data: ISLANDS.map((i) => islandAvgOcc(i.id)),
              backgroundColor: ISLANDS.map((i) => (islandAvgOcc(i.id) >= 90 ? '#fca5a5' : islandAvgOcc(i.id) >= 75 ? '#fdba74' : '#86bc25')),
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: { legend: { display: false } },
          scales: { y: { suggestedMax: 100 } },
        },
      }),
    );
  }
}

function viewForecast() {
  const rows = MARKETS.map((m) => {
    const alert = m.momentum <= -0.02 ? 'Revisión pricing/canal' : m.momentum >= 0.05 ? 'Ventana de upside controlado' : 'Seguimiento';
    const tag = m.momentum <= -0.02 ? 'bad' : m.momentum >= 0.05 ? 'ok' : 'mid';
    return `<tr>
      <td><strong>${m.name}</strong></td>
      <td>${fmtPct(m.share)}</td>
      <td>${m.momentum >= 0 ? '+' : ''}${fmt(m.momentum * 100, 1)}%</td>
      <td><span class="tag ${tag}">${alert}</span></td>
    </tr>`;
  }).join('');

  return `
    <div class="card">
      <h2>Forecast por mercado emisor (próximas 8–12 semanas)</h2>
      <p class="hint">
        El motor combina PMS agregado, señales de búsqueda y bookings con lead time. <strong>Alemania</strong> muestra momentum positivo;
        <strong>Reino Unido</strong> en zona de vigilancia por desaceleración simulada.
      </p>
      <div class="chart-box" style="height:280px"><canvas id="ch-forecast"></canvas></div>
    </div>
    <div class="card" style="margin-top:1.25rem">
      <h2>Tabla de lectura por mercado</h2>
      <div class="table-wrap">
        <table>
          <thead><tr><th>Mercado</th><th>Peso modelo</th><th>Momentum previsto</th><th>Acción sugerida (HITL)</th></tr></thead>
          <tbody>${rows}</tbody>
        </table>
      </div>
    </div>
    <div class="grid two" style="margin-top:1.25rem">
      <div class="card">
        <h2>Alertas tempranas activas</h2>
        <p class="hint">Basadas en umbrales de cambio de tendencia y confianza del modelo.</p>
        <div class="alerts-list">
          <div class="alert-item danger"><strong>DE · fuerte</strong> — Incremento de intención para sur TF que puede empujar saturación &gt;95% si no se regula mix.</div>
          <div class="alert-item"><strong>UK · suave</strong> — Caída relativa en conversiones OTA; test de mensaje y oferta directa segmentada.</div>
        </div>
      </div>
      <div class="card">
        <h2>Desglose por isla (selector conceptual)</h2>
        <p class="hint">En producción: drill-down por zona y producto. Aquí, priorización TF/GC por masa crítica de datos.</p>
        <ul class="checklist">
          <li><strong>Tenerife / Gran Canaria:</strong> foco en gestión de picos y redistribución temporal.</li>
          <li><strong>Lanzarote / Fuerteventura:</strong> equilibrio ambiental y estacionalidad solar.</li>
          <li><strong>La Palma, La Gomera, El Hierro:</strong> turismo de mayor valor unitario y límites ecológicos.</li>
        </ul>
      </div>
    </div>
  `;
}

function mountForecastChart() {
  const w = Array.from({ length: 12 }, (_, i) => `S+${i + 1}`);
  const de = [100, 102, 104, 106, 107, 108, 109, 109.5, 110, 110.5, 111, 111.2];
  const uk = [100, 99.5, 99, 98.2, 97.8, 97.2, 97.0, 96.8, 96.5, 96.4, 96.3, 96.2];
  const c = document.getElementById('ch-forecast');
  if (!c) return;
  charts.push(
    new Chart(c, {
      type: 'line',
      data: {
        labels: w,
        datasets: [
          { label: 'Alemania · índice demanda', data: de, borderColor: '#26890d', tension: 0.2 },
          { label: 'Reino Unido · índice demanda', data: uk, borderColor: '#0a2540', borderDash: [4, 3], tension: 0.2 },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } },
      },
    }),
  );
}

function viewSaturation() {
  const islandSelect = ISLANDS.map((i) => `<option value="${i.id}">${i.name}</option>`).join('');

  return `
    <div class="card">
      <h2>Mapa conceptual de saturación por subzona</h2>
      <p class="hint">
        Visualización tipo heatmap administrativo (no cartográfica). Umbrales: <span class="tag ok">&lt;75%</span>
        <span class="tag mid">75–89%</span> <span class="tag bad">≥90% (alerta)</span>.
        Picos &gt;95% disparan protocolo de redistribución y revisión humana.
      </p>
      <div class="form-row">
        <div>
          <label for="islSel">Isla</label>
          <select id="islSel">${islandSelect}</select>
        </div>
        <button type="button" class="btn secondary" id="btnAll">Ver resumen 7 islas</button>
      </div>
      <div id="heatContainer"></div>
    </div>
    <div class="card" style="margin-top:1.25rem">
      <h2>Señales cruzadas (simuladas)</h2>
      <p class="hint">Integración futura: movilidad agregada, presión en servicios municipales y sentimiento en redes con límites de privacidad.</p>
      <ul class="checklist">
        <li>Nivel de congestión transporte: <strong>elevado</strong> en corredor sur TF cuando occ hotelera &gt;93%.</li>
        <li>Correlación ocupación–reclamaciones: activar cuando 3 indicadores concurrentes superan umbral.</li>
      </ul>
    </div>
  `;
}

function mountSaturationInteract() {
  const sel = document.getElementById('islSel');
  const box = document.getElementById('heatContainer');
  const btn = document.getElementById('btnAll');
  function renderOne(id) {
    const zones = ZONES_SAMPLE[id];
    box.innerHTML = `
      <div class="heatmap">
        ${zones
          .map(
            (z) => `
          <div class="zone-tile ${occClass(z.occ)}">
            <span class="z-name">${z.name}</span>
            <span class="z-oc">Ocupación modelo: ${z.occ}% <span class="tag ${tagClass(z.occ)}">${z.occ >= 95 ? 'Crítico' : z.occ >= 90 ? 'Riesgo' : z.occ >= 75 ? 'Atención' : 'OK'}</span></span>
          </div>`,
          )
          .join('')}
      </div>`;
  }
  function renderAll() {
    box.innerHTML = `<div class="grid two">${ISLANDS.map((isl) => {
      const avg = islandAvgOcc(isl.id);
      return `<div class="zone-tile ${occClass(avg)}"><span class="z-name">${isl.name}</span><span class="z-oc">Media zonas: ${fmt(avg, 1)}%</span></div>`;
    }).join('')}</div>`;
  }
  sel.addEventListener('change', () => renderOne(sel.value));
  btn.addEventListener('click', renderAll);
  renderOne(sel.value);
}

function viewPricing() {
  const rows = ISLANDS.filter((i) => i.pressure !== 'baja').map((i) => {
    const occ = islandAvgOcc(i.id);
    const rec = occ >= 92 ? 'Mantener tarifa con restricción descuento OTA' : occ >= 85 ? 'Ligero premium en canal directo' : 'Paquetes experiencia valor alto';
    const revpar = GLOBAL.revparEUR * (0.95 + occ / 200);
    return `<tr><td>${i.name}</td><td>${fmt(occ, 1)}%</td><td>${fmt(revpar, 0)} €</td><td>${rec}</td></tr>`;
  }).join('');

  return `
    <div class="grid two">
      <div class="card">
        <h2>Recomendaciones de precio (IA asistida)</h2>
        <p class="hint">
          Objetivo explícito: <strong>valor por visitante</strong> y <strong>GOPPAR</strong>, no llenar a cualquier precio.
          Human-in-the-loop obligatorio antes de aplicar políticas públicas o acuerdos marco.
        </p>
        <div class="chart-box"><canvas id="ch-price"></canvas></div>
      </div>
      <div class="card">
        <h2>Reglas modelo (extracto)</h2>
        <ul class="checklist">
          <li>Si probabilidad saturación zona &gt;90% en ventana T+d: priorizar yield sobre volumen en sur TF/GC.</li>
          <li>Si momentum DE alto y UK débil: reasignar inventario promocional manteniendo control de margen.</li>
          <li>Evitar guerra de precios en OTA cuando el modelo detecta baja elasticidad en cohorte de alto gasto.</li>
        </ul>
        <p class="quote">Las recomendaciones incluyen intervalo de confianza y drivers principales (explicabilidad para auditoría).</p>
      </div>
    </div>
    <div class="card" style="margin-top:1.25rem">
      <h2>Tabla orientativa RevPAR por isla (datos simulados)</h2>
      <div class="table-wrap"><table><thead><tr><th>Isla (alta/media presión)</th><th>Ocupación media</th><th>RevPAR modelo</th><th>Lectura</th></tr></thead><tbody>${rows}</tbody></table></div>
    </div>
  `;
}

function mountPricingChart() {
  const c = document.getElementById('ch-price');
  if (!c) return;
  charts.push(
    new Chart(c, {
      type: 'bar',
      data: {
        labels: ['RevPAR actual est.', 'Tras optimización IA', 'Objetivo GOPPAR'],
        datasets: [
          {
            label: '€ / habitación disponible',
            data: [GLOBAL.revparEUR, GLOBAL.revparEUR * 1.06, GLOBAL.gopparEUR * 1.08],
            backgroundColor: ['#94a3b8', '#26890d', '#0a2540'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
      },
    }),
  );
}

function viewMarketing() {
  return `
    <div class="grid two">
      <div class="card">
        <h2>Segmentación por valor e impacto territorial</h2>
        <p class="hint">
          Priorizar cohortes con mayor gasto en destino y menor presión social marginal (p. ej. dispersión espacial, estacionalidad menos punzante).
        </p>
        <div class="chart-box"><canvas id="ch-mkt"></canvas></div>
      </div>
      <div class="card">
        <h2>Simulador de dependencia OTA (orden de magnitud)</h2>
        <p class="hint">
          Deslice para modelar un incremento de venta directa y captación CRM. Cifras ilustrativas coherente con comisiones 15–25%.
        </p>
        <label for="dirRange">Incremento relativo venta directa: <strong id="dirVal">5%</strong></label>
        <input type="range" id="dirRange" min="0" max="15" value="5" style="width:100%" />
        <div class="scenario-results" style="margin-top:1rem">
          <div class="mini">Comisión evitada (est.)<strong id="savedComm">—</strong></div>
          <div class="mini">Mejora margen hotel (proxy)<strong id="marginUp">—</strong></div>
          <div class="mini">Inversión sugerida en medios<strong id="mediaRec">—</strong></div>
        </div>
        <p class="quote">La IA propone asignación de presupuesto y creatividades a testear; approval humano en campañas institucionales.</p>
      </div>
    </div>
  `;
}

function mountMarketingChart() {
  const c = document.getElementById('ch-mkt');
  if (!c) return;
  charts.push(
    new Chart(c, {
      type: 'doughnut',
      data: {
        labels: ['Alto valor / bajo impacto', 'Alto valor / impacto medio', 'Masivo / alta presión', 'Estacional punta'],
        datasets: [
          {
            data: [22, 28, 35, 15],
            backgroundColor: ['#26890d', '#86bc25', '#f97316', '#94a3b8'],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } },
      },
    }),
  );

  const range = document.getElementById('dirRange');
  const dirVal = document.getElementById('dirVal');
  const saved = document.getElementById('savedComm');
  const margin = document.getElementById('marginUp');
  const media = document.getElementById('mediaRec');
  function upd() {
    const inc = Number(range.value) / 100;
    dirVal.textContent = `${range.value}%`;
    const baseRev = 23000;
    const otaShare = 0.8;
    const commission = 0.2;
    const shift = inc * otaShare * baseRev;
    saved.textContent = `~${fmt(shift * commission, 0)} M€/año (proxy)`;
    margin.textContent = `+${fmt(inc * 4.2, 1)} pts GOPPAR (sim.)`;
    media.textContent = `${fmt(40 + inc * 90, 0)} M€/año`;
  }
  range.addEventListener('input', upd);
  upd();
}

function viewFlows() {
  return `
    <div class="card">
      <h2>Redistribución de flujos turísticos</h2>
      <p class="hint">
        Recomendaciones para mover demanda desde <strong>TF/GC saturadas</strong> hacia islas con capacidad y producto compatible,
        sin objetivo de maximizar volumen total.
      </p>
      <div class="chart-box" style="height:300px"><canvas id="ch-flows"></canvas></div>
    </div>
    <div class="card" style="margin-top:1.25rem">
      <h2>Matriz de recomendación (simplificada)</h2>
      <div class="table-wrap"><table>
        <thead><tr><th>Origen (presión)</th><th>Destino sugerido</th><th>Racional</th><th>Supervisión</th></tr></thead>
        <tbody>
          <tr><td>Sur Tenerife &gt;95%</td><td>La Palma / interior TF</td><td>Aliviar pico; captar gasto disperso</td><td>Validación Cabildo</td></tr>
          <tr><td>Sur Gran Canaria ~94%</td><td>Fuerteventura / GC norte</td><td>Capacidad media; menor conflicto urbano</td><td>Comité estratégico</td></tr>
          <tr class="row-warn"><td>Corredor masivo TF/GC</td><td>La Gomera / El Hierro</td><td>Valor unitario y límites ambientales</td><td>Sostenibilidad + HITL</td></tr>
        </tbody>
      </table></div>
    </div>
  `;
}

function mountFlowsChart() {
  const c = document.getElementById('ch-flows');
  if (!c) return;
  charts.push(
    new Chart(c, {
      type: 'bar',
      data: {
        labels: ISLANDS.map((i) => i.name),
        datasets: [
          { label: 'Presión actual (índice)', data: ISLANDS.map((i) => islandAvgOcc(i.id)), backgroundColor: '#f97316' },
          {
            label: 'Tras intervención sugerida',
            data: ISLANDS.map((i) =>
              Math.max(55, islandAvgOcc(i.id) - (i.pressure === 'alta' ? 7 : i.pressure === 'media' ? 3 : -2)),
            ),
            backgroundColor: '#26890d',
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { position: 'bottom' } },
        scales: { x: { stacked: false } },
      },
    }),
  );
}

function viewScenarios() {
  return `
    <div class="card">
      <h2>Laboratorio de escenarios</h2>
      <p class="hint">
        Simule choques de demanda o campañas. Los impactos son <strong>orientativos</strong> para demo ejecutiva (no forecast oficial).
      </p>
      <div class="form-row">
        <div>
          <label for="scType">Escenario</label>
          <select id="scType">
            <option value="de_up">Aumento demanda alemana (+8%)</option>
            <option value="uk_down">Caída mercado británico (-6%)</option>
            <option value="tf_sat">Saturación extrema sur Tenerife</option>
            <option value="campaign">Campaña a islas menos saturadas</option>
          </select>
        </div>
        <button type="button" class="btn green" id="scRun">Ejecutar simulación</button>
      </div>
      <div id="scOut"></div>
    </div>
  `;
}

function wireScenarios() {
  document.getElementById('scRun').addEventListener('click', () => {
    const t = document.getElementById('scType').value;
    const out = document.getElementById('scOut');
    const baseOcc = GLOBAL.occupiedHotelPct;
    const baseRev = baseOcc * 1.05;
    let occ = baseOcc,
      rev = baseRev,
      sat = 32,
      soc = GLOBAL.socialStressIdx;

    switch (t) {
      case 'de_up':
        occ = Math.min(92, baseOcc + 3);
        rev = baseRev + 4;
        sat += 8;
        soc = Math.min(78, soc + 4);
        break;
      case 'uk_down':
        occ = Math.max(78, baseOcc - 2);
        rev = baseRev - 3;
        sat -= 4;
        soc = Math.max(60, soc - 1);
        break;
      case 'tf_sat':
        occ = baseOcc + 1;
        rev = baseRev + 1;
        sat += 18;
        soc += 9;
        break;
      case 'campaign':
        occ = baseOcc - 1;
        rev = baseRev + 2;
        sat -= 12;
        soc = Math.max(58, soc - 5);
        break;
      default:
        break;
    }

    out.innerHTML = `
      <div class="scenario-results">
        <div class="mini">Ocupación global proxy<strong>${fmt(occ, 0)}%</strong><span style="color:#64748b">hotel regulado</span></div>
        <div class="mini">Ingresos turísticos proxy<strong>${fmt(rev, 1)}</strong><span style="color:#64748b">índice 100 base</span></div>
        <div class="mini">Índice saturación TF/GC<strong>${fmt(sat, 0)}</strong><span style="color:#64748b">score modelo</span></div>
        <div class="mini">Percepción social (estrés)<strong>${fmt(soc, 0)}%</strong><span style="color:#64748b">encuestas proxy</span></div>
      </div>
      <p class="quote" style="margin-top:1rem">
        Salida con trazas: drivers del escenario, supuestos de elastiedad y limitaciones del modelo disponibles para auditoría (módulo Gobernanza).
      </p>`;
  });
}

function viewAlerts() {
  const items = ALERTS_SEED.map((a) => `<div class="alert-item ${a.type === 'danger' ? 'danger' : a.type === 'info' ? 'info' : ''}"><strong>${a.title}</strong><br/>${a.body}</div>`).join('');
  return `
    <div class="grid two">
      <div class="card">
        <h2>Centro de alertas</h2>
        <p class="hint">Clasificación automática + validación humana antes de comunicación pública.</p>
        <div class="alerts-list">${items}</div>
      </div>
      <div class="card">
        <h2>Política de umbrales (extracto)</h2>
        <ul class="checklist">
          <li><strong>Saturación:</strong> occ zona &gt;90% (warning), &gt;95% (critical) 3+ días.</li>
          <li><strong>Demanda:</strong> caída &gt;2σ en mercado peso &gt;15%.</li>
          <li><strong>Intermediación:</strong> ratio OTA ↑ 2 pp en 30d en segmento premium.</li>
          <li><strong>Social:</strong> brotes de incidencias + picos de menciones negativas (con DPIA).</li>
        </ul>
      </div>
    </div>
  `;
}

function viewGovernance() {
  return `
    <div class="card">
      <h2>Gobernanza, ética y cumplimiento</h2>
      <p class="hint">
        SmartTourism AI se presenta como <strong>sistema de apoyo a la decisión</strong>. El Gobierno de Canarias y el sector mantienen la responsabilidad final.
      </p>
    </div>
    <div class="governance-grid" style="margin-top:1.25rem">
      <div class="card">
        <h2>Supervisión humana (HITL)</h2>
        <ul class="checklist">${GOVERNANCE.humanReview.map((x) => `<li>${x}</li>`).join('')}</ul>
      </div>
      <div class="card">
        <h2>Trazabilidad</h2>
        <ul class="checklist">${GOVERNANCE.traceability.map((x) => `<li>${x}</li>`).join('')}</ul>
      </div>
      <div class="card">
        <h2>Auditoría y control de sesgos</h2>
        <ul class="checklist">${GOVERNANCE.audit.map((x) => `<li>${x}</li>`).join('')}</ul>
      </div>
      <div class="card">
        <h2>RGPD y EU AI Act</h2>
        <ul class="checklist">${GOVERNANCE.compliance.map((x) => `<li>${x}</li>`).join('')}</ul>
      </div>
    </div>
  `;
}

function viewRoadmap() {
  const items = ROADMAP.map(
    (r) =>
      `<li><div class="t-title">${r.phase}</div><div class="t-meta"><strong>${r.months}</strong> · ${r.detail}</div></li>`,
  ).join('');
  return `
    <div class="card">
      <h2>Roadmap de implantación institucional</h2>
      <p class="hint">Alineado con el plan por fases del trabajo: reducir riesgo, validar valor y escalar a las siete islas.</p>
      <ul class="timeline">${items}</ul>
    </div>
    <div class="card" style="margin-top:1.25rem">
      <h2>Cronograma 0–36+ meses (resumen)</h2>
      <div class="chart-box" style="height:220px"><canvas id="ch-road"></canvas></div>
    </div>
  `;
}

function mountRoadmapChart() {
  const c = document.getElementById('ch-road');
  if (!c) return;
  charts.push(
    new Chart(c, {
      type: 'line',
      data: {
        labels: ['0', '6', '12', '18', '24', '30', '36', '42'],
        datasets: [
          {
            label: 'Madurez de plataforma (índice)',
            data: [5, 20, 45, 58, 72, 82, 90, 93],
            fill: true,
            backgroundColor: 'rgba(38,137,13,0.15)',
            borderColor: '#26890d',
            tension: 0.25,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
        scales: {
          x: { title: { display: true, text: 'Meses' } },
          y: { suggestedMin: 0, suggestedMax: 100 },
        },
      },
    }),
  );
}

window.addEventListener('hashchange', handleRoute);
window.addEventListener('DOMContentLoaded', handleRoute);
