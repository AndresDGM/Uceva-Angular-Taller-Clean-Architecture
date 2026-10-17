import { Request, Response } from 'express';
import { GetAllBooksUseCase } from '../../../application/usecases/get-all-books.usecase';
import { HandleError } from '../erros/handle.error';

export class BooksController {
  constructor(private readonly getAllBooksUseCase: GetAllBooksUseCase) {}

  getAllBooks = (req: Request, res: Response): void => {
    const countBooks = Number(req.params.countBooks);

    if (!Number.isInteger(countBooks) || countBooks < 1) {
      res.status(400).json({ message: 'countBooks debe ser un entero mayor que cero' });
      return;
    }

    this.getAllBooksUseCase
      .execute(countBooks)
      .then((books) => res.status(200).json(books))
      .catch((error) => HandleError.error(error, res));
  };
}
