import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadclienteComponent } from './cadcliente.component';

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
export class CadclienteRoutingModule { }
