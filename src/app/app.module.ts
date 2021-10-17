import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng-lts/menubar';
import { MenuModule } from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadpedidoComponent } from './pedido/pages/cadpedido/cadpedido.component';
import { HomecozinheiroComponent } from './home/homecozinheiro/homecozinheiro.component';
import { HomegerenteComponent } from './home/homegerente/homegerente.component';
import { HomeatendenteComponent } from './home/homeatendente/homeatendente.component';
import { StatuspedidoComponent } from './pedido/pages/statuspedido/statuspedido.component';
import { ConsultaestoqueComponent } from './estoque/consultaestoque/consultaestoque.component';
import { ConsultafuncionarioComponent } from './funcionario/consultafuncionario/consultafuncionario.component';

@NgModule({
  declarations: [
    AppComponent,
    CadpedidoComponent,
    HomecozinheiroComponent,
    HomegerenteComponent,
    HomeatendenteComponent,
    StatuspedidoComponent,
    ConsultaestoqueComponent,
    ConsultafuncionarioComponent
  ],
  imports: [
    BrowserModule,
    MenubarModule,
    MenuModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
