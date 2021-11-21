import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadfuncionarioComponent } from './pages/cadastro-funcionario/cadfuncionario.component';
import { ConsultafuncionarioComponent } from './pages/consultafuncionario/consultafuncionario.component';

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
