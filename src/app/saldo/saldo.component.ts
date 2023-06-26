import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Movimentacao } from '../model/movimentacao';
import { Observable } from 'rxjs';

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
    this.fetchMovimentacoes('receita').subscribe(data => {
      this.receitas = data;
      this.calcularSaldo();
    });

    this.fetchMovimentacoes('despesa').subscribe(data => {
      this.despesas = data;
      this.calcularSaldo();
    });
  }

  fetchMovimentacoes(tipo: string): Observable<Movimentacao[]> {
    return this.http.get<Movimentacao[]>(`http://localhost:3000/movimentacoes?tipo=${tipo}`);
  }

  calcularSaldo(): void {
    const totalReceitas = this.receitas.reduce((total, movimentacao) => total + +movimentacao.valor, 0);
    const totalDespesas = this.despesas.reduce((total, movimentacao) => total + +movimentacao.valor, 0);
    this.saldo = totalReceitas - totalDespesas;
  }
}
