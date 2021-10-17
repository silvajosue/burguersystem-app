import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadreceitaComponent } from './pages/cadreceita/cadreceita.component';
import { ConsultareceitaComponent } from './pages/consultareceita/consultareceita.component';

const routes: Routes = [
  {
    path: '',
    component: CadreceitaComponent
  },
  {
    path: 'consulta',
    component: ConsultareceitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitaRoutingModule { }
