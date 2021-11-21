
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng-lts/button';
import { CardModule } from 'primeng-lts/card';
import { FieldsetModule } from 'primeng-lts/fieldset';
import { InputTextModule } from 'primeng-lts/inputtext';
import { DropdownModule } from 'primeng-lts/dropdown';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoService } from './service/produto.service';
import { ConsultaestoqueComponent } from './consultaestoque/consultaestoque.component';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [CadastrarProdutoComponent, ConsultaestoqueComponent],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    CardModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    FieldsetModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
    DropdownModule,
    TableModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProdutoRoutingModule, ProdutoService]
})
export class ProdutoModule { }
