# Clean Architecture en SpringBoot

```
src/main/java/uceva/cleanarchitecture
│
├── domain
│   ├── entity/
│   │   ├── User.java
│   │   ├── Product.java
│   │   └── Report.java
│   │
│   └── repository/
│       ├── UserRepository.java
│       ├── ProductRepository.java
│       └── ReportRepository.java
│
├── application
│   └── usecase/
│       ├── GetAllUsersUseCase.java
│       ├── GetAllProductsUseCase.java
│       └── GetAllReportsUseCase.java
│
├── infrastructure
│   ├── controller/
│   │   ├── UserController.java
│   │   ├── ProductController.java
│   │   └── ReportController.java
│   │
│   ├── repository/
│   │   ├── UserRepositoryImpl.java
│   │   ├── ProductRepositoryImpl.java
│   │   └── ReportRepositoryImpl.java
│   │
│   └── datasource/
│       ├── UserDatasource.java
│       ├── ProductDatasource.java
│       └── ReportDatasource.java
│
├── config
│   └── AppConfig.java
│
└── UcevaSprinBootTallerCleanArchitectureApplication.java
```

## Módulo de reportes

El modelo `Report` mantiene el mismo contrato JSON que el backend Node.js y
contiene los atributos que se muestran en la tabla:

- `id`: identificador numérico.
- `title`: título del reporte.
- `description`: descripción breve.
- `type`: `Usuarios`, `Productos`, `Actividad` o `Inventario`.
- `status`: `Generado`, `Pendiente` o `Error`.
- `generatedAt`: fecha de generación en formato ISO 8601.
- `totalRecords`: cantidad de registros incluidos.


## Paso 1 - Crear Entidades

```
src/main/java/uceva/cleanarchitecture/domain/entity
├── User.java
├── Product.java
└── Report.java
```

## Paso 2 - Crear Repositorios

```
src/main/java/uceva/cleanarchitecture/domain/repositories/
├── UserRepository.java
├── ProductRepository.java
└── ReportRepository.java
```

## Paso 3 - Crear Casos de Uso

```
src/main/java/uceva/cleanarchitecture/application/usecase/
├── GetAllUsersUseCase.java
├── GetAllProductsUseCase.java
└── GetAllReportsUseCase.java
```

## Paso 4 - Crear Controllers


```
src/main/java/uceva/cleanarchitecture/infrastructure/controllers/
├── UserController.java
├── ProductController.java
└── ReportController.java
```

## Paso 5 - Crear Repositorios Implementadores

```
src/main/java/uceva/cleanarchitecture/infrastructure/repository/
├── UserRepositoryImpl.java
├── ProductRepositoryImpl.java
└── ReportRepositoryImpl.java
```

## Paso 6 - Agregar la Inyección de Dependencias

```
src/main/java/uceva/cleanarchitecture/config/
└── AppConfig.java
```

# Funcionamiento del Backend

## Urls Consumo
```
http://localhost:3000/api/swagger-ui/index.html
http://localhost:8080/api/users/{countUsers}
http://localhost:8080/api/products/{countProducts}
http://localhost:8080/api/reports/{countReports}
http://localhost:8080/api/books/{countBooks}
```
