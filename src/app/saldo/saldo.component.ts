import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saldo',
  templateUrl: './saldo.component.html',
  styleUrls: ['./saldo.component.css']
})
export class SaldoComponent {
  constructor(private router: Router) {}

  navegarParaReceitas() {
    this.router.navigate(['/receitas', '200']);
  }

  navegarParaDespesas() {
    this.router.navigate(['/despesas', '300']);
  }
}
