import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { REPORTS_MOCK } from '../../../../mocks/reports.mocks';
import { DataService } from '../../services/data.service';
import { ReportSpringBootRepositoryImpl } from './report-springboot.repository.impl';

describe('ReportSpringBootRepositoryImpl', () => {
  let repository: ReportSpringBootRepositoryImpl;
  const dataServiceMock = { getAllReportsSpringBoot: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReportSpringBootRepositoryImpl,
        { provide: DataService, useValue: dataServiceMock },
      ],
    });
    repository = TestBed.inject(ReportSpringBootRepositoryImpl);
  });

  it('debería crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debería delegar la consulta en Spring Boot', () => {
    dataServiceMock.getAllReportsSpringBoot.mockReturnValue(of(REPORTS_MOCK));

    repository.getAll(2).subscribe((reports) => expect(reports).toEqual(REPORTS_MOCK));

    expect(dataServiceMock.getAllReportsSpringBoot).toHaveBeenCalledWith(2);
  });
});
