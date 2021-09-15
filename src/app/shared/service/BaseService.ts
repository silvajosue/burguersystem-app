import { HttpHeaders } from "@angular/common/http";

export class BaseService{

    public token: String = 'Bearer ';
    public urlBase = 'http://localhost:8080/burguer/';
    public httpOptionsJson;

    atualizaToken(token): void{
        this.httpOptionsJson = {
            headers: new HttpHeaders(
                {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            )
        }
    }
}