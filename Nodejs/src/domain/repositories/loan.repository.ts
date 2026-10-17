import { Loan } from "../models/loan.model";

/**
 * Contrato del repositorio de préstamos.
 *
 * @remarks
 * Forma parte de la **capa de Domain** y representa
 * una abstracción de acceso a datos de préstamos.
 *
 * Define qué operaciones están disponibles para
 * los casos de uso, sin exponer detalles técnicos
 * ni decisiones de infraestructura.
 *
 * Las implementaciones concretas viven en la capa
 * de *Infrastructure*.
 *
 * @see {@link Loan}
 */
export abstract class LoanRepository {
  /**
   * Obtiene un listado de préstamos.
   *
   * @remarks
   * Representa una operación del dominio relacionada
   * con la obtención de préstamos.
   *
   * No define:
   * - Cómo se obtienen los datos
   * - Desde qué fuente provienen
   * - Qué tecnología se utiliza
   *
   * @param countLoans - Cantidad de préstamos a obtener
   * @returns Promesa que resuelve un arreglo de {@link Loan}
   */
  abstract getAll(countLoans: number): Promise<Loan[]>;

  /**
   * Obtiene un préstamo por su identificador único.
   *
   * @remarks
   * Representa una operación del dominio relacionada
   * con la búsqueda de un préstamo específico.
   *
   * @param id - Identificador único del préstamo
   * @returns Promesa que resuelve el {@link Loan} encontrado
   */
  abstract getById(id: number): Promise<Loan>;
}
