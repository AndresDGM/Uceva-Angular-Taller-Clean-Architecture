import { Router } from "express";
import { GetAllReportsUseCase } from "../../../application/usecases/get-all-reports.usecase";
import { ReportDatasource } from "../../datasources/report.datasource";
import { ReportRepositoryImpl } from "../../repositories/report.repository.impl";
import { ReportsController } from "../controllers/reports.controller";

/**
 * Rutas HTTP del módulo de reportes.
 */
export class ReportsRoutes {
  static get routes(): Router {
    const router = Router();
    const repository = new ReportRepositoryImpl(new ReportDatasource());
    const getAllReports = new GetAllReportsUseCase(repository);
    const controller = new ReportsController(getAllReports);

    /**
     * @openapi
     * /api/reports/{countReports}:
     *   get:
     *     summary: Obtener listado de reportes
     *     description: Retorna reportes generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Reports
     *     parameters:
     *       - in: path
     *         name: countReports
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de reportes a generar
     *     responses:
     *       201:
     *         description: Lista de reportes generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Report'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countReports", controller.getAllReports);

    return router;
  }
}
