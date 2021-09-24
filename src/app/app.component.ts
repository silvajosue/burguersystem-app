import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng-lts/api/menuitem';
import { UsuarioDTO } from './login/model/UsuarioDTO';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'burguersystem-app';
  items: MenuItem[];

  ngOnInit() {
    this.items = [
      {
        label: 'Login',
        icon: 'pi pi-fw pi-plus',
        routerLink: 'login'
      },
      {
        label: 'Material',
        icon: 'pi pi-fw pi-plus',
        routerLink: 'material'
      },
      {
        label: 'Produto',
        icon: 'pi pi-fw pi-plus',
        routerLink: 'produto'
      },
      {
        label: 'Cliente',
        icon: 'pi pi-fw pi-plus',
        routerLink: 'cadcliente'
      },
      {
        label: 'Funcionario',
        icon: 'pi pi-fw pi-plus',
        routerLink: 'cadfuncionario'
      },
      {
        label: 'Receita',
        icon: 'pi pi-fw pi-plus',
        routerLink: 'cadreceita'
      },
    ]
  }
}
