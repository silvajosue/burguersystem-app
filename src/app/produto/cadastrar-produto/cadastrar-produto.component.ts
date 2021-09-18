import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private formBuilder: FormBuilder, private service: ProdutoService) { }

  ngOnInit(): void {
    this.createForm();
  }

  
  public createForm(): void {
    this.formulario = this.formBuilder.group({
      nome: [],
      categoria: [],
      preco: [],
      quantidade: [],
      foto: [],
    });
  }

  public cadastrar(): void{

    this.produto = new ProdutoDTO();
    console.log(String(this.formulario.get('nome').value))
    this.produto.nome = String(this.formulario.get('nome').value);
    this.produto.preco = Number(this.formulario.get('preco').value);
    this.produto.codCategoria = Number(this.formulario.get('categoria').value);
    this.produto.foto = String(this.formulario.get('foto').value);
    this.produto.quantidade = Number(this.formulario.get('quantidade').value);

    console.log(this.produto)

    this.usuario = JSON.parse(sessionStorage.getItem("usuarioSessao"));

    this.service.postProduto(this.produto, this.usuario).subscribe(
      (sucesso) => {
        alert(sucesso)
      }, 
      (erro) => {
        alert(erro)
      }
    );
  }

  public limpar(): void{
    
  }

}
