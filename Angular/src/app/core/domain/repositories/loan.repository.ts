import { Observable } from 'rxjs';
import { Loan } from '../models/loan.model';

/**
 * Contrato del repositorio de préstamos.
 *
 * @description
 * Define el contrato de acceso a datos para la entidad `Loan`
 * dentro de la **capa de dominio**, siguiendo los principios de
 * Clean Architecture.
 *
 * Permite desacoplar la lógica de negocio de los detalles de
 * implementación de la infraestructura.
 *
 * @remarks
 * Las implementaciones pueden variar (API REST Node.js, API REST
 * Spring Boot, almacenamiento local, mocks, etc.) sin afectar a
 * los casos de uso.
 *
 * @example
 * ```ts
 * // Inyección por contrato
 * constructor(private loanRepository: LoanRepository) {}
 * ```
 *
 * @architecture Clean Architecture
 * @layer Domain
 *
 * @see Loan
 */
export abstract class LoanRepository {

  /**
   * Obtiene el listado completo de préstamos.
   *
   * @param countLoans - Cantidad de préstamos a obtener
   * @returns {Observable<Loan[]>}
   * Observable que emite un arreglo de préstamos del dominio.
   *
   * @remarks
   * - No conoce la fuente de datos.
   * - No transforma entidades de presentación.
   * - Mantiene el dominio independiente de la infraestructura.
   */
  abstract getAll(countLoans: number): Observable<Loan[]>;
}
