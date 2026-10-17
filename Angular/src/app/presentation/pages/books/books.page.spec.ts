import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';
import { GetAllBooksUseCase } from '../../../core/application/usecases/get-all-books.usecase';
import { BOOKS_MOCK } from '../../../mocks/books.mocks';
import { BooksPage } from './books.page';

describe('BooksPage', () => {
  let component: BooksPage;
  let fixture: ComponentFixture<BooksPage>;
  const useCaseMock = { execute: jest.fn() };

  beforeEach(async () => {
    await TestBed.configureTestingModule({ imports: [BooksPage] })
      .overrideComponent(BooksPage, {
        set: { providers: [{ provide: GetAllBooksUseCase, useValue: useCaseMock }] },
      })
      .compileComponents();

    fixture = TestBed.createComponent(BooksPage);
    component = fixture.componentInstance;
  });

  it('debería cargar libros correctamente', () => {
    useCaseMock.execute.mockReturnValue(of(BOOKS_MOCK));
    fixture.detectChanges();
    expect(component.books).toEqual(BOOKS_MOCK);
    expect(component.state).toBe('success');
  });

  it('debería cambiar a error cuando falla la consulta', () => {
    useCaseMock.execute.mockReturnValue(throwError(() => new Error('error')));
    fixture.detectChanges();
    expect(component.state).toBe('error');
  });
});
