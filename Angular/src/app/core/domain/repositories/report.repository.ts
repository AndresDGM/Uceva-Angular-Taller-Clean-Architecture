import { Observable } from 'rxjs';
import { Report } from '../models/report.model';

/**
 * Contrato de acceso a los reportes.
 *
 * Las implementaciones concretas pueden consultar datos locales, Node.js o
 * Spring Boot sin afectar al caso de uso ni a los componentes de presentación.
 */
export abstract class ReportRepository {
  /** Obtiene la cantidad solicitada de reportes. */
  abstract getAll(countReports: number): Observable<Report[]>;
}
