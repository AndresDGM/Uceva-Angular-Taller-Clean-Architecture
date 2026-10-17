import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../../../domain/models/book.model';
import { BookRepository } from '../../../domain/repositories/book.repository';
import { DataService } from '../../services/data.service';

@Injectable()
export class BookSpringBootRepositoryImpl extends BookRepository {
  private readonly dataService = inject(DataService);

  getAll(countBooks: number): Observable<Book[]> {
    return this.dataService.getAllBooksSpringBoot(countBooks);
  }
}
