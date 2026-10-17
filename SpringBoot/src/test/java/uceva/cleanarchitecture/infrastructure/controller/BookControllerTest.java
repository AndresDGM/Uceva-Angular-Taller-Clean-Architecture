package uceva.cleanarchitecture.infrastructure.controller;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

import org.junit.jupiter.api.Test;
import org.springframework.web.server.ResponseStatusException;

import uceva.cleanarchitecture.application.usecase.GetAllBooksUseCase;
import uceva.cleanarchitecture.domain.repository.BookRepository;
import uceva.cleanarchitecture.infrastructure.datasource.BookDatasource;
import uceva.cleanarchitecture.infrastructure.repository.BookRepositoryImpl;

class BookControllerTest {
    private final BookDatasource datasource = new BookDatasource();
    private final BookRepository repository = new BookRepositoryImpl(datasource);
    private final BookController controller = new BookController(new GetAllBooksUseCase(repository));

    @Test
    void shouldReturnTheRequestedNumberOfBooks() {
        assertEquals(3, controller.getAll(3).getBody().size());
        assertEquals(200, controller.getAll(3).getStatusCode().value());
    }

    @Test
    void shouldReturnBadRequestForAnInvalidCount() {
        ResponseStatusException exception = assertThrows(
                ResponseStatusException.class, () -> controller.getAll(0));

        assertEquals(400, exception.getStatusCode().value());
    }
}
