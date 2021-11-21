import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng-lts/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FieldsetModule } from 'primeng-lts/fieldset';
import { InputTextModule } from 'primeng-lts/inputtext';
import { ButtonModule } from 'primeng-lts/button';
import { CadclienteComponent } from './pages/cadcliente/cadcliente.component';
import { ClienteRoutingModule } from './cliente-routing.module';
import { ConsultarClienteComponent } from './pages/consultar-cliente/consultar-cliente.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [CadclienteComponent, ConsultarClienteComponent],
  imports: [
    CommonModule,
    ClienteRoutingModule,
    CardModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    FieldsetModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    TableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ClienteRoutingModule]
})
export class ClienteModule { }
