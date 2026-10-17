import { registerLocaleData } from '@angular/common';
import { provideHttpClient } from '@angular/common/http';
import localeEsCo from '@angular/common/locales/es-CO';
import { ApplicationConfig, LOCALE_ID, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { ProductRepository } from './core/domain/repositories/product.repository';
import { UserRepository } from './core/domain/repositories/user.repository';
import { ProductNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/product-node.repository.impl';
import { UserNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/user-node.repository.impl';
import { UserSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/user-springboot.repository.impl';
import { ProductSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/product-springboot.repository.impl';
import { UserLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/user-local.repository.impl';
import { ProductLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/product-local.repository.impl';
import { BookRepository } from './core/domain/repositories/book.repository';
import { LoanRepository } from './core/domain/repositories/loan.repository';
import { BookLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/book-local.repository.impl';
import { LoanLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/loan-local.repository.impl';
import { BookNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/book-node.repository.impl';
import { LoanNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/loan-node.repository.impl';
import { BookSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/book-springboot.repository.impl';
import { LoanSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/loan-springboot.repository.impl';
import { environment } from '../environments/environment';

const repositoryImplementations = {
  local: {
    user: UserLocalRepositoryImpl,
    product: ProductLocalRepositoryImpl,
    book: BookLocalRepositoryImpl,
    loan: LoanLocalRepositoryImpl,
  },
  node: {
    user: UserNodeRepositoryImpl,
    product: ProductNodeRepositoryImpl,
    book: BookNodeRepositoryImpl,
    loan: LoanNodeRepositoryImpl,
  },
  springboot: {
    user: UserSpringBootRepositoryImpl,
    product: ProductSpringBootRepositoryImpl,
    book: BookSpringBootRepositoryImpl,
    loan: LoanSpringBootRepositoryImpl,
  },
} as const;

const selectedRepositories = repositoryImplementations[environment.backend];
import { ReportLocalRepositoryImpl } from './core/infrastructure/repositories/local-implementation/report-local.repository.impl';
import { ReportNodeRepositoryImpl } from './core/infrastructure/repositories/node-implementation/report-node.repository.impl';
import { ReportSpringBootRepositoryImpl } from './core/infrastructure/repositories/springboot-implementation/report-springboot.repository.impl';
import { ReportRepository } from './core/domain/repositories/report.repository';
import { selectBackendRepository } from './core/infrastructure/providers/backend.provider';

registerLocaleData(localeEsCo);

/**
 * Configuración principal de la aplicación Angular.
 *
 * @remarks
 * Este objeto define los *providers* globales utilizados
 * en el arranque de la aplicación mediante la API
 * `bootstrapApplication`.
 *
 * Incluye:
 * - Manejo global de errores del navegador
 * - Configuración de detección de cambios
 * - Sistema de enrutamiento
 * - Cliente HTTP con interceptores
 *
 * @see {@link bootstrapApplication}
 */
export const appConfig: ApplicationConfig = {

  /**
   * Proveedores globales de la aplicación.
   *
   * @remarks
   * Se registran servicios y configuraciones esenciales
   * que estarán disponibles en toda la aplicación.
   */
  providers: [

    { provide: UserRepository, useClass: selectedRepositories.user },
    { provide: ProductRepository, useClass: selectedRepositories.product },
    { provide: BookRepository, useClass: selectedRepositories.book },
    { provide: LoanRepository, useClass: selectedRepositories.loan },
    { provide: LOCALE_ID, useValue: 'es-CO' },

    UserLocalRepositoryImpl,
    UserNodeRepositoryImpl,
    UserSpringBootRepositoryImpl,
    ProductLocalRepositoryImpl,
    ProductNodeRepositoryImpl,
    ProductSpringBootRepositoryImpl,
    ReportLocalRepositoryImpl,
    ReportNodeRepositoryImpl,
    ReportSpringBootRepositoryImpl,
    BookLocalRepositoryImpl,
    BookNodeRepositoryImpl,
    BookSpringBootRepositoryImpl,

    // La implementación se selecciona desde environment.backend.
    {
      provide: UserRepository,
      useFactory: (
        localRepository: UserRepository,
        nodeRepository: UserRepository,
        springBootRepository: UserRepository,
      ) => selectBackendRepository(
        environment.backend,
        localRepository,
        nodeRepository,
        springBootRepository,
      ),
      deps: [UserLocalRepositoryImpl, UserNodeRepositoryImpl, UserSpringBootRepositoryImpl],
    },
    {
      provide: ProductRepository,
      useFactory: (
        localRepository: ProductRepository,
        nodeRepository: ProductRepository,
        springBootRepository: ProductRepository,
      ) => selectBackendRepository(
        environment.backend,
        localRepository,
        nodeRepository,
        springBootRepository,
      ),
      deps: [ProductLocalRepositoryImpl, ProductNodeRepositoryImpl, ProductSpringBootRepositoryImpl],
    },
    {
      provide: ReportRepository,
      useFactory: (
        localRepository: ReportRepository,
        nodeRepository: ReportRepository,
        springBootRepository: ReportRepository,
      ) => selectBackendRepository(
        environment.backend,
        localRepository,
        nodeRepository,
        springBootRepository,
      ),
      deps: [ReportLocalRepositoryImpl, ReportNodeRepositoryImpl, ReportSpringBootRepositoryImpl],
    },
    {
      provide: BookRepository,
      useFactory: (
        localRepository: BookRepository,
        nodeRepository: BookRepository,
        springBootRepository: BookRepository,
      ) => selectBackendRepository(
        environment.backend,
        localRepository,
        nodeRepository,
        springBootRepository,
      ),
      deps: [BookLocalRepositoryImpl, BookNodeRepositoryImpl, BookSpringBootRepositoryImpl],
    },

    /**
     * Proveedor de listeners globales de errores del navegador.
     *
     * @remarks
     * Captura errores no controlados y eventos globales,
     * permitiendo un manejo centralizado de excepciones.
     */
    provideBrowserGlobalErrorListeners(),

    /**
     * Configuración de la detección de cambios basada en Zone.js.
     *
     * @remarks
     * `eventCoalescing: true` agrupa múltiples eventos en un
     * solo ciclo de detección de cambios, mejorando
     * el rendimiento de la aplicación.
     */
    provideZoneChangeDetection({ eventCoalescing: true }),

    /**
     * Proveedor del sistema de enrutamiento.
     *
     * @remarks
     * Registra las rutas definidas en `routes`
     * para la navegación de la aplicación.
     *
     * @see {@link routes}
     */
    provideRouter(routes),

    provideHttpClient(),
  ]
};
