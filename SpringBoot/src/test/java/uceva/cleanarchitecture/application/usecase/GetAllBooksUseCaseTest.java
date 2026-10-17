package uceva.cleanarchitecture.application.usecase;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import java.util.List;

import org.junit.jupiter.api.Test;

import uceva.cleanarchitecture.domain.entity.Book;
import uceva.cleanarchitecture.domain.repository.BookRepository;

class GetAllBooksUseCaseTest {
    @Test
    void shouldDelegateTheRequestedCountToTheRepository() {
        BookRepository repository = new BookRepository() {
            @Override
            public List<Book> getAll(int countBooks) {
                return List.of();
            }
        };

        assertEquals(0, new GetAllBooksUseCase(repository).execute(3).size());
    }

    @Test
    void shouldRejectNonPositiveCounts() {
        BookRepository repository = new BookRepository() {
            @Override
            public List<Book> getAll(int countBooks) {
                return List.of();
            }
        };

        assertThrows(IllegalArgumentException.class,
                () -> new GetAllBooksUseCase(repository).execute(0));
    }
}
