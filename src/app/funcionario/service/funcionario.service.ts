import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { BaseService } from 'src/app/shared/service/BaseService';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService extends BaseService{

  private rota: string = 'api/funcionario';

  constructor(public http: HttpClient) {  super()}

  postFuncionario(funcionario: UsuarioDTO, usuarioSessao: UsuarioDTO): Observable<any> {
    let token = usuarioSessao.tokenDTO.tipo + '' + usuarioSessao.tokenDTO.token;
    return this.http.post<any>(this.urlBase + this.rota + '/cadastrar', funcionario, this.criaHeader(token));
  }

  public getFuncionarios(usuario: UsuarioDTO): Observable<UsuarioDTO[]> {
    let token = usuario.tokenDTO.tipo + '' + usuario.tokenDTO.token;
    return this.http.get<UsuarioDTO[]>(this.urlBase + this.rota + '/consultar', this.criaHeader(token) );
  }
}
