import { Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-painel-saldo',
  templateUrl: './painel-saldo.component.html',
  styleUrls: ['./painel-saldo.component.css']
})
export class PainelSaldoComponent implements OnInit, OnChanges{
  @Input() saldo: number = 0;
  @Output() investmentsEvent = new EventEmitter<boolean>();
  backgroundColor = 'light-green-background';

  constructor() {}

  ngOnChanges(): void {
    if (this.saldo > 1000)
      setTimeout(() => {
        this.investmentsEvent.emit(true);
      }, 4000);
  }

  ngOnInit(): void {}
}
