import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginModule } from './login/login.module';
import { MaterialModule } from './material/material.module';

const routes: Routes = [
  {
    path:'login',
    loadChildren: () => LoginModule
  },
  {
    path:'material',
    loadChildren: () => MaterialModule
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
