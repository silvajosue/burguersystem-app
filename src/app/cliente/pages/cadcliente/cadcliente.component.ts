import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ClienteDTO } from 'src/app/dto/ClienteDTO';
import { EnderecoDTO } from 'src/app/dto/EnderecoDTO';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { ClienteService } from '../../service/cliente.service';
import { EnderecoService } from '../../service/endereco.service';

@Component({
  selector: 'app-cadcliente',
  templateUrl: './cadcliente.component.html',
  styleUrls: ['./cadcliente.component.css']
})
export class CadclienteComponent implements OnInit {

  public cliente: ClienteDTO;
  public endereco: EnderecoDTO;
  public usuario: UsuarioDTO;
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: ClienteService, private enderecoService: EnderecoService) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      nome: [],
      telefone: [],
      cpf: [],
      logradouro: [],
      numero: [],
      bairro: [],
      cidade: [],
      complemento: [],
    });
  }

  public cadastrar(): void {

    this.cliente = new ClienteDTO();
    console.log(String(this.formulario.get('nome').value))
    this.cliente.nome = String(this.formulario.get('nome').value);
    this.cliente.telefone = String(this.formulario.get('telefone').value);
    this.cliente.cpf = String(this.formulario.get('cpf').value);

    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));

    this.service.postCliente(this.cliente, this.usuario).subscribe(
      (sucesso) => {
        console.log(sucesso);
        this.cliente = sucesso;
        this.cadastrarEndereco();
      }, 
      (erro) => {
        console.log(erro);
        alert(erro)
      }
    );
    
    console.log(this.cliente);

  }

  private cadastrarEndereco() {
    this.endereco = new EnderecoDTO();

    this.endereco.logradouro = String(this.formulario.get('logradouro').value);
    this.endereco.numero = Number(this.formulario.get('numero').value);
    this.endereco.bairro = String(this.formulario.get('bairro').value);
    this.endereco.cidade = String(this.formulario.get('cidade').value);
    this.endereco.complemento = String(this.formulario.get('complemento').value);

    this.endereco.cliente = this.cliente;

    console.log(this.endereco);


    this.enderecoService.postEndereco(this.endereco, this.usuario).subscribe(
      (sucesso) => {
        setTimeout(() => {
          alert(sucesso);
        }, 3000); 
        this.limpar();
      },
      (erro) => {
        alert(erro);
      }
    );
  }

  public limpar(): void {
    this.formulario.reset();
    alert("Ok");
  }



}
