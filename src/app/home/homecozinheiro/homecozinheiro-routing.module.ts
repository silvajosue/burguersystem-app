import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomecozinheiroComponent } from './homecozinheiro.component';

const routes: Routes = [
  {
    path: '',
    component: HomecozinheiroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomecozinheiroRoutingModule { }
