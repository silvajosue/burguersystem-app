import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { ConsultaestoqueComponent } from './consultaestoque/consultaestoque.component';

const routes: Routes = [
  {
    path: '',
    component: CadastrarProdutoComponent
  },
  {
    path: 'consulta',
    component: ConsultaestoqueComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
