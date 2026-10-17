import { Report } from "../../domain/models/report.model";
import { ReportRepository } from "../../domain/repositories/report.repository";

/**
 * Caso de uso para obtener el listado de reportes.
 */
export class GetAllReportsUseCase {
  constructor(private reportRepository: ReportRepository) {}

  /**
   * Ejecuta la consulta de reportes a través del contrato del dominio.
   *
   * @param countReports Cantidad de reportes solicitada
   * @returns Promesa con los reportes obtenidos
   */
  execute(countReports: number): Promise<Report[]> {
    return this.reportRepository.getAll(countReports);
  }
}
