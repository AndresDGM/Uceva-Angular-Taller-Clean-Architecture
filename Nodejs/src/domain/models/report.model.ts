/**
 * Interfaz que representa un reporte disponible en el sistema.
 *
 * Un reporte resume la información generada para una consulta o proceso
 * funcional. Sus propiedades son independientes de Express, Faker o de
 * cualquier mecanismo concreto de persistencia.
 */
export interface Report {
  /** Identificador único del reporte */
  id: number;

  /** Título que se muestra en la tabla de reportes */
  title: string;

  /** Descripción breve del contenido del reporte */
  description: string;

  /** Módulo o dominio al que pertenece la información reportada */
  type: ReportType;

  /** Estado actual de la generación del reporte */
  status: ReportStatus;

  /** Fecha y hora de generación en formato ISO 8601 */
  generatedAt: string;

  /** Cantidad de registros incluidos en el reporte */
  totalRecords: number;
}

/** Tipos de información que puede resumir un reporte. */
export type ReportType = 'Usuarios' | 'Productos' | 'Actividad' | 'Inventario';

/** Estados posibles de un reporte. */
export type ReportStatus = 'Generado' | 'Pendiente' | 'Error';
