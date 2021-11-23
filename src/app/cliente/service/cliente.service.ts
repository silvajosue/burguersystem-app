import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteDTO } from 'src/app/dto/ClienteDTO';
import { EnderecoDTO } from 'src/app/dto/EnderecoDTO';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { BaseService } from 'src/app/shared/service/BaseService';

@Injectable({
  providedIn: 'root'
})
export class ClienteService extends BaseService {

  private rota: string = 'api/cliente';

  constructor(public http: HttpClient) {
    super();
  }

  public postCliente(cliente: ClienteDTO, usuarioSessao: UsuarioDTO): Observable<any>{
    let token = usuarioSessao.tokenDTO.tipo + '' + usuarioSessao.tokenDTO.token;
    return this.http.post<any>(this.urlBase + this.rota + '/cadastrarCliente', cliente, this.criaHeader(token));
  }

  public getClientes(usuarioSessao: UsuarioDTO): Observable<ClienteDTO[]>{
    let token = usuarioSessao.tokenDTO.tipo + '' + usuarioSessao.tokenDTO.token;
    return this.http.get<ClienteDTO[]>(this.urlBase + this.rota, this.criaHeader(token));
  }

  public deleteCliente(cliente: ClienteDTO, usuarioSessao: UsuarioDTO): Observable<any>{
    console.log(usuarioSessao);
    let token = usuarioSessao.tokenDTO.tipo + '' + usuarioSessao.tokenDTO.token;
    return this.http.post<any>(this.urlBase + this.rota + '/deletarCliente',cliente, this.criaHeader(token));
  }
}
