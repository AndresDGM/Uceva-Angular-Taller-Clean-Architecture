/**
 * Interfaz que representa un préstamo del sistema.
 *
 * Contiene la información básica necesaria para mostrar un préstamo
 * en la tabla o en cualquier componente de listado.
 *
 * @remarks
 * Cada préstamo debe tener un `id` único, identificadores del libro y
 * usuario, fechas de préstamo y devolución, y el estado del préstamo.
 *
 * @example
 * ```ts
 * const prestamo: Loan = {
 *   id: 1,
 *   bookId: 1,
 *   userId: 1,
 *   loanDate: '2025-01-01',
 *   returnDate: '2025-01-15',
 *   status: 'ACTIVE'
 * };
 * ```
 */
export interface Loan {
  /** Identificador único del préstamo */
  id: number;

  /** Identificador del libro prestado */
  bookId: number;

  /** Identificador del usuario que realiza el préstamo */
  userId: number;

  /** Fecha de inicio del préstamo */
  loanDate: string;

  /** Fecha estimada de devolución */
  returnDate: string;

  /** Estado del préstamo */
  status: LoanStatus;
}

/**
 * Tipo que representa el estado de un préstamo.
 *
 * @remarks
 * Este tipo restringe los estados a los valores predefinidos:
 * - 'ACTIVE' - Préstamo activo
 * - 'RETURNED' - Préstamo devuelto
 * - 'OVERDUE' - Préstamo vencido
 *
 * @example
 * ```ts
 * const estado: LoanStatus = 'ACTIVE';
 * ```
 */
export type LoanStatus = 'ACTIVE' | 'RETURNED' | 'OVERDUE';
