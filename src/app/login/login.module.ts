import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './pages/login.component';

import {InputTextModule} from 'primeng-lts/inputtext';
import {CardModule} from 'primeng-lts/card';
import {ButtonModule} from 'primeng-lts/button';
import {FieldsetModule} from 'primeng-lts/fieldset';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    LoginRoutingModule,
    HttpClientModule,
    CardModule,
    FieldsetModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    ButtonModule,
  ],
  providers: [LoginRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class LoginModule { }
