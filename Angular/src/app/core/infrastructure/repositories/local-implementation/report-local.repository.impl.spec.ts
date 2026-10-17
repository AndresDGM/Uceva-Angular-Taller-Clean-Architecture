import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { REPORTS_MOCK } from '../../../../mocks/reports.mocks';
import { DataService } from '../../services/data.service';
import { ReportLocalRepositoryImpl } from './report-local.repository.impl';

describe('ReportLocalRepositoryImpl', () => {
  let repository: ReportLocalRepositoryImpl;
  const dataServiceMock = { getAllReportsLocal: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReportLocalRepositoryImpl,
        { provide: DataService, useValue: dataServiceMock },
      ],
    });
    repository = TestBed.inject(ReportLocalRepositoryImpl);
  });

  it('debería crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debería delegar la consulta local', () => {
    dataServiceMock.getAllReportsLocal.mockReturnValue(of(REPORTS_MOCK));

    repository.getAll(2).subscribe((reports) => expect(reports).toEqual(REPORTS_MOCK));

    expect(dataServiceMock.getAllReportsLocal).toHaveBeenCalledWith(2);
  });
});
