# Guía de Contribución

¡Gracias por tu interés en contribuir al sitio web de FLISol Guayaquil! Este documento proporciona directrices para ayudarte a contribuir eficazmente al proyecto.

## Tabla de Contenidos

1. [Código de Conducta](#código-de-conducta)
2. [Cómo Contribuir](#cómo-contribuir)
3. [Flujo de Trabajo con Git](#flujo-de-trabajo-con-git)
4. [Estilo de Código](#estilo-de-código)
5. [Reportar Bugs](#reportar-bugs)
6. [Proponer Nuevas Características](#proponer-nuevas-características)

## Código de Conducta

Este proyecto y todos los participantes están regidos por un Código de Conducta. Al participar, se espera que mantengas este código. Por favor, reporta cualquier comportamiento inaceptable a los organizadores del evento.

## Cómo Contribuir

Hay muchas formas de contribuir al proyecto:

1. **Reportando bugs**: Si encuentras un error, por favor abre un issue detallando el problema.
2. **Sugiriendo mejoras**: Tienes ideas para mejorar el sitio? Abre un issue con tu propuesta.
3. **Enviando Pull Requests**: ¿Puedes arreglar un bug o implementar una nueva característica? ¡Excelente! Lee la sección sobre el flujo de trabajo con Git.
4. **Mejorando la documentación**: La documentación clara es crucial. Si puedes mejorarla, tus contribuciones son bienvenidas.

## Flujo de Trabajo con Git

1. **Fork** el repositorio a tu cuenta de GitHub.
2. **Clona** tu fork localmente:
   ```bash
   git clone https://github.com/TU_USUARIO/flisolguayaquil.git
   cd flisolguayaquil
   ```
3. Añade el repositorio original como **upstream**:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/flisolguayaquil.git
   ```
4. Crea una nueva **rama** para tu trabajo:
   ```bash
   git checkout -b nombre-de-la-caracteristica
   ```
5. Realiza tus cambios y haz **commit** con mensajes descriptivos:
   ```bash
   git add .
   git commit -m "Descripción clara del cambio"
   ```
6. **Push** a tu fork:
   ```bash
   git push origin nombre-de-la-caracteristica
   ```
7. Abre un **Pull Request** desde tu rama hasta la rama principal del repositorio original.

## Estilo de Código

Para mantener la consistencia en el código:

- Utiliza 2 espacios para la indentación en HTML, CSS y JavaScript.
- Sigue los estándares de [BEM (Block Element Modifier)](http://getbem.com/) para las clases CSS.
- Sigue el [estándar AirBnB](https://github.com/airbnb/javascript) para JavaScript.
- Documenta tu código cuando sea necesario.

## Reportar Bugs

Al reportar un bug, incluye:

- El título y la descripción clara del problema.
- Pasos para reproducir el error.
- El comportamiento esperado y lo que observaste.
- Capturas de pantalla si es posible.
- Tu entorno (navegador, sistema operativo, etc.).

## Proponer Nuevas Características

Si quieres proponer una nueva característica:

1. Abre un issue describiendo la característica.
2. Explica por qué sería útil para el proyecto.
3. Discute las posibles implementaciones.
4. Si estás dispuesto a implementarla tú mismo, indícalo.

---

¡Nuevamente, gracias por contribuir al sitio web de FLISol Guayaquil! Tu apoyo ayuda a fortalecer la comunidad del Software Libre en nuestra región. 