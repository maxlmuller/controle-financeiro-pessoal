import { Component, ViewChild } from '@angular/core';
import { Despesa } from '../model/despesa';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent{
  @ViewChild('despesaForm') despesaForm!: NgForm;
  hideNull = false;

  descricao!: string;
  valor!: string;
  despesas: Despesa[] = [];

  ngOnInit() {
    const despesasSalvas = localStorage.getItem('despesas');
    if (despesasSalvas) {
      this.despesas = JSON.parse(despesasSalvas);
    }
  }

  adicionarDespesa() {
    const despesa = new Despesa(this.descricao, parseFloat(this.valor));
    this.despesas.push(despesa);
    localStorage.setItem('despesas', JSON.stringify(this.despesas));

    this.descricao = '';
    this.valor = '';
    this.despesaForm.resetForm();
  }

  calcularTotalDespesas(): number {
    return this.despesas.reduce((total, despesa) => total + despesa.valor, 0);
  }
}
