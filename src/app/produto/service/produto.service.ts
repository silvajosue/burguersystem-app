import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
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

  public postProduto(produto: ProdutoDTO, usuarioSessao: UsuarioDTO): Observable<any>{
    let token = usuarioSessao.$token.$tipo + '' + usuarioSessao.$token.$token;
    return this.http.post<any>(this.urlBase + this.rota + '/cadastrarProduto', produto, this.criaHeader(token));
  }
  
}
