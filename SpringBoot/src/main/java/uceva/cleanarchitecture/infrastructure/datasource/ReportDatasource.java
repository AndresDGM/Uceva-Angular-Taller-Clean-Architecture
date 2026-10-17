package uceva.cleanarchitecture.infrastructure.datasource;

import uceva.cleanarchitecture.domain.entity.Report;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Fuente de datos temporal para generar reportes de ejemplo.
 */
public class ReportDatasource {
    private final Random random = new Random();

    private final String[][] reportTemplates = {
            {"Resumen de usuarios", "Usuarios registrados en el sistema"},
            {"Inventario actual", "Existencias disponibles por producto"},
            {"Actividad reciente", "Actividades realizadas por los usuarios"},
            {"Productos por categoría", "Cantidad de productos agrupados por categoría"},
            {"Reporte de ventas", "Ventas registradas durante el periodo seleccionado"},
            {"Estado del inventario", "Productos disponibles y agotados"},
            {"Nuevos usuarios", "Usuarios creados recientemente"},
            {"Movimientos del sistema", "Operaciones registradas en la plataforma"},
            {"Resumen de productos", "Catálogo de productos disponible"},
            {"Reporte general", "Consolidado general de información del sistema"}
    };

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
        String[] template = reportTemplates[(id - 1) % reportTemplates.length];

        return new Report(
                id,
                template[0],
                template[1],
                randomValue(reportTypes),
                randomValue(reportStatuses),
                java.time.Instant.now().minusSeconds(random.nextInt(30 * 24 * 60 * 60)).toString(),
                random.nextInt(500) + 1
        );
    }

    private String randomValue(String[] values) {
        return values[random.nextInt(values.length)];
    }
}
