import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Movimentacao } from '../model/movimentacao';
import { Observable, forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent implements OnInit {

  hideBalance = false;
  modal = {
    show: false,
    title: '',
    text: '',
  };
  receitas: Movimentacao[] = [];
  despesas: Movimentacao[] = [];
  saldo!: number;
  valorReceita!: number;
  valorDespesa!: number;

  constructor(private router: Router, private http: HttpClient) {}

  onInvestmentsEvent(event: boolean) {
    this.modal.show = event;
    this.modal.title = 'Investimentos';
    this.modal.text = 'Saldo superior a R$ 1000,00, considere investir seu dinheiro.';
  }

  onCloseModal() {
    this.modal.show = false;
  }

  ngOnInit() {
    forkJoin([
      this.fetchMovimentacoes('receita'),
      this.fetchMovimentacoes('despesa')
    ]).pipe(
      map(([receitas, despesas]) => {
        this.receitas = receitas;
        this.despesas = despesas;
        return [receitas.reduce((total, movimentacao) => total + +movimentacao.valor, 0),
                despesas.reduce((total, movimentacao) => total + +movimentacao.valor, 0)];
      })
    ).subscribe(([totalReceitas, totalDespesas]) => {
      this.saldo = totalReceitas - totalDespesas;
    });
  }

  fetchMovimentacoes(tipo: string): Observable<Movimentacao[]> {
    return this.http.get<Movimentacao[]>(`http://localhost:3000/movimentacoes?tipo=${tipo}`);
  }

  enviarReceita() {
    this.router.navigate(['/receitas', this.valorReceita]);
  }

  enviarDespesa() {
    this.router.navigate(['/despesas', this.valorDespesa]);
  }
}
