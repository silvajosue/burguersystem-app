import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './material/material.module';
import { ProdutoModule } from './produto/produto.module';
import { CadclienteModule } from './cadcliente/cadcliente.module';
import { CadreceitaModule } from './cadreceita/cadreceita.module';
import { FuncionarioModule } from './funcionario/funcionario.module';

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
    loadChildren: () => CadclienteModule
  },
  {
    path:'cadfuncionario',
    loadChildren: () => FuncionarioModule
  },
  {
    path:'cadreceita',
    loadChildren: () => CadreceitaModule
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
