import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Movimentacao } from '../model/movimentacao';
import { DespesasService } from './despesas.service';
import { ActivatedRoute } from '@angular/router';

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

  constructor(
    private despesasService: DespesasService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.atualizarListaDespesas();
    this.route.params.subscribe(params => {
      this.valor = +params['valor'];
    });
  }

  atualizarListaDespesas() {
    this.despesasService.atualizarListaDespesas().subscribe(data => {
      this.despesas = data;
    });
  }

  adicionarDespesa() {
    const despesa: Movimentacao = {
      descricao: this.descricao,
      valor: this.valor,
      tipo: 'despesa'
    };

    this.despesasService.adicionarDespesa(despesa).subscribe({
      next: () => {
        this.erroDespesa = false;
        this.mensagemDespesa = 'Despesa cadastrada com sucesso!';
        this.atualizarListaDespesas();
      },
      error: () => {
        this.erroDespesa = true;
        this.mensagemDespesa = 'Erro ao cadastrar despesa!';
      }
    });

    this.despesaForm.resetForm();
  }

  calcularTotalDespesas(): number {
    return this.despesas.reduce((total, movimentacao) => total + +movimentacao.valor, 0);
  }
}
