import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent {

  hideBalance = false;
  modal = {
    show: false,
    title: '',
    text: '',
  };

  constructor(private router: Router) {}

  passarParaReceitas() {
    this.router.navigate(['/receitas'], { queryParams: { valor: '100' } });
  }

  passarParaDespesas() {
    this.router.navigate(['/despesas'], { queryParams: { valor: '100' } });
  }

  onInvestmentsEvent(event: boolean) {
    this.modal.show = event;
    this.modal.title = 'Investimentos';
    this.modal.text = 'Saldo superior a R$ 1000,00, considere investir seu dinheiro.';
  }

  onCloseModal() {
    this.modal.show = false;
  }
}
