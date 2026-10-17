# Clean Architecture en SpringBoot

```
src/main/java/uceva/cleanarchitecture
│
├── domain
│   ├── entity/
│   │   ├── User.java
│   │   └── Product.java
│   │   ├── Book.java
│   │   ├── Genre.java
│   │   └── Language.java
│   │
│   └── repository/
│       ├── UserRepository.java
│       └── ProductRepository.java
│
├── application
│   └── usecase/
│       ├── GetAllUsersUseCase.java
│       ├── GetAllProductsUseCase.java
│       └── GetAllBooksUseCase.java
│
├── infrastructure
│   ├── controller/
│   │   ├── UserController.java
│   │   ├── ProductController.java
│   │   └── BookController.java
│   │
│   ├── repository/
│   │   ├── UserRepositoryImpl.java
│   │   ├── ProductRepositoryImpl.java
│   │   └── BookRepositoryImpl.java
│   │
│   └── datasource/
│       ├── UserDatasource.java
│       ├── ProductDatasource.java
│       └── BookDatasource.java
│
├── config
│   ├── AppConfig.java
│   └── SwaggerConfig.java
│
└── UcevaSprinBootTallerCleanArchitectureApplication.java
```


## Paso 1 - Crear Entidades

```
src/main/java/uceva/cleanarchitecture/domain/entity
├── User.java
└── Product.java
```

## Paso 2 - Crear Repositorios

```
src/main/java/uceva/cleanarchitecture/domain/repositories/
├── UserRepository.java
└── ProductRepository.java
```

## Paso 3 - Crear Casos de Uso

```
src/main/java/uceva/cleanarchitecture/application/usecase/
├── GetAllUsersUseCase.java
└── GetAllProductsUseCase.java
```

## Paso 4 - Crear Controllers


```
src/main/java/uceva/cleanarchitecture/infrastructure/controllers/
├── UserController.java
└── ProductController.java
```

## Paso 5 - Crear Repositorios Implementadores

```
src/main/java/uceva/cleanarchitecture/infrastructure/repository/
├── UserRepositoryImpl.java
└── ProductRepositoryImpl.java
```

## Paso 6 - Agregar la Inyección de Dependencias

```
src/main/java/uceva/cleanarchitecture/config/
└── AppConfig.java
```

# Funcionamiento del Backend

## Urls Consumo
```
http://localhost:8080/api/swagger-ui/index.html
http://localhost:8080/api/users/{countUsers}
http://localhost:8080/api/products/{countProducts}
http://localhost:8080/api/books/{countBooks}
```

El endpoint `books` devuelve los atributos `id`, `title`, `authorId`, `isbn`,
`publicationYear`, `publisher`, `pages`, `description`, `language`, `genre`,
`coverImageUrl` y `pdfUrl`, manteniendo el contrato consumido por Angular y Node.js.

## Ejecución

Requiere Java 25. Desde este directorio:

```bash
JAVA_HOME=/usr/lib/jvm/java-25-openjdk bash gradlew bootRun
```

Para ejecutar las pruebas:

```bash
JAVA_HOME=/usr/lib/jvm/java-25-openjdk bash gradlew test
```
