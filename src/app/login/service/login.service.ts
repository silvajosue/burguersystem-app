import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ClienteDTO } from 'src/app/dto/ClienteDTO';
import { BaseService } from 'src/app/shared/service/BaseService';
import { Login } from '../model/Login';
import { UsuarioDTO } from '../model/UsuarioDTO';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(public http: HttpClient) {
    super();
  }

  public realizarLogin(login: Login): Observable<any>{
    return this.http.post<any[]>(this.urlBase + 'login', login);
  }

}
