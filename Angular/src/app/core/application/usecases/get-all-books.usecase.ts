import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../domain/models/book.model';
import { BookRepository } from '../../domain/repositories/book.repository';

@Injectable()
export class GetAllBooksUseCase {
  private readonly bookRepository = inject(BookRepository);

  execute(countBooks: number): Observable<Book[]> {
    return this.bookRepository.getAll(countBooks);
  }
}
