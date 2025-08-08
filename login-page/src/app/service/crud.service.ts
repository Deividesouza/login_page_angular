import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../pages/crud/crud.model';  // ajuste o caminho conforme o seu projeto

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private readonly apiUrl = 'http://localhost:8080/api/usuarios';

  constructor(private readonly http: HttpClient) { }

  listar(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.apiUrl);
  }

  buscarPorId(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apiUrl}/${id}`);
  }

  criar(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apiUrl}/cadastrar`, usuario);
  }

  atualizar(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apiUrl}/${id}`, usuario);
  }

  deletar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
