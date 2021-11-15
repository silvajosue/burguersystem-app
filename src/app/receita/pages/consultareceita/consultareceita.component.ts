import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-consultareceita',
  templateUrl: './consultareceita.component.html',
  styleUrls: ['./consultareceita.component.css']
})
export class ConsultareceitaComponent implements OnInit {

  formulario: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
      this.formulario = this.formBuilder.group({
      cliente: [],
      mesa: [],
      //preco_total: [],
    });
  }

}
