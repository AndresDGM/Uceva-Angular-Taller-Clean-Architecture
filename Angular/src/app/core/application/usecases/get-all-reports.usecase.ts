import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../../domain/models/report.model';
import { ReportRepository } from '../../domain/repositories/report.repository';

/** Caso de uso para consultar reportes sin conocer su fuente de datos. */
@Injectable()
export class GetAllReportsUseCase {
  private reportRepository = inject(ReportRepository);

  /** Ejecuta la consulta de reportes a través del contrato del dominio. */
  execute(countReports: number): Observable<Report[]> {
    return this.reportRepository.getAll(countReports);
  }
}
