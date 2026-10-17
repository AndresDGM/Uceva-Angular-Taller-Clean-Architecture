import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { GetAllReportsUseCase } from '../../../core/application/usecases/get-all-reports.usecase';
import { REPORTS_MOCK } from '../../../mocks/reports.mocks';
import { ReportsTableComponent } from '../../components/reports-table/reports-table.component';
import { ReportsPage } from './reports.page';

describe('ReportsPage', () => {
  let component: ReportsPage;
  let fixture: ComponentFixture<ReportsPage>;
  const useCaseMock = { execute: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsPage, ReportsTableComponent],
    })
      .overrideComponent(ReportsPage, {
        set: {
          providers: [{ provide: GetAllReportsUseCase, useValue: useCaseMock }],
        },
      })
      .compileComponents();

    fixture = TestBed.createComponent(ReportsPage);
    component = fixture.componentInstance;
  });

  it('debería crear el componente en estado inicial', () => {
    expect(component).toBeTruthy();
    expect(component.state).toBe('init');
    expect(component.reports).toEqual([]);
  });

  it('debería cargar reportes y cambiar a success', () => {
    useCaseMock.execute.mockReturnValue(of(REPORTS_MOCK));

    fixture.detectChanges();

    expect(useCaseMock.execute).toHaveBeenCalledWith(10);
    expect(component.reports).toEqual(REPORTS_MOCK);
    expect(component.state).toBe('success');
  });

  it('debería cambiar a error cuando falla la consulta', () => {
    useCaseMock.execute.mockReturnValue(throwError(() => new Error('error')));

    fixture.detectChanges();

    expect(component.reports).toEqual([]);
    expect(component.state).toBe('error');
  });
});
