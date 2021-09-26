import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadfuncionarioComponent } from './pages/cadastro-funcionario/cadfuncionario.component';

const routes: Routes = [
  {
    path: '',
    component: CadfuncionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
