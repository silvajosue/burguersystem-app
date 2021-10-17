import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './material/material.module';
import { ProdutoModule } from './produto/produto.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { ClienteModule } from './cliente/cliente.module';
import { ReceitaModule } from './receita/receita.module';
import { CadpedidoModule } from './cadpedido/cadpedido.module';
import { HomecozinheiroModule } from './homecozinheiro/homecozinheiro.module';
import { HomegerenteModule } from './homegerente/homegerente.module';
import { HomeatendenteModule } from './homeatendente/homeatendente.module';
import { StatuspedidoModule } from './statuspedido/statuspedido.module';
import { ConsultaestoqueModule } from './consultaestoque/consultaestoque.module';
import { ConsultafuncionarioModule } from './consultafuncionario/consultafuncionario.module';
import { ConsultareceitaModule } from './consultareceita/consultareceita.module';


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
    loadChildren: () => CadpedidoModule
  },
  {
    path:'homecozinheiro',
    loadChildren: () => HomecozinheiroModule
  },
  {
    path:'homegerente',
    loadChildren: () => HomegerenteModule
  },
  {
    path:'homeatendente',
    loadChildren: () => HomeatendenteModule
  },
  {
    path:'statuspedido',
    loadChildren: () => StatuspedidoModule
  },
  {
    path:'consultaestoque',
    loadChildren: () => ConsultaestoqueModule
  },
  {
    path:'consultafuncionario',
    loadChildren: () => ConsultafuncionarioModule
  },
  {
    path:'consultareceita',
    loadChildren: () => ConsultareceitaModule
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
