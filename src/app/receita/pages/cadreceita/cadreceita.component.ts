import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadreceita',
  templateUrl: './cadreceita.component.html',
  styleUrls: ['./cadreceita.component.css']
})
export class CadreceitaComponent implements OnInit {

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
