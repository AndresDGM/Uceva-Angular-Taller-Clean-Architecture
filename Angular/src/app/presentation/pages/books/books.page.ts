import { Component, inject } from '@angular/core';
import { GetAllBooksUseCase } from '../../../core/application/usecases/get-all-books.usecase';
import { Book } from '../../../core/domain/models/book.model';
import { BooksTableComponent } from '../../components/books-table/books-table.component';
import { AlertComponent } from '../../components/alert/alert.component';
import { State } from '../../interfaces/state.interface';

@Component({
  selector: 'app-books',
  templateUrl: './books.page.html',
  imports: [BooksTableComponent, AlertComponent],
  providers: [GetAllBooksUseCase],
})
export class BooksPage {
  books: Book[] = [];
  state: State = 'init';
  private readonly getAllBooksUseCase = inject(GetAllBooksUseCase);

  ngOnInit(): void {
    this.state = 'loading';
    this.getAllBooksUseCase.execute(10).subscribe({
      next: (books) => {
        this.books = books;
        this.state = 'success';
      },
      error: () => {
        this.state = 'error';
      },
    });
  }
}
