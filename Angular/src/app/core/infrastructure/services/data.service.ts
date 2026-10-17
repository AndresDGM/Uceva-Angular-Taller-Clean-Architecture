import { HttpClient } from "@angular/common/http";
import { inject, Injectable } from "@angular/core";
import { fakerES as faker } from '@faker-js/faker';
import { Observable, of } from "rxjs";
import { environment } from "../../../../environments/environment";
import { Product, ProductCategory } from "../../domain/models/product.model";
import { Report, ReportStatus, ReportType } from "../../domain/models/report.model";
import { User, UserEngineering } from "../../domain/models/user.model";

/**
 * Servicio de infraestructura para obtención de datos.
 *
 * @remarks
 * Esta clase pertenece a la **capa de Infrastructure** y actúa
 * como un **Data Source** que provee información desde
 * diferentes orígenes:
 *
 * - Datos locales simulados (mocks)
 * - Backend Node.js mediante HTTP
 *
 * ❗ No contiene lógica de negocio.
 * ❗ No debe ser consumido directamente por los casos de uso.
 *
 * Es utilizado por repositorios o servicios de infraestructura
 * que adaptan los datos al dominio.
 */
@Injectable({ providedIn: 'root' })
export class DataService {
    /**
     * Cliente HTTP de Angular.
     *
     * @remarks
     * Se inyecta mediante la API `inject()` de Angular
     * para evitar el uso de constructores explícitos.
     */
    private httpClient = inject(HttpClient);
    /**
     * URL base del backend Node.js.
     *
     * @remarks
     * Se construye a partir de la configuración de entorno
     * definida en `environment`.
     */
    private nodeUrl = `${environment.baseUrlNode}/api`;
    /**
     * URL base del backend SpringBoot.
     *
     * @remarks
     * Se construye a partir de la configuración de entorno
     * definida en `environment`.
     */
    private springBootUrl = `${environment.baseUrlSpringBoot}/api`;


    /**
     * Obtiene el listado de USUARIOS desde datos locales simulados.
     *
     *
     * @param countUsers - Cantidad de usuarios a solicitar
     * @returns Observable que emite un arreglo de {@link User}
     */
    getAllUsersLocal(countUsers: number): Observable<User[]> {
        const users: User[] = [];
        const userEngineerings: UserEngineering[] = [
            'Sistemas',
            'Electronica',
            'Biomedica',
            'Industrial',
            'Ambiental',
        ];

        for(let i = 1 ; i <= countUsers ; i++){
            users.push({
                id: i,
                name: faker.person.firstName(),
                lastName: faker.person.lastName(),
                age: faker.number.int({ min: 18, max: 65 }),
                email: faker.internet.email(),
                engineering: faker.helpers.arrayElement(userEngineerings),
            })
        }

        return of(users);
    }

    /**
     * Obtiene el listado de productos desde datos locales simulados.
     *
     * @param countProducts - Cantidad de productos a solicitar
     * @returns Observable que emite un arreglo de {@link Product}
     */
    getAllProductsLocal(countProducts: number): Observable<Product[]> {
        const products: Product[] = [];
        const productCategories: ProductCategory[] = [
            'Carnes',
            'Frutas',
            'Lacteos',
            'Verduras'
        ];
        for(let i = 1; i <= countProducts ; i++){
            products.push({
                id: i,
                name: faker.commerce.productName(),
                price: Number(
                    faker.commerce.price({ min: 1, max: 100, dec: 2 })
                ),
                category: faker.helpers.arrayElement(productCategories),
            })
        }
        return of(products);
    }

    /**
     * Obtiene el listado de reportes desde datos locales simulados.
     *
     * @param countReports - Cantidad de reportes a solicitar
     * @returns Observable que emite un arreglo de {@link Report}
     */
    getAllReportsLocal(countReports: number): Observable<Report[]> {
        const reports: Report[] = [];
        const reportTypes: ReportType[] = [
            'Usuarios',
            'Productos',
            'Actividad',
            'Inventario',
        ];
        const reportStatuses: ReportStatus[] = [
            'Generado',
            'Pendiente',
            'Error',
        ];
        const reportTemplates = [
            {
                title: 'Resumen de usuarios',
                description: 'Usuarios registrados en el sistema',
            },
            {
                title: 'Inventario actual',
                description: 'Existencias disponibles por producto',
            },
            {
                title: 'Actividad reciente',
                description: 'Actividades realizadas por los usuarios',
            },
            {
                title: 'Productos por categoría',
                description: 'Cantidad de productos agrupados por categoría',
            },
            {
                title: 'Reporte de ventas',
                description: 'Ventas registradas durante el periodo seleccionado',
            },
            {
                title: 'Estado del inventario',
                description: 'Productos disponibles y agotados',
            },
            {
                title: 'Nuevos usuarios',
                description: 'Usuarios creados recientemente',
            },
            {
                title: 'Movimientos del sistema',
                description: 'Operaciones registradas en la plataforma',
            },
            {
                title: 'Resumen de productos',
                description: 'Catálogo de productos disponible',
            },
            {
                title: 'Reporte general',
                description: 'Consolidado general de información del sistema',
            },
        ];

        for (let i = 1; i <= countReports; i++) {
            const template = reportTemplates[(i - 1) % reportTemplates.length];
            reports.push({
                id: i,
                title: template.title,
                description: template.description,
                type: faker.helpers.arrayElement(reportTypes),
                status: faker.helpers.arrayElement(reportStatuses),
                generatedAt: faker.date.recent({ days: 30 }).toISOString(),
                totalRecords: faker.number.int({ min: 1, max: 500 }),
            });
        }

        return of(reports);
    }

    /**
     * Obtiene el listado de usuarios desde el backend Node.js.
     *
     * @remarks
     * Realiza una petición HTTP GET al endpoint
     * `/users/{countUsers}`.
     *
     * El número de usuarios a obtener se define
     * mediante el parámetro `countUsers`.
     *
     * @param countUsers - Cantidad de usuarios a solicitar
     * @returns Observable que emite un arreglo de {@link User}
     *
     * @example
     * ```ts
     * this.dataService.getAllUsersNode(10).subscribe(users => {
     *   console.log(users);
     * });
     * ```
     */
    getAllUsersNode(countUsers: number): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.nodeUrl}/users/${countUsers}`);
    }

    /**
     * Obtiene el listado de productos desde el backend Node.js.
     *
     * @remarks
     * Realiza una petición HTTP GET al endpoint
     * `/products/{countProducts}`.
     *
     * @param countProducts - Cantidad de productos a solicitar
     * @returns Observable que emite un arreglo de {@link Product}
     *
     * @example
     * ```ts
     * this.dataService.getAllProductsNode(5).subscribe(products => {
     *   console.log(products);
     * });
     * ```
     */
    getAllProductsNode(countProducts: number): Observable<Product[]> {
        return this.httpClient.get<Product[]>(`${this.nodeUrl}/products/${countProducts}`);
    }

    /** Obtiene reportes desde el backend Node.js. */
    getAllReportsNode(countReports: number): Observable<Report[]> {
        return this.httpClient.get<Report[]>(`${this.nodeUrl}/reports/${countReports}`);
    }

    /**
     * Obtiene el listado de usuarios desde el backend SpringBoot.
     *
     * @remarks
     * Realiza una petición HTTP GET al endpoint
     * `/users/{countUsers}`.
     *
     * El número de usuarios a obtener se define
     * mediante el parámetro `countUsers`.
     *
     * @param countUsers - Cantidad de usuarios a solicitar
     * @returns Observable que emite un arreglo de {@link User}
     *
     * @example
     * ```ts
     * this.dataService.getAllUsersSpringBoot(10).subscribe(users => {
     *   console.log(users);
     * });
     * ```
     */
    getAllUsersSpringBoot(countUsers: number): Observable<User[]> {
        return this.httpClient.get<User[]>(`${this.springBootUrl}/users/${countUsers}`);
    }

    /**
     * Obtiene el listado de productos desde el backend SpringBoot.
     *
     * @remarks
     * Realiza una petición HTTP GET al endpoint
     * `/products/{countProducts}`.
     *
     * @param countProducts - Cantidad de productos a solicitar
     * @returns Observable que emite un arreglo de {@link Product}
     *
     * @example
     * ```ts
     * this.dataService.getAllProductsSpringBoot(5).subscribe(products => {
     *   console.log(products);
     * });
     * ```
     */
    getAllProductsSpringBoot(countProducts: number): Observable<Product[]> {
        return this.httpClient.get<Product[]>(`${this.springBootUrl}/products/${countProducts}`);
    }

    /** Obtiene reportes desde el backend Spring Boot. */
    getAllReportsSpringBoot(countReports: number): Observable<Report[]> {
        return this.httpClient.get<Report[]>(`${this.springBootUrl}/reports/${countReports}`);
    }

}
