/**
 * Representa un reporte generado por el sistema.
 *
 * El modelo coincide con las respuestas de los backends Node.js y Spring Boot.
 */
export interface Report {
  /** Identificador único del reporte */
  id: number;

  /** Título visible del reporte */
  title: string;

  /** Descripción breve del contenido del reporte */
  description: string;

  /** Módulo al que pertenece la información reportada */
  type: ReportType;

  /** Estado actual del reporte */
  status: ReportStatus;

  /** Fecha de generación en formato ISO 8601 */
  generatedAt: string;

  /** Cantidad de registros incluidos */
  totalRecords: number;
}

/** Tipos de información que puede resumir un reporte. */
export type ReportType = 'Usuarios' | 'Productos' | 'Actividad' | 'Inventario';

/** Estados posibles de un reporte. */
export type ReportStatus = 'Generado' | 'Pendiente' | 'Error';
