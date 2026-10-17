package uceva.cleanarchitecture.infrastructure.controller;

import java.util.List;
import java.util.Optional;

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
import uceva.cleanarchitecture.application.usecase.GetAllLoansUseCase;
import uceva.cleanarchitecture.application.usecase.GetLoanByIdUseCase;
import uceva.cleanarchitecture.domain.entity.Loan;

@RestController
@RequestMapping("/loans")
@Tag(name = "Loans", description = "Operaciones para consultar préstamos")
public class LoanController {

    private final GetAllLoansUseCase getAllLoansUseCase;
    private final GetLoanByIdUseCase getLoanByIdUseCase;

    public LoanController(GetAllLoansUseCase getAllLoansUseCase, GetLoanByIdUseCase getLoanByIdUseCase) {
        this.getAllLoansUseCase = getAllLoansUseCase;
        this.getLoanByIdUseCase = getLoanByIdUseCase;
    }

    @GetMapping("/{countLoans}")
    @Operation(summary = "Obtener préstamos", description = "Retorna la cantidad solicitada de préstamos simulados")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Préstamos obtenidos correctamente"),
        @ApiResponse(responseCode = "400", description = "La cantidad debe ser un entero mayor que cero")
    })
    public ResponseEntity<List<Loan>> getAll(
            @Parameter(description = "Cantidad de préstamos", example = "10")
            @PathVariable int countLoans) {
        if (countLoans < 1) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,
                    "countLoans debe ser mayor que cero");
        }
        return ResponseEntity.ok(getAllLoansUseCase.execute(countLoans));
    }

    @GetMapping("/loan/{id}")
    @Operation(summary = "Obtener préstamo por ID", description = "Retorna un préstamo específico según su identificador")
    @ApiResponses({
        @ApiResponse(responseCode = "200", description = "Préstamo encontrado"),
        @ApiResponse(responseCode = "404", description = "Préstamo no encontrado")
    })
    public ResponseEntity<Loan> getById(
            @Parameter(description = "Identificador del préstamo", example = "1")
            @PathVariable int id) {
        Optional<Loan> loan = getLoanByIdUseCase.execute(id);
        if (loan.isPresent()) {
            return ResponseEntity.ok(loan.get());
        } else {
            throw new ResponseStatusException(HttpStatus.NOT_FOUND, "Préstamo no encontrado");
        }
    }
}
