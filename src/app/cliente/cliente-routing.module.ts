import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadclienteComponent } from './pages/cadcliente/cadcliente.component';

const routes: Routes = [
  {
    path: '',
    component: CadclienteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClienteRoutingModule { }
