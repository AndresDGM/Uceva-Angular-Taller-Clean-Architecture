import { Component, inject } from '@angular/core';
import { GetAllLoansUseCase } from '../../../core/application/usecases/get-all-loans.usecase';
import { Loan } from '../../../core/domain/models/loan.model';
import { AlertComponent } from '../../components/alert/alert.component';
import { LoansTableComponent } from '../../components/loans-table/loans-table.component';
import { State } from '../../interfaces/state.interface';

/**
 * Componente contenedor de préstamos.
 *
 * Se utiliza para gestionar y mostrar un listado de préstamos
 * utilizando el componente `LoansTableComponent`.
 *
 * @remarks
 * Este componente se encarga de consumir el caso de uso `GetAllLoansUseCase`
 * para obtener los préstamos y pasarlos al componente de tabla.
 * Forma parte de la capa de presentación de la aplicación.
 *
 */
@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  imports: [LoansTableComponent, AlertComponent],
  providers: [GetAllLoansUseCase]
})
export class LoansPage {
  /**
   * Listado de préstamos obtenidos desde el caso de uso.
   * @type {Loan[]}
   */
  loans: Loan[] = [];

  /**
   * Estado actual del componente.
   *
   * @default 'init'
   */
  state: State = 'init';

  /**
   * Caso de Uso para obtener préstamos.
   * @remarks
   * Se inyecta utilizando la función `inject()` de Angular.
   */
  private getAllLoansUseCase = inject(GetAllLoansUseCase);

  /**
   * Inicializa el componente y carga los préstamos.
   * @remarks
   * Se suscribe al método `execute()` del caso de uso y
   * asigna los datos recibidos a la propiedad `loans`.
   */
  ngOnInit(): void {
    this.state = 'loading';
    this.getAllLoansUseCase.execute(10).subscribe({
      next: (loans) => {
        this.loans = loans;
        this.state = 'success';
      },
      error: (error) => {
        console.error(error);
        this.state = 'error';
      },
    });
  }
}
