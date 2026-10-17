import { Request, Response } from "express";
import { GetAllReportsUseCase } from "../../../application/usecases/get-all-reports.usecase";
import { CustomError } from "../erros/custom.error";
import { HandleError } from "../erros/handle.error";

/**
 * Controlador HTTP para las consultas de reportes.
 */
export class ReportsController {
  constructor(private getAllReportsUseCase: GetAllReportsUseCase) {}

  /**
   * Obtiene la cantidad de reportes indicada en la URL.
   */
  getAllReports = (req: Request, res: Response): void => {
    const countReports = Number(req.params.countReports);

    if (!Number.isInteger(countReports) || countReports < 1) {
      HandleError.error(
        CustomError.badRequest("countReports debe ser un entero mayor que cero"),
        res,
      );
      return;
    }

    setTimeout(() => {
      this.getAllReportsUseCase
        .execute(countReports)
        .then((reports) => res.status(201).json(reports))
        .catch((error) => HandleError.error(error, res));
    }, 3000);
  };
}
