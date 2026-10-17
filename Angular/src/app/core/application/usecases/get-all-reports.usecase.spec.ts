import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, throwError } from 'rxjs';
import { REPORTS_MOCK } from '../../../mocks/reports.mocks';
import { ReportRepository } from '../../domain/repositories/report.repository';
import { GetAllReportsUseCase } from './get-all-reports.usecase';

describe('GetAllReportsUseCase', () => {
  let useCase: GetAllReportsUseCase;
  const repositoryMock: jest.Mocked<ReportRepository> = { getAll: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GetAllReportsUseCase,
        { provide: ReportRepository, useValue: repositoryMock },
      ],
    });
    useCase = TestBed.inject(GetAllReportsUseCase);
  });

  it('debería ser inyectable y crearse correctamente', () => {
    expect(useCase).toBeInstanceOf(GetAllReportsUseCase);
  });

  it('debería delegar la consulta en el repositorio', async () => {
    repositoryMock.getAll.mockReturnValue(of(REPORTS_MOCK));

    const result = await firstValueFrom(useCase.execute(2));

    expect(repositoryMock.getAll).toHaveBeenCalledWith(2);
    expect(result).toEqual(REPORTS_MOCK);
  });

  it('debería propagar los errores del repositorio', async () => {
    repositoryMock.getAll.mockReturnValue(throwError(() => new Error('Error de reportes')));

    await expect(firstValueFrom(useCase.execute(2))).rejects.toThrow('Error de reportes');
  });
});
