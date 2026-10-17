import { TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { BOOKS_MOCK } from '../../../../mocks/books.mocks';
import { Book } from '../../../domain/models/book.model';
import { DataService } from '../../services/data.service';
import { BookSpringBootRepositoryImpl } from './book-springboot.repository.impl';

jest.mock('@faker-js/faker', () => ({ faker: {} }));

describe('BookSpringBootRepositoryImpl', () => {
  let repository: BookSpringBootRepositoryImpl;
  const dataServiceMock = { getAllBooksSpringBoot: jest.fn() };

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        BookSpringBootRepositoryImpl,
        { provide: DataService, useValue: dataServiceMock },
      ],
    });
    repository = TestBed.inject(BookSpringBootRepositoryImpl);
  });

  it('debería crearse correctamente', () => {
    expect(repository).toBeTruthy();
  });

  it('debería delegar la consulta al backend Spring Boot', () => {
    dataServiceMock.getAllBooksSpringBoot.mockReturnValue(of(BOOKS_MOCK));

    repository.getAll(5).subscribe((books: Book[]) => {
      expect(books).toEqual(BOOKS_MOCK);
    });

    expect(dataServiceMock.getAllBooksSpringBoot).toHaveBeenCalledWith(5);
  });
});
