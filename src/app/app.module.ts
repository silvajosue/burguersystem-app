import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import {MenubarModule} from 'primeng-lts/menubar';
import {MenuModule} from 'primeng/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CadastrarMaterialComponent } from './material/pages/cadastrar-material/cadastrar-material.component';


@NgModule({
  declarations: [
    AppComponent,
    CadastrarMaterialComponent
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
