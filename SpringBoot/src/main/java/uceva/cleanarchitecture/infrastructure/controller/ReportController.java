package uceva.cleanarchitecture.infrastructure.controller;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;
import uceva.cleanarchitecture.application.usecase.GetAllReportsUseCase;
import uceva.cleanarchitecture.domain.entity.Report;

import java.util.List;

/**
 * API REST para consultar reportes.
 */
@RestController
@RequestMapping("/reports")
@Tag(name = "Reportes", description = "Operaciones de reportes")
public class ReportController {

    private final GetAllReportsUseCase getAllReportsUseCase;

    public ReportController(GetAllReportsUseCase getAllReportsUseCase) {
        this.getAllReportsUseCase = getAllReportsUseCase;
    }

    @GetMapping("/{countReports}")
    @ResponseStatus(HttpStatus.OK)
    @Operation(
            summary = "Obtener listado de reportes",
            description = "Genera una lista de reportes según la cantidad solicitada"
    )
    public List<Report> getAll(@PathVariable int countReports) {
        if (countReports < 1) {
            throw new ResponseStatusException(
                    HttpStatus.BAD_REQUEST,
                    "countReports debe ser un entero mayor que cero"
            );
        }

        return getAllReportsUseCase.execute(countReports);
    }
}
