import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoriaDTO } from 'src/app/dto/CategoriaDTO';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { BaseService } from 'src/app/shared/service/BaseService';
import { ProdutoDTO } from '../model/ProdutoDTO';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService extends BaseService {

  private rota: string = 'api/produto';

  constructor(public http: HttpClient) {
    super();
  }

  public postProduto(produto: ProdutoDTO, usuarioSessao: UsuarioDTO): Observable<any> {
    let token = usuarioSessao.tokenDTO.tipo + '' + usuarioSessao.tokenDTO.token;
    return this.http.post<any>(this.urlBase + this.rota + '/cadastrarProduto', produto, this.criaHeader(token));
  }

  public getCategorias(usuarioSessao: UsuarioDTO): Observable<any> {
    let token = usuarioSessao.tokenDTO.tipo + '' + usuarioSessao.tokenDTO.token;
    return this.http.get<any>(this.urlBase + 'api/categoria', this.criaHeader(token));
  }

  public postCategoria(categoria: CategoriaDTO, usuarioSessao: UsuarioDTO): Observable<any> {
    let token = usuarioSessao.tokenDTO.tipo + '' + usuarioSessao.tokenDTO.token;
    return this.http.post<any>(this.urlBase + 'api/categoria' + '/cadastrarCategoria', categoria, this.criaHeader(token));
  }

  public getProdutos(usuarioSessao: UsuarioDTO): Observable<ProdutoDTO[]> {
    let token = usuarioSessao.tokenDTO.tipo + '' + usuarioSessao.tokenDTO.token;
    return this.http.get<ProdutoDTO[]>(this.urlBase + 'api/produto', this.criaHeader(token));
  }

}
