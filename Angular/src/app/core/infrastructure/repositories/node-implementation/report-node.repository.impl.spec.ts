import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { REPORTS_MOCK } from '../../../../mocks/reports.mocks';
import { DataService } from '../../services/data.service';
import { ReportNodeRepositoryImpl } from './report-node.repository.impl';

describe('ReportNodeRepositoryImpl', () => {
  let repository: ReportNodeRepositoryImpl;
  const dataServiceMock = { getAllReportsNode: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReportNodeRepositoryImpl,
        { provide: DataService, useValue: dataServiceMock },
      ],
    });
    repository = TestBed.inject(ReportNodeRepositoryImpl);
  });

  it('debería crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debería delegar la consulta en Node.js', () => {
    dataServiceMock.getAllReportsNode.mockReturnValue(of(REPORTS_MOCK));

    repository.getAll(2).subscribe((reports) => expect(reports).toEqual(REPORTS_MOCK));

    expect(dataServiceMock.getAllReportsNode).toHaveBeenCalledWith(2);
  });
});
