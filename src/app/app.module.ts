import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng-lts/menubar';
import { MenuModule } from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadpedidoComponent } from './cadpedido/cadpedido.component';
import { HomecozinheiroComponent } from './homecozinheiro/homecozinheiro.component';
import { HomegerenteComponent } from './homegerente/homegerente.component';
import { HomeatendenteComponent } from './homeatendente/homeatendente.component';
import { StatuspedidoComponent } from './statuspedido/statuspedido.component';
import { ConsultaestoqueComponent } from './consultaestoque/consultaestoque.component';
import { ConsultafuncionarioComponent } from './consultafuncionario/consultafuncionario.component';
import { ConsultareceitaComponent } from './consultareceita/consultareceita.component';

@NgModule({
  declarations: [
    AppComponent,
    CadpedidoComponent,
    HomecozinheiroComponent,
    HomegerenteComponent,
    HomeatendenteComponent,
    StatuspedidoComponent,
    ConsultaestoqueComponent,
    ConsultafuncionarioComponent,
    ConsultareceitaComponent,
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
