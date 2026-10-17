import { Component, inject } from '@angular/core';
import { GetAllReportsUseCase } from '../../../core/application/usecases/get-all-reports.usecase';
import { Report } from '../../../core/domain/models/report.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { ReportsTableComponent } from '../../components/reports-table/reports-table.component';
import { State } from '../../interfaces/state.interface';

/** Página contenedora del listado de reportes. */
@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  imports: [ReportsTableComponent, AlertComponent],
  providers: [GetAllReportsUseCase],
})
export class ReportsPage {
  /** Reportes cargados para la vista. */
  reports: Report[] = [];

  /** Estado de la consulta de reportes. */
  state: State = 'init';

  private getAllReportsUseCase = inject(GetAllReportsUseCase);

  /** Carga los reportes y actualiza el estado de la vista. */
  ngOnInit(): void {
    this.state = 'loading';
    this.getAllReportsUseCase.execute(10).subscribe({
      next: (reports) => {
        this.reports = reports;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
