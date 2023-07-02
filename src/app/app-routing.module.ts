import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SaldoComponent } from './saldo/saldo.component';
import { ReceitasComponent } from './receitas/receitas.component';
import { DespesasComponent } from './despesas/despesas.component';

const routes: Routes = [
  { path: '', redirectTo: '/saldo', pathMatch: 'full' },
  { path: 'saldo', component: SaldoComponent },
  { path: 'receitas', component: ReceitasComponent },
  { path: 'despesas', component: DespesasComponent },
  { path: 'receitas/:valor', component: ReceitasComponent },
  { path: 'despesas/:valor', component: DespesasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
