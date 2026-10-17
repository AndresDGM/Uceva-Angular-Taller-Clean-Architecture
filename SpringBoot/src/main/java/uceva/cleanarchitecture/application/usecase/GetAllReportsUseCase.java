package uceva.cleanarchitecture.application.usecase;

import uceva.cleanarchitecture.domain.entity.Report;
import uceva.cleanarchitecture.domain.repository.ReportRepository;

import java.util.List;

/**
 * Caso de uso para consultar reportes.
 */
public class GetAllReportsUseCase {
    private final ReportRepository reportRepository;

    public GetAllReportsUseCase(ReportRepository reportRepository) {
        this.reportRepository = reportRepository;
    }

    public List<Report> execute(int countReports) {
        return reportRepository.getAll(countReports);
    }
}
