package uceva.cleanarchitecture.application.usecase;

import java.util.List;

import uceva.cleanarchitecture.domain.entity.Book;
import uceva.cleanarchitecture.domain.repository.BookRepository;

public class GetAllBooksUseCase {
    private final BookRepository bookRepository;

    public GetAllBooksUseCase(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> execute(int countBooks) {
        if (countBooks < 1) {
            throw new IllegalArgumentException("countBooks debe ser mayor que cero");
        }
        return bookRepository.getAll(countBooks);
    }
}
