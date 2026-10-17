import { Observable } from 'rxjs';
import { Book } from '../models/book.model';

export abstract class BookRepository {
  abstract getAll(countBooks: number): Observable<Book[]>;
}
