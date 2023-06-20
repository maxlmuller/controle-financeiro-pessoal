import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit{
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
