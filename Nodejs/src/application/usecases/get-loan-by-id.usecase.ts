import { Loan } from "../../domain/models/loan.model";
import { LoanRepository } from "../../domain/repositories/loan.repository";

/**
 * Caso de uso para obtener un préstamo por su identificador.
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
export class GetLoanByIdUseCase {
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
   * Obtiene un préstamo específico por su ID
   * utilizando el repositorio del dominio.
   *
   * En este nivel se pueden implementar:
   * - Validaciones de entrada
   * - Reglas de negocio de la aplicación
   *
   * @param id - Identificador único del préstamo
   * @returns Promesa que resuelve el {@link Loan} encontrado
   *
   * @example
   * ```ts
   * const useCase = new GetLoanByIdUseCase(loanRepository);
   * const loan = await useCase.execute(1);
   * ```
   */
  execute(id: number): Promise<Loan> {
    return this.loanRepository.getById(id);
  }
}
