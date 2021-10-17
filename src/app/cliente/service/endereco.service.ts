import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EnderecoDTO } from 'src/app/dto/EnderecoDTO';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { BaseService } from 'src/app/shared/service/BaseService';

@Injectable({
  providedIn: 'root'
})
export class EnderecoService extends BaseService {

  private rota: string = 'api/endereco';

  constructor(public http: HttpClient) {
    super();
  }

  public postEndereco(endereco: EnderecoDTO, usuarioSessao: UsuarioDTO): Observable<any>{
    let token = usuarioSessao.tokenDTO.tipo + '' + usuarioSessao.tokenDTO.token;
    return this.http.post<any>(this.urlBase + this.rota + '/cadastrarEndereco', endereco, this.criaHeader(token));
  }
}
