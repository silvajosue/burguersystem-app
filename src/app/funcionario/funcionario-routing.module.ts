import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultafuncionarioComponent } from './consultafuncionario/consultafuncionario.component';
import { CadfuncionarioComponent } from './pages/cadastro-funcionario/cadfuncionario.component';

const routes: Routes = [
  {
    path: '',
    component: CadfuncionarioComponent
  },
  {
    path: 'consulta',
    component: ConsultafuncionarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FuncionarioRoutingModule { }
