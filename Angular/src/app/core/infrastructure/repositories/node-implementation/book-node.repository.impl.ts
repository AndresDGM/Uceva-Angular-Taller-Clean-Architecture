import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BookRepository } from '../../../domain/repositories/book.repository';
import { Book } from '../../../domain/models/book.model';
import { DataService } from '../../services/data.service';

@Injectable()
export class BookNodeRepositoryImpl extends BookRepository {
  private readonly dataService = inject(DataService);

  getAll(countBooks: number): Observable<Book[]> {
    return this.dataService.getAllBooksNode(countBooks);
  }
}
