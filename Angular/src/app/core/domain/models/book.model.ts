export interface Book {
  id: number;
  title: string;
  authorId: number;
  isbn: string;
  publicationYear: string;
  publisher: string;
  pages: number;
  description: string;
  language: Language;
  genre: Genre;
  coverImageUrl: string;
  pdfUrl: string;
}

export enum Language {
  ENGLISH = 'English',
  SPANISH = 'Spanish',
  FRENCH = 'French',
  GERMAN = 'German',
  ITALIAN = 'Italian',
  PORTUGUESE = 'Portuguese',
  CHINESE = 'Chinese',
  JAPANESE = 'Japanese',
  KOREAN = 'Korean',
  RUSSIAN = 'Russian',
}

export enum Genre {
  FICTION = 'Fiction',
  NON_FICTION = 'Non-Fiction',
  MYSTERY = 'Mystery',
  ROMANCE = 'Romance',
  SCIENCE_FICTION = 'Science Fiction',
  FANTASY = 'Fantasy',
  BIOGRAPHY = 'Biography',
  HISTORY = 'History',
  SELF_HELP = 'Self-Help',
  CHILDREN = 'Children',
}
