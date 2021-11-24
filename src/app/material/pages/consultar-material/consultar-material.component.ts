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
  public conn = 1;
  public mostra: [Number, Number];


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
         this.materiais.forEach(material => {
           this.mostra.push[material.id,1];
         });
         console.log(this.mostra);
         this.usuario = null;
       },
       erro => {
          this.materiais = [];
         console.log(erro)
       }
     );
   }

   public formataValor(valor){
     let v = String(valor)
     return 'R$' + v.replace(".", ",");
   }

   public teste(f){
    // console.log(f.id);
    // console.log(this.materiais);
    // console.log(this.materiais[f.id]);
    this.materiais.forEach(material => {
      if(material.id == f.id)
        console.log(material);
    });
     return true;
   }

   public remover(material: MaterialDTO){
    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));
    if(confirm(`Deseja realmente excluir o material "${material.nome}"?`)){
      this.service.deleteMaterial(material,this.usuario).subscribe(
        sucesso => {
          console.log(sucesso);
          console.log(this.materiais);
          this.buscarMateriais();
        },
        erro => {
          console.log(erro)
        }
      );
    }
  }
  

  public alterar(material: MaterialDTO){
    console.log(material);
  }
}
