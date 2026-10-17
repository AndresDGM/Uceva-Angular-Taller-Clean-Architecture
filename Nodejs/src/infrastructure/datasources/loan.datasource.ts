import { faker } from '@faker-js/faker';
import { Loan, LoanStatus } from "../../domain/models/loan.model";

/**
 * Datasource encargado de generar préstamos simulados.
 *
 * @remarks
 * Forma parte de la **capa de Infrastructure** y actúa como
 * una fuente de datos temporal para desarrollo y pruebas.
 *
 * Utiliza la librería {@link https://www.npmjs.com/package/@faker-js/faker | faker}
 * para generar información aleatoria de préstamos.
 *
 * ❗ No contiene reglas de negocio.
 * ❗ No debe ser consumido directamente por casos de uso.
 *
 * Es utilizado por `LoanRepositoryImpl`.
 */
export class LoanDatasource {

  /**
   * Estados disponibles para los préstamos simulados.
   *
   * @remarks
   * Se selecciona un estado de forma aleatoria
   * al generar cada préstamo.
   */
  private LoanStatuses: LoanStatus[] = [
    'ACTIVE',
    'RETURNED',
    'OVERDUE',
  ];

  /**
   * Obtiene una lista de préstamos simulados.
   *
   * @remarks
   * Genera dinámicamente una cantidad específica de préstamos
   * con datos aleatorios.
   *
   * @param countLoans - Cantidad de préstamos a generar
   * @returns Promesa que resuelve un arreglo de {@link Loan}
   *
   * @example
   * ```ts
   * const datasource = new LoanDatasource();
   * const loans = await datasource.getAll(5);
   * ```
   */
  async getAll(countLoans: number): Promise<Loan[]> {
    const loans: Promise<Loan>[] = [];

    for (let i = 1; i <= countLoans; i++) {
      loans.push(this.generateLoan(i));
    }

    return Promise.all(loans);
  }

  /**
   * Genera un préstamo individual con datos simulados.
   *
   * @remarks
   * Método interno utilizado únicamente por el datasource
   * para construir préstamos aleatorios.
   *
   * @param id - Identificador único del préstamo
   * @returns Promesa que resuelve un {@link Loan}
   */
  private generateLoan(id: number): Promise<Loan> {
    return Promise.resolve({
      id,
      bookId: faker.number.int({ min: 1, max: 100 }),
      userId: faker.number.int({ min: 1, max: 100 }),
      loanDate: (faker.date.recent() ?? new Date()).toISOString().split('T')[0]!,
      returnDate: (faker.date.soon({ days: 15 }) ?? new Date()).toISOString().split('T')[0]!,
      status: faker.helpers.arrayElement(this.LoanStatuses),
    });
  }

}
