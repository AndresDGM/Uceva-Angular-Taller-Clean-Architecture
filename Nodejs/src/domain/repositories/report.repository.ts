import { Report } from "../models/report.model";

/**
 * Contrato del repositorio de reportes.
 *
 * El dominio solo conoce la operación necesaria para consultar reportes;
 * la fuente concreta de los datos se define en Infrastructure.
 */
export abstract class ReportRepository {
  /**
   * Obtiene una cantidad determinada de reportes.
   *
   * @param countReports Cantidad de reportes a obtener
   * @returns Promesa con los reportes solicitados
   */
  abstract getAll(countReports: number): Promise<Report[]>;
}
