import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-receitas',
  templateUrl: './receitas.component.html',
  styleUrls: ['./receitas.component.css']
})
export class ReceitasComponent implements OnInit{
  valor: string;

  constructor(private route: ActivatedRoute) {
    this.valor = '';
  }

  ngOnInit() {
    const valorParametro = this.route.snapshot.paramMap.get('valor');
    this.valor = valorParametro !== null ? valorParametro : '';
  }

}
