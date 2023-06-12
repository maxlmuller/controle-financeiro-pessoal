import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'controle-financeiro-pessoal';
  hideBalance = false;
  public saldo;
  constructor() {
    this.saldo = "R$ 190,00";
  }

  ngOnInit(): void {}
}
