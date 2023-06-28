import { Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

@Component({
  selector: 'app-painel-saldo',
  templateUrl: './painel-saldo.component.html',
  styleUrls: ['./painel-saldo.component.css']
})
export class PainelSaldoComponent implements OnChanges{
  @Input() saldo: number = 0;
  @Output() investmentsEvent = new EventEmitter<boolean>();
  backgroundColor = 'light-green-background';

  constructor() {}

  ngOnChanges(): void {
    if (this.saldo < 0){
      this.backgroundColor = 'light-red-background';}
      else{
        this.backgroundColor = 'light-green-background';
      }
    if (this.saldo > 999)
      setTimeout(() => {this.investmentsEvent.emit(true);}, 4000);
  }
}
