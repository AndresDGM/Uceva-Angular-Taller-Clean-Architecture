import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { LoansTableComponent } from './loans-table.component';
import { LOANS_MOCK } from '../../../mocks/loans.mocks';

describe('LoansTableComponent', () => {
  let component: LoansTableComponent;
  let fixture: ComponentFixture<LoansTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoansTableComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoansTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    const table = fixture.debugElement.query(By.css('table'));
    expect(table).toBeTruthy();
  });

  it('debería renderizar una fila por cada préstamo', () => {
    component.loans = LOANS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.loans.length);
  });

  it('debería mostrar los datos del préstamo en cada columna', () => {
    component.loans = LOANS_MOCK;
    fixture.detectChanges();

    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('th, td'));
      const loan = component.loans[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(String(loan.id));
      expect(columns[1].nativeElement.textContent.trim()).toBe(String(loan.bookId));
      expect(columns[2].nativeElement.textContent.trim()).toBe(String(loan.userId));
      expect(columns[3].nativeElement.textContent.trim()).toBe(loan.loanDate);
      expect(columns[4].nativeElement.textContent.trim()).toBe(loan.returnDate);
      expect(columns[5].nativeElement.textContent.trim()).toBe(loan.status);
    });
  });

  it('debería mapear ACTIVE a badge de éxito', () => {
    expect(component.getBadgeClass('ACTIVE')).toBe('bg-success text-white');
  });

  it('debería mapear RETURNED a badge de primario', () => {
    expect(component.getBadgeClass('RETURNED')).toBe('bg-primary text-white');
  });

  it('debería mapear OVERDUE a badge de peligro', () => {
    expect(component.getBadgeClass('OVERDUE')).toBe('bg-danger text-white');
  });

  it('debería devolver badge secundario para estado desconocido', () => {
    expect(component.getBadgeClass('UNKNOWN' as any)).toBe('bg-secondary text-white');
  });

});
