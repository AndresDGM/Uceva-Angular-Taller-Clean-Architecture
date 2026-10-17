import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../../../domain/models/report.model';
import { ReportRepository } from '../../../domain/repositories/report.repository';
import { DataService } from '../../services/data.service';

/** Implementación local del repositorio de reportes. */
@Injectable()
export class ReportLocalRepositoryImpl extends ReportRepository {
  private dataService = inject(DataService);

  getAll(countReports: number): Observable<Report[]> {
    return this.dataService.getAllReportsLocal(countReports);
  }
}
