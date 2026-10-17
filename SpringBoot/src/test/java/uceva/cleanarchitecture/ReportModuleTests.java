package uceva.cleanarchitecture;

import org.junit.jupiter.api.Test;
import uceva.cleanarchitecture.application.usecase.GetAllReportsUseCase;
import uceva.cleanarchitecture.domain.entity.Report;
import uceva.cleanarchitecture.domain.repository.ReportRepository;
import uceva.cleanarchitecture.infrastructure.datasource.ReportDatasource;

import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

class ReportModuleTests {

    @Test
    void datasourceDebeGenerarLaCantidadSolicitadaDeReportes() {
        List<Report> reports = new ReportDatasource().getAll(3);

        assertEquals(3, reports.size());
        assertEquals(1, reports.get(0).id);
        assertNotNull(reports.get(0).title);
        assertNotNull(reports.get(0).generatedAt);
        assertFalse(reports.get(0).type.isBlank());
        assertFalse(reports.get(0).status.isBlank());
    }

    @Test
    void casoDeUsoDebeDelegarEnElRepositorio() {
        List<Report> expectedReports = List.of(
                new Report(
                        1,
                        "Resumen de usuarios",
                        "Usuarios registrados",
                        "Usuarios",
                        "Generado",
                        "2026-01-15T10:30:00Z",
                        42
                )
        );
        ReportRepository repository = new ReportRepository() {
            @Override
            public List<Report> getAll(int countReports) {
                assertEquals(1, countReports);
                return expectedReports;
            }
        };

        List<Report> result = new GetAllReportsUseCase(repository).execute(1);

        assertEquals(expectedReports, result);
    }
}
