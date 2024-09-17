import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente, Fibra } from '../interfaces/int.interfaces';

@Injectable({
    providedIn: 'root'
})
export class FibraService {
    private apiUrl = 'http://localhost:5049/v1/fibra'; // API endpoint for fibras

    constructor(private http: HttpClient) { }

    getAllFibras(): Observable<{ success: boolean, response: Fibra[] }> {
        return this.http.get<{ success: boolean, response: Fibra[] }>(this.apiUrl);
    }

    getAllClientesPorFibra(): Observable<{ success: boolean, response: { tipo: string, clientes: Cliente[] } }> {
        return this.http.get<{ success: boolean, response: { tipo: string, clientes: Cliente[] } }>(`${this.apiUrl}/clientes-por-tipo`);
    }

    getFibraById(id: number): Observable<{ success: boolean, response: Fibra }> {
        return this.http.get<{ success: boolean, response: Fibra }>(`${this.apiUrl}/${id}`);
    }

    deleteFibra(id: number): Observable<{ success: boolean }> {
        return this.http.delete<{ success: boolean }>(`${this.apiUrl}/${id}`);
    }
}
