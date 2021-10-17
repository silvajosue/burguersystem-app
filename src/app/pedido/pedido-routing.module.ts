import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadpedidoComponent } from './pages/cadpedido/cadpedido.component';
import { StatuspedidoComponent } from './pages/statuspedido/statuspedido.component';

const routes: Routes = [
  {
    path: '',
    component: CadpedidoComponent
  },
  {
    path: 'consultar',
    component: StatuspedidoComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidoRoutingModule { }
