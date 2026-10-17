import { fakerES as faker } from '@faker-js/faker';
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
  private readonly reportTemplates = [
    {
      title: 'Resumen de usuarios',
      description: 'Usuarios registrados en el sistema',
    },
    {
      title: 'Inventario actual',
      description: 'Existencias disponibles por producto',
    },
    {
      title: 'Actividad reciente',
      description: 'Actividades realizadas por los usuarios',
    },
    {
      title: 'Productos por categoría',
      description: 'Cantidad de productos agrupados por categoría',
    },
    {
      title: 'Reporte de ventas',
      description: 'Ventas registradas durante el periodo seleccionado',
    },
    {
      title: 'Estado del inventario',
      description: 'Productos disponibles y agotados',
    },
    {
      title: 'Nuevos usuarios',
      description: 'Usuarios creados recientemente',
    },
    {
      title: 'Movimientos del sistema',
      description: 'Operaciones registradas en la plataforma',
    },
    {
      title: 'Resumen de productos',
      description: 'Catálogo de productos disponible',
    },
    {
      title: 'Reporte general',
      description: 'Consolidado general de información del sistema',
    },
  ];
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
    const template = this.reportTemplates[(id - 1) % this.reportTemplates.length]!;

    return Promise.resolve({
      id,
      title: template.title,
      description: template.description,
      type: faker.helpers.arrayElement(this.reportTypes),
      status: faker.helpers.arrayElement(this.reportStatuses),
      generatedAt: faker.date.recent({ days: 30 }).toISOString(),
      totalRecords: faker.number.int({ min: 1, max: 500 }),
    });
  }
}
