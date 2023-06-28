import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movimentacao } from '../model/movimentacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReceitasService {

  constructor(private http: HttpClient) {}

  atualizarListaReceitas(): Observable<Movimentacao[]> {
    return this.http.get<Movimentacao[]>('http://localhost:3000/movimentacoes?tipo=receita');
  }

  adicionarReceita(receita: Movimentacao): Observable<void> {
    return this.http.post<void>('http://localhost:3000/movimentacoes', receita);
  }
}
