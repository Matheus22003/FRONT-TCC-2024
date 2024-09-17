import { Observable } from "rxjs";

export class MetricsService {
    private apiUrl = 'http://localhost:5049/v1/metrics';

    getAllFibras(): Observable<{ success: boolean, response: Fibra[] }> {
        return this.http.get<{ success: boolean, response: Fibra[] }>(this.apiUrl);
    }
}