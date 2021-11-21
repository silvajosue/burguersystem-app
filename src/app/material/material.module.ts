import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialRoutingModule } from './material-routing.module';
import { CardModule } from 'primeng-lts/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CadastrarMaterialComponent } from './pages/cadastrar-material/cadastrar-material.component';
import { HttpClientModule } from '@angular/common/http';
import { FieldsetModule } from 'primeng-lts/fieldset';
import { InputTextModule } from 'primeng-lts/inputtext';
import { ButtonModule } from 'primeng-lts/button';
import { MaterialService } from './service/material.service';
import { ConsultarMaterialComponent } from './pages/consultar-material/consultar-material.component';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [CadastrarMaterialComponent, ConsultarMaterialComponent],
  imports: [
    CommonModule,
    MaterialRoutingModule,
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
  providers: [MaterialRoutingModule, MaterialService]
})
export class MaterialModule { }
