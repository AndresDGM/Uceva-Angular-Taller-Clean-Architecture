# Clean Architecture en NodeJS

```
src
├── domain
│   ├── models
│   │   ├── user.entity.ts
│   │   ├── product.entity.ts
│   │   └── report.model.ts
│   └── repositories
│       ├── user.repository.ts
│       ├── product.repository.ts
│       └── report.repository.ts
│
├── application
│   └── use-cases
│       ├── get-all-users.usecase.ts
│       ├── get-all-products.usecase.ts
│       └── get-all-reports.usecase.ts
│
├── infrastructure
│   ├── controllers
│   │   ├── user.controller.ts
│   │   └── product.controller.ts
│   ├── repositories
│   │   ├── user.repository.impl.ts
│   │   ├── product.repository.impl.ts
│   │   └── report.repository.impl.ts
│   ├── datasources
│   │   ├── user.datasource.ts
│   │   ├── product.datasource.ts
│   │   └── report.datasource.ts
│   └── web
│       ├── config/
│       ├── errors/
│       ├── interfaces/
│       ├── controllers/
│       ├── routes/
│       └── server.ts
│
└── app.ts
```

## Módulo de reportes

El modelo `Report` contiene los atributos que se muestran en la tabla de
reportes:

- `id`: identificador numérico.
- `title`: título del reporte.
- `description`: descripción breve.
- `type`: `Usuarios`, `Productos`, `Actividad` o `Inventario`.
- `status`: `Generado`, `Pendiente` o `Error`.
- `generatedAt`: fecha de generación en formato ISO 8601.
- `totalRecords`: cantidad de registros incluidos.

## Paso 1 - Crear Modelos

```
src//domain/models/
├── user.model.ts
└── product.model.ts
```

## Paso 2 - Crear Repositorios

```
src/domain/repositories/
├── user.repository.ts
└── product.repository.ts
```

## Paso 3 - Crear Casos de Uso

```
src/application/usecases/
├── get-all-users.usecase.ts
└── get-all-products.usecase.ts
```

## Paso 4 - Crear Datasources

```
src/infrastructure/datasource/
├── user.datasource.ts
└── product.datasource.ts
```

## Paso 5 - Crear Repositorios Implementadores

```
src/infrastructure/repositories/
├── user.repository.impl.ts
└── product.repository.impl.ts
```

## Paso 6 - Implementar Web (Express – Framework Externo)

```
src/infrastructure/web/
├── config/
├── errors/
├── interfaces/
├── controllers/
├── routes/
└── server.ts
```

# Funcionamiento del Backend

## Ejecutar Backend
```
npm run start
```

## Urls Consumo
```
http://localhost:3000/api/docs
http://localhost:3000/api/users/{countUsers}
http://localhost:3000/api/products/{countProducts}
http://localhost:3000/api/reports/{countReports}
```
