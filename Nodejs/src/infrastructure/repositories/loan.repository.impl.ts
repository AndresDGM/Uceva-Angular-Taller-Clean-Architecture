import { Loan } from "../../domain/models/loan.model";
import { LoanRepository } from "../../domain/repositories/loan.repository";
import { LoanDatasource } from "../datasources/loan.datasource";

/**
 * Implementación concreta del repositorio de préstamos.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y cumple
 * el rol de **adaptador** entre el dominio y la fuente de datos.
 *
 * Implementa el contrato {@link LoanRepository}
 * utilizando {@link LoanDatasource} como origen de datos.
 *
 * Este diseño permite:
 * - Desacoplar el dominio de detalles técnicos
 * - Sustituir la fuente de datos sin afectar a los casos de uso
 * - Facilitar pruebas unitarias mediante mocks
 *
 * @see {@link LoanRepository}
 * @see {@link LoanDatasource}
 */
export class LoanRepositoryImpl extends LoanRepository {

  /**
   * Crea una nueva instancia del repositorio de préstamos.
   *
   * @param datasource - Fuente de datos encargada
   * de generar u obtener los préstamos
   */
  constructor(private datasource: LoanDatasource) {
    super();
  }

  /**
   * Obtiene el listado de préstamos.
   *
   * @remarks
   * Implementa el método definido en
   * {@link LoanRepository#getAll}.
   *
   * En esta capa se pueden aplicar:
   * - Transformaciones de datos
   * - Validaciones técnicas
   * - Manejo de errores
   *
   * @param countLoans - Cantidad de préstamos a obtener
   * @returns Promesa que resuelve un arreglo de {@link Loan}
   *
   * @example
   * ```ts
   * const repository = new LoanRepositoryImpl(new LoanDatasource());
   * const loans = await repository.getAll(5);
   * ```
   */
  getAll(countLoans: number): Promise<Loan[]> {
    return this.datasource.getAll(countLoans);
  }

  /**
   * Obtiene un préstamo por su identificador único.
   *
   * @remarks
   * Implementa el método definido en
   * {@link LoanRepository#getById}.
   *
   * @param id - Identificador único del préstamo
   * @returns Promesa que resuelve el {@link Loan} encontrado
   */
  getById(id: number): Promise<Loan> {
    return this.datasource.getAll(1)
      .then((loans) => loans.find((loan) => loan.id === id) || null as unknown as Loan);
  }
}
