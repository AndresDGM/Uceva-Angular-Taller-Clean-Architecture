import { faker } from '@faker-js/faker';
import { Book, Genre, Language } from '../../domain/models/book.model';

export class BookDatasource {
  async getAll(countBooks: number): Promise<Book[]> {
    return Array.from({ length: countBooks }, (_, index) => this.generateBook(index + 1));
  }

  private generateBook(id: number): Book {
    return {
      id,
      title: faker.lorem.words({ min: 2, max: 5 }),
      authorId: faker.number.int({ min: 1, max: 100 }),
      isbn: faker.commerce.isbn(),
      publicationYear: faker.date
        .between({ from: '1950-01-01T00:00:00.000Z', to: '2025-12-31T00:00:00.000Z' })
        .toISOString(),
      publisher: faker.company.name(),
      pages: faker.number.int({ min: 80, max: 900 }),
      description: faker.lorem.sentence({ min: 8, max: 18 }),
      language: faker.helpers.enumValue(Language),
      genre: faker.helpers.enumValue(Genre),
      coverImageUrl: `https://picsum.photos/seed/book-${id}/160/240`,
      pdfUrl: 'https://samplepdf.org/files/sample.pdf',
    };
  }
}
