import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { REPORTS_MOCK } from '../../../mocks/reports.mocks';
import { ReportsTableComponent } from './reports-table.component';

describe('ReportsTableComponent', () => {
  let component: ReportsTableComponent;
  let fixture: ComponentFixture<ReportsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportsTableComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ReportsTableComponent);
    component = fixture.componentInstance;
    component.reports = REPORTS_MOCK;
    fixture.detectChanges();
  });

  it('debería crear el componente y renderizar una fila por reporte', () => {
    expect(component).toBeTruthy();
    expect(fixture.debugElement.queryAll(By.css('tbody tr')).length).toBe(REPORTS_MOCK.length);
  });

  it('debería mostrar los atributos principales de cada reporte', () => {
    const firstRow = fixture.debugElement.query(By.css('tbody tr'));
    const columns = firstRow.queryAll(By.css('th, td'));

    expect(columns[0].nativeElement.textContent.trim()).toBe('1');
    expect(columns[1].nativeElement.textContent.trim()).toBe(REPORTS_MOCK[0].title);
    expect(columns[2].nativeElement.textContent.trim()).toBe(REPORTS_MOCK[0].description);
    expect(columns[6].nativeElement.textContent.trim()).toBe('42');
  });

  it('debería asignar colores a tipos y estados', () => {
    expect(component.typeMap.Usuarios).toBe('primary');
    expect(component.typeMap.Inventario).toBe('secondary');
    expect(component.statusMap.Generado).toBe('success');
    expect(component.statusMap.Pendiente).toBe('warning');
    expect(component.statusMap.Error).toBe('danger');
  });
});
