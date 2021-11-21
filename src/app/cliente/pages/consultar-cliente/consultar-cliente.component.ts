import { Component, OnInit } from '@angular/core';
import { ClienteDTO } from 'src/app/dto/ClienteDTO';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {

  public clientes: ClienteDTO[];

  constructor(private service: ClienteService) { }

  
  ngOnInit(): void {
    this.buscarClientes()
  }

  public buscarClientes() {
    let usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));
 
     this.service.getClientes(usuario).subscribe(
       sucesso => {
         this.clientes = sucesso;
         console.log(this.clientes);
       },
       erro => {
         console.log(erro)
         alert(erro);
       }
     );
   }

}
