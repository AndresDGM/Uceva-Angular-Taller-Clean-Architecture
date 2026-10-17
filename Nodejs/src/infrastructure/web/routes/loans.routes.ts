import { Router } from "express";
import { GetAllLoansUseCase } from "../../../application/usecases/get-all-loans.usecase";
import { GetLoanByIdUseCase } from "../../../application/usecases/get-loan-by-id.usecase";
import { LoanDatasource } from "../../datasources/loan.datasource";
import { LoanRepositoryImpl } from "../../repositories/loan.repository.impl";
import { LoansController } from "../controllers/loans.controller";

export class LoansRoutes {
  static get routes(): Router {
    const router = Router();
    const datasource = new LoanDatasource();
    const repository = new LoanRepositoryImpl(datasource);
    const getAllLoans = new GetAllLoansUseCase(repository);
    const getLoanById = new GetLoanByIdUseCase(repository);
    const controller = new LoansController(getAllLoans, getLoanById);

    /**
     * @openapi
     * /api/loans/{countLoans}:
     *   get:
     *     summary: Obtener listado de préstamos
     *     description: Retorna una lista de préstamos generados dinámicamente según la cantidad solicitada.
     *     tags:
     *       - Loans
     *     parameters:
     *       - in: path
     *         name: countLoans
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 10
     *         description: Cantidad de préstamos a generar
     *     responses:
     *       200:
     *         description: Lista de préstamos generados
     *         content:
     *           application/json:
     *             schema:
     *               type: array
     *               items:
     *                 $ref: '#/components/schemas/Loan'
     *       400:
     *         description: Parámetro inválido
     */
    router.get("/:countLoans", controller.getAllLoans);

    /**
     * @openapi
     * /api/loans/{id}:
     *   get:
     *     summary: Obtener un préstamo por ID
     *     description: Retorna un préstamo específico según el identificador proporcionado.
     *     tags:
     *       - Loans
     *     parameters:
     *       - in: path
     *         name: id
     *         required: true
     *         schema:
     *           type: integer
     *           minimum: 1
     *           example: 1
     *         description: Identificador único del préstamo
     *     responses:
     *       200:
     *         description: Préstamo encontrado
     *         content:
     *           application/json:
     *             schema:
     *               $ref: '#/components/schemas/Loan'
     *       404:
     *         description: Préstamo no encontrado
     */
    router.get("/:id", controller.getLoanById);

    return router;
  }
}
