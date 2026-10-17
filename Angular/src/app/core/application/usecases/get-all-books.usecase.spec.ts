import { TestBed } from '@angular/core/testing';
import { firstValueFrom, of, throwError } from 'rxjs';
import { BOOKS_MOCK } from '../../../mocks/books.mocks';
import { BookRepository } from '../../domain/repositories/book.repository';
import { GetAllBooksUseCase } from './get-all-books.usecase';

describe('GetAllBooksUseCase', () => {
  let useCase: GetAllBooksUseCase;
  const countBooks = 5;
  const bookRepositoryMock: jest.Mocked<BookRepository> = { getAll: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        GetAllBooksUseCase,
        { provide: BookRepository, useValue: bookRepositoryMock },
      ],
    }).compileComponents();
    useCase = TestBed.inject(GetAllBooksUseCase);
  });

  it('debería crearse correctamente', () => {
    expect(useCase).toBeInstanceOf(GetAllBooksUseCase);
  });

  it('debería delegar la consulta al repositorio', async () => {
    bookRepositoryMock.getAll.mockReturnValue(of(BOOKS_MOCK));
    const result = await firstValueFrom(useCase.execute(countBooks));

    expect(bookRepositoryMock.getAll).toHaveBeenCalledWith(countBooks);
    expect(result).toEqual(BOOKS_MOCK);
  });

  it('debería propagar los errores del repositorio', async () => {
    bookRepositoryMock.getAll.mockReturnValue(throwError(() => new Error('Fallo la búsqueda')));

    await expect(firstValueFrom(useCase.execute(countBooks))).rejects.toThrow('Fallo la búsqueda');
  });
});
