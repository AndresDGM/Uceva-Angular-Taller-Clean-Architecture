import { inject, Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoanRepository } from "../../../domain/repositories/loan.repository";
import { DataService } from "../../services/data.service";
import { Loan } from "../../../domain/models/loan.model";

/**
 * Implementación concreta del repositorio de préstamos (Spring Boot).
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y cumple
 * el rol de **Adapter** entre el dominio y la fuente de datos.
 *
 * Implementa el contrato {@link LoanRepository}
 * utilizando {@link DataService} como datasource.
 *
 * Este patrón permite:
 * - Desacoplar el dominio de detalles técnicos
 * - Sustituir la fuente de datos sin afectar casos de uso
 * - Facilitar pruebas unitarias mediante mocks
 *
 * @see {@link LoanRepository}
 * @see {@link DataService}
 */
@Injectable()
export class LoanSpringBootRepositoryImpl extends LoanRepository {

    /**
     * Datasource encargado de obtener los datos de préstamos.
     *
     * @remarks
     * Se inyecta mediante la API `inject()` de Angular,
     * recomendada en arquitecturas modernas y código standalone.
     */
    private dataService = inject(DataService);

    /**
     * Obtiene el listado completo de préstamos desde Spring Boot.
     *
     * @remarks
     * Implementa el método definido en
     * {@link LoanRepository#getAll}.
     *
     * @param countLoans - Cantidad de préstamos a solicitar
     * @returns Observable que emite un arreglo de {@link Loan}
     */
    getAll(countLoans: number): Observable<Loan[]> {
        return this.dataService.getAllLoansSpringBoot(countLoans);
    }

}
