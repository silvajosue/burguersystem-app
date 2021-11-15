import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng-lts/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FieldsetModule } from 'primeng-lts/fieldset';
import { InputTextModule } from 'primeng-lts/inputtext';
import { ButtonModule } from 'primeng-lts/button';
import { DropdownModule } from 'primeng-lts/dropdown';
import { PedidoRoutingModule } from './pedido-routing.module';
import { CadpedidoComponent } from './pages/cadpedido/cadpedido.component';


@NgModule({
  declarations: [CadpedidoComponent],
  imports: [
    CommonModule,
    PedidoRoutingModule,
    CardModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    FieldsetModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class PedidoModule { }
