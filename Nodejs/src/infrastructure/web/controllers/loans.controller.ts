import { Request, Response } from "express";
import { GetAllLoansUseCase } from "../../../application/usecases/get-all-loans.usecase";
import { GetLoanByIdUseCase } from "../../../application/usecases/get-loan-by-id.usecase";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP para operaciones relacionadas con préstamos.
 *
 * @remarks
 * Forma parte de la **capa de Frameworks & Drivers**
 * y actúa como un **adaptador HTTP** entre Express
 * y la capa de Application.
 *
 * Su función es:
 * - Interpretar la request HTTP
 * - Delegar la ejecución al caso de uso
 * - Enviar la respuesta HTTP adecuada
 *
 * @see {@link GetAllLoansUseCase}
 * @see {@link GetLoanByIdUseCase}
 */
export class LoansController {

  /**
   * Crea una nueva instancia del controlador de préstamos.
   *
   * @param getAllLoansUseCase - Caso de uso encargado
   * de obtener el listado de préstamos
   * @param getLoanByIdUseCase - Caso de uso encargado
   * de obtener un préstamo por su ID
   */
  constructor(
    private getAllLoansUseCase: GetAllLoansUseCase,
    private getLoanByIdUseCase: GetLoanByIdUseCase
  ){}

  /**
   * Maneja la petición HTTP para obtener préstamos.
   *
   * @remarks
   * Obtiene el parámetro `countLoans` desde la request,
   * ejecuta el caso de uso correspondiente y devuelve
   * la respuesta en formato JSON.
   *
   * El manejo de errores se delega al componente
   * {@link HandleError}.
   *
   * El retardo artificial (`setTimeout`) se utiliza
   * únicamente con fines demostrativos.
   *
   * @param req - Objeto Request de Express
   * @param res - Objeto Response de Express
   */
  getAllLoans = (req: Request, res: Response): void => {
    const { countLoans } = req.params;

    setTimeout(() => {
      this.getAllLoansUseCase
      .execute(Number(countLoans))
      .then((loans) => res.status(201).json(loans))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };

  /**
   * Maneja la petición HTTP para obtener un préstamo por ID.
   *
   * @remarks
   * Obtiene el parámetro `id` desde la request,
   * ejecuta el caso de uso correspondiente y devuelve
   * la respuesta en formato JSON.
   *
   * El manejo de errores se delega al componente
   * {@link HandleError}.
   *
   * @param req - Objeto Request de Express
   * @param res - Objeto Response de Express
   */
  getLoanById = (req: Request, res: Response): void => {
    const { id } = req.params;

    setTimeout(() => {
      this.getLoanByIdUseCase
      .execute(Number(id))
      .then((loan) => res.status(200).json(loan))
      .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
