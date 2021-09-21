import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenubarModule } from 'primeng-lts/menubar';
import { MenuModule } from 'primeng/menu';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadfuncionarioComponent } from './cadfuncionario/cadfuncionario.component';
import { CadreceitaComponent } from './cadreceita/cadreceita.component';
import { CadclienteComponent } from './cadcliente/cadcliente.component';



@NgModule({
  declarations: [
    AppComponent,
    CadfuncionarioComponent,
    CadreceitaComponent,
    CadclienteComponent,
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
