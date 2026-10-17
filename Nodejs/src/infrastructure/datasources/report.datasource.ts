import { faker } from '@faker-js/faker';
import {
  Report,
  ReportStatus,
  ReportType,
} from "../../domain/models/report.model";

/**
 * Fuente de datos temporal para generar reportes de ejemplo.
 *
 * Al igual que las fuentes de usuarios y productos existentes, esta clase
 * facilita la integración del módulo mientras no exista una base de datos.
 */
export class ReportDatasource {
  private readonly reportTypes: ReportType[] = [
    'Usuarios',
    'Productos',
    'Actividad',
    'Inventario',
  ];

  private readonly reportStatuses: ReportStatus[] = [
    'Generado',
    'Pendiente',
    'Error',
  ];

  /**
   * Genera una lista de reportes simulados.
   *
   * @param countReports Cantidad de reportes a generar
   * @returns Promesa con los reportes generados
   */
  async getAll(countReports: number): Promise<Report[]> {
    const reports: Promise<Report>[] = [];

    for (let i = 1; i <= countReports; i++) {
      reports.push(this.generateReport(i));
    }

    return Promise.all(reports);
  }

  /**
   * Construye un reporte individual con datos de ejemplo.
   *
   * @param id Identificador del reporte
   * @returns Promesa con el reporte generado
   */
  private generateReport(id: number): Promise<Report> {
    return Promise.resolve({
      id,
      title: faker.lorem.sentence({ min: 2, max: 5 }),
      description: faker.lorem.sentence({ min: 6, max: 12 }),
      type: faker.helpers.arrayElement(this.reportTypes),
      status: faker.helpers.arrayElement(this.reportStatuses),
      generatedAt: faker.date.recent({ days: 30 }).toISOString(),
      totalRecords: faker.number.int({ min: 1, max: 500 }),
    });
  }
}
