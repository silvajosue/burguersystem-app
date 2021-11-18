import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './material/material.module';
import { ProdutoModule } from './produto/produto.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { ClienteModule } from './cliente/cliente.module';
import { ReceitaModule } from './receita/receita.module';
import { PedidoModule } from './pedido/pedido.module';
import { HomecozinheiroModule } from './home/homecozinheiro/homecozinheiro.module';
import { HomegerenteModule } from './home/homegerente/homegerente.module';
import { HomeatendenteModule } from './home/homeatendente/homeatendente.module';
import { ConsultaestoqueModule } from './estoque/consultaestoque/consultaestoque.module';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => LoginModule
  },
  {
    path: 'material',
    loadChildren: () => MaterialModule
  },
  {
    path: 'produto',
    loadChildren: () => ProdutoModule
  },
  {
    path: 'cadcliente',
    loadChildren: () => ClienteModule
  },
  {
    path: 'cadfuncionario',
    loadChildren: () => FuncionarioModule
  },
  {
    path: 'cadreceita',
    loadChildren: () => ReceitaModule
  },
  {
    path: 'pedido',
    loadChildren: () => PedidoModule
  },
  {
    path: 'homecozinheiro',
    loadChildren: () => HomecozinheiroModule
  },
  {
    path: 'homegerente',
    loadChildren: () => HomegerenteModule
  },
  {
    path: 'homeatendente',
    loadChildren: () => HomeatendenteModule
  },
  {
    path: 'consultaestoque',
    loadChildren: () => ConsultaestoqueModule
  },
  {
    path: 'cozinha',
    loadChildren: () => HomecozinheiroModule
  },
  {
    path: 'atendimento',
    loadChildren: () => HomeatendenteModule
  },
  {
    path: 'gerente',
    loadChildren: () => HomegerenteModule
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
