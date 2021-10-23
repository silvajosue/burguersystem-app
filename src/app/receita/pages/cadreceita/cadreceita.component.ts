import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReceitaDTO } from 'src/app/dto/ReceitaDTO';
import { ProdutoDTO } from 'src/app/produto/model/ProdutoDTO';
import { ComposicaoDTO } from 'src/app/dto/ComposicaoDTO';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';

@Component({
  selector: 'app-cadreceita',
  templateUrl: './cadreceita.component.html',
  styleUrls: ['./cadreceita.component.css']
})
export class CadreceitaComponent implements OnInit {

  public receita: ProdutoDTO;
  public composicao: ComposicaoDTO;
  private usuario: UsuarioDTO;
  formulario: FormGroup;
  
  composicoes = [];

  /*public composicao: {
    ingrediente: string,
    quantidade: number,
    medida: string
  };*/

  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      codCategoria: [],
      nome: [],
      preco: [],
      foto: [],
      codMaterial: [],
      quantidade: [],
      medida: [],  
    });
  }

  public cadastrar(): void {
    this.receita = new ProdutoDTO();
    console.log(String(this.formulario.get('nome').value))
    this.receita.codCategoria = Number(this.formulario.get('codCategoria').value);
    console.log(this.formulario.get('codCategoria').value);
    this.receita.nome = String(this.formulario.get('nome').value);
    this.receita.preco = Number(this.formulario.get('preco').value);
    this.receita.foto = String(this.formulario.get('foto').value);

    alert("ok");
  }

  public inserir(): void {
    this.composicao = new ComposicaoDTO();
    this.composicao.codMaterial = Number(this.formulario.get('codMaterial').value);
    console.log(this.formulario.get('codMaterial').value);
    this.composicao.quantidade = Number(this.formulario.get('quantidade').value);
    this.composicao.medida = String(this.formulario.get('medida').value);
    console.log(this.formulario.get('codMaterial').value);

    this.composicoes.push(this.composicao);
    console.log(this.composicoes);
    alert("Componente cadastrado!");
  }

  public limpar(): void {
    this.formulario.reset();
    alert("Ok");
  }

}

