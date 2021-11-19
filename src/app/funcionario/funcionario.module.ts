import { CUSTOM_ELEMENTS_SCHEMA,NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FuncionarioRoutingModule } from './funcionario-routing.module';
import { CadfuncionarioComponent } from './pages/cadastro-funcionario/cadfuncionario.component';
import { CardModule } from 'primeng-lts/card';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FieldsetModule } from 'primeng-lts/fieldset';
import { InputTextModule } from 'primeng-lts/inputtext';
import { ButtonModule } from 'primeng-lts/button';
import { FuncionarioService } from './service/funcionario.service';
import { ConsultafuncionarioComponent } from './consultafuncionario/consultafuncionario.component';



@NgModule({
  declarations: [
      CadfuncionarioComponent, 
      ConsultafuncionarioComponent
    ],
  
  imports: [
    CommonModule,
    FuncionarioRoutingModule,
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
  providers: [FuncionarioRoutingModule, FuncionarioService]
})
export class FuncionarioModule { }
