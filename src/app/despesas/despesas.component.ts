import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Movimentacao } from '../model/movimentacao';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent {
  @ViewChild('despesaForm') despesaForm!: NgForm;
  hideNull = false;

  descricao!: string;
  valor!: number;
  despesas: Movimentacao[] = [];
  erroDespesa = false;
  mensagemDespesa = '';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.atualizarListaDespesas().subscribe(data => {
      this.despesas = data;
    });
  }

  atualizarListaDespesas(): Observable<Movimentacao[]> {
    return this.http.get<Movimentacao[]>('http://localhost:3000/movimentacoes?tipo=despesa');
  }

  adicionarDespesa() {
    const despesa = { descricao: this.descricao, valor: this.valor, tipo: 'despesa' };
    fetch('http://localhost:3000/movimentacoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(despesa)
    })
      .then(() => {
        this.erroDespesa = false;
        this.mensagemDespesa = 'Despesa cadastrada com sucesso!';
        this.atualizarListaDespesas().subscribe(data => {
          this.despesas = data;
        });
      })
      .catch((error) => {
        this.erroDespesa = true;
        this.mensagemDespesa = 'Erro ao cadastrar despesa!';
      });

    this.despesaForm.resetForm();
  }

  calcularTotalDespesas(): number {
    return this.despesas.reduce((total, movimentacao) => total + +movimentacao.valor, 0);
  }
}
