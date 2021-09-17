import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProdutoRoutingModule } from './produto-routing.module';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { RouterModule, Routes } from '@angular/router';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProdutoRoutingModule
  ]
})
export class ProdutoModule { }
