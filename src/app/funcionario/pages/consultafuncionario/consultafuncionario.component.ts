import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { LoginService } from 'src/app/login/service/login.service';
import { FuncionarioService } from '../../service/funcionario.service';

@Component({
  selector: 'app-consultafuncionario',
  templateUrl: './consultafuncionario.component.html',
  styleUrls: ['./consultafuncionario.component.css']
})
export class ConsultafuncionarioComponent implements OnInit {

  formulario: FormGroup;
  usuario: UsuarioDTO;
  funcionarios: UsuarioDTO[];

  constructor(private formBuilder: FormBuilder, private service: FuncionarioService) { }

  ngOnInit(): void {
    this.buscaFuncionarios();
  }
  
  buscaFuncionarios() {
   this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));

    this.service.getFuncionarios(this.usuario).subscribe(
      sucesso => {
        this.funcionarios = sucesso;
        console.log(this.funcionarios);
      },
      erro => {
        console.log(erro)
        alert(erro);
      }
    );
  }

  public remover(funcionario: UsuarioDTO){
    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));
    
     console.log(this.usuario);
     if(confirm(`Deseja realmente excluir o usuário "${funcionario.nome}"?`)){
        this.service.deleteFuncionario(funcionario,this.usuario).subscribe(
          sucesso => {
            console.log(sucesso);
            console.log(this.funcionarios);
            this.buscaFuncionarios();
          },
          erro => {
            console.log(erro)
          }
        );
     }
  }

}
