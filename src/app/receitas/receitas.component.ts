import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movimentacao } from '../model/movimentacao';
import { ReceitasService } from './receitas.service';

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

  constructor(
    private receitasService: ReceitasService
  ) {}

  ngOnInit() {
    this.atualizarListaReceitas();
  }

  atualizarListaReceitas() {
    this.receitasService.atualizarListaReceitas().subscribe(data => {
      this.receitas = data;
    });
  }

  adicionarReceita() {
    const receita: Movimentacao = {
      descricao: this.descricao,
      valor: this.valor,
      tipo: 'receita'
    };

    this.receitasService.adicionarReceita(receita).subscribe({
      next: () => {
        this.erroReceita = false;
        this.mensagemReceita = 'Receita cadastrada com sucesso!';
        this.atualizarListaReceitas();
      },
      error: () => {
        this.erroReceita = true;
        this.mensagemReceita = 'Erro ao cadastrar receita!';
      }
    });

    this.receitaForm.resetForm();
  }

  calcularTotalReceitas(): number {
    return this.receitas.reduce((total, movimentacao) => total + +movimentacao.valor, 0);
  }
}
