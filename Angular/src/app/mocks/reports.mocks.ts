import { Report } from '../core/domain/models/report.model';

export const REPORTS_MOCK: Report[] = [
  {
    id: 1,
    title: 'Resumen de usuarios',
    description: 'Usuarios registrados en el sistema',
    type: 'Usuarios',
    status: 'Generado',
    generatedAt: '2026-01-15T10:30:00.000Z',
    totalRecords: 42,
  },
  {
    id: 2,
    title: 'Inventario actual',
    description: 'Existencias disponibles por producto',
    type: 'Inventario',
    status: 'Pendiente',
    generatedAt: '2026-01-16T12:00:00.000Z',
    totalRecords: 18,
  },
];
