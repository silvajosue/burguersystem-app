
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng-lts/button';
import { CardModule } from 'primeng-lts/card';
import { FieldsetModule } from 'primeng-lts/fieldset';
import { InputTextModule } from 'primeng-lts/inputtext';
import { MaterialRoutingModule } from '../material/material-routing.module';
import { CadastrarProdutoComponent } from './cadastrar-produto/cadastrar-produto.component';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoService } from './service/produto.service';




@NgModule({
  declarations: [CadastrarProdutoComponent],
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
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ProdutoRoutingModule, ProdutoService]
})
export class ProdutoModule { }