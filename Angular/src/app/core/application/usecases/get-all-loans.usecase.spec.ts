import { TestBed } from "@angular/core/testing";
import { GetAllLoansUseCase } from "./get-all-loans.usecase";
import { LoanRepository } from "../../domain/repositories/loan.repository";
import { firstValueFrom, of, throwError } from "rxjs";
import { LOANS_MOCK } from "../../../mocks/loans.mocks";

describe('GetAllLoansUseCase', () => {
  let useCase: GetAllLoansUseCase;

  const countLoans = 5;
  const LoanRepositoryMock: jest.Mocked<LoanRepository> = { getAll: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
        providers: [
            GetAllLoansUseCase,
            { provide: LoanRepository, useValue: LoanRepositoryMock }
        ]
    })
    .compileComponents();
    useCase = TestBed.inject(GetAllLoansUseCase);
  });

  it('debería ser inyectable y crearse correctamente', () => {
    expect(useCase).toBeInstanceOf(GetAllLoansUseCase);
  });

  it('debería delegar la llamada del repository', async () => {
    LoanRepositoryMock.getAll.mockReturnValue(of(LOANS_MOCK));
    const result = await firstValueFrom(useCase.execute(countLoans));
    expect(LoanRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(LoanRepositoryMock.getAll).toHaveBeenCalledWith(countLoans);
    expect(result).toEqual(LOANS_MOCK);
  });

  it('debería propagar un error cuando el repositorio emita un error', async () => {
    const errorMessage = 'Fallo la busqueda de prestamos';
    LoanRepositoryMock.getAll.mockReturnValue(throwError(() => new Error(errorMessage)));
    const result = useCase.execute(countLoans);
    await expect(firstValueFrom(result)).rejects.toThrow(errorMessage);
    expect(LoanRepositoryMock.getAll).toHaveBeenCalledTimes(1);
    expect(LoanRepositoryMock.getAll).toHaveBeenCalledWith(countLoans);
  });

});
