import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReceitaDTO } from 'src/app/dto/ReceitaDTO';
import { ProdutoDTO } from 'src/app/produto/model/ProdutoDTO';
import { ComposicaoDTO } from 'src/app/dto/ComposicaoDTO';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { CategoriaDTO } from 'src/app/dto/CategoriaDTO';
import { ProdutoService } from 'src/app/produto/service/produto.service';
import { ReceitaService } from '../../service/receita.service';
import { MaterialDTO } from 'src/app/dto/MaterialDTO';

@Component({
  selector: 'app-cadreceita',
  templateUrl: './cadreceita.component.html',
  styleUrls: ['./cadreceita.component.css']
})
export class CadreceitaComponent implements OnInit {

  public receita: ComposicaoDTO;
  public composicao: ComposicaoDTO;
  private usuario: UsuarioDTO;
  formulario: FormGroup;
  
  composicoes = [];
  produtos: ProdutoDTO[];
  materiais: MaterialDTO[];
  
  constructor(private formBuilder: FormBuilder, private produtoService: ProdutoService, private service: ReceitaService) { }

  ngOnInit(): void {
    this.carregaMaterial();
    this.carregaProdutos();
    this.createForm();
  }

  divs: any[] = [];

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      produto: [],
      nome: [],
      preco: [],
      foto: [],
      material: [],
      quantidade: [],
      medida: [],  
    });
  }

  carregaMaterial() {
    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));
    this.service.getMateriais(this.usuario).subscribe(
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

  carregaProdutos() {
    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));
    this.produtoService.getProdutos(this.usuario).subscribe(
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

  public cadastrar(): void {
    console.log(String(this.formulario.get('nome').value))
    this.composicao.produto = this.formulario.get('produto').value;
    console.log(this.formulario.get('categoria').value);
    this.composicao.nome = String(this.formulario.get('nome').value);
    this.composicao.foto = String(this.formulario.get('nome').value);
    this.composicao.materiais = this.materiais
    this.composicao.quantidade = this.formulario.get('quantidade').value;
    console.log(this.composicao);
    console.log(this.composicoes)

    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));

    this.service.postComposicao(this.composicao, this.usuario).subscribe(
      sucesso => {
        alert("Cadastro realizado com sucesso!! " + sucesso)
      },
      erro => {
        alert("Erro" + erro);
        console.log(erro);
      }
    )
  }

  public inserir(): void {
    this.composicao = new ComposicaoDTO();
    // this.composicao.material = (this.formulario.get('codMaterial').value);
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
      "nome": this.composicao.materiais,
      "quantidade": this.composicao.quantidade,
      "medida": this.composicao.medida   
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

