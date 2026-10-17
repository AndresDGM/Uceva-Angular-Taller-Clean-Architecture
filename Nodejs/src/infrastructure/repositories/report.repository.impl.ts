import { Report } from "../../domain/models/report.model";
import { ReportRepository } from "../../domain/repositories/report.repository";
import { ReportDatasource } from "../datasources/report.datasource";

/**
 * Adaptador que conecta el contrato del dominio con la fuente de reportes.
 */
export class ReportRepositoryImpl extends ReportRepository {
  constructor(private datasource: ReportDatasource) {
    super();
  }

  /**
   * Obtiene reportes delegando la operación en el datasource.
   */
  getAll(countReports: number): Promise<Report[]> {
    return this.datasource.getAll(countReports);
  }
}
