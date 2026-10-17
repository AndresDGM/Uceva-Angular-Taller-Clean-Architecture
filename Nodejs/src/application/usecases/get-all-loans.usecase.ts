import { Loan } from "../../domain/models/loan.model";
import { LoanRepository } from "../../domain/repositories/loan.repository";

/**
 * Caso de uso para obtener un listado de préstamos.
 *
 * @remarks
 * Forma parte de la **capa de Application** y define
 * una acción concreta que la aplicación puede ejecutar.
 *
 * Este caso de uso:
 * - Orquesta el acceso a datos
 * - Aplica reglas de negocio si es necesario
 * - Aísla la lógica de la UI y la infraestructura
 *
 * Depende únicamente del contrato
 * {@link LoanRepository}.
 *
 * @see {@link LoanRepository}
 * @see {@link Loan}
 */
export class GetAllLoansUseCase {
  /**
   * Crea una nueva instancia del caso de uso.
   *
   * @param loanRepository - Repositorio de préstamos
   * utilizado para acceder a la información
   */
  constructor(private loanRepository: LoanRepository) {}

  /**
   * Ejecuta el caso de uso.
   *
   * @remarks
   * Obtiene una cantidad específica de préstamos
   * utilizando el repositorio del dominio.
   *
   * En este nivel se pueden implementar:
   * - Validaciones de entrada
   * - Reglas de negocio de la aplicación
   * - Composición de múltiples operaciones
   *
   * @param countLoans - Cantidad de préstamos a obtener
   * @returns Promesa que resuelve un arreglo de {@link Loan}
   *
   * @example
   * ```ts
   * const useCase = new GetAllLoansUseCase(loanRepository);
   * const loans = await useCase.execute(5);
   * ```
   */
  execute(countLoans: number): Promise<Loan[]> {
    return this.loanRepository.getAll(countLoans);
  }
}
