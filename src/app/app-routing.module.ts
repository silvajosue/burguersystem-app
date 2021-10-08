import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './material/material.module';
import { ProdutoModule } from './produto/produto.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { ClienteModule } from './cliente/cliente.module';
import { ReceitaModule } from './receita/receita.module';
import { cadpedidoModule } from './cadpedido/cadpedido.module';
import { homecozinheiroModule } from './homecozinheiro/homecozinheiro.module';
import { homegerenteModule } from './homegerente/homegerente.module';
import { homeatendenteModule } from './homeatendente/homeatendente.module';
import { statuspedidoModule } from './statuspedido/statuspedido.module';
import { consultaestoqueModule } from './consultaestoque/consultaestoque.module';
import { consultafuncionarioModule } from './consultafuncionario/consultafuncionario.module';
import { consultareceitaModule } from './consultareceita/consultareceita.module';

const routes: Routes = [
  {
    path:'login',
    loadChildren: () => LoginModule
  },
  {
    path:'material',
    loadChildren: () => MaterialModule
  },
  {
    path:'produto',
    loadChildren: () => ProdutoModule
  },
  {
    path:'cadcliente',
    loadChildren: () => ClienteModule
  },
  {
    path:'cadfuncionario',
    loadChildren: () => FuncionarioModule
  },
  {
    path:'cadreceita',
    loadChildren: () => ReceitaModule
  },
  {
    path:'cadpedido',
    loadChildren: () => cadpedidoModule
  },
  {
    path:'homecozinheiro',
    loadChildren: () => homecozinheiroModule
  },
  {
    path:'homegerente',
    loadChildren: () => homegerenteModule
  },
  {
    path:'homeatendente',
    loadChildren: () => homeatendenteModule
  },
  {
    path:'statuspedido',
    loadChildren: () => statuspedidoModule
  },
  {
    path:'consultaestoque',
    loadChildren: () => consultaestoqueModule
  },
  {
    path:'consultafuncionario',
    loadChildren: () => consultafuncionarioModule
  },
  {
    path:'consultareceita',
    loadChildren: () => consultareceitaModule
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
