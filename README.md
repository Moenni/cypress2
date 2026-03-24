Cypress2
Proyecto de pruebas automatizadas con Cypress, orientado a la práctica de end-to-end testing (E2E) en aplicaciones web.
Este repositorio incluye ejemplos avanzados, configuración inicial y estructura recomendada para comenzar a trabajar con Cypress.

📂 Estructura del proyecto
cypress2/
├── cypress/
│   ├── e2e/                # Casos de prueba E2E
│   ├── fixtures/           # Datos de prueba (JSON)
│   ├── screenshots/        # Capturas generadas por Cypress
│   │   └── 2-advanced-examples/
│   │       └── misc.cy.js  # Ejemplo avanzado
│   └── support/            # Archivos de soporte y comandos personalizados
├── cypress.config.js       # Configuración principal de Cypress
├── .gitignore              # Archivos ignorados por Git



🚀 Instalación
- Clonar el repositorio:
git clone https://github.com/Moenni/cypress2.git
cd cypress2
- Instalar dependencias:
npm install



▶️ Ejecución de pruebas
- Abrir el Test Runner interactivo:
npx cypress open
- Ejecutar pruebas en modo headless (CI/CD):
npx cypress run



🧪 Contenido de pruebas
- Pruebas E2E: Validan el comportamiento completo de la aplicación desde la perspectiva del usuario.
- Fixtures: Datos estáticos para simular respuestas o entradas.
- Screenshots: Evidencias automáticas de ejecución de pruebas.
- Support: Comandos reutilizables y configuración global.

⚙️ Configuración
El archivo cypress.config.js permite personalizar:
- Base URL de la aplicación bajo prueba.
- Timeouts globales.
- Integración con reportes y plugins.
Ejemplo de configuración mínima:
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // Configuración de eventos
    },
    baseUrl: "http://localhost:3000",
  },
});



📸 Evidencias
Las capturas de pantalla se generan automáticamente en la carpeta cypress/screenshots/ durante la ejecución de pruebas fallidas o cuando se especifica en el código.

🤝 Contribución
- Haz un fork del repositorio.
- Crea una rama para tu feature o fix:
git checkout -b mi-feature
- Realiza tus cambios y haz commit.
- Envía un Pull Request.

📜 Licencia
Este proyecto se distribuye bajo la licencia MIT, lo que permite su uso, modificación y distribución libremente.


