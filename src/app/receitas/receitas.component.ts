import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Movimentacao } from '../model/movimentacao';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent {
  @ViewChild('receitaForm') receitaForm!: NgForm;
  hideNull = false;

  descricao!: string;
  valor!: number;
  receitas: Movimentacao[] = [];
  erroReceita = false;
  mensagemReceita = '';

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.atualizarListaReceitas().subscribe(data => {
      this.receitas = data;
    });
  }

  atualizarListaReceitas(): Observable<Movimentacao[]> {
    return this.http.get<Movimentacao[]>('http://localhost:3000/movimentacoes?tipo=receita');
  }

  adicionarReceita() {
    const receita = { descricao: this.descricao, valor: this.valor, tipo: 'receita' };
    fetch('http://localhost:3000/movimentacoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(receita)
    })
      .then(() => {
        this.erroReceita = false;
        this.mensagemReceita = 'Receita cadastrada com sucesso!';
        this.atualizarListaReceitas().subscribe(data => {
          this.receitas = data;
        });
      })
      .catch((error) => {
        this.erroReceita = true;
        this.mensagemReceita = 'Erro ao cadastrar receita!';
      });

    this.receitaForm.resetForm();
  }

  calcularTotalReceitas(): number {
    return this.receitas.reduce((total, movimentacao) => total + +movimentacao.valor, 0);
  }
}
