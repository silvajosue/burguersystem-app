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
    this.token = this.token + '' + usuarioSessao.$getToken;
    this.atualizaToken(this.token);
    return this.http.get<MaterialDTO[]>(this.urlBase + 'material'/*, { headers: this.httpOptionsJson  }*/);
  }

  public postMaterial(material: MaterialDTO/*, usuarioSessao: Usuario*/): Observable<any>{
    // this.token = this.token + '' + usuarioSessao.getToken();
    // this.atualizaToken(this.token);
    return this.http.post<any>(this.urlBase + 'material/cadastrarMaterial', material/*, this.httpOptionsJson*/);
  }
}