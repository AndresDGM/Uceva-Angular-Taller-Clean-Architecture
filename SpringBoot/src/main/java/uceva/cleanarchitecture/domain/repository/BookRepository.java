package uceva.cleanarchitecture.domain.repository;

import java.util.List;

import uceva.cleanarchitecture.domain.entity.Book;

public abstract class BookRepository {
    public abstract List<Book> getAll(int countBooks);
}
