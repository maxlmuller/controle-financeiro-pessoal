import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit{
  valor: string;
  hideNull = false;

  constructor(private route: ActivatedRoute) {
    this.valor = '';
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.valor = params['valor'];
      if (this.valor === undefined || this.valor === null || this.valor === '') {
        this.hideNull = true;
      }
    });
  }
}
