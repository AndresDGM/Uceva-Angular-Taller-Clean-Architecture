# Taller 6 - Clean Architecture

Monorepositorio del Taller 6 de Arquitectura de Software (Unidad Central del Valle del Cauca). Implementa una arquitectura limpia mediante la construcción e integración de tres aplicaciones:

- **Angular** (Frontend) — Puerto 4200
- **Node.js** (Backend) — Puerto 3000
- **Spring Boot** (Backend) — Puerto 8080

El módulo principal desarrollado es **Loans** (préstamos), siguiendo los principios de Clean Architecture: Entidades/Modelos, Casos de uso, Interfaces y contratos, Repositorios, Implementaciones de repositorios, Servicios e infraestructura, Componentes y vistas, con renderizado de información desde los backends.

---

## Tabla de Contenidos

- [Prerrequisitos](#prerrequisitos)
- [Estructura del Monorepositorio](#estructura-del-monorepositorio)
- [Ejecución de los Proyectos](#ejecución-de-los-proyectos)
  - [Node.js](#nodejs-puerto-3000)
  - [Spring Boot](#spring-boot-puerto-8080)
  - [Angular](#angular-puerto-4200)
- [Alternar entre Backends en Angular](#alternar-entre-backends-en-angular)
- [Pruebas Unitarias con Cobertura (Jest)](#pruebas-unitarias-con-cobertura-jest)
- [Documentación con Compodoc](#documentación-con-compodoc)
- [Endpoints de los Backends](#endpoints-de-los-backends)
- [Estándares de Commits](#estándares-de-commits)

---

## Prerrequisitos

Antes de ejecutar los proyectos, asegúrate de tener instalado lo siguiente:

| Herramienta | Versión Mínima | Propósito |
|-------------|----------------|-----------|
| Node.js | 18+ | Ejecutar backend Node.js y frontend Angular |
| Angular CLI | 17+ | Compilar y servir la aplicación Angular |
| Java | 25 | Ejecutar el backend Spring Boot |
| Gradle | 8+ | Construir y ejecutar Spring Boot |

---

## Estructura del Monorepositorio

```
Uceva-Angular-Taller-Clean-Architecture/
├── Angular/                  # Frontend en Angular (Clean Architecture)
├── Nodejs/                   # Backend en Node.js/Express (Clean Architecture)
├── SpringBoot/               # Backend en Spring Boot (Clean Architecture)
├── README.md                 # Este archivo
└── .kilo/                    # Configuración de Kilo
```

Cada proyecto contiene su propio `README.md` con detalles específicos de estructura de carpetas y configuración.

---

## Ejecución de los Proyectos

### Node.js (Puerto 3000)

Desde la carpeta `Nodejs/`:

```bash
npm install
npm run start
```

La API quedará disponible en `http://localhost:3000`.  
Documentación Swagger: `http://localhost:3000/api/docs`

### Spring Boot (Puerto 8080)

Desde la carpeta `SpringBoot/`:

```bash
JAVA_HOME=/usr/lib/jvm/java-25-openjdk bash gradlew bootRun
```

La API quedará disponible en `http://localhost:8080`.  
Documentación Swagger: `http://localhost:8080/api/swagger-ui/index.html`

### Angular (Puerto 4200)

Desde la carpeta `Angular/`:

```bash
npm install
npm run start
```

La aplicación quedará disponible en `http://localhost:4200`.

---

## Alternar entre Backends en Angular

Angular está diseñado con Clean Architecture para que los **componentes y casos de uso NO cambien** al cambiar de backend. La implementación activa se selecciona en:

```
Angular/src/environments/environment.ts
```

Edita la propiedad `backend`:

```ts
export const environment: {
  baseUrlNode: string;
  baseUrlSpringBoot: string;
  backend: Backend;
} = {
  baseUrlNode: 'http://localhost:3000',
  baseUrlSpringBoot: 'http://localhost:8080',
  backend: 'springboot',  // Cambia a: 'node' | 'springboot' | 'local'
};
```

Valores permitidos:

| Valor | Backend | Descripción |
|-------|---------|-------------|
| `'node'` | Node.js | Consume la API de Express en el puerto 3000 |
| `'springboot'` | Spring Boot | Consume la API de Spring Boot en el puerto 8080 |
| `'local'` | Local | Usa datos simulados (mocks) sin backend |

Al cambiar este valor, los **providers** en `Angular/src/app/app.config.ts` inyectan automáticamente la implementación de repositorio correspondiente (Node.js, Spring Boot o local) sin modificar casos de uso ni componentes.

---

## Pruebas Unitarias con Cobertura (Jest)

Desde la carpeta `Angular/`:

```bash
npm test
```

Ejecutará todas las pruebas unitarias con Jest y generará un reporte de cobertura. El objetivo del taller es alcanzar **cobertura superior al 90%**.

Los reportes de cobertura se generan en:
- `coverage/` (HTML, JSON, LCOV, texto, Clover)

---

## Documentación con Compodoc

Desde la carpeta `Angular/`:

```bash
npx compodoc -p tsconfig.doc.json
```

Esto generará la documentación de la aplicación Angular en la carpeta `documentation/`.

---

## Endpoints de los Backends

### Node.js (`http://localhost:3000`)

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/users/{countUsers}` | GET | Listado de usuarios |
| `/api/products/{countProducts}` | GET | Listado de productos |
| `/api/books/{countBooks}` | GET | Listado de libros |
| `/api/loans/{countLoans}` | GET | Listado de préstamos (módulo Loans) |
| `/api/loans/loan/{id}` | GET | Préstamo por ID (módulo Loans) |
| `/api/docs` | - | Documentación Swagger/OpenAPI |

### Spring Boot (`http://localhost:8080`)

| Endpoint | Método | Descripción |
|----------|--------|-------------|
| `/api/users/{countUsers}` | GET | Listado de usuarios |
| `/api/products/{countProducts}` | GET | Listado de productos |
| `/api/books/{countBooks}` | GET | Listado de libros |
| `/api/loans/{countLoans}` | GET | Listado de préstamos (módulo Loans) |
| `/api/loans/loan/{id}` | GET | Préstamo por ID (módulo Loans) |
| `/api/swagger-ui/index.html` | - | Documentación Swagger/OpenAPI |

Ambos backends respetan los mismos contratos y estructuras requeridos por Angular, lo que permite alternar entre ellos sin modificar el frontend.

---

## Estándares de Commits

El repositorio sigue convenciones de commits semánticos. Ejemplos:

| Tipo | Ejemplo |
|------|---------|
| `feat` | `feat: agregar módulo de loans en Angular` |
| `fix` | `fix: corregir ambigüedad de rutas en LoanController` |
| `docs` | `docs: actualizar README con instrucciones de ejecución` |
| `refactor` | `refactor: mover lógica de préstamos al caso de uso` |

---

## Créditos

- **Docente:** Jesus David Mejia Vergara
- **Institución:** Unidad Central del Valle del Cauca (Uceva)
- **Taller:** 6 - Clean Architecture
