# Clean Architecture en Angular

```
src/app
│
├── core
│   ├── domain
│   │   ├── models
│   │   │   ├── user.model.ts
│   │   │   ├── product.model.ts
│   │   │   └── report.model.ts
│   │   └── repositories
│   │       ├── user.repository.ts
│   │       ├── product.repository.ts
│   │       └── report.repository.ts
│   │
│   ├── application
│   │   └── use-cases
│   │       ├── get-all-users.usecase.ts
│   │       ├── get-user-by-id.usecase.ts
│   │       ├── get-all-products.usecase.ts
│   │       ├── get-product-by-id.usecase.ts
│   │       └── get-all-reports.usecase.ts
│   │
│   └── infrastructure
│       ├── services
│       │   └── data.service.ts
│       └── repositories
│           ├── user.repository.impl.ts
│           ├── product.repository.impl.ts
│           └── report.repository.impl.ts
│
├── presentation
│   ├── users
│   ├── products
│   └── reports
│
└── app.config.ts
```


## Paso 1 - Crear Modelos

```
src/app/core/domain/models/
├── user.model.ts
├── product.model.ts
└── report.model.ts
```

## Paso 2 - Crear Repositorios

```
src/app/core/domain/repositories/
├── user.repository.ts
├── product.repository.ts
└── report.repository.ts
```

## Paso 3 - Crear Casos de Uso

### User
```
src/app/core/application/usecases/user/
├── get-all-users.usecase.ts
└── get-user-by-id.usecase.ts
```

### Product
```
src/app/core/application/usecases/product/
├── get-all-products.usecase.ts
└── get-product-by-id.usecase.ts
```

### Report
```
src/app/core/application/usecases/
└── get-all-reports.usecase.ts
```

## Paso 4 - Crear Servicios


```
src/app/core/infrastructure/services/
└── data.service.ts
```

## Paso 5 - Crear Repositorios Implementadores

### Implementación para Consumo de Datos Local
```
src/app/core/infrastructure/repositories/local
├── user-local.repository.impl.ts
├── product-local.repository.impl.ts
└── report-local.repository.impl.ts
```

### Implementación para Consumo de Datos NodeJS
```
src/app/core/infrastructure/repositories/node
├── user-node.repository.impl.ts
├── product-node.repository.impl.ts
└── report-node.repository.impl.ts
```

### Implementación para Consumo de Datos Spring Boot
```
src/app/core/infrastructure/repositories/springboot-implementation/
├── user-springboot.repository.impl.ts
├── product-springboot.repository.impl.ts
└── report-springboot.repository.impl.ts
```

## Paso 6 - Agregar Providers con sus Implementadores

```
src/app/
└── app.config.ts
```

El backend activo se selecciona en `Angular/src/environments/environment.ts`
mediante `backend`: `local`, `node` o `springboot`.

El modelo `Report` contiene `id`, `title`, `description`, `type`, `status`,
`generatedAt` y `totalRecords`. La ruta de presentación es `/reports`.

# Funcionamiento del Frontend

## Ejecutar Frontend
```
npm run start
```

## Pruebas y documentación

```
npm run test
npm run test:coverage
npm run compodoc
```

## Urls Consumo

### Frontend
```
http://localhost:4200
```

### Backend NodeJS
```
http://localhost:3000/api/docs
http://localhost:3000/api/users/{countUsers}
http://localhost:3000/api/products/{countProducts}
http://localhost:3000/api/reports/{countReports}
http://localhost:3000/api/books/{countBooks}
```

### Backend SpringBoot
```
http://localhost:8080/api/swagger-ui/index.html
http://localhost:8080/api/users/{countUsers}
http://localhost:8080/api/products/{countProducts}
http://localhost:8080/api/reports/{countReports}
http://localhost:8080/api/books/{countBooks}
```
