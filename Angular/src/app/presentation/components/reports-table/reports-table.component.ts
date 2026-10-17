import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { BadgeAtom, BadgeType } from '@brejcha13320/design-system-bootstrap';
import {
  Report,
  ReportStatus,
  ReportType,
} from '../../../core/domain/models/report.model';

/** Tabla de reportes del módulo de presentación. */
@Component({
  selector: 'app-reports-table',
  templateUrl: './reports-table.component.html',
  imports: [CommonModule, BadgeAtom],
})
export class ReportsTableComponent {
  /** Reportes que se muestran en la tabla. */
  @Input() reports: Report[] = [];

  /** Colores de los badges según el tipo de reporte. */
  typeMap: Record<ReportType, BadgeType> = {
    Usuarios: 'primary',
    Productos: 'success',
    Actividad: 'warning',
    Inventario: 'secondary',
  };

  /** Colores de los badges según el estado del reporte. */
  statusMap: Record<ReportStatus, BadgeType> = {
    Generado: 'success',
    Pendiente: 'warning',
    Error: 'danger',
  };
}
