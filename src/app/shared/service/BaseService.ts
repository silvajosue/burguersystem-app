import { HttpHeaders } from "@angular/common/http";

export class BaseService{

    public urlBase = 'http://localhost:8080/burguer/';

    public criaHeader(token){ 
        console.log("Cheguei na criação");
       return {
            headers: new HttpHeaders(
                {
                    'Authorization': token,
                    'Content-Type': 'application/json'
                }
            )
        }
    }
}