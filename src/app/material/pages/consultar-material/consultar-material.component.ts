import { Component, OnInit } from '@angular/core';
import { MaterialDTO } from 'src/app/dto/MaterialDTO';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { ProdutoService } from 'src/app/produto/service/produto.service';
import { MaterialService } from '../../service/material.service';

@Component({
  selector: 'app-consultar-material',
  templateUrl: './consultar-material.component.html',
  styleUrls: ['./consultar-material.component.css']
})
export class ConsultarMaterialComponent implements OnInit {

  public materiais: MaterialDTO[];
  private usuario: UsuarioDTO = null;
  public consultar: string;

  constructor(private service: MaterialService) { }

  ngOnInit(): void {
    this.buscarMateriais()
  }

  public buscarMateriais() {
    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));
 
     this.service.getListaMateriais(this.usuario).subscribe(
       sucesso => {
         this.materiais = sucesso;
         console.log(this.materiais);
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


   public remover(material: MaterialDTO){
     console.log(material);
  }
  

  public alterar(material: MaterialDTO){
    console.log(material);
  }
}
