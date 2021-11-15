import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ItensDoPedidoDTO } from 'src/app/dto/ItensDoPedidoDTO';
import { PedidoDTO } from 'src/app/dto/PedidoDTO';
import { ProdutoDTO } from 'src/app/produto/model/ProdutoDTO';

@Component({
  selector: 'app-cadpedido',
  templateUrl: './cadpedido.component.html',
  styleUrls: ['./cadpedido.component.css']
})
export class CadpedidoComponent implements OnInit {

  public pedido: PedidoDTO;
  public item: ItensDoPedidoDTO;
  formulario: FormGroup;

  itens = [];
  
  divs: any[] = [];

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
      this.formulario = this.formBuilder.group({
      cliente: [],
      mesa: [],
      categoria: [],
      produto: [],
      quantidade: [],
      observacao: [],
      //preco_total: [],
    });
  }

  
  public cadastrar(): void {
    this.pedido = new PedidoDTO();
    this.pedido.cliente = Number(this.formulario.get('cliente').value);
    this.pedido.mesa = Number(this.formulario.get('mesa').value);
    //this.pedido.preco_total = Number(this.formulario.get('preco_total').value);

    console.log(this.pedido);
    alert("ok");
  }
  public adicionar(): void {
    this.item = new ItensDoPedidoDTO();

    this.item.produto = Number(this.formulario.get('produto').value);
    this.item.quantidade = Number(this.formulario.get('quantidade').value);
    this.item.observacao = String(this.formulario.get('observacao').value);
    //this.pedido.preco_total = Number(this.formulario.get('preco_total').value);

    console.log(this.item);
    alert("ok");

    
    this.formulario.get('categoria').setValue('');
    this.formulario.get('produto').setValue('');
    this.formulario.get('quantidade').setValue('');
    this.formulario.get('observacao').setValue('');

    this.itens.push(this.item);
    console.log(this.itens);
    alert("Item cadastrado!");

    // this.divs.push('<div class="i_preencher"><div class="p_formulario"><p class="p_form"> aaaaaa </p></div><a class="button">X</a></div>');
    this.divs.push({
      "id": this.itens.length-1,
      "nome": this.item.produto,
      "quantidade": this.item.quantidade,
      "medida": this.item.observacao   
    });
  }

  public retirar(id): void {
      var d;
      this.divs.forEach((e,i) => {
        if(e.id == id) 
          d = i;
      });
      this.divs.splice(d,1)
  }

  public limpar(): void {
    this.formulario.reset();
  }

}
