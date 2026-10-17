package uceva.cleanarchitecture.infrastructure.repository;

import uceva.cleanarchitecture.domain.entity.Report;
import uceva.cleanarchitecture.domain.repository.ReportRepository;
import uceva.cleanarchitecture.infrastructure.datasource.ReportDatasource;

import java.util.List;

/**
 * Adaptador de infraestructura para el repositorio de reportes.
 */
public class ReportRepositoryImpl extends ReportRepository {
    private final ReportDatasource reportDatasource;

    public ReportRepositoryImpl(ReportDatasource reportDatasource) {
        this.reportDatasource = reportDatasource;
    }

    @Override
    public List<Report> getAll(int countReports) {
        return reportDatasource.getAll(countReports);
    }
}
