import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadreceitaComponent } from './pages/cadreceita/cadreceita.component';

const routes: Routes = [
  {
    path: '',
    component: CadreceitaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReceitaRoutingModule { }
