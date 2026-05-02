# SmartTourism AI — prototipo ejecutivo

Aplicación estática (HTML/CSS/JS) que simula el comportamiento de **SmartTourism AI** descrito en el trabajo para el Gobierno de Canarias.

## Descarga rápida

El archivo **`SmartTourism_AI_descargable.html`** concentra en un solo documento los estilos y el JavaScript del prototipo: cópialo a tu equipo y ábrelo con el navegador (los gráficos cargan Chart.js desde Internet).

También puedes usar el enlace de descarga en la barra lateral de la app servida por HTTP, o bajar `index.html`, `styles.css` y `app.js` por separado.

## Cómo ejecutarla

Necesitas servir la carpeta por HTTP (no uses `file://` si Chart.js falla por CORS en algunos navegadores).

Desde esta carpeta:

```bash
cd "/Users/usuario/Library/CloudStorage/OneDrive-Personal/Documentos/DELOITTE CURSOR/smarttourism-ai"
python3 -m http.server 8080
```

Abre en el navegador: `http://localhost:8080`

## Contenido

Navegación lateral: dashboard, predicción, mapa de saturación, pricing, marketing, flujos, escenarios, alertas, gobernanza y roadmap.

Los datos son **simulados** y coherentes con el informe (concentración TF/GC, mercados DE/UK, OTA ~80%, umbrales 90/95%, enfoque valor vs. volumen).
