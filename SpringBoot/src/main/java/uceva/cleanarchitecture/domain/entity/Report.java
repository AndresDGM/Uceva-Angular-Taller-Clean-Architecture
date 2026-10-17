package uceva.cleanarchitecture.domain.entity;

/**
 * Modelo de dominio de un reporte generado por el sistema.
 */
public class Report {
    public Integer id;
    public String title;
    public String description;
    public String type;
    public String status;
    public String generatedAt;
    public Integer totalRecords;

    public Report(
            Integer id,
            String title,
            String description,
            String type,
            String status,
            String generatedAt,
            Integer totalRecords
    ) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.type = type;
        this.status = status;
        this.generatedAt = generatedAt;
        this.totalRecords = totalRecords;
    }
}
