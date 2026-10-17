import { Book } from '../../domain/models/book.model';
import { BookRepository } from '../../domain/repositories/book.repository';
import { BookDatasource } from '../datasources/book.datasource';

export class BookRepositoryImpl extends BookRepository {
  constructor(private readonly datasource: BookDatasource) {
    super();
  }

  getAll(countBooks: number): Promise<Book[]> {
    return this.datasource.getAll(countBooks);
  }
}
