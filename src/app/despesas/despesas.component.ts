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
    const despesa = { descricao: this.descricao, valor: this.valor, tipo: 'despesa' };
    fetch('http://localhost:3000/movimentacoes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(despesa)
    })
      .then(() => {
        console.log('Despesa cadastrada com sucesso!');
        // Redirecionar para a página de saldo ou atualizar a lista de despesas, se necessário
      })
      .catch(error => {
        console.error('Erro ao cadastrar despesa:', error);
      });

/*     const despesa = new Despesa(this.descricao, parseFloat(this.valor));
    this.despesas.push(despesa);
    localStorage.setItem('despesas', JSON.stringify(this.despesas)); */

    this.descricao = '';
    this.valor = '';
    this.despesaForm.resetForm();
  }

  calcularTotalDespesas(): number {
    return this.despesas.reduce((total, despesa) => total + despesa.valor, 0);
  }
}
