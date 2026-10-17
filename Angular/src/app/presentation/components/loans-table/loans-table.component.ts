import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Loan, LoanStatus } from '../../../core/domain/models/loan.model';

/**
 * Componente de tabla de préstamos.
 *
 * Se utiliza para mostrar un listado de préstamos en una tabla,
 * mostrando información como id, identificador de libro, identificador
 * de usuario, fechas de préstamo y devolución, y el estado del préstamo.
 *
 * @remarks
 * Este componente recibe los préstamos desde un componente padre
 * a través del Input `loans` y utiliza `CommonModule` para las
 * directivas de renderizado condicional y de fecha.
 *
 * @example
 * ```html
 * <app-loans-table [loans]="loansList"></app-loans-table>
 * ```
 */
@Component({
  selector: 'app-loans-table',
  templateUrl: './loans-table.component.html',
  imports: [CommonModule],
})
export class LoansTableComponent {
  /**
   * Listado de préstamos que se mostrarán en la tabla.
   * @type {Loan[]}
   * @remarks
   * Este Input permite pasar un array de préstamos desde un componente padre.
   * Cada préstamo debe cumplir la interfaz `Loan`.
   */
  @Input() loans: Loan[] = [];

  /**
   * Mapea el estado del préstamo a una clase de badge de Bootstrap.
   *
   * @param status - Estado del préstamo
   * @returns Clase CSS de Bootstrap para el badge
   */
  getBadgeClass(status: LoanStatus): string {
    const badgeMap: Record<LoanStatus, string> = {
      ACTIVE: 'bg-success text-white',
      RETURNED: 'bg-primary text-white',
      OVERDUE: 'bg-danger text-white',
    };
    return badgeMap[status] ?? 'bg-secondary text-white';
  }
}
