import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { GetAllLoansUseCase } from '../../../core/application/usecases/get-all-loans.usecase';
import { LOANS_MOCK } from '../../../mocks/loans.mocks';
import { LoansTableComponent } from '../../components/loans-table/loans-table.component';
import { LoansPage } from './loans.page';

describe('LoansPage', () => {
  let component: LoansPage;
  let fixture: ComponentFixture<LoansPage>;

  const GetAllLoansUseCaseMock = { execute: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoansPage, LoansTableComponent],
    })
    .overrideComponent(LoansPage, {
      set: {
        providers: [
          { provide: GetAllLoansUseCase, useValue:GetAllLoansUseCaseMock }
        ]
      }
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansPage);
    component = fixture.componentInstance;
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
    expect(component.state).toBe('init');
    expect(component.loans).toEqual([]);
  });

  it('debe cargar los préstamos y cambiar el estado a success', () => {
    GetAllLoansUseCaseMock.execute.mockReturnValue(of(LOANS_MOCK));
    fixture.detectChanges();
    expect(component.loans).toEqual(LOANS_MOCK);
    expect(component.state).toBe('success');
  });

  it('no deberia cargar los préstamos y cambiar el estado a error', () => {
    GetAllLoansUseCaseMock.execute.mockReturnValue(
      throwError(() => new Error('error'))
    );
    fixture.detectChanges();
    expect(component.loans).toEqual([]);
    expect(component.state).toBe('error');
  });

});
