import { Component, OnInit } from '@angular/core';
import { ClienteDTO } from 'src/app/dto/ClienteDTO';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { ClienteService } from '../../service/cliente.service';

@Component({
  selector: 'app-consultar-cliente',
  templateUrl: './consultar-cliente.component.html',
  styleUrls: ['./consultar-cliente.component.css']
})
export class ConsultarClienteComponent implements OnInit {

  public clientes: ClienteDTO[];
  private usuario: UsuarioDTO = null;
  constructor(private service: ClienteService) { }

  
  ngOnInit(): void {
    this.buscarClientes()
  }

  public buscarClientes() {
    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));
     this.service.getClientes(this.usuario).subscribe(
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
   public remover(cliente: ClienteDTO){
    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));
    
    console.log(this.usuario);
    console.log(cliente);
     if(confirm(`Deseja realmente excluir o produto "${cliente.nome}"?`)){
        this.service.deleteCliente(cliente,this.usuario).subscribe(
          sucesso => {
            console.log(sucesso);
            console.log(cliente);
            this.buscarClientes();
          },
          erro => {
            console.log(erro)
          }
        );
     }
  }

}
