import { Book, Genre, Language } from '../core/domain/models/book.model';

export const BOOKS_MOCK: Book[] = [
  {
    id: 1,
    title: 'Cien años de soledad',
    authorId: 1,
    isbn: '978-3-16-148410-0',
    publicationYear: '1967-05-30T00:00:00.000Z',
    publisher: 'Editorial Sudamericana',
    pages: 400,
    description: 'Una obra maestra de la literatura hispanoamericana',
    language: Language.SPANISH,
    genre: Genre.FANTASY,
    coverImageUrl: 'https://picsum.photos/seed/book-1/160/240',
    pdfUrl: 'https://samplepdf.org/files/sample.pdf',
  },
];
