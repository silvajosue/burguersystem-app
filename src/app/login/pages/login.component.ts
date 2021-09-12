import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formulario: FormGroup;
 // login: Login = new Login();

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      username: [],
      password: []
    });
  }

  public cadastrar(): void {

  }
}
