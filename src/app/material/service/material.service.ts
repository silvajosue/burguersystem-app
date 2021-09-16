import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MaterialDTO } from 'src/app/dto/MaterialDTO';
import { UsuarioDTO } from 'src/app/login/model/UsuarioDTO';
import { BaseService } from 'src/app/shared/service/BaseService';

@Injectable({
  providedIn: 'root'
})
export class MaterialService extends BaseService {

  constructor(public http: HttpClient) {
    super();
  }

  public getListaMateriais(usuarioSessao: UsuarioDTO): Observable<MaterialDTO[]>{
    let token = usuarioSessao.tokenDTO.tipo + '' + usuarioSessao.tokenDTO.token;
    console.log(usuarioSessao);
    console.log(token);
    return this.http.get<MaterialDTO[]>(this.urlBase + 'material', this.criaHeader(token));
  }

  public postMaterial(material: MaterialDTO, usuarioSessao: UsuarioDTO): Observable<any>{
    let token = usuarioSessao.tokenDTO.tipo + '' + usuarioSessao.tokenDTO.token;
    return this.http.post<any>(this.urlBase + 'material/cadastrarMaterial', material, this.criaHeader(token));
  }
}