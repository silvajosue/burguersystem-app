import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadclienteComponent } from './pages/cadcliente/cadcliente.component';
import { ConsultarClienteComponent } from './pages/consultar-cliente/consultar-cliente.component';

const routes: Routes = [
  {
    path: '',
    component: CadclienteComponent
  },
  {
    path: 'consulta',
    component: ConsultarClienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClienteRoutingModule { }
