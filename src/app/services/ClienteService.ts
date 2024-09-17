import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../interfaces/int.interfaces';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {
  private apiUrl = 'http://localhost:5049/v1/cliente'; // API endpoint for clientes

  constructor(private http: HttpClient) {}

  getAllClientes(): Observable<{ success: boolean, response: Cliente[] }> {
    return this.http.get<{ success: boolean, response: Cliente[] }>(this.apiUrl);
  }

  getClienteById(id: number): Observable<{ success: boolean, response: Cliente }> {
    return this.http.get<{ success: boolean, response: Cliente }>(`${this.apiUrl}/${id}`);
  }

  deleteCliente(id: number): Observable<{ success: boolean }> {
    return this.http.delete<{ success: boolean }>(`${this.apiUrl}/${id}`);
  }
}
