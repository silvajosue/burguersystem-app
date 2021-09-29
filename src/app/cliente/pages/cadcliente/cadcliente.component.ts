import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadcliente',
  templateUrl: './cadcliente.component.html',
  styleUrls: ['./cadcliente.component.css']
})
export class CadclienteComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public cadastrar(): void {
    alert("ok");
  }

  public limpar(): void {
    // this.formulario.reset();
    alert("Ok");
  }

}
