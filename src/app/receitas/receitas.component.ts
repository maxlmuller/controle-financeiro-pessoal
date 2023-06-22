import { Component, ViewChild } from '@angular/core';
import { Receita } from '../model/receita';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent{
  @ViewChild('receitaForm') receitaForm!: NgForm;
  hideNull = false;

  descricao!: string;
  valor!: string;
  receitas: Receita[] = [];

  ngOnInit() {
    const receitasSalvas = localStorage.getItem('receitas');
    if (receitasSalvas) {
      this.receitas = JSON.parse(receitasSalvas);
    }
  }

  adicionarReceita() {
    const receita = new Receita(this.descricao, parseFloat(this.valor));
    this.receitas.push(receita);
    localStorage.setItem('receitas', JSON.stringify(this.receitas));

    this.descricao = '';
    this.valor = '';
    this.receitaForm.resetForm();
  }

  calcularTotalReceitas(): number {
    return this.receitas.reduce((total, receita) => total + receita.valor, 0);
  }
}
