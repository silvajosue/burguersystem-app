import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Role } from 'src/app/dto/Role';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { FuncionarioService } from '../../service/funcionario.service';

@Component({
  selector: 'app-cadfuncionario',
  templateUrl: './cadfuncionario.component.html',
  styleUrls: ['./cadfuncionario.component.css']
})
export class CadfuncionarioComponent implements OnInit {

  usuario: UsuarioDTO;
  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder, private service: FuncionarioService,
    private router: Router, private route: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.createForm();
    console.log("cheguei");
  }

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      nome: [],
      foto: [],
      cpf: [],
      telefone: [],
      email: [],
      senha: [],
      role: [],
      ativo: []
    });
  }

  public cadastrar(): void {
    let usuario = new UsuarioDTO();
    console.log(String(this.formulario.get('nome').value))
    usuario.nome = String(this.formulario.get('nome').value);
    usuario.$email = String(this.formulario.get('email').value);
    usuario.cpf = String(this.formulario.get('cpf').value);
    usuario.foto = String(this.formulario.get('foto').value);
    usuario.telefone = String(this.formulario.get('telefone').value);
    usuario.role = recuperaRole(Number(this.formulario.get('role').value));
    usuario.$senha = String(this.formulario.get('senha').value);
    usuario.roles.id = Number(this.formulario.get('role').value);
    usuario.ativo = Boolean(this.formulario.get('ativo').value == 0 ? false : true);

    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));

    console.log(usuario);

    this.service.postFuncionario(usuario, this.usuario).subscribe(
      (sucesso) => {
        alert(sucesso)
      },
      (erro) => {
        alert(erro)
      }
    );
  }

  public limpar(): void {
    this.formulario.reset();
  }

}
function recuperaRole(value: Number): String {

  switch (value) {
    case 1:
      return "ROLE_GARCOM";
    case 2:
      return "ROLE_GERENTE";
    case 3:
      return "ROLE_ATENDENTE"
    case 4:
      return "ROLE_COZINHEIRO";
    case 5:
      return "ROLE_ENTREGADOR";

  }

}

