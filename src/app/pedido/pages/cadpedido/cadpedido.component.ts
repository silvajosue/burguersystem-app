import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PedidoDTO } from 'src/app/dto/PedidoDTO';

@Component({
  selector: 'app-cadpedido',
  templateUrl: './cadpedido.component.html',
  styleUrls: ['./cadpedido.component.css']
})
export class CadpedidoComponent implements OnInit {

  pedido: PedidoDTO;
  formulario: FormGroup;
  //constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    //this.createForm();
  }
  // public createForm(): void {
  //     this.formulario = this.formBuilder.group({
  //     cliente: [],
  //     mesa: [],
  //     //preco_total: [],
  //   });
  // }

  
  public cadastrar(): void {
    this.pedido = new PedidoDTO();
    this.pedido.cliente = Number(this.formulario.get('cliente').value);
    this.pedido.mesa = Number(this.formulario.get('mesa').value);
    //this.pedido.preco_total = Number(this.formulario.get('preco_total').value);

    console.log(this.pedido);
    alert("ok");
  }

}
