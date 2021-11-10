import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomegerenteComponent } from './homegerente.component';

const routes: Routes = [
  {
    path: '',
    component: HomegerenteComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomegerenteRoutingModule { }
