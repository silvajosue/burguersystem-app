import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReceitaDTO } from 'src/app/dto/ReceitaDTO';
import { ProdutoDTO } from 'src/app/produto/model/ProdutoDTO';
import { ComposicaoDTO } from 'src/app/dto/ComposicaoDTO';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { CategoriaDTO } from 'src/app/dto/CategoriaDTO';

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
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  divs: any[] = [];

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      categoria: [],
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
    this.receita.categoria = new CategoriaDTO().id = this.formulario.get('categoria').value;
    console.log(this.formulario.get('categoria').value);
    this.receita.nome = String(this.formulario.get('nome').value);
    this.receita.preco = Number(this.formulario.get('preco').value);
    this.receita.foto = String(this.formulario.get('foto').value);

    console.log(this.receita);
    console.log(this.composicoes)
    alert("ok");
  }

  public inserir(): void {
    this.composicao = new ComposicaoDTO();
    this.composicao.codMaterial = Number(this.formulario.get('codMaterial').value);
    console.log(this.formulario.get('codMaterial').value);
    this.composicao.quantidade = Number(this.formulario.get('quantidade').value);
    this.composicao.medida = String(this.formulario.get('medida').value);
    console.log(this.formulario.get('codMaterial').value);

    this.formulario.get('codMaterial').setValue('');
    this.formulario.get('quantidade').setValue('');
    this.formulario.get('medida').setValue('');

    this.composicoes.push(this.composicao);
    console.log(this.composicoes);
    alert("Componente cadastrado!");

    // this.divs.push('<div class="i_preencher"><div class="p_formulario"><p class="p_form"> aaaaaa </p></div><a class="button">X</a></div>');
    this.divs.push({
      "id": this.composicoes.length-1,
      "nome": this.composicao.codMaterial,
      "quantidade": this.composicao.quantidade,
      "medida": this.composicao.medida   
    });
  }

  public retirar(): void {
      
  }

  public limpar(): void {
    this.formulario.reset();
    alert("Ok");
  }

}

