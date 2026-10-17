package uceva.cleanarchitecture.infrastructure.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import org.springframework.http.HttpStatus;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.responses.ApiResponses;
import io.swagger.v3.oas.annotations.tags.Tag;
import uceva.cleanarchitecture.application.usecase.GetAllBooksUseCase;
import uceva.cleanarchitecture.domain.entity.Book;

@RestController
@RequestMapping("/books")
@Tag(name = "Books", description = "Operaciones para consultar libros")
public class BookController {
    private final GetAllBooksUseCase getAllBooksUseCase;

    public BookController(GetAllBooksUseCase getAllBooksUseCase) {
        this.getAllBooksUseCase = getAllBooksUseCase;
    }

    @GetMapping("/{countBooks}")
    @Operation(summary = "Obtener libros", description = "Retorna la cantidad solicitada de libros simulados")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Libros obtenidos correctamente"),
        @ApiResponse(responseCode = "400", description = "La cantidad debe ser un entero mayor que cero")
    })
    public ResponseEntity<List<Book>> getAll(
            @Parameter(description = "Cantidad de libros", example = "10")
            @PathVariable int countBooks) {
        if (countBooks < 1) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "countBooks debe ser mayor que cero");
        }
        return ResponseEntity.ok(getAllBooksUseCase.execute(countBooks));
    }
}
