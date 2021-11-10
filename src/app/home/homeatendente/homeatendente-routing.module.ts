import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeatendenteComponent } from './homeatendente.component';

const routes: Routes = [
  {
    path: '',
    component: HomeatendenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeatendenteRoutingModule { }
