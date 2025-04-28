# FLISol Guayaquil Website

Este repositorio contiene el sitio web oficial para el Festival Latinoamericano de Instalación de Software Libre (FLISol) en Guayaquil.

## Acerca del Proyecto

FLISol es el mayor evento de difusión del Software Libre en América Latina. Se realiza desde el año 2005 y tiene como objetivo principal promover el uso del software libre, dando a conocer su filosofía, alcances, avances y desarrollo.

## Requisitos Previos

Para trabajar con este proyecto, necesitarás tener instalado:

- [Node.js](https://nodejs.org/) (v14.x o superior)
- [npm](https://www.npmjs.com/) (v6.x o superior) o [yarn](https://yarnpkg.com/)

## Instalación

Sigue estos pasos para configurar el entorno de desarrollo local:

1. Clona el repositorio:
   ```bash
   git clone https://github.com/tuusuario/flisolguayaquil.git
   cd flisolguayaquil
   ```

2. Instala las dependencias:
   ```bash
   npm install
   # o si prefieres usar yarn
   yarn install
   ```

## Ejecución en Desarrollo

Para iniciar el servidor de desarrollo:

```bash
npm run dev
# o
gulp dev
```

Esto iniciará un servidor local y abrirá el sitio en tu navegador. El servidor se actualizará automáticamente cuando realices cambios en los archivos del proyecto.

## Compilación para Producción

Para compilar el proyecto para producción:

```bash
npm run build
# o
gulp build
```

Esto generará los archivos optimizados en la carpeta `dist/`, listos para ser desplegados en un servidor web.

## Estructura del Proyecto

- `src/`: Contiene los archivos fuente del proyecto
  - `views/`: Archivos HTML
  - `assets/`: Recursos como imágenes, fuentes, CSS y JavaScript
    - `scss/`: Archivos Sass que compilan a CSS
    - `js/`: Scripts de JavaScript
    - `images/`: Imágenes e iconos
    - `fonts/`: Fuentes utilizadas en el proyecto
  - `css/`: CSS compilado desde SCSS

- `dist/`: Carpeta donde se generan los archivos para producción

## Tecnologías Utilizadas

- HTML5
- CSS3/Sass
- JavaScript
- Gulp (Task runner)
- Bootstrap (Framework CSS)

## Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.

## Contacto

Para más información sobre FLISol Guayaquil, visita [nuestra página web](https://flisolguayaquil.org) o contáctanos por [correo electrónico](mailto:contacto@flisolguayaquil.org).