import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ReceitaDTO } from 'src/app/dto/ReceitaDTO';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';

@Component({
  selector: 'app-cadreceita',
  templateUrl: './cadreceita.component.html',
  styleUrls: ['./cadreceita.component.css']
})
export class CadreceitaComponent implements OnInit {

  public receita: ReceitaDTO;
  private usuario: UsuarioDTO;
  formulario: FormGroup;
  
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  public createForm(): void {
    this.formulario = this.formBuilder.group({
      nome: [],
      preco: [],
      foto: [],
      ingrediente: [],
      quantidade: [],
      medida: [],  
    });
  }

  public cadastrar(): void {
    this.receita = new ReceitaDTO();
    console.log(String(this.formulario.get('nome').value))
    this.receita.nome = String(this.formulario.get('nome').value);
    this.receita.preco = Number(this.formulario.get('preco').value);
    this.receita.foto = String(this.formulario.get('foto').value);
    this.receita.ingrediente = String(this.formulario.get('ingrediente').value);
    this.receita.quantidade = Number(this.formulario.get('quantidade').value);
    this.receita.medida = String(this.formulario.get('medida').value);

    console.log(this.formulario.get('ingrediente').value);
    console.log(this.receita)
    alert("ok");
  }

  public limpar(): void {
    this.formulario.reset();
    alert("Ok");
  }

}
