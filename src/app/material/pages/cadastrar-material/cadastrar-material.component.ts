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
  
  constructor(private formBuilder: FormBuilder, private service: MaterialService) { }

  ngOnInit(): void {
    this.createForm();
    console.log(sessionStorage.getItem("usuarioSessao"));

    let usuario: UsuarioDTO = JSON.parse(sessionStorage.getItem("usuarioSessao"));
    console.log(usuario);
  }

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      nome: [],
      categoria: [],
      preco: [],
      unidadeMedida: [],
      quantidade: []
    });
  }

  public cadastrar(): void{
    this.materialDto = new MaterialDTO();
    console.log(String(this.formulario.get('nome').value))
    this.materialDto.nome = String(this.formulario.get('nome').value);
    this.materialDto.preco = Number(this.formulario.get('preco').value);
    this.materialDto.quantidade = Number(this.formulario.get('quantidade').value);
    this.materialDto.unidadeMedida = String(this.formulario.get('unidadeMedida').value);

    this.service.postMaterial(this.materialDto).subscribe(
      (sucesso) => {
        alert(sucesso)
      }, 
      (erro) => {
        alert(erro)
      }
    );
  }

  public limpar(): void{
    this.formulario.reset();
  }

}
