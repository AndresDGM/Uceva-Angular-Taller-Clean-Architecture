package uceva.cleanarchitecture.infrastructure.datasource;

import com.github.javafaker.Faker;
import uceva.cleanarchitecture.domain.entity.Report;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.concurrent.TimeUnit;

/**
 * Fuente de datos temporal para generar reportes de ejemplo.
 */
public class ReportDatasource {
    private final Faker faker = new Faker();
    private final Random random = new Random();

    private final String[] reportTypes = {
            "Usuarios",
            "Productos",
            "Actividad",
            "Inventario"
    };

    private final String[] reportStatuses = {
            "Generado",
            "Pendiente",
            "Error"
    };

    public List<Report> getAll(int countReports) {
        List<Report> reports = new ArrayList<>();

        for (int i = 1; i <= countReports; i++) {
            reports.add(generateReport(i));
        }

        return reports;
    }

    private Report generateReport(Integer id) {
        return new Report(
                id,
                faker.lorem().sentence(5),
                faker.lorem().sentence(10),
                randomValue(reportTypes),
                randomValue(reportStatuses),
                faker.date().past(30, TimeUnit.DAYS).toInstant().toString(),
                faker.number().numberBetween(1, 500)
        );
    }

    private String randomValue(String[] values) {
        return values[random.nextInt(values.length)];
    }
}
