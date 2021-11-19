import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';

@Component({
  selector: 'app-consultafuncionario',
  templateUrl: './consultafuncionario.component.html',
  styleUrls: ['./consultafuncionario.component.css']
})
export class ConsultafuncionarioComponent implements OnInit {
  public funcionario: UsuarioDTO;
  formulario: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
    this.funcionario = new UsuarioDTO();
  }

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      foto: [],
      nome: [],
      cpf: [],
      telefone: [],
      email: [],
      senha: [],
      role: [],  
    });
  }
  
  
  public alteraNome(){
    this.funcionario.nome = String(this.formulario.get('nome').value);
    console.log(this.funcionario);
  }
  public alteraCPF(){
    this.funcionario.cpf = String(this.formulario.get('cpf').value);
    console.log(this.funcionario);
  }
  public alteraTelefone(){
    this.funcionario.telefone = String(this.formulario.get('telefone').value);
    console.log(this.funcionario);
  }
  public alteraEmail(){
    this.funcionario.email = String(this.formulario.get('email').value);
    console.log(this.funcionario);
  }
  public alteraSenha(){
    //this.funcionario.senha = String(this.formulario.get('senha').value);
    console.log(this.funcionario);
  }
  public alteraRole(){
    this.funcionario.role = String(this.formulario.get('role').value);
    console.log(this.funcionario);
  }

}
