import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CategoriaDTO } from 'src/app/dto/CategoriaDTO';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { ProdutoDTO } from '../model/ProdutoDTO';
import { ProdutoService } from '../service/produto.service';

@Component({
  selector: 'app-cadastrar-produto',
  templateUrl: './cadastrar-produto.component.html',
  styleUrls: ['./cadastrar-produto.component.css']
})
export class CadastrarProdutoComponent implements OnInit {

  public produto: ProdutoDTO;
  private usuario: UsuarioDTO;
  formulario: FormGroup;
  public outro: Boolean = false;
  public categorias: CategoriaDTO[];
  public categoria: CategoriaDTO = null;

  constructor(private formBuilder: FormBuilder, private service: ProdutoService) { }

  ngOnInit(): void {
    this.buscaCategorias();
    this.createForm();
  }
  
  buscaCategorias() {
    
    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));

    this.service.getCategorias(this.usuario).subscribe(
      sucesso => {
        let categoria = new CategoriaDTO();
        categoria.id = 0;
        categoria.nome = 'Outra';
        this.categorias = sucesso;
        this.categorias.push(categoria);
        console.log(this.categorias)
      },
      erro => {
        console.log(erro)
        alert(erro);
      }
    );

  }

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      nome: [],
      categoria: [],
      preco: [],
      quantidade: [],
      foto: [],
      novaCategoria: [],
    });
  }

  public cadastrar(): void{
    
    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));

    if(this.outro){
      let categoria = this.formulario.get('categoria').value;
      categoria.id = null;
      categoria.nome = this.formulario.get('novaCategoria').value;
      this.service.postCategoria(categoria, this.usuario).subscribe(
        sucesso => {
          console.log(sucesso);
          this.categoria = sucesso;
          console.log(this.categoria)
          this.cadastrarProduto();
        },
        erro => {
          alert(erro);
        }
      )
    } else {
      this.cadastrarProduto();
    }

  }

  cadastrarProduto(){
    
    this.produto = new ProdutoDTO();
    console.log(String(this.formulario.get('nome').value))
    this.produto.nome = String(this.formulario.get('nome').value);
    this.produto.preco = Number(this.formulario.get('preco').value);
    this.produto.categoria = this.categoria == null ? this.formulario.get('categoria').value : this.categoria;
    this.produto.foto = String(this.formulario.get('foto').value);
    this.produto.quantidade = Number(this.formulario.get('quantidade').value);

    console.log(this.produto)

    this.service.postProduto(this.produto, this.usuario).subscribe(
      (sucesso) => {
        alert(sucesso);
        this.limpar();
      }, 
      (erro) => {
        alert(erro)
      }
    );
  }

  public limpar(): void{
    this.formulario.reset();
  }

  public verificarOpcao(){
    console.log(this.formulario.get('categoria').value);
    let opcao = this.formulario.get('categoria').value;
    if(opcao.nome === 'Outra'){
      this.outro = true;
    } else {
      this.outro = false;
    }
  }

}
