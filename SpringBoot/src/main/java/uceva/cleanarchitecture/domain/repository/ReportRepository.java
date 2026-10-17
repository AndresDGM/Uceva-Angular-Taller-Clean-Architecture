package uceva.cleanarchitecture.domain.repository;

import uceva.cleanarchitecture.domain.entity.Report;

import java.util.List;

/**
 * Contrato de acceso a los reportes del dominio.
 */
public abstract class ReportRepository {
    public abstract List<Report> getAll(int countReports);
}
