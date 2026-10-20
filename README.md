#  Documentación Técnica: Soluciones Nidom (`index.html`)

Documentación técnica y operativa para la página web corporativa / landing page de **Soluciones Nidom**.

---

## 1. Descripción General del Proyecto

- **Tipo de proyecto:** Sitio Web corporativo / Landing Page (One-Page con navegación interna por anclas `#`).
- **Objetivo:** Presentación de servicios especializados en ventas telefónicas, prospección comercial, atención a clientes y administración de propiedades, respaldados por la marca Soluciones Nidom y su alianza como distribuidor de Infinitum/Telnor.
- **Autoría / Diseño:** Dalila Santiago | Luminel Agencia Creativa.
- **Año:** 2026.

---

## 2. Estructura de Archivos y Carpetas

La arquitectura de archivos esperada para el correcto funcionamiento del sitio es la siguiente:

```text
nidomsoluciones/
│
├── index.html                  <-- Archivo principal de la página (código fuente)
├── README.md                   <-- Esta documentación
├── enviar.php                  <-- Script backend para procesamiento del formulario
│
└── assets/
    ├── css/
    │   ├── normalize.css       <-- Reseteo y estandarización de estilos base
    │   └── style.css           <-- Estilos personalizados del diseño corporativo
    │
    ├── js/
    │   └── main.js             <-- Inicialización de Swiper, scripts de interactividad
    │
    └── images/                 <-- Recursos gráficos (logotipos, banners, iconos, fotos)
        ├── LOGO_SOLUCIONES.png
        ├── NOSOTROS_IMAGEN.png
        ├── QUE HACEMOS_NIDOM.png
        ├── ADMINISTRACION_IMAGEN.png
        ├── CONTAMOSCON.png
        ├── CLIENTE1.png / CLIENTE2.png / CLIENTE3.png
        └── ...
```

---

## 3. Librerías y Dependencias Externas (CDNs)

El proyecto utiliza librerías de terceros cargadas directamente mediante enlaces CDN en `<head>` y antes del cierre de `</body>`:

| Librería | Versión | Tipo | Uso en la página |
| :--- | :---: | :---: | :--- |
| **Bootstrap** | 5.3.2 / 5.3.8 | CSS & JS | Sistema de rejilla (`container`, `row`, `col`), Navbar responsive, colapsables de tarjetas. |
| **Bootstrap Icons** | 1.13.1 | Fuentes / Iconos | Iconos de teléfono, correo, WhatsApp, redes sociales, estrellas y flechas. |
| **Google Fonts** | — | Tipografía | Fuentes *Montserrat* (lectura y cuerpo) y *Playfair Display* (elegancia y títulos). |
| **Swiper JS** | 11.x | CSS & JS | Carruseles deslizables interactivos (Modelo 360°, Catálogo de servicios y Reseñas). |
| **AOS (Animate On Scroll)** | 2.3.1 | CSS & JS | Animaciones visuales que se activan al hacer scroll (`fade-down`, `fade-right`, etc.). |
| **Google reCAPTCHA** | v2 | JS | Protección antispam en el formulario de contacto. |

---

## 4. Desglose Sección por Sección de `index.html`

El código está estructurado en bloques semánticos y modulares bien definidos:

### Resumen de Secciones:

| # | Sección / ID | Contenedor principal | Propósito y Contenido |
| :-: | :--- | :--- | :--- |
| **0** | **`<head>`** | Meta tags y CDNs | SEO básico, Open Graph para WhatsApp/Facebook, Favicon, tipografías y hojas de estilo. |
| **1** | **Header** (`#header`) | `.header__contact`<br>`.navigation-wrap` | Barra superior con enlaces directos (`tel:` y `mailto:`), redes sociales y menú de navegación con botón hamburguesa. |
| **2** | **Inicio** (`#inicio`) | `.header__banner` | Hero banner de impacto con H1 comercial y botón CTA hacia `#nosotros`. |
| **3** | **Nosotros** (`#nosotros`) | `.nosotros__banner`<br>`.nosotros__cards-container` | Resumen de la empresa, respaldo de Infinitum/Telnor y tarjetas de **Misión** y **Visión**. |
| **4** | **¿Qué hacemos?** | `.hacemos__banner` | Imagen corporativa y listado de los 6 pilares de ventas telefónicas. |
| **5** | **Servicios** (`#servicios`) | `.serv__banner`<br>`.adm__banner` | Bloques explicativos de **Servicio al cliente** y **Administración de propiedades**. |
| **6** | **Modelo 360°** | `.modelo__banner`<br>`.modelo__swiper` | Carrusel Swiper interactivo con tarjetas de *Gestión Inteligente*, *Infraestructura* y *Servicios de calidad*. |
| **7** | **Valores** | `.valores__section` | Fila con 5 columnas gráficas representativas de los valores de la empresa (`1.png` a `5.png`). |
| **8** | **Catálogo Servicios** | `.servicios__banner`<br>`.servicios__swiper` | Carrusel de 8 tarjetas con imágenes de fondo y acordeones colapsables (`data-bs-toggle="collapse"`). |
| **9** | **Calidad y Tec.** | `.calidad__banner` | Cuadrícula 2x2 que destaca la infraestructura y herramientas de calidad. |
| **10**| **Experiencia** | `.experiencia__banner`<br>`.reviews__swiper` | Sección de trayectoria ("+3 años de experiencia") y carrusel de opiniones de clientes con 5 estrellas. |
| **11**| **Estrategia** | `.estrategia__banner` | Diagrama secuencial de 5 pasos: *Análisis de BD*, *Perfil*, *Perfilamiento*, *Gestión* y *Ventas*. |
| **12**| **Contacto** (`#contacto`) | `.contacto__banner`<br>`.float` | Formulario de contacto con reCAPTCHA conectado a `enviar.php`, iframe de Google Maps y botón flotante de WhatsApp. |
| **13**| **Footer** | `.footer__banner` | Logotipo en blanco, menú rápido, datos de contacto (dirección en Culiacán, teléfono, correo) y derechos de autor. |

---

## 5. Guía de Mantenimiento y Modificaciones Rápidas

Para realizar cambios habituales sin romper el diseño, localiza las siguientes líneas en `index.html`:

### A. Modificar Datos de Contacto
* **Teléfono móvil / llamada directa:**
  * En la barra superior (`header`): `<a href="tel:5598704636">`
  * En el pie de página (`footer`): `<a href="tel:5598704636">`
* **Correo electrónico:**
  * En la barra superior: `<a href="mailto:atencion@solucionesnidom.mx">`
  * En el footer: `<a href="mailto:atencion@solucionesnidom.mx">`
* **Botón flotante de WhatsApp:**
  * Cerca de la línea 700:
    ```html
    <a href="https://wa.link/z3nwd1" class="float" target="_blank">
      <i class="bi bi-whatsapp my-float"></i>
    </a>
    ```

### B. Modificar el Formulario de Contacto
* El formulario envía la información a través de:
  ```html
  <form action="enviar.php" method="POST">
  ```
* Los campos obligatorios que recibe `enviar.php` son:
  - `nombre` (`<input name="nombre">`)
  - `correo` (`<input name="correo">`)
  - `telefono` (`<input name="telefono">`)
  - `servicio` (`<textarea name="servicio">`)
  - `g-recaptcha-response` (validado con la clave del sitio en `data-sitekey`).

### C. Ajustar el Carrusel de Reseñas / Opiniones
* Para agregar o modificar opiniones de clientes, busca la clase `.reviews__swiper .swiper-wrapper`. Cada tarjeta se compone de:
  * Imagen del cliente: `<img class="card-img-review" src="assets/images/CLIENTE1.png" ...>`
  * Texto o título: `<p class="fw-bold fs-4 lh-sm">Excelente atención...</p>`
  * Puntuación por estrellas: Iconos `<i class="bi bi-star-fill text-warning"></i>`.

---

## 6. Puntos de Atención y Buenas Prácticas Técnicas

Durante la auditoría del código se identificaron los siguientes puntos que conviene tener en cuenta:

1. **Metaetiqueta Open Graph (`og:image`) incompleta:**
   * En `<meta property="og:image" content="">`, el atributo `content` está vacío.
   * **Solución recomendada:** Colocar la URL absoluta del logotipo o banner (ej. `https://solucionesnidom.mx/assets/images/logo_og.png`) para que al compartir la página en WhatsApp o redes se muestre una previsualización atractiva.
2. **Consistencia en las rutas de imágenes:**
   * La mayoría de las etiquetas usan rutas relativas: `src="assets/images/..."`.
   * Algunas etiquetas (por ejemplo el logo del navbar y ciertas imágenes de servicios) utilizan `/assets/images/...` (con barra inclinada al inicio).
   * **Recomendación:** Se sugiere usar rutas relativas sin barra inicial (`assets/images/...`) para evitar problemas si el sitio se monta en un subdirectorio o carpeta de desarrollo local.
3. **Identificadores duplicados en colapsables:**
   * En las tarjetas de servicios 7 y 8, el botón colapsable apunta al mismo ID: `data-bs-target="#collapseServ7"`. Si se descomentan o activan, ambos botones abrirán el mismo contenido. Se recomienda renombrar uno a `collapseServ8`.
