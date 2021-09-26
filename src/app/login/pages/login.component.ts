import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';
import { Login } from '../model/Login';
import { UsuarioDTO } from '../model/UsuarioDTO';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
  login: Login = new Login();
  usuario: UsuarioDTO;

  constructor(private formBuilder: FormBuilder, private service: LoginService,  
              private router: Router,  private route: ActivatedRoute,
              ) { }

  ngOnInit(): void {
    this.createForm();
    console.log("cheguei");
  }

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      username: [],
      password: []
    });
  }

  public entrar(): void {
    this.login = new Login();
    this.login.$email = this.formulario.get("username").value;
    this.login.$senha = this.formulario.get("password").value;

    this.service.realizarLogin(this.login).subscribe(
      sucesso => {
        console.log(sucesso);
        this.usuario = sucesso;
        console.log(moment(this.usuario.tempoSessao).format("DD/MM/YYYY HH:mm:ss"))
        sessionStorage.setItem("usuarioSessao", JSON.stringify(this.usuario));
        this.router.navigate(['../material'])
      }, 
      erro => {
        alert(erro);
      }
    )

  }
}
