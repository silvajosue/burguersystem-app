import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MaterialDTO } from 'src/app/dto/MaterialDTO';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { MaterialService } from '../../service/material.service';

@Component({
  selector: 'app-cadastrar-material',
  templateUrl: './cadastrar-material.component.html',
  styleUrls: ['./cadastrar-material.component.css']
})
export class CadastrarMaterialComponent implements OnInit {

  formulario: FormGroup;
  materialDto: MaterialDTO;
  private usuario: UsuarioDTO
  
  constructor(private formBuilder: FormBuilder, private service: MaterialService) { }

  ngOnInit(): void {
    this.createForm();
    console.log(sessionStorage.getItem("usuarioSessao"));

    console.log(JSON.parse(sessionStorage.getItem("usuarioSessao")));
  }

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      nome: [],
      categoria: [],
      preco: [],
      unidade: [],
      quantidade: []
    });
  }

  public cadastrar(): void{
    this.materialDto = new MaterialDTO();
    console.log(String(this.formulario.get('nome').value))
    this.materialDto.nome = String(this.formulario.get('nome').value);
    this.materialDto.preco = Number(this.formulario.get('preco').value);
    this.materialDto.quantidade = Number(this.formulario.get('quantidade').value);
    this.materialDto.unidadeMedida = String(this.formulario.get('unidade').value);

    console.log(this.formulario.get('unidade').value);

    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));

    console.log(this.materialDto)
    this.service.postMaterial(this.materialDto, this.usuario).subscribe(
      (sucesso) => {
        alert(sucesso)
      }, 
      (erro) => {
        alert(erro)
      }
    );

    // this.service.getListaMateriais(this.usuario).subscribe(
    //   sucesso => {
    //     console.log(sucesso);
    //   },
    //   erro => {
    //     console.log(erro);
    //   }
    // )

  }

  public limpar(): void{
    this.formulario.reset();
  }

}
