import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarMaterialComponent } from './pages/cadastrar-material/cadastrar-material.component';
import { ConsultarMaterialComponent } from './pages/consultar-material/consultar-material.component';

const routes: Routes = [
  {
    path: '',
    component: CadastrarMaterialComponent
  }, 
  {
    path: 'consultar',
    component: ConsultarMaterialComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MaterialRoutingModule { }
