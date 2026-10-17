import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Loan } from '../../domain/models/loan.model';
import { LoanRepository } from '../../domain/repositories/loan.repository';

/**
 * Caso de uso para obtener el listado completo de préstamos.
 *
 * @description
 * Este caso de uso pertenece a la **capa de aplicación** y encapsula
 * la acción de negocio encargada de recuperar los préstamos del sistema.
 *
 * Desacopla la capa de presentación de los detalles de acceso a datos
 * mediante el contrato `LoanRepository`.
 *
 * @remarks
 * - No depende de implementaciones concretas.
 * - No maneja estados de UI.
 * - Propaga errores al consumidor.
 *
 * @example
 * ```ts
 * this.getAllLoansUseCase.execute(5).subscribe(loans => {
 *   // manejo de resultados
 * });
 * ```
 *
 * @architecture Clean Architecture
 * @layer Application
 *
 * @see Loan
 * @see LoanRepository
 */
@Injectable()
export class GetAllLoansUseCase {

  /**
   * Repositorio de préstamos inyectado por contrato.
   *
   * @remarks
   * La implementación concreta se define en la capa de infraestructura.
   */
  private loanRepository = inject(LoanRepository);

  /**
   * Ejecuta el caso de uso.
   *
   * @param countLoans - Cantidad de préstamos a obtener
   * @returns {Observable<Loan[]>}
   * Observable que emite el listado completo de préstamos del dominio.
   *
   * @remarks
   * - Delegación directa al repositorio.
   * - Mantiene el dominio independiente de la infraestructura.
   */
  execute(countLoans: number): Observable<Loan[]> {
    return this.loanRepository.getAll(countLoans);
  }
}
