import { Book } from '../../domain/models/book.model';
import { BookRepository } from '../../domain/repositories/book.repository';

export class GetAllBooksUseCase {
  constructor(private readonly bookRepository: BookRepository) {}

  execute(countBooks: number): Promise<Book[]> {
    return this.bookRepository.getAll(countBooks);
  }
}
