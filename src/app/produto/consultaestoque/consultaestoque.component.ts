import { Component, OnInit } from '@angular/core';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { ProdutoDTO } from '../model/ProdutoDTO';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-consultaestoque',
  templateUrl: './consultaestoque.component.html',
  styleUrls: ['./consultaestoque.component.css']
})
export class ConsultaestoqueComponent implements OnInit {

  public produtos: ProdutoDTO[];
  private usuario: UsuarioDTO = null;
  public consultar;

  constructor(private service: ProdutoService) { }

  ngOnInit(): void {
    this.buscarProdutos()
  }

  public buscarProdutos() {
    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));
 
     this.service.getProdutos(this.usuario).subscribe(
       sucesso => {
         this.produtos = sucesso;
         console.log(this.produtos);
         this.usuario = null;
       },
       erro => {
         console.log(erro)
         alert(erro);
       }
     );
   }

   public formataValor(valor){
     let v = String(valor)
     return 'R$' + v.replace(".", ",");
   }


   public remover(produto: ProdutoDTO){
    console.log(produto);
  }

  public alterar(produto: ProdutoDTO){
    console.log(produto);
  }

}
