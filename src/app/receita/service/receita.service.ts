import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { BaseService } from 'src/app/shared/service/BaseService';

@Injectable({
  providedIn: 'root'
})
export class ReceitaService extends BaseService {

  private rota: string = 'api/produto';

  constructor(public http: HttpClient) {
    super();
  }

  // public postProduto(produto: ProdutoDTO, usuarioSessao: UsuarioDTO): Observable<any>{
  //   let token = usuarioSessao.tokenDTO.tipo + '' + usuarioSessao.tokenDTO.token;
  //   return this.http.post<any>(this.urlBase + this.rota + '/cadastrarProduto', produto, this.criaHeader(token));
  // }

  public getMateriais(usuarioSessao: UsuarioDTO): Observable<any>{
    let token = usuarioSessao.tokenDTO.tipo + '' + usuarioSessao.tokenDTO.token;
    return this.http.get<any>(this.urlBase + 'api/material', this.criaHeader(token));
  }
  
}
