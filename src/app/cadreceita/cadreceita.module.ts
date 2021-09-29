import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CadreceitaRoutingModule } from './cadreceita-routing.module';
import { CardModule } from 'primeng-lts/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FieldsetModule } from 'primeng-lts/fieldset';
import { InputTextModule } from 'primeng-lts/inputtext';
import { ButtonModule } from 'primeng-lts/button';
import { CadreceitaComponent } from './cadreceita.component';


@NgModule({
  declarations: [CadreceitaComponent],
  imports: [
    CommonModule,
    CardModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    FieldsetModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [CadreceitaRoutingModule]
})
export class CadreceitaModule { }
