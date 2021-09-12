import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarMaterialComponent } from './pages/cadastrar-material/cadastrar-material.component';

const routes: Routes = [
  {
    path: '',
    component: CadastrarMaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
