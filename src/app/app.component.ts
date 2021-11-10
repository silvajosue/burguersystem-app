import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
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
        items: [
          { label: 'Cadastrar', routerLink: 'cadreceita/' },
          { label: 'Consultar', routerLink: 'cadreceita/consulta' },
        ]
      },
      {
        label: 'Pedido',
        icon: 'pi pi-fw pi-plus',
        items: [
          { label: 'Cadastrar', routerLink: 'pedido/' },
          { label: 'Consultar', routerLink: 'pedido/consultar' },
        ]
      },
      {
        label: 'Cozinha',
        icon: 'pi pi-fw pi-plus',
        routerLink: 'cozinha'
      },
      {
        label: 'Atendimento',
        icon: 'pi pi-fw pi-plus',
        routerLink: 'atendimento'
      },
      {
        label: 'Gerente',
        icon: 'pi pi-fw pi-plus',
        routerLink: 'gerente'
      }
    ]

    setTimeout(() => {
      let usuario: UsuarioDTO = JSON.parse(sessionStorage.getItem("usuarioSessao"));
      let dataModifica = new Date(document.lastModified);
      if (moment(usuario.tempoSessao).isAfter(dataModifica)) {
        sessionStorage.clear();
      }
    }, 960000);
  }

}
